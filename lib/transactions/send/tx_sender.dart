import 'dart:convert';

import 'package:alan/alan.dart';
import 'package:http/http.dart' as http;
import 'package:meta/meta.dart';

/// Allows to easily send a [StdTx] using the data contained inside the
/// specified [Wallet].
class TxSender {
  final http.Client _httpClient;

  TxSender({
    @required http.Client httpClient,
  }) : _httpClient = httpClient;

  factory TxSender.build(http.Client httpClient) {
    return TxSender(httpClient: httpClient);
  }

  /// Broadcasts the given [stdTx] using the info contained
  /// inside the given [wallet].
  /// Returns the hash of the transaction once it has been send, or throws an
  /// exception if an error is risen during the sending.
  Future<TransactionResult> broadcastStdTx(
    StdTx stdTx,
    Wallet wallet, {
    SendMode mode = SendMode.MODE_SYNC,
  }) async {
    try {
      // Get the endpoint
      final apiUrl = '${wallet.networkInfo.lcdUrl}/txs';

      // Build the request body
      final requestBody = {'tx': stdTx.toJson(), 'mode': mode};
      final requestBodyJson = jsonEncode(requestBody);

      // Get the response
      final response = await _httpClient.post(apiUrl, body: requestBodyJson);
      if (response.statusCode != 200) {
        return TransactionResult.fromException(
          'Expected status code 200 but got ${response.statusCode} - ${response.body}',
        );
      }

      // Convert the response
      final responseBody = jsonDecode(response.body) as Map<String, dynamic>;
      var responseMode = '';
      if (mode == SendMode.MODE_SYNC) {
        responseMode = TxResponse.MODE_SYNC;
      } else if (mode == SendMode.MODE_ASYNC) {
        responseMode = TxResponse.MODE_ASYNC;
      } else if (mode == SendMode.MODE_BLOCK) {
        responseMode = TxResponse.MODE_BLOCK;
      }

      final json = TxResponse.fromJson(responseBody, responseMode);
      return _convertResponse(json);
    } catch (exception) {
      return TransactionResult.fromException(exception);
    }
  }

  /// Converts the given [response] to a [TransactionResult] object.
  TransactionResult _convertResponse(TxResponse response) {
    return TransactionResult(
      raw: response.toJson(),
      hash: response.hash,
      success: true,
      error: null,
    );
  }
}
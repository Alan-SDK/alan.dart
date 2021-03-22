import 'package:alan/alan.dart';
import 'package:protobuf/protobuf.dart';

typedef AccountDeserializer = AccountI Function(Any any);

class AccountImpl {
  String typeUrl;
  AccountDeserializer deserializer;

  AccountImpl(String typeUrl, AccountDeserializer deserializer)
      : typeUrl = typeUrl,
        deserializer = deserializer;
}

/// Represents the codec that is used to serialize [StdMsg] instances
/// properly during transactions signature processes.
class Codec {
  /// Serializes the given [value] into a [Map].
  static Any serialize(GeneratedMessage value) {
    return Any.pack(value, typeUrlPrefix: '');
  }

  static bool _initialized = false;
  static final List<AccountImpl> _accountImpls = [];

  static void _ensureInit() {
    if (_initialized) {
      return;
    }

    _accountImpls.add(AccountImpl(
      'BaseAccount',
      BaseAccount.fromAny,
    ));
    _accountImpls.add(AccountImpl(
      'ModuleAccount',
      ModuleAccount.fromAny,
    ));
    _accountImpls.add(AccountImpl(
      'BaseVestingAccount',
      BaseVestingAccount.fromAny,
    ));
    _accountImpls.add(AccountImpl(
      'DelayedVestingAccount',
      DelayedVestingAccount.fromAny,
    ));
    _accountImpls.add(AccountImpl(
      'ContinuousVestingAccount',
      ContinuousVestingAccount.fromAny,
    ));
    _accountImpls.add(AccountImpl(
      'PeriodicVestingAccount',
      PeriodicVestingAccount.fromAny,
    ));

    _initialized = true;
  }

  static void registerAccountImpl(AccountImpl impl) {
    _accountImpls.add(impl);
  }

  static AccountI deserializeAccount(Any value) {
    _ensureInit();

    final impl = _accountImpls.singleWhere(
      (element) => value.typeUrl.contains(element.typeUrl),
      orElse: () => null,
    );

    if (impl == null) {
      throw Exception(
        'Account of type ${value.typeUrl} cannot be deserialized properly. '
        'Please register this type using Codec.registerAccountImpl',
      );
    }

    return impl.deserializer(value);
  }
}

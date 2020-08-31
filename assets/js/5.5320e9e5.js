(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(t,a,s){"use strict";s.r(a);var n=s(9),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"alan-dart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alan-dart"}},[t._v("#")]),t._v(" Alan.dart")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Alan.dart is an evolution of "),s("a",{attrs:{href:"https://github.com/commercionetwork/sacco.dart",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sacco.dart"),s("OutboundLink")],1),t._v(" which I personally worked on. Due to the fact that Sacco.dart is no longer maintained by Commercio.network and I no longer work there, I decided to start this new project to support future mobile apps development for Cosmos-based chains.")])]),t._v(" "),s("p",[t._v("Alan.dart is a pure Dart package allowing you to easily integrate your Dart-based project with any "),s("a",{attrs:{href:"https://cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos"),s("OutboundLink")],1),t._v("-based blockchain.")]),t._v(" "),s("p",[t._v("It contains a set of utility methods and classes allowing you to easily")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#creating-a-wallet"}},[t._v("create an HD Wallet")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#creating-a-transaction"}},[t._v("create a transaction")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#signing-a-transaction"}},[t._v("sign a transaction")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#broadcasting-a-transaction"}},[t._v("broadcast a transaction")])])]),t._v(" "),s("p",[t._v("Being it in pure Dart means that you can use it inside your "),s("a",{attrs:{href:"https://dart.dev/web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dart Web"),s("OutboundLink")],1),t._v(" projects\nas well as "),s("a",{attrs:{href:"https://flutter.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter"),s("OutboundLink")],1),t._v(" ones.")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"creating-a-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-wallet"}},[t._v("#")]),t._v(" Creating a wallet")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" derivationPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"m/44'/118'/0'/0/0\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" networkInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NetworkInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bech32Hrp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cosmos"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lcdUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" mnemonicString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"final random flame cinnamon grunt hazard easily mutual resist pond solution define knife female tongue crime atom jaguar alert library best forum lesson rigid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" mnemonic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mnemonicString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" wallet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" derivationPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"creating-a-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-transaction"}},[t._v("#")]),t._v(" Creating a transaction")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgSend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  fromAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cosmos1huydeevpz37sd9snkgul6070mstupukw00xkw9"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  toAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cosmos12lla7fg3hjd2zj6uvf4pqj7atx273klc487c5k"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdCoin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uatom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" stdTx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TxBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildStdTx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stdMsgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"signing-a-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction"}},[t._v("#")]),t._v(" Signing a transaction")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" signedStdTx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TxSigner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signStdTx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdTx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stdTx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"broadcasting-a-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-a-transaction"}},[t._v("#")]),t._v(" Broadcasting a transaction")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" TxSender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("broadcastStdTx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdTx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" signedStdTx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tx send result: $result"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
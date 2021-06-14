'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "043aea60b6a22607b74b608369ea921a",
".git/config": "85c4b407f75aea929fd56bcd53639a23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dcf4e1e5248dfd6d6b84ecd867b7efd0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "49ffbdf639f32b9866fe4e02e0f14838",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f6d340fae38a1d72259bc24e7001e4d7",
".git/logs/refs/heads/main": "5fa4da4e5b1f5076e336eee1ef6f239c",
".git/logs/refs/remotes/origin/main": "f87463dd441fdc6803f71ce3b50ceabc",
".git/objects/00/b3929260662cf4372ac6d948e139e941c9c6b8": "49ae7d663bba845cbe71bf0bdde1b9c3",
".git/objects/01/9f525527d4821f87b714c5257580d96cc597ba": "c1b6dc641a6da153cbe73f1a40d42962",
".git/objects/03/22e82376cbe67fffee67b77a470bf4a5ba2547": "e34294f9e6634796ce05a2521b9d1df8",
".git/objects/03/bbbf593135e13908aeded2dcbbec7ced9d3dfa": "ef5ab6f2fc9bdaab1d2c961082f69d1b",
".git/objects/07/9f0b5cfc05ca31aeb46e0e19f40e475e5fb43f": "30acaac3046b3c9ebe11ed366e6fa662",
".git/objects/09/03d2616dc1078079622e5e0fa1d366372c9f39": "7a56d013858ef993ab01ba297632d2d0",
".git/objects/0c/cb104258fa152f7aa693c01b7bae8018d2afc1": "ea4856a0e99d10ac084b442d6c53d185",
".git/objects/0e/1dbcc4fbf7abbff538471025a65120eda3c95e": "f936a0f547816e0fa77a2edb9e219489",
".git/objects/0e/34c2f0e4db045a0f2e77863b3d0a1c4ba21621": "5c137005678885a8396704bb3bece611",
".git/objects/13/19c098db39bb326d80ad8359505917b7b4bd62": "68926bd9628fa87bce106965f141f587",
".git/objects/16/1fcb08246231172516e3ff776478fe57bc326f": "00aeea2bd71faa1586c61cd87244e319",
".git/objects/16/3d3cebbb87daa595dbe4d965bd8c3afc1bf498": "69c220c91d7f4f2ec9c2528a098ab041",
".git/objects/16/eb72e4c488131f9a8e51782d6e42404d50921e": "7b6d0f8f19a6e48b3b0a17d06fe3861b",
".git/objects/19/4191996356e08802d574f8d35c48f2d099c1e1": "d3fcf17e8a60b429330160793ec5098d",
".git/objects/19/caa5358a5006a24a1633069e3a6c6247170258": "affb915849d4bdcf9009cd23168205a4",
".git/objects/1a/edd02ac331f57f75f95a86985304024363bafc": "945b8f7cc13da3cdf7f2f42e67c92f0a",
".git/objects/1b/f2d09536eddb2f8df44b872d2fedc7d5a02bb4": "d2ff1fa017c4f5bcc43dd84e146c9af3",
".git/objects/1c/ae793f035617be0d73e199673b2e545a8edd5d": "a9769e1647d2eb768188c9feb74c3877",
".git/objects/1d/d3ce87273a1196eaf84b6140c7df962f5fabf5": "7dd9320cb39980811c058a7ea9fdecc8",
".git/objects/1f/a1ff97cc72c163f4d9ed0bf60a4dd37ca9d91d": "f45a4db3e18b43ddef2d142b4a0348e1",
".git/objects/1f/b17380b4beaedc02b376acf8f4303b3fd24705": "953f5580b07fed95951307fd35c18ff4",
".git/objects/20/421f79144053347be4eeab1be6d8ddda8b915e": "c1d63601cb7c1a7cc3e7d1e054a68938",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/9a2f0755748abe62b2866e9f17b2652bfb789e": "79b2a8d4699509a1ea0eaa7f99f060d9",
".git/objects/26/9bafd15a4e182f119a630975e1d18bff4d14ef": "cac329f98793bc7aef9a02c0cc039e87",
".git/objects/27/e65e1efa40b09214efce60876ad17d34603c5b": "818849a7f494368d0ccc748afc84299e",
".git/objects/28/1bca14a2e03b41d3cd9d04dce5120e90d3b5bf": "b76e868da935d0abd6698ed252aa4ce8",
".git/objects/28/33c32faa3d5b6bdccb7a619de67e16ee8d34c5": "57e07f2b56e576d2c21ed303d36edda1",
".git/objects/29/ef8725ff1c5b1b6ec2583b2f96f371aa37d11a": "1e558926f1ba21b7fa8cc6452460b93e",
".git/objects/2b/3afa9db758161183b1d52b6386f16da29b169c": "d7cdfa2a316e576cb35a4d1bf45ca54d",
".git/objects/2c/07273e20a96801cba1be376bec42a571257a7f": "208b3a27e0af7a13d29a2505a29e8af0",
".git/objects/2d/59ec8701e3e94104a4ac9eda15b221f5318855": "faa9434207600477e00987862da3021f",
".git/objects/2e/23c9d211cb97cabd5b5f2356a29b733648141d": "045b3168ffb7498e361c20745382c540",
".git/objects/2f/0b59e9d443cdbc85042e8baec12e6b578a169c": "05cc80e5f030bad7e3504f7e04b6320f",
".git/objects/2f/e7c88893198fad3cb04956bdce0fcb3489f08d": "35ad117514a985168649279e90520b20",
".git/objects/30/c651481c09b6cb6882cd46c8f4bec39be90121": "d9f4918cdf39ade91f814751ea10e5ba",
".git/objects/31/ef91482a79f384c74b77a916f18a01ab39b7d4": "19e45034762a572f5fefd5aa6f5a3d49",
".git/objects/33/67dce895595710a46d1a5398a7e1474226535a": "75bfb9e17e519134c26bfa658d8ed77d",
".git/objects/33/a125246ce745baf065e4fa187ba878bf1c6afa": "ea082c6ed701f146f7eefdc17a008949",
".git/objects/3e/e0c15eb237b8a70adcc65e74f82df275c17048": "d5f6685b3d666a10af19f5e70cecf17e",
".git/objects/43/5b1d7497dbf3d92183dea3fa1eb12a5d454a9c": "2443c8bfbf377565669ba777be7338a2",
".git/objects/45/4ca9b1d21c56be63a686096fe40e9b5e64f9ed": "4f872e32f0351dac8054929d6fc2d9cc",
".git/objects/45/d741abc3cbaa2da8f45f38e0ab35c20aff56a8": "278c1687ece6c2a125da709631b7b4d8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/64f38badd7a151200d9b3f1b981de85bdb6077": "f1d0472419765be8c06014cebe6c8090",
".git/objects/47/95edf8cdf57821911a171a0ddc66097160e183": "f0dad2e3273b2adcabe4a9787ab260c6",
".git/objects/49/5194fe6b1eff11516ba59b33e651f37a29323d": "a9b3f1a039085dda26faa077334811a5",
".git/objects/49/6871f4776bf3bf45288942f5094e8d583bd55e": "4b18fd1e638db069054698091a47e5b4",
".git/objects/4c/50c63663ab2f46b68cafb640d2ee888e15eb70": "ac38d7bbcc2672a572209595132c8715",
".git/objects/4d/fef1a56d0141c67438d22d824da01ce916f78e": "e3d12004114e5132acaafed5b97059f4",
".git/objects/4f/590097c77af3cec8c244a617dac863b9be7b12": "ec68b0b26d51bef9e35e34222024a756",
".git/objects/50/acf65ced25c57e3ef1e8b19d6b6e54ae0871f5": "0ab29ebe3850de6296f0dff3db1a5ecc",
".git/objects/51/ad93fb7e5dd7f8830c805d8894df670e411329": "368088c59cac44989366f4186ca5e84d",
".git/objects/52/f4b7ac6195330a8a59556f2ab74c370da19158": "222ae9ea4a576a1d1b4262fc4124bbec",
".git/objects/55/ff665a2e5fe4b26e5cb86378370035fd359058": "a58dcf3835e7c1d50b1d5404616141a7",
".git/objects/56/2dd66ff27d5667b797e5de4b57aa1fa8229711": "c8fb3680ee65e8ec1b3dc07fc32a26f6",
".git/objects/57/aec1c9cd230827412f77276eab012f0409bf89": "0494da6f70d268c4066e3d03d75162f3",
".git/objects/5d/263b3f446159d5bcf68f3d4bde29be246b4f7e": "5a9d485ce53eecea6b27b28a45bdea8d",
".git/objects/5e/bfc4e109345d73c2225d7abb425d4975e8a576": "b9de14f9f57a199348ea56d7b58bd51a",
".git/objects/5f/30496db17fffb838f5c02c236834ecfed1746b": "ef4fd55cbc826f02eecef0f81816d624",
".git/objects/5f/d28ab242fcb9edb5d1e2dd214b0a249d302333": "6a1c3f65e2617a85ccb7261a0daa7ca1",
".git/objects/5f/da1e81968bfa3278de711afd80699307deee27": "8bcf0e809ae084f50d022125ad441e1a",
".git/objects/64/41a6983ca63dd40f4844c2e14d814d3139017d": "15b61b3d12d2a4c0512a413a4fcd6483",
".git/objects/66/7d68dadd2f13593b0825c087d37e07a3a306fe": "a93d3cdc6fcaa5c787e4998bdb099fe3",
".git/objects/67/c3beb9c0842418bcd86b47adced99bd234a1c0": "ef50d119137d65bc054beacdb0c75e89",
".git/objects/68/fc47b815afe9db562d811ef0e871e4001201d5": "c0741e8481d664aa79d63da9ad29e1c4",
".git/objects/6b/1855c888baf3ad72630a910b736124e8c34437": "b6b834202104b49b030af57484c8d483",
".git/objects/6b/adb8f80de5885914bb47ed31665c5b94c12451": "eb1b96ac15a41bcdc3c22ec6903ec484",
".git/objects/6f/61c70059ce0452e514b0ffc764dfe3ace338c3": "b4bdde3616ed1056b873f5998a868681",
".git/objects/70/52e12966450b37c5f4489b7648f52426a0c58b": "3a10d03d446d450f68346ccbfe41eba0",
".git/objects/70/6c81aea788dba9a2dcbab86243e9d7d50d53b6": "58c1ef0e0aec0aa58d42e53f59125f7a",
".git/objects/70/e4c8bdcc317e4a7ebd16075272be098613b553": "48e09d279f857263e6ddae01cc301731",
".git/objects/71/1a16523b25dd5c462dcdd0035480d50cc24ee9": "3271acf2a7af63746e9e6457d2e40245",
".git/objects/71/e2c46eb4c4fd4c10364e41a841779bc64b1479": "4ca21ebd9a6447ae8b5dc77726f38945",
".git/objects/74/ebb78f658e6851addbbacc8376f23856e91066": "b8894086650a0a4bbe3c8115fab7289b",
".git/objects/74/f17a21e000a3cfe522ae69a43b77c9a9e7dad1": "36ca1fd4e0792e5ecb1372eb2826076c",
".git/objects/77/19d1edc15b567ed92ab160cf8f478ef139e3fb": "47fd35347f23adadbdecac46a3735d73",
".git/objects/77/25dbf5c3dcf08437d4653308bc5e735fc36a45": "99e7534f7e4c121bfe9b0ee104398c73",
".git/objects/77/8ea3baa1ff422df31fdc1581a8f42014457331": "f7f0b449490a1b2fb312201485fab136",
".git/objects/78/9ea7dfadf508517856fce94f65694926507a36": "e3ff7cbb03306d67f1e740bbed907d5e",
".git/objects/79/3fc20ac50e917719b99920388975f6889678ab": "fa64b80f3b6a203c15271254f8ea5121",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ca2ded8c0c0d2750af00d1c8ff9ace17c09cb9": "ae1b74007216ca2121607dda4a323d34",
".git/objects/7a/e1f396d606c2d1b46ab0418997edf6130e5c31": "9c58711edb89a8349797c099afe3d49f",
".git/objects/7b/03d543d15be585e5cf34f7c4290b341bb1e20d": "17a3a3e4d07bc5fe4d87e5e4f758820e",
".git/objects/7d/8e5af37cc544eb69f50808effd8bcb06d635b1": "b49e0c979f6f8ad9bfddef82817db569",
".git/objects/7f/6842837ceefdf013b502b5c821a2e55d8e2a7e": "5d47e130a08cc5a4120131b322ad401b",
".git/objects/84/a96db63d48193dd358371e51cb531ef48875a4": "e30fb611fb3ebf5ee69b9735a8b040cb",
".git/objects/86/46d9dbb3e448734b57a1a49a2e93f0705fbbf9": "7333859ae092c4f5e7c74cea9997ee3c",
".git/objects/86/79bbe2a2c39f2f791b23a1e8d2a2d2b33358af": "08815e744de8d29c7bc7e3dfaf9994b2",
".git/objects/87/c6648cb261a1a51e1283f4f821e4b8d47bc1cc": "635f7c66a5ceb7827f8b5e98a27f7777",
".git/objects/88/1dd46780d291987ddb391cf03bd536ed5ea90b": "6c92349cdc4081169e328acb4cc3a79d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9b05a9e9ef51025f03561546ce85d310b66847": "b49e85035dbcbd2e1e6c79c6cc3cd9a0",
".git/objects/8b/c881f5b02c02fa82082ed3eb961e82beaccfa9": "5ec75a71d7fbf2e6ecdb8dcc8180e906",
".git/objects/8c/010d259978738d121031f4c2d1b2e1d19ea615": "447973f045d707d6ea03f88a00df637b",
".git/objects/8c/83d4604911bf231c71740500785b6985062743": "c8ac7bd731c09c2e22191b054f3cfe82",
".git/objects/94/bb2d9ddb290f08f4f80938eef60c3bdb782b14": "6db76dcd5dfe79a0ede30b74dbacef9b",
".git/objects/94/dbc3a1d924c5eed5c3276697093b600b8685eb": "d6d7d035014ba2e6e08731e038dfa663",
".git/objects/96/119c7683adaad0140cf728aa0343cd04fa2371": "90df3273ece3f68078fcc083502e8666",
".git/objects/96/4feaf1bf7ba074cf99b3fbc334e9e40ed8b0db": "1f33a0c772e192282732775fb29fa692",
".git/objects/96/8fb96230e35a96e71fd4a0c0746111ebd99bc7": "1fc915fb894f21425c3885c24a17fe49",
".git/objects/96/cd1fd7ca7d03364dd33787d08ef18d394c4fb8": "4f271cb1150f0c12c1b49341dc2d7776",
".git/objects/97/a42fb87d2961105b15408e3760ce0ae251886d": "e8cfc1e740c3fc589bda3f8556ddf390",
".git/objects/98/09023da4d4d9b3c2a251a130d4434818bb8530": "7523a91fac17da907c0ee38e6b986790",
".git/objects/98/2ebdd8cebdcd88065a2507f3c3cb9f888199d2": "bb2169f5bf326cdcf9041db4bd93fd9c",
".git/objects/98/89d044ad5e2250c84c0b97d3a8459c88387517": "baad75ef1455429f1b1445b424b2f632",
".git/objects/99/33797bce0380dd48cb7194b95c33849c6f5141": "899a6c634c8cee37613feb94a0dba920",
".git/objects/9e/7072ed14e7eaf5dabc13cb5fa5d61ce2cfd602": "187e674390cc46cb4c7f1734a6b1e1b0",
".git/objects/9f/3cbd712f79787af43f878d2f398b448cf4db29": "b028c3f2139b7acb6ccd735913b2e6bb",
".git/objects/9f/eb59280961ce7da5a857265f51d727b039e996": "0e94dab295392e941a561df10c6203a8",
".git/objects/a0/e115bb574b8f66a765d6fa3aef623ccf91af63": "3909cc6ee2b876d984bdb1174e0483d2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/44c3ebcdecc3a62c8effb7c55a214c8b349c19": "74872acd4a03812cbe2d37db7748c302",
".git/objects/a3/b06835c64383c6d349edc06c45ddba40d6707e": "411f41bc2c07f6d50a39f3e30626f06c",
".git/objects/a3/b7e11fa5d51d3810aa0646439d93b4271d4d7b": "9112fe0f7b89bc1b77d0c1aed9d69b07",
".git/objects/a4/8d7ee097f44b5d77f3aae89d1d68b84fcbca4c": "21f9d13a0ce8863c74c7a0cbfc3a9c30",
".git/objects/a4/a0aa4ae25626b4e83f3dc1da6db7d64136f3a6": "bee9cbe771d798ad90b6fc2706fd8b82",
".git/objects/a4/abb70dd4eb859b6ccfb05263af157e9dcced73": "ed0bc3060783bbd395b4d58eadd338bc",
".git/objects/a5/5267f014d027c36646d8d322677e7727619261": "2ac026712e5cc63c7236ba8898719bcc",
".git/objects/a5/f0174c88da607379809a5cb35f367f004e9d5b": "24bd9ad677e9c53e188f070cb2df98b8",
".git/objects/a7/a2edc7eb260592d1f358a6b2e5312dd5b34d86": "d7f4f917795efa32e4fa2ea6606f9036",
".git/objects/a8/29a2271768ccf2300e7c0d1aa495ae185b8407": "ff7d036ad8e3bcb917cb012da4e5f260",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/15550e56af55ab858fdc1d470b69089b2f1272": "59b4927543323f51cc66488235fb324c",
".git/objects/b0/1f2efe668df234f37dad90395fa6ca04ed9cc9": "f4fb160f86ab02a77bfe68cbe6ded29b",
".git/objects/b0/7247b35db2e36e179f9a461519f930e5a053e9": "0fc31e09f0e517b4f3753435c57c4ce2",
".git/objects/b3/179037922fba5ed2ef3c792a91957a00df2f29": "ce0a4f26411849f8f4f29c260585070b",
".git/objects/b4/937f554b3b8f202a717254f9d70f9c19d848f5": "6d4997bd0f40be9111af3c19821641a2",
".git/objects/b5/b5341de9cd5ef0cd6db54c7ea64c76f6d7c343": "c3234d31ad4901258d08fb5e75878b99",
".git/objects/b6/abf474a619eda1553b91d60d69d94d4bccd689": "b45deb07e0777b1e5b6c67ce4ae79030",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b26483a453a35da455470b28812d1d1c8c8b80": "98099f3b0048fc27ab7c8616c965733d",
".git/objects/b8/2ebd4c89cfe4aefab598935075f35e6d7af1a5": "78fb3eab1d3ac52e9370b042340394ba",
".git/objects/b8/348b6ab00aa55d4716d912c4ccf7bbf537286c": "4d9de4b6d1fbc380cf60d51de28ac489",
".git/objects/bb/0528dba243ae01426c587fd3b7dee65049295d": "9f002f6114572cdd535875c3343302a8",
".git/objects/bb/8c25fd4811408ddc25b4a7c929ced236a2d34a": "5b99f1bc1b0c77c4da67433c420b7fdc",
".git/objects/bc/132667ae94d6c035e4e0dfc1180e1820f7adfc": "374944592e2b5c7aacfa2d3997e33b75",
".git/objects/bc/5b8e0dbd30795d3a1ee262aaefa179ffeb660e": "4d1f4824072beb4bca9d4ff8eec855d9",
".git/objects/bd/06e6382b360ba9943ffcd942fe8b8e04530c48": "d802fa97a003770695dce427652f5b38",
".git/objects/bd/a18481a1135291af9c907fe57977da7e1eaf42": "e80283bcc2feff46ffd7216f82160a24",
".git/objects/be/df9a47c49645ae2a9ed0b134fa39ba1ce68d74": "78b714de2864d616ff3a010135acadbe",
".git/objects/bf/313b5a0912a67443e4444bcaa95b81d0d05b1f": "770cba5476d3af4750f8f1c3ec6a1a95",
".git/objects/c0/576c3ad4d62662643c59707604bfd6cd0b11ed": "87b34980e892b17e7d767d3c5e12b0d5",
".git/objects/c2/c9b6c487cd241a87d39a92b610b39384bcc09a": "2b58c9fdc57a798ca6153ac72046f26d",
".git/objects/c2/f3c2928e32934921e59994a566fec503dfad5e": "105dd300036c8546350b9fe4c37f281d",
".git/objects/c3/253f08858173715a872f54beaa7751edc15e52": "5cd80f5597709e9d9dc698f591171b9a",
".git/objects/c4/37a85bf33161ab0e61e4b689cb151f634694b8": "7983ba0637ebff410fdb569131032a19",
".git/objects/c4/6d15c10474f0861c9f4a97196f548db78216f3": "30b378a3623c671d28f26cf0d7d2587b",
".git/objects/c5/2261cffa65838f474f199be791eb877e9da2f0": "6c3c67dcc080e30da0dee41993159fae",
".git/objects/c6/f2bada7b823c5d6b59884d3be05ff26542b33e": "61ec57bb15675cad911a10fdd58d3d0b",
".git/objects/c7/1328df155a1c4ad9a021c78cd537bc7636742a": "9c42230db0559e08b2602a31615b1a7d",
".git/objects/c8/893797bfd57c0e589e03d3ebbec1b4b06667b9": "84d926ca8da20ee4a66f96570a55a38a",
".git/objects/c9/20228ceffb78d96bb34b2a3da65feb5552d0ed": "8c26c39d481c071de1c04e0f92d29a28",
".git/objects/ca/10a82468e1af85b02de8716371ed3c63b17675": "8db2d8951de3deafc310f12c571c9643",
".git/objects/cb/b65eac184ed10ebea99eac0188f8b714a7a8d8": "1611243b7120545122e13eb943094ae5",
".git/objects/ce/4cee8db2436108c81f4b72faba96c7b0958a04": "5d591bb29bc5ceb61e982571d1ae535e",
".git/objects/ce/b050d1d0fd28cd74eca0c9eaa1090da9771946": "2ebe0ec4668fa49ea73af8a006442f7a",
".git/objects/d0/de26e7f83649addc94086da0e76cf8bcd3027a": "a3fa7a75ab52b96c31dd49bb91112f97",
".git/objects/d1/b5ea8c69be36a328a2130de482f616cd4db82e": "7e8e89aa39d805be76f167b1995a93a1",
".git/objects/d3/6e6da0bdedd4b36a73ba2e8469601eb399d3bd": "69a664851ce13f0c4e4f4321d46a872e",
".git/objects/d4/32d6edaea462eb89dd51c7df369bc76ed9c5f3": "bb52ee5680219cf3befc160d0a9e5779",
".git/objects/d4/3d0b274b57d422f4fdc3d320da429fb6544130": "bae5374dc0b67a6ed5cba5380fe43569",
".git/objects/d5/1ea337cc8a4105c376e12bc524e8395ee6d8e5": "0d2ec4089510c95f01f6da78efd5b154",
".git/objects/d5/eb3c82485f981418894d233f1afbca34b0096b": "953b5c3d7bdd799df94ffa1b4b4e63b7",
".git/objects/d6/1162b4af041f77bd9b6427f99d53cb0758edba": "f04b76b7d7f3327bdaa6f77dd48bd795",
".git/objects/d8/be928543e10a289f2d2532119ebb6e02a654d0": "92f1af03fa4b42dd86abd278793ea230",
".git/objects/db/ca3dee77fd84995d20b6ecf829c34b67d5864f": "325ef07b92161121202e573391a71872",
".git/objects/dc/b259fc27d670f4c934993b3cc9cad485960429": "b4dc7ec4a6c26d94ad2ee1acf9c75e6a",
".git/objects/dd/97f766d22e0e15a14f95f12bfd74e7f74b4ff8": "e98fa8c3c72bb958ad7dcdce125b5b1c",
".git/objects/de/9c23dfcaec0b15e8a653621871252eeedf1454": "51e3f84ab2313b7b223fa3c7fc56edb6",
".git/objects/df/350a77959e80230eee750ce883136df9e1ccc7": "4de37c9c025b237bb469e162eacf928d",
".git/objects/e2/e0bd1daa03f58e0e73f7a19eca0a97deadc712": "a548cfc136452f51bf96e721097989ec",
".git/objects/e4/287dc5383787fd3e14f56979030214abf02a0d": "314693346ebdc087f138f481d7d77a23",
".git/objects/e4/6c03dacfec8d723f369e9833ff58f871b5fd2e": "b12cfcfb77d0cfae4fb23fa68862e2d9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/396ea36ebd8bda433a34bedc86d09946ac880b": "944b2a0329bd55cbee619003b68e143c",
".git/objects/e8/9fd74550ddf621c8ca58e152bb410e61bc464a": "b238f0dccae14a67674dcb8e4d33ced1",
".git/objects/ea/2650b546b5dba4358f2d0b9edcd38cc00176a1": "b82bed225fd5b2ef1dd9a593e3da36c6",
".git/objects/eb/98780bb7aaed2f53bb1d9f55677a5007ef6f9a": "06042c999f5728a79c382a84cc205c0c",
".git/objects/ee/e30eed28431e57070c068b4ac118327cf43131": "74e81b48d7c9ba7ee998dc97f71917f8",
".git/objects/ef/a19b3d9ef1b0a7c022faa442537f09f7ceb853": "708aaf9a3a9384f3e94dcf34936e664e",
".git/objects/f1/537dca8c44d144e25fc7b2fd999cbce4ef0a4b": "3ca429a7478aa36774148653a4d36b35",
".git/objects/f2/116eef0e1cc27de280b5af5ca929365ac35b04": "5d17459b6946d456d7b5c25c40e1cd43",
".git/objects/f2/137838e70ec91b06ac44ddc5721549af44a687": "cbd63fb0d9b8de9897a89873463ce7b8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/9c42566b2bd2d7e3a44259732a0a2d8856f923": "35ec51eca778de044def0e94e0e6e858",
".git/objects/f3/3825f2b7d44794fc2002b8cbd145d5e095d915": "75b41c14eac5020feccd21ca66933530",
".git/objects/f6/755c36a2a0eb4c536abf3222155f71ce921aa0": "27a551b655da686e35681c03b5a5a347",
".git/objects/f7/74fc71d172d0c56bc65fdfc28dcd8a12d37d84": "ce6296a96f8acfed5f1a7412d46d565b",
".git/objects/f7/88bdf7082f0ac2803f6cca9bb8229120079fa9": "3d7756ae9a643e74201e3aa4c73d3db9",
".git/objects/f9/2423bf29c99df6961761c8646747eb94ce6530": "3ee22a3d6e78603fffa34e61ab43286f",
".git/objects/fb/56cce8136a0b6acb790a600f2ca66704315282": "8475f32615743aaf4fad37d58793b1b3",
".git/ORIG_HEAD": "1224eb4f90137c91fc4031f384f0bfbd",
".git/refs/heads/main": "102dbcb713aacd9edf30ccc6219af23f",
".git/refs/remotes/origin/main": "102dbcb713aacd9edf30ccc6219af23f",
"assets/AssetManifest.json": "d807de4da7477a1b3b0c5ac3930ac1a9",
"assets/assets/data.json": "1ec73731289afc0306ead4849619ed71",
"assets/assets/data_1.json": "da71e83fa91612020cb356c4ea80055b",
"assets/assets/data_10.json": "ce0e005a3fe730f66ccaa1af7e7e374c",
"assets/assets/data_11.json": "bcc690b645c31d4ec21321449ab363b2",
"assets/assets/data_12.json": "c3eb15334d935460630c1c072d0b6405",
"assets/assets/data_13.json": "9759f0906db3a7418e16be3ec6266246",
"assets/assets/data_14.json": "ccec519ff2753dbc1efe1741d107bf51",
"assets/assets/data_15.json": "0a950caa97e2ea97ea4fa30ccb45de2b",
"assets/assets/data_16.json": "5eb940b7d0761549484fbd7142f90de7",
"assets/assets/data_17.json": "e8b50a000a5d2aa59c8680e8563693bb",
"assets/assets/data_18.json": "2012de8ca4adb10c576e324fba2432e8",
"assets/assets/data_19.json": "def97fba3870a0ba23386d2fa29f5da8",
"assets/assets/data_2.json": "3d195c25086f09eaf96b3c6255e3f196",
"assets/assets/data_20.json": "bb6d3e2bb20fde46a89f56afa5869c5d",
"assets/assets/data_21.json": "4e7e9d1bccfd08c23c53dba080b2749b",
"assets/assets/data_22.json": "2c521cef1cb1230ef2882782a8af6e7e",
"assets/assets/data_23.json": "b6486d69d67973f1f7025d9f4500c8f9",
"assets/assets/data_24.json": "1dcbb56abdcc45aaf6caebd60d7dee9d",
"assets/assets/data_25.json": "f5b1bbe48d1b0eebb51c98358dfd2bc4",
"assets/assets/data_26.json": "9422ecedf564863ef86817dfc1f68aa3",
"assets/assets/data_27.json": "d51ac9e022c4bf44967c228c95522925",
"assets/assets/data_28.json": "97a6f30b4808e0fb709bd2aa8b56b077",
"assets/assets/data_29.json": "bc30e3e5b7fbdea8c88a9675cb195c4f",
"assets/assets/data_3.json": "25aebe55cfaaaaa11e078426a2a47a48",
"assets/assets/data_30.json": "8857e6db21b0e7a84fd85ac43ff37186",
"assets/assets/data_31.json": "0e265104c2925b73a83d4f22773d25b4",
"assets/assets/data_4.json": "d0bf3ca8b369cd968a60f2f6cfa45250",
"assets/assets/data_5.json": "5d04235da20045792c1c3376386026f8",
"assets/assets/data_6.json": "47fc704982fe88ef042cfacadf15b942",
"assets/assets/data_7.json": "ee99777de1dcb03ae90ca19d63cb7a8b",
"assets/assets/data_8.json": "b14ce600e99d6e5db1fa4dc870582f8f",
"assets/assets/data_9.json": "7103122c6a610367e46df4b9f95dcfce",
"assets/assets/demo_data.json": "5f744359aba5fd2d64b7bf9313ef04e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "705b27a18d6c9fbfd3fc51ce2835e20c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "8dc889c3a173d272512868f388f15bfb",
"favicon.png": "f388b283b44c6ebb4213e67ccf07a5e4",
"icons/Icon-192.png": "bb9a20972abc55f58b83e0df757408ca",
"icons/Icon-512.png": "13306f54462386354d3438524ec01b29",
"index.html": "4cf80db476b2c11e4364cb9c16b2c23d",
"/": "9d85deb039609b77df6e4a98cb413f6c",
"main.dart.js": "a068e46dd0e2929d931a77f2eba5f36a",
"manifest.json": "e9f98547f652e89bac8fd7d25494978f",
"pazardzhik-13/assets/AssetManifest.json": "f1aab2d7152bafe0521114922bee09a4",
"pazardzhik-13/assets/assets/data_13.json": "9759f0906db3a7418e16be3ec6266246",
"pazardzhik-13/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pazardzhik-13/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"pazardzhik-13/assets/NOTICES": "705b27a18d6c9fbfd3fc51ce2835e20c",
"pazardzhik-13/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"pazardzhik-13/CNAME": "8dc889c3a173d272512868f388f15bfb",
"pazardzhik-13/favicon.png": "f388b283b44c6ebb4213e67ccf07a5e4",
"pazardzhik-13/icons/Icon-192.png": "bb9a20972abc55f58b83e0df757408ca",
"pazardzhik-13/icons/Icon-512.png": "13306f54462386354d3438524ec01b29",
"pazardzhik-13/index.html": "9d85deb039609b77df6e4a98cb413f6c",
"pazardzhik-13/main.dart.js": "2bba411a1ed091c6e5b03305339d7649",
"pazardzhik-13/manifest.json": "e9f98547f652e89bac8fd7d25494978f",
"pazardzhik-13/README.md": "577c1c2c1adb69086a6eb5b522d9af8c",
"pazardzhik-13/version.json": "99c8bff5293752671f7df04a773f72f5",
"README.md": "577c1c2c1adb69086a6eb5b522d9af8c",
"version.json": "9d544103688c7cb71f91cd1309b6693a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

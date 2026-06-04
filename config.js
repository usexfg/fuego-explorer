var isTestnet = (new URLSearchParams(window.location.search)).get('testnet') === '1';
var USE_GATEWAY = true; // false = direct daemon (restApi will be empty, REST calls fail)
var xfgApi = 'http://127.0.0.1:8787/v1';
var restApi = USE_GATEWAY ? xfgApi : '';
var api = USE_GATEWAY
  ? (isTestnet ? xfgApi + '/daemon-testnet' : xfgApi + '/daemon')
  : (isTestnet ? 'http://127.0.0.1:28280' : 'http://127.0.0.1:18180');
var poolListUrl = '';
var donationAddress = "";
var blockTargetInterval = isTestnet ? 120 : 480;
var coinUnits = 10000000;
var symbol = isTestnet ? 'TEST' : 'XFG';
var refreshDelay = isTestnet ? 15000 : 48000;

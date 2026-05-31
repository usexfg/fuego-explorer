var RANDOM_STYLE_ID = 'xfg-random-theme';

var themeFactory = [
  { name: "Ocean Depths",
    bgBody:"#0f1a24", bgHeader:"#0b141c", bgCard:"#14212e",
    bgCardHeader:"#1d6f6f", bgCardHeaderText:"#fff",
    colorText:"#c8dcdc", colorMuted:"#7098a8",
    colorLink:"#7fc1c1", colorLinkHover:"#a8e0e0",
    borderColor:"#1d3f4f", focusColor:"#7fc1c1",
    headingFont:"'DejaVu Serif','Playfair Display',serif",
    bodyFont:"'DejaVu Sans','Lato',sans-serif" },
  { name: "Forest Canopy",
    bgBody:"#141e12", bgHeader:"#0e1610", bgCard:"#1c2a1a",
    bgCardHeader:"#5a6b50", bgCardHeaderText:"#f0f0e8",
    colorText:"#d8dcc8", colorMuted:"#7a8870",
    colorLink:"#a4ac86", colorLinkHover:"#c4ccb0",
    borderColor:"#2a3a2a", focusColor:"#a4ac86",
    headingFont:"'FreeSerif','Playfair Display',serif",
    bodyFont:"'FreeSans','Lato',sans-serif" },
  { name: "Modern Minimalist",
    bgBody:"#1a1a1f", bgHeader:"#121217", bgCard:"#22222a",
    bgCardHeader:"#4a5560", bgCardHeaderText:"#e8e8ee",
    colorText:"#d0d0d8", colorMuted:"#787880",
    colorLink:"#a0a8b0", colorLinkHover:"#c8d0d8",
    borderColor:"#303038", focusColor:"#a0a8b0",
    headingFont:"'DejaVu Sans','Lato',sans-serif",
    bodyFont:"'DejaVu Sans','Lato',sans-serif" },
  { name: "Golden Hour",
    bgBody:"#1e1814", bgHeader:"#161210", bgCard:"#28201a",
    bgCardHeader:"#c17a3a", bgCardHeaderText:"#fff",
    colorText:"#d8ccb8", colorMuted:"#908070",
    colorLink:"#d4a060", colorLinkHover:"#e8c088",
    borderColor:"#3a2e22", focusColor:"#d4a060",
    headingFont:"'FreeSans','Lato',sans-serif",
    bodyFont:"'FreeSans','Lato',sans-serif" },
  { name: "Arctic Frost",
    bgBody:"#141820", bgHeader:"#0f121a", bgCard:"#1c2230",
    bgCardHeader:"#3a6090", bgCardHeaderText:"#e8f0f8",
    colorText:"#c8d8e8", colorMuted:"#7088a0",
    colorLink:"#88b0d8", colorLinkHover:"#b0d4f0",
    borderColor:"#223048", focusColor:"#88b0d8",
    headingFont:"'DejaVu Sans','Lato',sans-serif",
    bodyFont:"'DejaVu Sans','Lato',sans-serif" },
  { name: "Desert Rose",
    bgBody:"#1e1418", bgHeader:"#161012", bgCard:"#2a1c22",
    bgCardHeader:"#a06a5a", bgCardHeaderText:"#f0e8e4",
    colorText:"#d8c8c4", colorMuted:"#90807a",
    colorLink:"#c09080", colorLinkHover:"#dcb4a8",
    borderColor:"#3a2830", focusColor:"#c09080",
    headingFont:"'FreeSans','Lato',sans-serif",
    bodyFont:"'FreeSans','Lato',sans-serif" },
  { name: "Tech Innovation",
    bgBody:"#0a0a0f", bgHeader:"#06060c", bgCard:"#12121a",
    bgCardHeader:"#1a5cbc", bgCardHeaderText:"#fff",
    colorText:"#c8d8e8", colorMuted:"#607080",
    colorLink:"#4a9eff", colorLinkHover:"#80bcff",
    borderColor:"#1a2a3a", focusColor:"#4a9eff",
    headingFont:"'DejaVu Sans','Lato',sans-serif",
    bodyFont:"'DejaVu Sans','Lato',sans-serif" },
  { name: "Botanical Garden",
    bgBody:"#121a14", bgHeader:"#0e1410", bgCard:"#1a2420",
    bgCardHeader:"#3a7a48", bgCardHeaderText:"#e8f0e4",
    colorText:"#d0dcc8", colorMuted:"#708868",
    colorLink:"#88b878", colorLinkHover:"#b0d8a0",
    borderColor:"#24362a", focusColor:"#f0b830",
    headingFont:"'DejaVu Serif','Playfair Display',serif",
    bodyFont:"'DejaVu Sans','Lato',sans-serif" },
  { name: "Midnight Galaxy",
    bgBody:"#14101e", bgHeader:"#0e0c18", bgCard:"#1c1830",
    bgCardHeader:"#3a3a7a", bgCardHeaderText:"#e4e0f0",
    colorText:"#c8c4da", colorMuted:"#787090",
    colorLink:"#9a8ec8", colorLinkHover:"#c0b8e0",
    borderColor:"#282240", focusColor:"#9a8ec8",
    headingFont:"'FreeSans','Lato',sans-serif",
    bodyFont:"'FreeSans','Lato',sans-serif" },
  { name: "Desert Heat",
    bgBody:"#1c1410", bgHeader:"#14100c", bgCard:"#261c16",
    bgCardHeader:"#b8452a", bgCardHeaderText:"#fff",
    colorText:"#d8ccc0", colorMuted:"#908478",
    colorLink:"#d08050", colorLinkHover:"#e8a878",
    borderColor:"#3a2a20", focusColor:"#d08050",
    headingFont:"'DejaVu Sans','Lato',sans-serif",
    bodyFont:"'DejaVu Sans','Lato',sans-serif" },
];

function applyRandomTheme(t) {
  var sheet = document.getElementById(RANDOM_STYLE_ID);
  if (!sheet) {
    sheet = document.createElement('style');
    sheet.id = RANDOM_STYLE_ID;
    document.head.appendChild(sheet);
  }
  var s = 'body[data-theme="random"]';
  sheet.textContent =
    s + '{background-color:' + t.bgBody + ';--heading-font:' + t.headingFont + ';--body-font:' + t.bodyFont + '}' +
    s + ' .slim-header{background:' + t.bgHeader + ';border-bottom-color:' + t.borderColor + '}' +
    s + ' .slim-navbar{background:' + t.bgHeader + ';border-bottom-color:' + t.borderColor + '}' +
    s + ' .slim-footer{background:' + t.bgHeader + ';border-top-color:' + t.borderColor + '}' +
    s + ' .card{background:' + t.bgCard + ';border-color:' + t.borderColor + '}' +
    s + ' .card-header{background:' + t.bgCardHeader + ';color:' + t.bgCardHeaderText + '}' +
    s + ' .card-body{background:' + t.bgCard + '}' +
    s + ' .bg-primary-dark{background:' + t.bgCardHeader + '!important}' +
    s + ' .bg-dark{background:' + t.bgHeader + '!important}' +
    s + ' .hot_link{color:' + t.colorLink + '}' +
    s + ' .hot_link:hover,' + s + ' .nav-item.active .hot_link{color:' + t.colorLinkHover + '}' +
    s + ' .btn-primary{background:' + t.bgCardHeader + ';border-color:' + t.bgCardHeader + ';color:' + t.bgCardHeaderText + '}' +
    s + ' .btn-primary:hover{filter:brightness(.85)}' +
    s + ' .tx-white{color:' + t.colorText + '}' +
    s + ' .tx-gray-500{color:' + t.colorMuted + '}' +
    s + ' footer a,' + s + ' .slim-footer a{color:' + t.colorLink + '}' +
    s + ' footer a:hover,' + s + ' .slim-footer a:hover{color:' + t.colorLinkHover + '}' +
    s + ' .network-badge{background:' + t.bgCardHeader + ';color:' + t.bgCardHeaderText + ';border-color:' + t.bgCardHeader + '}' +
    s + ' .network-badge.testnet{background:#ff8800;color:#fff;border-color:#ff8800}' +
    s + ' .theme-badge{background:' + t.bgCardHeader + '20;color:' + t.colorLink + ';border-color:' + t.bgCardHeader + '}' +
    s + ' *:focus-visible{outline-color:' + t.focusColor + '}' +
    s + ' .table{color:' + t.colorText + '}' +
    s + ' .search-box input{background:' + t.bgCard + ';border-color:' + t.borderColor + ';color:' + t.colorText + '}';
  document.body.setAttribute('data-theme', 'random');
  document.documentElement.style.setProperty('color-scheme', 'dark');
}

function clearRandomTheme() {
  var sheet = document.getElementById(RANDOM_STYLE_ID);
  if (sheet) sheet.remove();
}

function getRandomTheme() {
  return themeFactory[Math.floor(Math.random() * themeFactory.length)];
}

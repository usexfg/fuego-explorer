var themeFactory = [
  { name: "Ocean Depths", type: "dark",
    palette: ["#1a2332","#2d8b8b","#a8dadc","#f1faee"],
    headingFont: "'DejaVu Serif','Playfair Display',serif",
    bodyFont: "'DejaVu Sans','Lato',sans-serif" },
  { name: "Sunset Boulevard", type: "light",
    palette: ["#e76f51","#f4a261","#e9c46a","#264653"],
    headingFont: "'DejaVu Serif','Playfair Display',serif",
    bodyFont: "'DejaVu Sans','Lato',sans-serif" },
  { name: "Forest Canopy", type: "dark",
    palette: ["#2d4a2b","#7d8471","#a4ac86","#faf9f6"],
    headingFont: "'FreeSerif','Playfair Display',serif",
    bodyFont: "'FreeSans','Lato',sans-serif" },
  { name: "Modern Minimalist", type: "light",
    palette: ["#36454f","#708090","#d3d3d3","#ffffff"],
    headingFont: "'DejaVu Sans','Lato',sans-serif",
    bodyFont: "'DejaVu Sans','Lato',sans-serif" },
  { name: "Golden Hour", type: "light",
    palette: ["#f4a900","#c1666b","#d4b896","#4a403a"],
    headingFont: "'FreeSans','Lato',sans-serif",
    bodyFont: "'FreeSans','Lato',sans-serif" },
  { name: "Arctic Frost", type: "light",
    palette: ["#d4e4f7","#4a6fa5","#c0c0c0","#fafafa"],
    headingFont: "'DejaVu Sans','Lato',sans-serif",
    bodyFont: "'DejaVu Sans','Lato',sans-serif" },
  { name: "Desert Rose", type: "light",
    palette: ["#d4a5a5","#b87d6d","#e8d5c4","#5d2e46"],
    headingFont: "'FreeSans','Lato',sans-serif",
    bodyFont: "'FreeSans','Lato',sans-serif" },
  { name: "Tech Innovation", type: "dark",
    palette: ["#0066ff","#00ffff","#1e1e1e","#ffffff"],
    headingFont: "'DejaVu Sans','Lato',sans-serif",
    bodyFont: "'DejaVu Sans','Lato',sans-serif" },
  { name: "Botanical Garden", type: "dark",
    palette: ["#4a7c59","#f9a620","#b7472a","#f5f3ed"],
    headingFont: "'DejaVu Serif','Playfair Display',serif",
    bodyFont: "'DejaVu Sans','Lato',sans-serif" },
  { name: "Midnight Galaxy", type: "dark",
    palette: ["#2b1e3e","#4a4e8f","#a490c2","#e6e6fa"],
    headingFont: "'FreeSans','Lato',sans-serif",
    bodyFont: "'FreeSans','Lato',sans-serif" }
];

function lighten(hex, amt) {
  var c = parseInt(hex.replace('#',''), 16);
  var r = Math.min(255, (c >> 16) + amt);
  var g = Math.min(255, ((c >> 8) & 0xFF) + amt);
  var b = Math.min(255, (c & 0xFF) + amt);
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6,'0');
}

function darken(hex, amt) {
  var c = parseInt(hex.replace('#',''), 16);
  var r = Math.max(0, (c >> 16) - amt);
  var g = Math.max(0, ((c >> 8) & 0xFF) - amt);
  var b = Math.max(0, (c & 0xFF) - amt);
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6,'0');
}

function hexToRgba(hex, alpha) {
  var c = parseInt(hex.replace('#',''), 16);
  var r = (c >> 16) & 0xFF, g = (c >> 8) & 0xFF, b = c & 0xFF;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function lum(hex) {
  var c = parseInt(hex.replace('#',''), 16);
  return 0.2126 * ((c >> 16) & 0xFF) + 0.7152 * ((c >> 8) & 0xFF) + 0.0722 * (c & 0xFF);
}

function applyTheme(t) {
  var p = t.palette;
  var isDark = (t.type === 'dark');

  var bg = isDark ? darken(p[0], 10) : lighten(p[3], 30);
  var surface = isDark ? p[0] : p[1];
  var c2 = isDark ? lighten(p[0], 20) : lighten(p[1], 40);
  var c3 = isDark ? lighten(p[0], 30) : lighten(p[3], 20);
  var accent = p[1];
  var highlight = p[2];
  var text = p[3];
  var muted = isDark ? lighten(p[0], 50) : darken(text, 40);

  // For light themes, swap dark bg text
  var textOnAccent = isDark ? lighten(p[3], 60) : darken(p[3], 20);
  var cardBg = isDark ? lighten(p[0], 8) : lighten(p[1], 60);
  var cardHeaderBg = isDark ? lighten(p[0], 20) : p[1];
  var cardHeaderText = isDark ? text : (lum(p[1]) > 150 ? darken(p[3], 10) : lighten(p[3], 80));
  var borderColor = isDark ? lighten(p[0], 40) : darken(p[1], 20) + '33';
  var inputBg = isDark ? lighten(p[0], 5) : lighten(p[3], 10);
  var btnBg = isDark ? lighten(accent, 10) : accent;
  var btnHover = isDark ? lighten(accent, 25) : darken(accent, 15);
  var focusColor = highlight;

  document.documentElement.style.setProperty('--bg-body', bg);
  document.documentElement.style.setProperty('--bg-header', surface);
  document.documentElement.style.setProperty('--bg-navbar', darken(surface, isDark ? 5 : 3));
  document.documentElement.style.setProperty('--bg-footer', darken(surface, isDark ? 5 : 3));
  document.documentElement.style.setProperty('--surface', surface);
  document.documentElement.style.setProperty('--bg-card', cardBg);
  document.documentElement.style.setProperty('--bg-card-header', cardHeaderBg);
  document.documentElement.style.setProperty('--bg-card-header-text', cardHeaderText);
  document.documentElement.style.setProperty('--bg-primary-dark', cardHeaderBg);
  document.documentElement.style.setProperty('--bg-dark-alt', surface);
  document.documentElement.style.setProperty('--color-accent', accent);
  document.documentElement.style.setProperty('--color-text', text);
  document.documentElement.style.setProperty('--color-muted', muted);
  document.documentElement.style.setProperty('--color-link', highlight);
  document.documentElement.style.setProperty('--color-link-hover', isDark ? lighten(highlight, 40) : lighten(highlight, 20));
  document.documentElement.style.setProperty('--color-text-on-accent', textOnAccent);
  document.documentElement.style.setProperty('--color-white', text);
  document.documentElement.style.setProperty('--btn-bg', btnBg);
  document.documentElement.style.setProperty('--btn-bg-hover', btnHover);
  document.documentElement.style.setProperty('--btn-color', textOnAccent);
  document.documentElement.style.setProperty('--border-color', borderColor);
  document.documentElement.style.setProperty('--input-bg', inputBg);
  document.documentElement.style.setProperty('--input-border', borderColor);
  document.documentElement.style.setProperty('--focus-color', focusColor);
  document.documentElement.style.setProperty('--theme-badge-bg', hexToRgba(accent, 0.12));
  document.documentElement.style.setProperty('--theme-badge-color', highlight);
  document.documentElement.style.setProperty('--theme-badge-border', accent);

  document.documentElement.style.setProperty('--heading-font', t.headingFont);
  document.documentElement.style.setProperty('--body-font', t.bodyFont);

  document.body.setAttribute('data-theme', t.name.replace(/\s+/g, '-').toLowerCase());
  document.documentElement.style.setProperty('color-scheme', isDark ? 'dark' : 'light');
  localStorage.setItem('xfgThemeName', t.name);
}

function getRandomTheme() {
  return themeFactory[Math.floor(Math.random() * themeFactory.length)];
}

function getRandomThemeByType(type) {
  var pool = themeFactory.filter(function(t) { return t.type === type; });
  return pool[Math.floor(Math.random() * pool.length)];
}

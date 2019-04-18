require("utils/ald-game-conf");
require('libs/weapp-adapter/index');
var Parser = require('libs/xmldom/dom-parser');
window.DOMParser = Parser.DOMParser;
require('libs/wx-downloader.js');
wxDownloader.REMOTE_SERVER_ROOT = "https://cdn.seelii.legaogame.com/WantToBeHero";
// wxDownloader.SUBCONTEXT_ROOT = "";
require('src/settings');
require('main');
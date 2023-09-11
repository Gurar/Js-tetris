import Settings from "./compnents/Settings.js";
import Field from "./compnents/Field.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

new Settings(canvas).init();
new Field(context).init();








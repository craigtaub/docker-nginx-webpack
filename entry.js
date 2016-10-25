require("./style.css");
// without "--module-bind 'css=style!css'" needs with require("!style!css!./style.css");  
document.write(require("./content.js"));

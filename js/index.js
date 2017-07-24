/* Prerequisites */
var textField = document.getElementById("textField").contentDocument;
var onTextFieldUpdate = function () { "use strict"; };

function enableEditMode() {
    "use strict";
    textField.designMode = "on";
    textField.addEventListener("keyup",  onTextFieldUpdate, false);
}

/* GUI */
function updateIcons() {
    "use strict";
    /* Undo button */
    if (textField.queryCommandEnabled("undo")) {
        document.getElementById("undoButton").disabled = false;
        document.getElementById("undoButton").style.backgroundImage = "url('res/undo-icon.png')";
    } else {
        document.getElementById("undoButton").disabled = true;
        document.getElementById("undoButton").style.backgroundImage = "url('res/noundo-icon.png')";
    }
    /* Redo button */
    if (textField.queryCommandEnabled("redo")) {
        document.getElementById("redoButton").disabled = false;
        document.getElementById("redoButton").style.backgroundImage = "url('res/redo-icon.png')";
    } else {
        document.getElementById("redoButton").disabled = true;
        document.getElementById("redoButton").style.backgroundImage = "url('res/noredo-icon.png')";
    }
}

/* Formatting */
function formatText(cmd) {
    "use strict";
    if (textField.execCommand(cmd, false, null)) {
        updateIcons();
    }
}
            
function formatText(cmd, arg) {
    "use strict";
    if (textField.execCommand(cmd, false, arg)) {
        updateIcons();
    }
}

function setFontSize(px) {
    "use strict";
    // TODO
}

/* Events */
onTextFieldUpdate = function () {
    "use strict";
    updateIcons();
};

/* Output */
function getHTML() {
    "use strict";
    return textField.getElementsByTagName("html")[0].outerHTML;
}
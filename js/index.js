/* Initializer */
function initEditor() {
    "use strict";
    
}

/* GUI */
function updateIcons() {
    "use strict";
    /* Undo button */
    if (document.queryCommandEnabled("undo")) {
        document.getElementById("undoButton").disabled = false;
        document.getElementById("undoButton").style.backgroundImage = "url('res/undo-icon.png')";
    } else {
        document.getElementById("undoButton").disabled = true;
        document.getElementById("undoButton").style.backgroundImage = "url('res/noundo-icon.png')";
    }
    /* Redo button */
    if (document.queryCommandEnabled("redo")) {
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
    if (document.execCommand(cmd, false, null)) {
        updateIcons();
    }
}

function formatText(cmd, arg) {
    "use strict";
    if (document.execCommand(cmd, false, arg)) {
        updateIcons();
    }
}

/* Callback events */
function onTextEdit() {
    "use strict";
    updateIcons();
}

/* Output */
function getHTML() {
    "use strict";
    document.getElementById("textField").textContent = document.getElementById("textField").innerHTML;
}
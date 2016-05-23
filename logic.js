var parent = document.getElementById("parent");
var children = document.getElementsByName('child');

//If the parent is checked, set all children to checked and vice versa
parent.onchange = allCheck;

for (var i = 0; i < children.length; i++) {
    children[i].onchange = childChanged;
}

//If the parent is checked, set all children to checked and vice versa
function allCheck() {
    for (var i = 0; i < children.length; i++) {
        children[i].checked = parent.checked;
    }
}

//If any child is unchecked, uncheck the parent.
function childChanged() {
    if (!this.checked) {
        parent.checked = false;
        return;
    }

//If all children are checked, check the parent.
    for (var i = 0; i < children.length; i++) {
        if (!children[i].checked) return;
    }
    parent.checked = true;
}

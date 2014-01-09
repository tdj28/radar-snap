// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("loc");
  var output1 = select.value; //select.children[select.selectedIndex].value;
  localStorage["loc_choice"] = output1;

 
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Location Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite1 = localStorage["loc_choice"];
  if (!favorite1) {
    return;
  }
  var select = document.getElementById("loc");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite1) {
      child.selected = "true";
      break;
    }
  }
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

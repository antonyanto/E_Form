function changeButtonScaleOver() {
  this.style.transform = "scale(1.2, 1.2)";
}

function changeButtonScaleOut() {
  this.style.transform = "scale(1, 1)";
}

function inputFocus() {
  this.style.backgroundColor = "rgba(0, 0, 0)";
  this.style.color = "white";
}

function inputFocusOut() {
  this.style.backgroundColor = "rgba(0, 0, 0, 0)";
}

function checkInputData(elem) {
  if (elem.value == "") {
    return true;
  } else {
    return false;
  }
}

function retrieveDataFromSubmission() {
  let status = 1;
  let elems = document.getElementsByClassName("form-control");
  for (let i = 0; i < elems.length; i++) {
    if (checkInputData(elems[i])) {
      switch (i) {
        case 0:
          alert("Enter Your First Name");
          break;
        case 1:
          alert("Enter Your Last Name");
          break;
        case 2:
          alert("Enter Your Roll NO");
          break;
        default:
          break;
      }
      break;
    } else {
      user_details[elems[i].id] = elems[i].value;
      status++;
    }
  }
  user_details["user_dept"] = document.getElementById("user_dept").value;
  let check_id = "check_";
  let options = ["ds", "web", "android"];
  let count = 0;
  for (let i = 0; i < 3; i++) {
    let temp = document.getElementById(check_id+options[i]);
    if (temp.checked == true) {
      user_details["preferred_role"+count] = temp.value;
      count++;
      status++;
    }
  }
  if ((count == 0) && (status > 3)) {
    alert("Select Atleast 1 Role");
  }
  if (status > 4) {
    console.log("Invoked");
  }
}

document.getElementById("submit-btn").addEventListener("mouseover", changeButtonScaleOver);
document.getElementById("submit-btn").addEventListener("mouseout", changeButtonScaleOut);
document.getElementById("submit-btn").addEventListener("click", retrieveDataFromSubmission);
var elems = document.getElementsByClassName("form-control");
for (let i = 0; i < elems.length; i++) {
  elems[i].addEventListener("focus", inputFocus);
  elems[i].addEventListener("focusout", inputFocusOut);
}
var user_details = {};

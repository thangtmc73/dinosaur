/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function headerMenuButtonClick() {
  console.log("dfdffdd");
  var x = document.getElementById("top-nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

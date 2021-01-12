var emailValidation = function () {
  var x = document.getElementById("email").value;
  var re = /^.+@.+\.(com)|(edu)$/;
  if (!re.test(x)) {
    document.getElementById("error").innerHTML = "Please enter a valid email address.";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.boxShadow = "0 0 10px red";
  } else {
    document.getElementById("error").innerHTML = "";
    document.getElementById("email").style.borderColor = "lightblue";
    document.getElementById("email").style.boxShadow = "0 0 10px lightblue";
  }
};

var subscribeValidation = function() {
    var x = document.getElementById("email").value;
    var re = /^.+@.+\.(com)|(edu)$/;
    if (re.test(x)) {
        window.location.href = "/success.html";
    } else {
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var myform = document.getElementById("myform");
    var errormsg = document.getElementById("errormsg");

    myform.addEventListener("submit", function(event) {
          var nameInput = document.getElementById("name");
          var emailInput = document.getElementById("email");

          if (nameInput.value === "" || emailInput.value === "") {
              event.preventDefault();
              if (nameInput.value === "" && emailInput.value) {
                  errormsg.textContent = "please fill out name field";
              } else if (emailInput.value === ""  && nameInput.value ) {
                  errormsg.textContent = "please fill out email field"
              } else {
                  errormsg.textContent = "please fill out all fields"
              }
          } else {
              errormsg.textContent = "";
          }

      }); 
});
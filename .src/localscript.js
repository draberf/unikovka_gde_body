import * as hidden from 'D:/skola/SU/unikovka_gde_body/.targetscript.js'

function jumble(x) {
  return x**7 % 10000;
}

function validateForm() {
  let x = document.forms["form"]["code"].value * 1;
  alert("Hi!");
  alert(hidden.validatePassword("uta", 2563));
  return false;
}


let htmlEntryForm = `

<div class="container">
  <div class="centerBox">
  
    <div style="color:#11DD11">ZADEJ HESLO:</div><br/>
    <form name="form" onsubmit="return validateForm()">
      <input type="number" name="code"/><br/>
      <input type="submit" value="Odemkni"/><br/>
    </form>
  
  </div>
</div>

`

// MAIN
document.getElementById("content").innerHTML = jumble(2563);

function validatePassword(id, kod) {
    if (id == "aks" && kod == "9664") {
        return htmlContent1;
    }

    if (id == "uta" && kod == "4272") {
        return htmlContent2;
    }

    if (id == "msa" && kod == "8496") {
        return htmlContent3;
    }

    if (id == "kul" && kod == "7264") {
        return htmlContent4;
    }

    return htmlFailForm;
}

function jumble(x) {
    return x**7 % 10000;
  }
  
function validateForm() {
  let x = document.forms["form"]["code"].value * 1;
  document.getElementById("content").innerHTML =
      validatePassword(usb_id, jumble(x));
  return false;
}

function validateWISForm() {
  let x = document.forms["wisForm"]["pw"].value;
  if (x == password) {
    document.getElementById("content").innerHTML =
      htmlWISwin;
  } else {
    document.getElementById("content").innerHTML =
      htmlWISFailForm;
  }
  return false;
}
  
  







































































































  




























































































































































  


























  // hesla:
  //           kod    hash
  // 1 - aks - 1203 - 9664
  // 2 - uta - 2563 - 4272
  // 3 - msa - 7431 - 8496
  // 4 - kul - 2002 - 7264


  let htmlEntryForm = `
  
  <div class="container" style="left: 40%; width: 20%; top: 50%;">
    <div class="centerBox">
    
      <div style="color:#11DD11">ZADEJ 4-CIFERNÝ KÓD:</div><br/>
      <form name="form" onsubmit="return validateForm()" autocomplete="off">
        <input type="number" name="code" placeholder="****"/><br/>
        <input type="submit" value="Odemkni"/><br/>
      </form>
    
    </div>
  </div>
  
  `

  let htmlFailForm = `
  
  <div class="container" style="left: 40%; width: 20%; top: 50%;">
    <div class="centerBox">
    
    <div style="color:#11DD11">ZADEJ 4-CIFERNÝ KÓD:</div><br/>
    <form name="form" onsubmit="return validateForm()" autocomplete="off">
      <input type="number" name="code" placeholder="****"/><br/>
        <input type="submit" value="Odemkni"/><br/>
      </form>
      <div style="color:#DD0000"><b>Nesprávné heslo</b></div>
    
    </div>
  </div>
  
  `

  let htmlContent1 = `
  
  <div class="container" style="width: 44%; left: 28%; height: 60%; top: 2%;">
    <img src="/homes/eva/xp/xplagi0b/sudoku_highlight.png" style="width:74%; height:100%">    
  </div>
  <div class="container" style="width: 12%; left: 44%; height: 5%; top: 70%;">
    <div class="pwSnippet"><b>ry******</b></div>    
  </div>

  
  `

  let htmlContent2 = `
  
  <div class="container" style="width: 16%; left: 14%; height: 40%; top: 20%;">
    <img src="/homes/eva/xp/xplagi0b/cernocky_icon.jpg">
  </div>
  <div class="container" style="width: 40%; left: 35%; height: 30%; top: 25%; color:#11DD11; justify-content:left">
    
    <table>
    <tr><th/></tr>
    <tr>
      <td style="color:#11DD11"><b>Prof. Dr. Ing. Jan Černocký</b></td>
    </tr>
    <tr>
      <td style="color:#11DD11">"Honza"</td>
    </tr>
    <tr>
      <td style="color:#11DD11">Vedoucí ústavu</td>
    </tr>
    <tr>
      <td style="color:#11DD11"><u>cernocky@fit.vut.cz</u></td>
    </tr>
    <tr>
      <td style="color:#11DD11">+420 514 514 926</b></td>
    </tr>
    </table>

  </div>
  <div class="container" style="width: 12%; left: 44%; height: 5%; top: 70%;">
    <div class="pwSnippet"><b>**pa****</b></div>    
  </div>
  `

  let htmlContent3 = `
  
  <div class="container" style="width: 70%; left: 15%; height: 60%; top: 2%; font-size: 60px; color:#11DD11;">
    F->Z<br>
    K->E<br>
    ...
  </div>
  <div class="container" style="width: 12%; left: 44%; height: 5%; top: 70%;">
    <div class="pwSnippet"><b>****dl**</b></div>    
  </div>
  `

  let htmlContent4 = `

  <div class="container" style="width: 12%; left: 44%; height: 5%; top: 50%;">
    <div class="pwSnippet"><b>******o5</b></div>    
  </div>
  
  `

  let htmlWISForm = `
  
  <div class="container" style="left: 40%; width: 20%; top: 30%;">
    <div class="centerBox">
      
      <div style="color:#11DD11"><b>Přihlášení do WIS</b></div><br/>
      <form name="wisForm" onsubmit="return validateWISForm()" autocomplete="off">
        <input type="text" name="login" value="icernocky" disabled/><br/>
        <input type="password" name="pw"/><br/>
        <input type="submit" value="Přihlásit se"/><br/>
      </form>

  </div>
  
  `

  let htmlWISFailForm = `
  
  <div class="container" style="left: 40%; width: 20%; top: 30%;">
    <div class="centerBox">
      
      <div style="color:#11DD11"><b>Přihlášení do WIS</b></div><br/>
      <form name="wisForm" onsubmit="return validateWISForm()">
        <input type="text" name="login" value="icernocky" disabled/><br/>
        <input type="password" name="pw"/><br/>
        <input type="submit" value="Přihlásit se"/><br/>
      </form>
      <div style="color:#DD0000"><b>Nesprávné heslo</b></div>

  </div>
  
  `

  let password = "rypadlo5";

  let htmlWISwin = `
  <div class="container" style="left: 25%; width: 50%; top: 40%;">

    <div style="color:#11DD11; font-size:50px; font-weight:bold;">NAHRÁLI JSTE BODY!</div>

  </div>
  `
  
  // MAIN
  if (usb_id == "wis") {
    document.getElementById("content").innerHTML = htmlWISForm;
  } else {
    document.getElementById("content").innerHTML = htmlEntryForm;
  }
















































































































































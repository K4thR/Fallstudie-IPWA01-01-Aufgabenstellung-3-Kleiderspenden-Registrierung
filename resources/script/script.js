function showHideFields() {
  var abholung = document.getElementById("abholung");
  var addressFieldsAbholung = document.getElementById("address-fields");

  var abgabe = document.getElementById("abgabe");
  var addressFieldsAbgabe = document.getElementById("address-fields_abgabe");

  if (abholung.checked) {
    addressFieldsAbholung.style.display = "block";
  } else {
    addressFieldsAbholung.style.display = "none";
  }

  if (abgabe.checked) {
    addressFieldsAbgabe.style.display = "block";
  } else {
    addressFieldsAbgabe.style.display = "none";
  }
}

const geschaeftsstellenPLZ = ['12', '86', '98'];

function checkPostleitzahlen() {
  const inputPLZ = document.getElementById("postleitzahl").value.substring(0, 2);
  const vorschlagAbgabe = document.getElementById("vorschlag-abgabe");

  let found = false;
  for (const plz of geschaeftsstellenPLZ) {
    if (plz === inputPLZ) {
      found = true;
      break;
    }
  }

  if (found) {
    vorschlagAbgabe.style.display = "block";
    
  } else {
    vorschlagAbgabe.style.display = "none";
  }
}

const form = document.getElementById("formRegistrierungSpende");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //verhindert, dass die Seite neu lädt

  const nachricht = "Vielen Dank! Ihre Kleiderspenden-Registrierung war erfolgreich. Sie werden in Kürze eine E-Mail erhalten.";
  const bestaetigungsDiv = document.getElementById("bestaetigung");
  bestaetigungsDiv.innerHTML = nachricht;

  form.style.display = "none"; //blendet das Formular aus
});
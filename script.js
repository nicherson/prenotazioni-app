let selectedService = null;
let selectedTime = null;

const services = document.querySelectorAll(".service");
const times = document.querySelectorAll(".times div");
const button = document.getElementById("confirmBtn");

button.disabled = true;

/* SERVIZIO */
services.forEach(s => {
  s.addEventListener("click", () => {
    services.forEach(x => x.classList.remove("selected"));
    s.classList.add("selected");
    selectedService = s.innerText;
    checkReady();
  });
});

/* ORARIO */
times.forEach(t => {
  t.addEventListener("click", () => {
    times.forEach(x => x.classList.remove("selected"));
    t.classList.add("selected");
    selectedTime = t.innerText;
    checkReady();
  });
});

/* ABILITA BOTTONE */
function checkReady() {
  if (selectedService && selectedTime) {
    button.disabled = false;
  }
}

/* CONFERMA */
button.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const cognome = document.getElementById("cognome").value;
  const targa = document.getElementById("targa").value;
  const km = document.getElementById("km").value;
  const date = document.getElementById("date").value;

  if (!nome || !cognome || !targa || !km || !date) {
    alert("Compila tutti i campi");
    return;
  }

  // NASCONDI FORM
  document.getElementById("booking").classList.add("hidden");

  // RIEMPIMENTO RIEPILOGO
  document.getElementById("sService").innerText = selectedService;
  document.getElementById("sDate").innerText = date;
  document.getElementById("sTime").innerText = selectedTime;

  // MOSTRA SUCCESSO
  document.getElementById("success").classList.remove("hidden");
});

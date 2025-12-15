let selectedService = null;
let selectedTime = null;

const serviceCards = document.querySelectorAll(".service");
const timeSlots = document.querySelectorAll(".times div");
const button = document.querySelector("button");

// disabilita pulsante all’inizio
button.disabled = true;

/* SELEZIONE SERVIZIO */
serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    serviceCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedService = card.innerText;
    checkReady();
  });
});

/* SELEZIONE ORARIO */
timeSlots.forEach(slot => {
  slot.addEventListener("click", () => {
    timeSlots.forEach(s => s.classList.remove("selected"));
    slot.classList.add("selected");
    selectedTime = slot.innerText;
    checkReady();
  });
});

/* CONTROLLO STATO */
function checkReady() {
  if (selectedService && selectedTime) {
    button.disabled = false;
  }
}

/* CONFERMA */
button.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    if (!input.value) {
      alert("Compila tutti i campi");
      return;
    }
  }

  alert(
    "Prenotazione confermata!\n\n" +
    "Servizio: " + selectedService + "\n" +
    "Orario: " + selectedTime
  );
});

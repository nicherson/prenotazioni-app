// Gestione selezione servizio
const services = document.querySelectorAll(".service");
let selectedService = null;

services.forEach(service => {
  service.addEventListener("click", () => {
    services.forEach(s => s.style.background = "#1e88e5");
    service.style.background = "#1565c0";
    selectedService = service.textContent;
  });
});

// Gestione selezione orario
const times = document.querySelectorAll(".times div");
let selectedTime = null;

times.forEach(time => {
  time.addEventListener("click", () => {
    times.forEach(t => t.style.background = "#eee");
    time.style.background = "#c8e6c9";
    selectedTime = time.textContent;
  });
});

// Bottone prenota
document.querySelector("button").addEventListener("click", () => {
  if (!selectedService || !selectedTime) {
    alert("Seleziona servizio e orario");
    return;
  }

  alert(
    "Prenotazione confermata!\n" +
    "Servizio: " + selectedService + "\n" +
    "Orario: " + selectedTime
  );
});

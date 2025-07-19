 const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Barcha tablarni faolsizlantirish
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Tanlangan tabni faollashtirish
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
  });



let selectedDays = 6;     // boshlang'ich 6 kun
  let selectedHours = 9;    // boshlang'ich 9 soat

  const ecoRate = 60000;     // Start: 60 000 so‘m/soat
  const comfortRate = 75000; // Comfort: 75 000 so‘m/soat

  const ecoOutput = document.getElementById('eco-income');
  const comfortOutput = document.getElementById('comfort-income');

  function updateIncome() {
    const ecoTotal = selectedDays * selectedHours * ecoRate;
    const comfortTotal = selectedDays * selectedHours * comfortRate;

    ecoOutput.textContent = ecoTotal.toLocaleString('uz-UZ') + ' so‘m';
    comfortOutput.textContent = comfortTotal.toLocaleString('uz-UZ') + ' so‘m';
  }

  // Kun tanlash
  document.querySelectorAll('#day-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#day-buttons button').forEach(b => b.classList.remove('active-btn'));
      btn.classList.add('active-btn');
      selectedDays = parseInt(btn.dataset.value);
      updateIncome();
    });
  });

  // Soat tanlash
  document.querySelectorAll('#hour-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#hour-buttons button').forEach(b => b.classList.remove('active-btn'));
      btn.classList.add('active-btn');
      selectedHours = parseInt(btn.dataset.value);
      updateIncome();
    });
  });

  // Boshlanishida hisobla
  updateIncome();
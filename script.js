// Temperature Chart
const tempCtx = document.getElementById('tempChart').getContext('2d');
new Chart(tempCtx, {
  type: 'line',
  data: {
    labels: ["2000", "2005", "2010", "2015", "2020", "2025"],
    datasets: [{
      label: 'Temperature Rise (°C)',
      data: [0.5, 0.8, 1.0, 1.2, 1.5, 1.7],
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.2)',
      fill: true,
      tension: 0.3,
    }]
  }
});

// CO2 Emissions Chart
const co2Ctx = document.getElementById('co2Chart').getContext('2d');
new Chart(co2Ctx, {
  type: 'pie',
  data: {
    labels: ["Energy", "Transport", "Industry", "Agriculture", "Other"],
    datasets: [{
      data: [40, 25, 20, 10, 5],
      backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA46BE"]
    }]
  }
});

// Sea Level Rise Chart
const seaCtx = document.getElementById('seaLevelChart').getContext('2d');
new Chart(seaCtx, {
  type: 'bar',
  data: {
    labels: ["2020", "2030", "2040", "2050"],
    datasets: [{
      label: 'Sea Level Rise (mm)',
      data: [20, 40, 65, 100],
      backgroundColor: '#00C49F'
    }]
  }
});

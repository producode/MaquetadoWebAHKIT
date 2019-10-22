var ingresos = document.getElementById('ingresos');
var historial = document.getElementById('historial');
var bubbles = document.getElementById('bubbles');
var bubbles2 = document.getElementById('bubbles2');
var historial2 = document.getElementById('historial2');

var radio = 7;
var myChart = new Chart(ingresos, {
    type: 'bar',
    data: {
        labels: ['Lautaro', 'Paula', 'Nico', 'Mauricio', 'Guadalupe', 'Aguero'],
        datasets: [{
            label: 'Ingresos',
            data: [6, 2, 4, 1, 2, 1],
            backgroundColor: '#0C78E7'
        }]
    },
    options: {
      responsive: true,
      scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: '#0C78E7'
            }
          }]
      },
      legend:{
        display: false
      },
      title: {
        display: true,
        text: 'ingresos',
        fontColor: '#0C78E7',
          fontFamily: 'Quicksand'
      }
    }
});

var myLineChart = new Chart(historial, {
  type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
          label: 'cantidad de cambios',
          data: [44, 32, 15, 10, 20, 35],
          backgroundColor: '#0C78E7'
      }]
    },
    options: {
      responsive: true,
      scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: '#0C78E7'
            }
          }]
      },
      legend:{
        display: false
      },
      title: {
        display: true,
        text: 'cantidad de cambios',
        fontColor: '#0C78E7',
          fontFamily: 'Quicksand'
      }
    }
});

var myBubbleChart = new Chart(bubbles, {
  type: 'bubble',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'cantidad de cambios',
        data: [{x: 20,y: 15,r:radio},{x: 23,y: 13,r:radio},{x: 20,y: 10,r:radio},{x: 8,y: 1,r:radio},{x: 13,y: 13,r:radio},{x: 23,y: 17,r:radio}],
        backgroundColor: '#0C78E7'
    }]
  },
  options: {
    responsive: true,
    scales: {
        yAxes: [{
          ticks: {
              beginAtZero: true,
              fontColor: '#0C78E7'
          }
        }]
    },
    legend:{
      display: false
    },
    title: {
      display: true,
      text: 'movimientos por zona',
      fontColor: '#0C78E7',
        fontFamily: 'Quicksand'
    }
  }
});

var myBubbleChart2 = new Chart(bubbles2, {
  type: 'bubble',
  data: {
    datasets: [{
        data: [{x: 30,y: 20,r:radio},{x: 40,y: 23,r:radio},{x: 50,y: 30,r:radio},{x: 10,y: 40,r:radio},{x: 43,y: 33,r:radio},{x: 23,y: 17,r:radio}],
        backgroundColor: '#0C78E7'
    }]
  },
  options: {
    responsive: true,
    scales: {
        yAxes: [{
          ticks: {
              beginAtZero: true,
              fontColor: '#0C78E7'
          }
        }]
    },
    legend:{
      display: false
    },
    title: {
      display: true,
      text: 'movimientos por lugar',
      fontColor: '#0C78E7',
        fontFamily: 'Quicksand'
    }
  }
});

var myLineChart2 = new Chart(historial2, {
  type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
          label: 'cantidad de cambios',
          data: [20, 18, 32, 26, 23, 16],
          backgroundColor: '#0C78E7'
      }]
    },
    options: {
      responsive: true,
      scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: '#0C78E7'
            }
          }]
      },
      legend:{
        display: false
      },
      title: {
        display: true,
        text: 'tranferencias',
        fontColor: '#0C78E7',
          fontFamily: 'Quicksand'
      }
    }
});
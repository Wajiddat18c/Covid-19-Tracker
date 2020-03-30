$.getJSON("all", 
function(data){
$(data).each((i, allData) => {
    let active = data.cases - data.recovered - data.deaths;
    

$("#total").append(`<h4 style="text-align: center;">BEKRÆFTEDE COVID-19 TILFÆLDE I ALT: <br>${data.cases}</div>`) 


var ctx = document.getElementById("myChart").getContext("2d");

let activeCases = data.cases - data.recovered - data.deaths;


var myDoughnutChart = new Chart(ctx, {
  type: "pie",

  data: {
    datasets: [{
        data: [activeCases, data.recovered, data.deaths],
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 2,
        backgroundColor: [
            'rgb(0, 0, 255)',
            'rgb(0, 255, 0)',
            'rgb(255, 0, 0)'
        ]
    },
],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Aktive", "Helbredt", "Døde"]
  },
  options: {
    responsive: false
  }
});


});
});



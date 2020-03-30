 
 $.getJSON("view", 
function(data){
    $(data).each((i, virus) => {
        $("#virusBody").append($("<tr>")
        .append($("<td>").append(virus.country))
        // .append($(`<td>${virus.country}<img src="${virus.countryInfo.flag}" alt="Variables" ></td>`))
        .append($("<td>").append(virus.cases))
        .append($('<td style= "background-color: yellow; ">').append(virus.todayCases))
        .append($('<td style= "background-color: orange; ">').append(virus.todayDeaths))
        .append($('<td style= "background-color: blue; color: white;">').append(virus.active))
        .append($('<td style="color: white; background-color: red; ">').append(virus.deaths))
        .append($('<td style= "background-color: green; color: white;">').append(virus.recovered)));
    });
})
    .done(function(){
        // alert("Page Loaded");
        $(document).ready( function () {
            $('#virusTable').DataTable({
              "lengthMenu": [[-1, 10, 25, 50, 100], ["All", 10, 25, 50, 100]],
              "order": [[ 1, "desc" ]]
            });
            
        } );

    })
    .fail(function(e){
        alert("ERROR, Please refresh this page", e);
        console.log("error");
        console.error(e);
    })



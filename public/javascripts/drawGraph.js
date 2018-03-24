google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    createPuissanceGraph();
}


function createPuissanceGraph(){
    var data = JSON.parse(patient.replace(/&quot;/g, '"'))
    // var chart = new google.visualization.DataTable();

    var graph = new google.visualization.DataTable();
    graph.addColumn('number', 'Repetitions');
    graph.addColumn('number', 'Center -> Left');
    graph.addColumn('number', 'Left -> Center');
    graph.addColumn('number', 'Center -> Right');
    graph.addColumn('number', 'Right -> Center');
    graph.addColumn('number', 'Average');
    var row = [];
    var cpt = 0;
    for(var i = 0 ; i<data.moves.length ; i++){
        if(row.length == 0){
            row.push(data.moves[i].repetition);
        }

    }
    graph.addRow([1,  14,      8,         3,             2,           5]);
    graph.addRow([2,  3,      5,        3,             6,          4]);
        

    //  var graph = new google.visualization.DataTable();
    //  graph.addColumn('number', 'Repetitions');
    //  graph.addColumn('number', 'Center -> Right');

   var options = {
     title : 'Performance of patients',
     vAxis: {title: 'Seconds'},
     hAxis: {title: 'Repetitions'},
     seriesType: 'bars',
     series: {7: {type: 'line'}}
   };

   var chart = new google.visualization.ComboChart(document.getElementById('curve_chart'));
   chart.draw(graph, options);

    // data.addColumn('string', 'Date');
    // data.addColumn('number', 'PV');
    // data.addColumn('number', 'Eolien');
    // data.addRows(test);

    // var options = {
    //     title: 'Puissance Kw',
    //     curveType: 'function',
    //     legend: {position: 'bottom'}
    // };

    // var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    // chart.draw(data, options);
}

// function createProductionGraph(){
//     var prod = JSON.parse(production.replace(/&quot;/g, '"'));

//     console.log(prod);

//     var data =  new google.visualization.DataTable();
//     data.addColumn('string', 'year');
//     data.addColumn('number', 'Centrales thermiques');
//     data.addColumn('number', 'Centrale hydrauliques');
//     data.addColumn('number', 'Production cantonale');

//     var array = []

//     for(var i = 0 ; i<prod.length ; i++){
//         array.push([prod[i]['AnnГ©e'], Number(prod[i]['Centrales thermiques']['Total']),Number(prod[i]['Centrale hydrauliques']['Total']), Number(prod[i]['Production cantonale'])])
//     }

//     data.addRows(array);

//     console.log(array);

//     var options = {
//         title: 'Production [GWh]',
//         colors: ['#d32626','#4286f4', '#f6ff00'],
//         hAxis: {
//             title: 'Year',
//             format: 'h:mm a',
//             viewWindow: {
//                 min: [7, 30, 0],
//                 max: [17, 30, 0]
//             }
//         },
//         vAxis: {
//             title: 'Rating (scale of 1-10)'
//         }
//     };

//     var chart = new google.visualization.ColumnChart(document.getElementById('production_chart'));
//     chart.draw(data, options);
// }

// function createPieGraph(){
//     var prod = JSON.parse(pie.replace(/&quot;/g, '"'));

//     var data = new google.visualization.arrayToDataTable([
//         ['Centrale hydrauliques', 'Value'],
//         ['Centrales au fil de l\'eau', Number(prod['Centrale hydrauliques']['Centrales au fil de l\'eau'])],
//         ['Centrales Г  accumulation', Number(prod['Centrale hydrauliques']['Centrales Г  accumulation'])]
//     ]);

//     var options = {
//         title: 'Source production Г©nergie hydroГ©lectrique'
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
//     chart.draw(data, options);
// }
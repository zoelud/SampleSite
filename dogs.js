let background = "#d2f8d2"
document.body.style.backgroundColor = background;



  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Response');
    data.addColumn('number', 'Amount');
    data.addRows([
      ['yes', 198],
      ['yes but in red', 20],

    ]);

    // Set chart options
    var options = {'title':'Should you own a dog? ',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

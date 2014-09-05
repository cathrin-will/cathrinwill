<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
          var dataTable = new google.visualization.DataTable();
  dataTable.addColumn('number', 'Year');
  dataTable.addColumn('number', 'Sales');
  dataTable.addColumn('number', 'Expenses');
  // A column for custom tooltip content
  dataTable.addColumn({type: 'string', role: 'tooltip'});
  dataTable.addRows([
    [1, 1,2,'$600K in our first year!'],
    [2, 3,4, 'Sunspot activity made this our best year ever!'],
    [3, 2,6, '$800K in 2012.'],
    [4, 1,4,'4K in our first year!'],
    [5, 3,4, 'Sunspot activity made this our best year ever!'],
    [6, 2,6, '$800K in 2012.'],
    [7, 1,4,'4K in our first year!'],
    [8, 3,4, 'Sunspot activity made this our best year ever!'],
    [9, 2,6, '$800K in 2012.'],
    [10, 1,4,'4K in our first year!'],
    [11, 3,4, 'Sunspot activity made this our best year ever!'],
    [12, 2,6, '$800K in 2012.'],
    [13, 1,4,'4K in our first year!'],
    [14, 3,4, 'Sunspot activity made this our best year ever!'],
    [15, 2,6, '$800K in 2012.'],
    [16, 1,4,'4K in our first year!'],
    [17, 3,4, 'Sunspot activity made this our best year ever!'],
    [18, 2,6, '$800K in 2012.'],
    [19, 1,4, '$1M in sales last year.']
  ]);

        var options = {
          title: 'Company Performance',
          axisTitlesPosition:  'out',
          tooltip: {isHtml: true, trigger: 'selection'},
          pointSize: 5,
          vAxis: { gridlines:{color: '#fff', count: 0} },
          // hAxis: { gridlines:{color: '#333', count: 19},title: 'Hello',  titleTextStyle: {color: '#FF0000'} },
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(dataTable, options);

      }
    </script>
  </head>
  <body>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
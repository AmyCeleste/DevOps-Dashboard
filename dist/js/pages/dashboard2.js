$(function () {

  'use strict';

  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas);
  var PieData = [
    {
      value: 17,
      color: "#f56954",
      highlight: "#f56954",
      label: "Connection Manager"
    },
    {
      value: 12,
      color: "#00a65a",
      highlight: "#00a65a",
      label: "Admin Interface"
    },
    {
      value: 16,
      color: "#39CCCC",
      highlight: "#39CCCC",
      label: "Authentication"
    },
    {
      value: 15,
      color: "#00c0ef",
      highlight: "#00c0ef",
      label: "DB Utilities MySQL"
    },
    {
      value: 16,
      color: "#d2d6de",
      highlight: "#d2d6de",
      label: "CC Processing"
    },
    {
      value: 15,
      color: "#001F3F",
      highlight: "#001F3F",
      label: "User Interface"
    },
    {
      value: 16,
      color: "#ff851b",
      highlight: "#ff851b",
      label: "Python Interface"
    },
    {
      value: 14,
      color: "#605ca8",
      highlight: "#605ca8",
      label: "Messages Spanish"
    },
    {
      value: 12,
      color: "#D81B60",
      highlight: "#D81B60",
      label: "Partner Interface"
    },
    {
      value: 15,
      color: "#111111",
      highlight: "#111111",
      label: "Image Processing"
    },
    {
      value: 12,
      color: "#39CCCC",
      highlight: "#39CCCC",
      label: "Messages Mandarin"
    },
    {
      value: 15,
      color: "#3c8dbc",
      highlight: "#3c8dbc",
      label: "DB Utilities Oracle"
    },
    {
      value: 15,
      color: "#f56954",
      highlight: "#f56954",
      label: "Data Objects"
    },
    {
      value: 15,
      color: "#00a65a",
      highlight: "#00a65a",
      label: "Messages English"
    },
    {
      value: 12,
      color: "#f39c12",
      highlight: "#f39c12",
      label: "Customer Management"
    }
  ];
  var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%>"
  };
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart.Doughnut(PieData, pieOptions);
  //-----------------
  //- END PIE CHART -
  //-----------------

  var pieChartCanvas = $("#pieChart2").get(0).getContext("2d");
  var pieChart2 = new Chart(pieChartCanvas);
  var PieData2 = [
    {
      value: 100,
      color: "#00a65a",
      highlight: "#00a65a",
      label: "Good"
    },
    {
      value: 67,
      color: "#f39c12",
      highlight: "#f39c12",
      label: "Doubtful"
    },
    {
      value: 48,
      color: "#f56954",
      highlight: "#f56954",
      label: "Fail"
    }
  ];
  var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%>"
  };
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart2.Doughnut(PieData2, pieOptions);
  //-----------------
  //- END PIE CHART -
  //-----------------


});

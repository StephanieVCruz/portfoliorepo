// JavaScript Document
var sales = [
  { product: 'HTML',  count: 25 },
  { product: 'CSS',  count: 25 },
  { product: 'JS', count: 25 },
  { product: 'JQuery', count: 15 },
  { product: 'D3', count: 10 },
];
//set up the angles of the pie chart using the pie layout helper
var pie = d3.layout.pie()
  .value(function(d) { return d.count })

//connect our data to the slices
var slices = pie(sales);

//size of the pie chart
var arc = d3.svg.arc()
  .innerRadius(50)
  .outerRadius(100);

// another helper that returns a color based on an ID, category10
var color = d3.scale.category10();


var svg = d3.select('svg.pie');
var g = svg.append('g')
  .attr('transform', 'translate(200, 100)')

g.selectAll('path.slice')
  .data(slices)
    .enter()
      .append('path')
        .attr('class', 'slice')
        .attr('d', arc)
        .attr('fill', function(d) {
          return color(d.data.product);
        });

// building a legend
svg.append('g')
  .attr('class', 'legend')
    .selectAll('text')
    .data(slices)
      .enter()
        .append('text')
          .text(function(d) { return '• ' + d.data.product + ' (' + d.data.count + ')'; })
          .attr('fill', function(d) { return color(d.data.product); })
          .attr('y', function(d, i) { return 20 * (i + 1); })
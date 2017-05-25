var data = [
		{"position":"-2", 	"value": "150"},
		{"position":"-1", 	"value": "700"},
		{"position":"-0", 	"value": "1900"},
		{"position":"1",	"value": "3000"},
		{"position":"2", 	"value": "3100"},
		{"position":"3", 	"value": "1800"},
		{"position":"4", 	"value": "900"},
		{"position":"5", 	"value": "300"},
		{"position":"6", 	"value": "200"},
		{"position":"7", 	"value": "150"},
		{"position":"8", 	"value": "100"},
		]
	var fullWidth = $("#chartSpace").width(),
		fullHeight = 300, 
		padding = [15, 10, 30, 60],
		headerHeight = 45,
		chartWidth = fullWidth - padding[1]- padding[3],
		chartHeight = fullHeight - headerHeight - padding[0] - padding[2] ,
		blockWidth= chartWidth / data.length;
		console.log( d3.max(data, function(d) { return d.value; }));
	var y = d3.scale.linear()
			.range([0,chartHeight])
			.domain([ 3500,0]);
	var x = d3.scale.linear()
		    .range([0 , chartWidth])
		    .domain([d3.min(data, function(d) { return d.position; }), d3.max(data, function(d) { return d.position; })]);
	var daptChart = d3.selectAll("#dapt-chart")
			.attr('height', fullHeight)
			.attr('width',fullWidth);
	var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");
	var daptChartBackground = daptChart.append("rect")
			.attr('class','chart-background')
			.attr('x',0)
			.attr('y',0)
    		.attr("width", fullWidth)
	    	.attr("height", fullHeight);    	
	var daptChartHolder = daptChart.append("g")
			.attr("transform","translate(" + padding[3]  + "," + (padding[0] + headerHeight) +")")
			.attr('class','chart-holder')
    		.attr("width", chartWidth)
	    	.attr("height", chartHeight);
	var daptChartHeader = d3.selectAll("#dapt-chart")
			.append('g')
			.attr('class','chart-header');
		daptChartHeader.append("rect")
			.attr('class','chart-header-background')
			.attr('width',fullWidth)
			.attr('height', headerHeight)
			.attr('x',0)
			.attr('y',0);
		daptChartHeader.append("text")
			.attr("text-anchor","start")
			.attr("class", "chart-header-text h5")
	    	.text("DAPT Chart")
	    	.attr('x', 10)
			.attr('y',30);
    var daptChartShading = daptChartHolder.append("g").attr("class","shading");
    var daptChartLines = daptChartHolder.append("g").attr("class","lines");
    	daptChartLines.append('g').attr("class", "y axis").call(yAxis);
    var daptChartLabels =daptChartHolder.append("g").attr("class","labels");
    var	daptChartData = daptChartHolder.append("g")
    	.attr("class", "data")
    	.attr("x","0")
    	.attr("y","0")
    	.selectAll("g")
    	.data(data)
    	.enter().append("g")
    	.attr("transform",function(d, i) { return "translate(" + (i * blockWidth +1) + "," +( chartHeight )+")";})
    	.attr("class", 'data-block');
    var daptChartBlock = daptChartData.append("rect")
		    .attr("width", blockWidth - 4)
		    .attr("height", function(d){return chartHeight - y(d.value)})
		    .attr("y", function(d){return y(d.value) - chartHeight} )
		    .attr("x", 2 )
		    .attr("fill","#cccccc");
	var daptChartBlockValue = daptChartData.append("text")
		    .text(function(d,i){return d.position;})
		    .attr("class","h6")
		    .attr("x",blockWidth/2)
		    .attr("y",20)
		    .attr("text-anchor","middle")
		    .attr('fill','#000');



// Risk Chart


	// var riskChart = d3.selectAll("#risk-chart")
	// 		.attr('height', fullHeight)
	// 		.attr('width',fullWidth);
	// var riskChartBackground = riskChart.append("rect")
	// 		.attr('class','chart-background')
	// 		.attr('x',0)
	// 		.attr('y',0)
 //    		.attr("width", fullWidth)
	//     	.attr("height", fullHeight);    	
	// var riskChartHolder = riskChart.append("g")
	// 		.attr("transform","translate(" + padding[3]  + "," + (padding[0] + headerHeight) +")")
	// 		.attr('class','chart-holder')
 //    		.attr("width", chartWidth)
	//     	.attr("height", chartHeight);
	// var riskChartHeader = d3.selectAll("#risk-chart")
	// 		.append('g')
	// 		.attr('class','chart-header');
	// 	riskChartHeader.append("rect")
	// 		.attr('class','chart-header-background')
	// 		.attr('width',fullWidth)
	// 		.attr('height', headerHeight)
	// 		.attr('x',0)
	// 		.attr('y',0);
	// 	riskChartHeader.append("text")
	// 		.attr("text-anchor","start")
	// 		.attr("class", "chart-header-text h5")
	//     	.text("RISK Chart")
	//     	.attr('x', 10)
	// 		.attr('y',30);



/*
    This adds the data and appends an element for each each data points
    Example 1:
        This will add a 'rect' element for each datapoint and return
        the selection group of elements
        
        d3.select('svg')
            .repeat('rect', data)
    
    Example 2: 
        Here the above selection is acted upon by further modifiers.
        
        d3.select('svg')
            .repeat('rect', data)//For Each Datapoint in data map a new 'rect' with the following attributes. and add it to 'svg'
                .attr('height', 100)
                .attr('width', 100)
                .attr('x', 10)
                .attr('y', 10)
                .style('fill', '#FF0000');
                
    Example 3:
        This is how to add a key function to the dataSet using the example above.
        
        d3.select('svg')
            .repeat('rect', data, function(d){return d.name;}) //Here is the keyFunction the Data mapping will now be keyed by the data names
                .attr('height', 100)
                .attr('width', 100)
                .attr('x', 10)
                .attr('y', 10)
                .style('fill', '#FF0000');
        

*/

d3.selection.prototype.repeat = function(element,  data, keyFunction){
        return this.selectAll(element)
                    .data(data, (keyFunction) ? keyFunction : null )
                        .enter()
                            .append(element)
}
d3peat
======

D3 functions to make life easier

I felt weird inside. Why do I have to select elements before I append them?

Using D3 alone, to map new elements to each data point and then add the elements to the SVG I had to selectAll the elements before they were appended. 
I'm sure that if I had a big mbostock brain it wouldn't hurt so much but this tiny plugin suits my needs many times. 

Okay, to add it just copy paste it or include the js file after D3 is included on your index.html page


This adds the data and appends an element for each each of the data points
Example 1:
    This will add a 'rect' element for each datapoint and return
    the selection group of elements
```javascript        
        d3.select('svg')
            .repeat('rect', data)
```
Example 2: 
    Here the above selection is acted upon by further modifiers.
```javascript         
        /*For Each Datapoint in data map a new 'rect' 
        with the following attributes. and add it to 'svg'*/
        
        d3.select('svg')
            .repeat('rect', data)
                .attr('height', 100)
                .attr('width', 100)
                .attr('x', 10)
                .attr('y', 10)
                .style('fill', '#FF0000');
```                
Example 3:
    This is how to add a key function to the dataSet using the example above.
```javascript
    //Here is the keyFunction the Data mapping will now be keyed by the data names
        d3.select('svg')
            .repeat('rect', data, function(d){return d.name;}) 
                .attr('height', 100)
                .attr('width', 100)
                .attr('x', 10)
                .attr('y', 10)
                .style('fill', '#FF0000');
```        

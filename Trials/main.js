// Import necessary libraries
const d3 = require('d3');
const topojson = require('topojson-client');

// Set up the SVG container for the map
const svg = d3.select('#map-container')
  .append('svg')
  .attr('width', '100%')
  .attr('height', '100%');

// Load the map data using D3
//d3.json('http://34.38.72.236/Circles/Towns/50') // Replace with the path to your map data JSON file
  //.then(function(mapData) {
    // Load your towns data using D3
    d3.json('http://34.38.72.236/Circles/Towns/50') // Replace with the path to your towns data JSON file
      .then(function(townsData) {
        // Convert the TopoJSON data to GeoJSON
        const geoJSON = topojson.feature(mapData, mapData.objects.your_map_object);

        // Define a projection for your map (e.g., Albers USA)
        const projection = d3.geoAlbersUsa()
          .fitSize([width, height], geoJSON);

        // Create a path generator
        const path = d3.geoPath()
          .projection(projection);

        // Draw the map
        svg.selectAll('path')
          .data(geoJSON.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('class', 'map-feature'); // Add CSS class for styling

        // Plot towns on the map
        svg.selectAll('.town')
          .data(townsData)
        }

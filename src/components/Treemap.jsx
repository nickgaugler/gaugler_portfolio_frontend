import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Tooltip } from 'react-tooltip';

// Data for the treemap, representing skills by category
const treemapData = {
  name: "Skills Breakdown",
  children: [
    {
      name: 'Programming',
      size: 0,
      children: [
        { name: 'Python', size: 12 },
        { name: 'SQL', size: 8 },
        { name: 'R', size: 5 },
        { name: 'JavaScript', size: 3 },
      ]
    },
    {
      name: 'Data Science',
      size: 0,
      children: [
        { name: 'ML/AI', size: 10 },
        { name: 'Analytics', size: 8 },
        { name: 'Modeling', size: 6 },
      ]
    },
    {
      name: 'Tools',
      size: 0,
      children: [
        { name: 'Tableau', size: 5 },
        { name: 'Looker', size: 4 },
        { name: 'dbt', size: 3 },
        { name: 'AWS', size: 2 },
      ]
    },
  ]
};

// This component renders a treemap using D3.js and React.
const D3Treemap = () => {
  const svgRef = useRef();

  useEffect(() => {
    // We only want to run the D3 code once, after the component mounts.
    const container = d3.select(svgRef.current.parentNode);
    const width = container.node().getBoundingClientRect().width;
    const height = 300;
    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);
    
    // Clear the SVG before re-rendering
    svg.selectAll('*').remove();

    // D3 treemap setup
    const treemap = d3.treemap().size([width, height]).padding(1);

    // Create the hierarchical data structure
    const root = d3.hierarchy(treemapData).sum(d => d.size).sort((a, b) => b.size - a.size);
    treemap(root);

    // Create the nodes
    const node = svg
      .selectAll('g')
      .data(root.leaves())
      .join('g')
      .attr('transform', d => `translate(${d.x0},${d.y0})`);

    // Create the colored rectangles
    node
      .append('rect')
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', (d, i) => d3.schemeTableau10[i])
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .attr('data-tooltip-id', 'treemap-tooltip')
      .attr('data-tooltip-content', d => `${d.data.name}: ${d.data.size} projects`)
      .attr('data-tooltip-place', 'top');

    // Add the labels
    node
      .append('text')
      .attr('x', 5)
      .attr('y', 20)
      .text(d => d.data.name)
      .attr('font-size', '14px')
      .attr('fill', 'white');
  }, []); // Rerun the effect if the data changes

  return (
    <div>
      <svg ref={svgRef}></svg>
      <Tooltip id="treemap-tooltip" className="bg-gray-700 text-white rounded-md p-2 shadow-lg" />
    </div>
  );
};

export default D3Treemap;

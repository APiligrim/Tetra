import React from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleOrdinal } from '@visx/scale';
import { letterFrequency } from '@visx/mock-data';
const letters = [
  {
    letter: 'Recycled',
    frequency: 0.02167,
  },
  {
    letter: 'In Store',
    frequency: 0.01492,
  },
];
const frequency = d => d.frequency;
const getLetterFrequencyColor = scaleOrdinal({
  domain: letters.map(l => l.letter),
  range: ['#a5e887', '#00ab95'],
});
const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };
export default function PieChart({ width, height, margin = defaultMargin }) {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const top = centerY + margin.top;
  const left = centerX + margin.left;
  const pieSortValues = (a, b) => b - a;
  return React.createElement(
    'svg',
    { width: width, height: height },
    React.createElement(
      Group,
      { top: top, left: left },
      React.createElement(
        Pie,
        {
          data: letters,
          pieValue: frequency,
          pieSortValues: pieSortValues,
          outerRadius: radius,
        },
        pie => {
          return pie.arcs.map((arc, index) => {
            const { letter } = arc.data;
            const [centroidX, centroidY] = pie.path.centroid(arc);
            const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
            const arcPath = pie.path(arc);
            const arcFill = getLetterFrequencyColor(letter);
            return React.createElement(
              'g',
              { key: `arc-${letter}-${index}` },
              React.createElement('path', { d: arcPath, fill: arcFill }),
              hasSpaceForLabel &&
                React.createElement(
                  'text',
                  {
                    x: centroidX,
                    y: centroidY,
                    dy: '.33em',
                    fill: '#ffffff',
                    fontSize: 22,
                    textAnchor: 'middle',
                    pointerEvents: 'none',
                  },
                  arc.data.letter
                )
            );
          });
        }
      )
    )
  );
}

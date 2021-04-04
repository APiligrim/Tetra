import React from 'react';
import { Group } from '@visx/group';
import { BarGroup } from '@visx/shape';
import { AxisBottom } from '@visx/axis';
import cityTemperature from '@visx/mock-data/lib/mocks/cityTemperature';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeParse, timeFormat } from 'd3-time-format';
const blue = '#aeeef8';
export const green = '#e5fd3d';
const purple = '#9caff6';
export const background = '#612efb';
const data = cityTemperature.slice(40, 100);
const keys = Object.keys(data[0]).filter(d => d !== 'date');
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };
const parseDate = timeParse('%Y-%m-%d');
const format = timeFormat('%b %d');
const formatDate = date => format(parseDate(date));
// accessors
const getDate = d => d.date;
// scales
const dateScale = scaleBand({
  domain: data.map(getDate),
  padding: 0.2,
});
const cityScale = scaleBand({
  domain: keys,
  padding: 0.1,
});
const tempScale = scaleLinear({
  domain: [
    0,
    Math.max(...data.map(d => Math.max(...keys.map(key => Number(d[key]))))),
  ],
});
const colorScale = scaleOrdinal({
  domain: keys,
  range: [blue, green, purple],
});
export default function BarChart2({
  width,
  height,
  events = false,
  margin = defaultMargin,
}) {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  // update scale output dimensions
  dateScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.range([yMax, 0]);
  return width < 10
    ? null
    : React.createElement(
        'svg',
        { width: width, height: height },
        React.createElement('rect', {
          x: 0,
          y: 0,
          width: width,
          height: height,
          fill: background,
          rx: 14,
        }),
        React.createElement(
          Group,
          { top: margin.top, left: margin.left },
          React.createElement(
            BarGroup,
            {
              data: data,
              keys: keys,
              height: yMax,
              x0: getDate,
              x0Scale: dateScale,
              x1Scale: cityScale,
              yScale: tempScale,
              color: colorScale,
            },
            barGroups =>
              barGroups.map(barGroup =>
                React.createElement(
                  Group,
                  {
                    key: `bar-group-${barGroup.index}-${barGroup.x0}`,
                    left: barGroup.x0,
                  },
                  barGroup.bars.map(bar =>
                    React.createElement('rect', {
                      key: `bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`,
                      x: bar.x,
                      y: bar.y,
                      width: bar.width,
                      height: bar.height,
                      fill: bar.color,
                      rx: 4,
                      onClick: () => {
                        if (!events) return;
                        const { key, value } = bar;
                        alert(JSON.stringify({ key, value }));
                      },
                    })
                  )
                )
              )
          )
        ),
        React.createElement(AxisBottom, {
          top: yMax + margin.top,
          tickFormat: formatDate,
          scale: dateScale,
          stroke: green,
          tickStroke: green,
          hideAxisLine: true,
          tickLabelProps: () => ({
            fill: green,
            fontSize: 11,
            textAnchor: 'middle',
          }),
        })
      );
}

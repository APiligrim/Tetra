import React from 'react';
import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { Grid } from '@visx/grid';
import { AxisBottom } from '@visx/axis';
import cityTemperature from '@visx/mock-data/lib/mocks/cityTemperature';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeParse, timeFormat } from 'd3-time-format';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { LegendOrdinal } from '@visx/legend';
import { localPoint } from '@visx/event';
const purple1 = '#6c5efb';
const purple2 = '#c998ff';
export const purple3 = '#a44afe';
export const background = '#171a23';
const defaultMargin = { top: 40, right: 0, bottom: 0, left: 0 };
const tooltipStyles = Object.assign(Object.assign({}, defaultStyles), {
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
});
const data = cityTemperature.slice(0, 12);
const keys = Object.keys(data[0]).filter(d => d !== 'date');
const temperatureTotals = data.reduce((allTotals, currentDate) => {
  const totalTemperature = keys.reduce((dailyTotal, k) => {
    dailyTotal += Number(currentDate[k]);
    return dailyTotal;
  }, 0);
  allTotals.push(totalTemperature);
  return allTotals;
}, []);
const parseDate = timeParse('%Y-%m-%d');
const format = timeFormat('%B');
const formatDate = date => format(parseDate(date));
// accessors
const getDate = d => d.date;
// scales
const dateScale = scaleBand({
  domain: data.map(getDate),
  padding: 0.2,
});
const temperatureScale = scaleLinear({
  domain: [0, Math.max(...temperatureTotals)],
  nice: true,
});
const colorScale = scaleOrdinal({
  domain: keys,
  range: [purple1, purple2, purple3],
});
let tooltipTimeout;
export default function BarChart({
  width,
  height,
  events = false,
  margin = defaultMargin,
}) {
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip();
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // TooltipInPortal is rendered in a separate child of <body /> and positioned
    // with page coordinates which should be updated on scroll. consider using
    // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
    scroll: true,
  });
  if (width < 10) return null;
  // bounds
  const xMax = width;
  const yMax = height - margin.top - 100;
  dateScale.rangeRound([0, xMax]);
  temperatureScale.range([yMax, 0]);
  return width < 10
    ? null
    : React.createElement(
        'div',
        { style: { position: 'relative' } },
        React.createElement(
          'svg',
          { ref: containerRef, width: width, height: height },
          React.createElement('rect', {
            x: 0,
            y: 0,
            width: width,
            height: height,
            fill: background,
            rx: 14,
          }),
          React.createElement(Grid, {
            top: margin.top,
            left: margin.left,
            xScale: dateScale,
            yScale: temperatureScale,
            width: xMax,
            height: yMax,
            stroke: 'black',
            strokeOpacity: 0.1,
            xOffset: dateScale.bandwidth() / 2,
          }),
          React.createElement(
            Group,
            { top: margin.top },
            React.createElement(
              BarStack,
              {
                data: data,
                keys: keys,
                x: getDate,
                xScale: dateScale,
                yScale: temperatureScale,
                color: colorScale,
              },
              barStacks =>
                barStacks.map(barStack =>
                  barStack.bars.map(bar =>
                    React.createElement('rect', {
                      key: `bar-stack-${barStack.index}-${bar.index}`,
                      x: bar.x,
                      y: bar.y,
                      height: bar.height,
                      width: bar.width,
                      fill: bar.color,
                      onClick: () => {
                        if (events) alert(`clicked: ${JSON.stringify(bar)}`);
                      },
                      onMouseLeave: () => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      },
                      onMouseMove: event => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        // TooltipInPortal expects coordinates to be relative to containerRef
                        // localPoint returns coordinates relative to the nearest SVG, which
                        // is what containerRef is set to in this example.
                        const eventSvgCoords = localPoint(event);
                        const left = bar.x + bar.width / 2;
                        showTooltip({
                          tooltipData: bar,
                          tooltipTop:
                            eventSvgCoords === null || eventSvgCoords === void 0
                              ? void 0
                              : eventSvgCoords.y,
                          tooltipLeft: left,
                        });
                      },
                    })
                  )
                )
            )
          ),
          React.createElement(AxisBottom, {
            top: yMax + margin.top,
            scale: dateScale,
            tickFormat: formatDate,
            stroke: purple3,
            tickStroke: purple3,
            tickLabelProps: () => ({
              fill: purple3,
              fontSize: 11,
              textAnchor: 'middle',
            }),
          })
        ),
        React.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: margin.top / 2 - 10,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '14px',
            },
          },
          React.createElement(LegendOrdinal, {
            scale: colorScale,
            direction: 'row',
            labelMargin: '0 15px 0 0',
          })
        ),
        tooltipOpen &&
          tooltipData &&
          React.createElement(
            TooltipInPortal,
            { top: tooltipTop, left: tooltipLeft, style: tooltipStyles },
            React.createElement(
              'div',
              { style: { color: colorScale(tooltipData.key) } },
              React.createElement('strong', null, tooltipData.key)
            ),
            React.createElement(
              'div',
              null,
              tooltipData.bar.data[tooltipData.key],
              '\u2109'
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'small',
                null,
                formatDate(getDate(tooltipData.bar.data))
              )
            )
          )
      );
}

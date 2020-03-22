import React from 'react';
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  ArcSeries,
} from 'react-vis';

import '../../../node_modules/react-vis/dist/style.css';

function CoronaGraphComponent({ data }) {
  const series = data.map((row, index) => ({
    x: row.attributes.Active,
    y: row.attributes.Country_Region,
  }));

  const PI = Math.PI;
  const FULL_CIRCLE = PI * 2;

  const confirmed = 450;

  const death = 38;
  const recovered = 15;
  const active = 397;

  const countedRatio = (state, total) => FULL_CIRCLE * (state / total);

  const deathRatio = countedRatio(death, confirmed);
  const recoveredRatio = countedRatio(recovered, confirmed);
  const activeRatio = countedRatio(active, confirmed);

  const total = deathRatio + recoveredRatio + activeRatio;

  const myData = [
    {
      angle0: 0,
      angle: recoveredRatio,
      opacity: 0.35,
      radius: 300,
      radius0: 0,
      color: 'green',
    },
    {
      angle0: recoveredRatio,
      angle: deathRatio,
      opacity: 0.35,
      radius: 300,
      radius0: 0,
      color: 'black',
    },
    {
      angle0: deathRatio,
      angle: activeRatio,
      opacity: 0.35,
      radius: 300,
      radius0: 0,
      color: 'red',
    },
  ];

  return (
    <div>
      <h1>
        total: {deathRatio} + {recoveredRatio} + {activeRatio} = {total}
      </h1>
      <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={720} height={1000}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <ArcSeries
          animation
          radiusType={'literal'}
          center={{ x: 0, y: 0 }}
          data={myData}
          colorType={'literal'}
        />
      </XYPlot>
    </div>
  );
}

export default CoronaGraphComponent;

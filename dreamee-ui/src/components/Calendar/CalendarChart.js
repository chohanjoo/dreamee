import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chart from 'react-google-charts';

export default function FileSystemNavigator() {
  return (
<Chart
  width={'100%'}
  height={'100%'}
  chartType="Calendar"
  loader={<div>Loading Chart</div>}
  data={[
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
    [new Date(2021, 4, 4), 10],
    [new Date(2021, 4, 11), 5],
  ]}
  options={{
    title: 'Red Sox Attendance',
    calendar: { cellSize: 20 },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
  );
}

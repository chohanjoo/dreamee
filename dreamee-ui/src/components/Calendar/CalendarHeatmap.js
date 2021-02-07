import CalendarHeatmap from 'react-calendar-heatmap';
import 'assets/css/calendar_styles.css'
import ReactTooltip from 'react-tooltip';

import React from 'react';

export default function CalendarHeatmapComponent() {
    return (
        <div>
        <CalendarHeatmap
  startDate={new Date('2021-01-01')}
  endDate={new Date('2021-12-31')}
  values={[
    { date: '2021-01-01', count: 12 },
    { date: '2021-01-22', count: 122 },
    { date: '2021-01-30', count: 38 },
    // ...and so on
  ]}
  tooltipDataAttrs={value => {
      console.log("valuse : " + JSON.stringify(value['date']))
      if(value['date'] !== null){
        return {
            'data-tip': `${value['date']} has count: ${
              value.count
            }`,
          };
      }
  }}
  showWeekdayLabels={true}
/>
<ReactTooltip />
</div>
    );
}
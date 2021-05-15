import CalendarHeatmap from 'react-calendar-heatmap';
import 'assets/css/calendar_styles.css'
import ReactTooltip from 'react-tooltip';

import React from 'react';

export default function CalendarHeatmapComponent(props) {

  const currentDate = new Date();
  const { attList } = props;

  const createValues = () => {

    var values = []


    attList.map( (att, index ) => {

      values.push({
        date: att.dateCreated.substring(0,10),
        count: att.worshipState + "/" + att.attState + "/" + att.qtNumber
      })
    })

    console.log("createVales : ", values)
    return values;
  }

  return (
    <div>
      <CalendarHeatmap
        startDate={new Date(currentDate.getFullYear(),0,1)}
        endDate={new Date(currentDate.getFullYear(),11,31)}
        values={createValues()}
        tooltipDataAttrs={value => {
          // console.log("values : ", value)
          console.log("hj >> ", `${value['date']} has count: ${value.count}`)
          if(`${value['date']}`)
            return {
              'data-tip': `[${value['date']}] >> ${value.count}`
            };

        }}
        showWeekdayLabels={true}
      />

      <ReactTooltip />
    </div>
  );
}
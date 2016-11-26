import _ from 'lodash';
import React, {PropTypes} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
  color: PropTypes.string,
  units: PropTypes.string
};

export default Chart;

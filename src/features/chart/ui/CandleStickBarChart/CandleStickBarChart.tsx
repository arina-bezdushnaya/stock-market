import React from 'react';
import {observer} from 'mobx-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  BarChart,
  Cell,
} from 'recharts';
import {StockPrice} from '../../types';
import {toJS} from 'mobx';
import {stockPriceModel} from '../../model/chart';
import {getDateLabel} from '../AreaChart/AreaChart';
import {color} from '../../../../theme';

export const CandleStickBarChart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  console.log(data);

  const prepareData = (data: StockPrice[]) => {
    return data.map(({open, close, low, high, ...other}) => {
      return {
        ...other,
        OHLC: [open, high, low, close],
      };
    });
  };

  const CandleStick = (props: any) => {
    const {x, y, height, width, OHLC} = props;
    const [open, high, low, close] = OHLC;
    // const x = 80;
    // const y = 0;
    // const width = 10;
    // const height = 10;
    // const open = 0;
    // const high = 0;
    // const low = 0;
    // const close = 0;

    const isGrowing = open < close;

    console.log(x, y, height);

    const color = isGrowing ? 'green' : 'red';
    const ratio = Math.abs(height / (open - close));

    return (
      <g stroke={color} fill={color} strokeWidth="2">
        <path
          d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
        />
        {/* bottom line */}
        {isGrowing ? (
          <path
            d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
          />
        ) : (
          <path
            d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
          />
        )}
        {/* top line */}
        {isGrowing ? (
          <path
            d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
          />
        ) : (
          <path
            d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
          />
        )}
      </g>
    );
  };

  const isYearly =
    stockPriceModel.interval === '1y' || stockPriceModel.interval === '6M';

  const dataForCandleStick = prepareData(data);

  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={dataForCandleStick}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={getDateLabel}
          minTickGap={isYearly ? 40 : 20}
          tickMargin={15}
          allowDuplicatedCategory={false}
        />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Bar dataKey="OHLC" fill={color.primary} shape={<CandleStick />} />
      </BarChart>
    </ResponsiveContainer>
  );
});

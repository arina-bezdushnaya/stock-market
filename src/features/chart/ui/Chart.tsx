import React, {useEffect} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {ChartContainer} from './styled';
import {stockPriceModel} from '../model/chart';
import {ChartType, StockPrice} from '../types';
import {AreaChart} from './AreaChart';
import {CandleStickBarChart} from './CandleStickBarChart';


interface Props {
  chartType: ChartType;
}

export const Chart = observer(({chartType}: Props) => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  useEffect(() => {
  }, [data]);


  return (
    <ChartContainer>
      {
        chartType === ChartType.Spline ?
          <AreaChart /> :
          <CandleStickBarChart />
      }

    </ChartContainer>
  );
});

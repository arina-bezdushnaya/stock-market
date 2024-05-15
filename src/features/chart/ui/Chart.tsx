import React, {useEffect, useState} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {ChartContainer, BlockWrapper} from './styled';
import {stockPriceModel} from '../model/chart';
import {ChartType, StockPrice, TimeInterval} from '../types';
import {AreaChart} from './AreaChart';
import {CandleStickBarChart} from './CandleStickBarChart';
import {Params} from '../../../pages/main/styled';
import {RadioGroup, RadioOption} from '../../../shared/RadioGroup';
import {Switch} from '../../../shared/Switch';
import {RadioChangeEvent} from 'antd';
import {getFromToDate} from '../../../utils/date';
import {companiesModel} from '../../companies/model';

export const Chart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  useEffect(() => {
  }, [data]);

  const [chartType, setChartType] = useState(ChartType.Spline);

  const timeIntArray = Object.entries(TimeInterval);
  const timeOptions: RadioOption[] = timeIntArray.map(opt => ({
    value: opt[1],
    title: opt[0],
  }));

  const onTimeChange = (e: RadioChangeEvent) => {
    stockPriceModel.setInterval(e.target.value);
    const {from, to} = getFromToDate(e.target.value);

    stockPriceModel.getTimeSeries({company: companiesModel.currentCompany, from, to, interval: e.target.value});
  };

  const onChartTypeChange = (checked: boolean) => {
    setChartType(checked ? ChartType.Candlestick : ChartType.Spline);
  };

  return (
    <BlockWrapper>
      <Params>
        <RadioGroup options={timeOptions} onChange={onTimeChange} value={stockPriceModel.interval} />
        <Switch onChange={onChartTypeChange} value={chartType} />
      </Params>

      <ChartContainer>
        {
          chartType === ChartType.Spline ?
            <AreaChart /> :
            <CandleStickBarChart />
        }

      </ChartContainer>
    </BlockWrapper>
  );
});

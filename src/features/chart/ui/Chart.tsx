import React, {useEffect, useState} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {
  ChartContainer,
  BlockWrapper,
  OhlcvContainer,
  IntervalRadio,
  Params,
} from './styled';
import {stockPriceModel} from '../model/chart';
import {ChartType, OHLC, StockPrice, TimeInterval} from '../types';
import {AreaChart} from './AreaChart';
import {CandleStickBarChart} from './CandleStickBarChart';
import {RadioGroup, RadioOption} from '../../../shared/RadioGroup';
import {Switch} from '../../../shared/Switch';
import {RadioChangeEvent} from 'antd';
import {getFromToDate} from '../../../utils/date';
import {companiesModel} from '../../companies/model';
import {Option, Select} from '../../../shared/Select';

export const Chart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  useEffect(() => {}, [data]);

  const [chartType, setChartType] = useState(ChartType.Spline);

  const timeIntArray = Object.entries(TimeInterval);
  const timeOptions: RadioOption[] = timeIntArray.map(opt => ({
    value: opt[1],
    title: opt[0],
  }));

  const ohlcArray = Object.entries(OHLC);
  const ohlcOptions: Option[] = ohlcArray.map(opt => ({
    value: opt[1],
    label: opt[1],
  }));

  const onTimeChange = (e: RadioChangeEvent) => {
    stockPriceModel.setInterval(e.target.value);
    const {from, to} = getFromToDate(e.target.value);

    stockPriceModel.getTimeSeries({
      company: companiesModel.currentCompany,
      from,
      to,
      interval: e.target.value,
    });
  };

  const onChartTypeChange = (checked: boolean) => {
    setChartType(checked ? ChartType.Candlestick : ChartType.Spline);
  };

  const onOhlcvTypeChange = (type: string) => {
    stockPriceModel.setOHLCV(type);
  };

  return (
    <BlockWrapper>
      <Params>
        <IntervalRadio>
          <RadioGroup
            options={timeOptions}
            onChange={onTimeChange}
            value={stockPriceModel.interval}
          />
        </IntervalRadio>

        <OhlcvContainer>
          <Select
            placeholder={'Select company'}
            options={ohlcOptions}
            defaultValue={ohlcOptions[0]?.value}
            value={stockPriceModel.type}
            onChange={onOhlcvTypeChange}
            size={'middle'}
            isSearch={false}
          />
        </OhlcvContainer>

        <Switch onChange={onChartTypeChange} value={chartType} />
      </Params>

      <ChartContainer>
        {chartType === ChartType.Spline ? (
          <AreaChart />
        ) : (
          <CandleStickBarChart />
        )}
      </ChartContainer>
    </BlockWrapper>
  );
});

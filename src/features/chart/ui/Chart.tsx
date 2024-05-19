import React, {useEffect, useState} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {ChartContainer, BlockWrapper, OhlcContainer, Params} from './styled';
import {stockPriceModel} from '../model/chart';
import {ChartType, OHLC, StockPrice} from '../types';
import {AreaChart} from './AreaChart';
import {CandleStickBarChart} from './CandleStickBarChart';
import {RadioGroup, RadioOption} from '../../../shared/RadioGroup';
import {Switch} from '../../../shared/Switch';
import {RadioChangeEvent} from 'antd';
import {Interval} from './Interval';

export const Chart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  useEffect(() => {}, [data]);

  const [chartType, setChartType] = useState(ChartType.Spline);

  const ohlcArray = Object.entries(OHLC);
  const ohlcOptions: RadioOption[] = ohlcArray.map(opt => ({
    value: opt[1],
    title: opt[0],
  }));

  const onChartTypeChange = (checked: boolean) => {
    setChartType(checked ? ChartType.Candlestick : ChartType.Spline);
  };

  const onOhlcvTypeChange = (e: RadioChangeEvent) => {
    stockPriceModel.setOHLCV(e.target.value);
  };

  return (
    <BlockWrapper>
      <Params>
        <Interval />

        <Switch onChange={onChartTypeChange} value={chartType} />
      </Params>

      <ChartContainer>
        {chartType === ChartType.Spline ? (
          <AreaChart />
        ) : (
          <CandleStickBarChart />
        )}
      </ChartContainer>

      <OhlcContainer>
        <RadioGroup
          options={ohlcOptions}
          onChange={onOhlcvTypeChange}
          value={stockPriceModel.type}
          buttonStyle={'solid'}
        />
      </OhlcContainer>
    </BlockWrapper>
  );
});

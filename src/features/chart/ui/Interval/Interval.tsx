import {observer} from 'mobx-react';
import {stockPriceModel} from '../../model/chart';
import {IntervalRadio, IntervalSelect, IntervalContainer} from './styled';
import {RadioGroup, RadioOption} from '../../../../shared/RadioGroup';
import {Select, SelectOption} from '../../../../shared/Select';
import {RadioChangeEvent} from 'antd';
import {getFromToDate} from '../../../../utils/date';
import {companiesModel} from '../../../companies/model';
import {TimeInterval} from '../../types';

export const Interval = observer(() => {
  const timeIntArray = Object.entries(TimeInterval);
  const timeOptions: RadioOption[] = timeIntArray.map(opt => ({
    value: opt[1],
    title: opt[0],
  }));

  const timeSelectOptions: SelectOption[] = timeIntArray.map(opt => ({
    value: opt[0],
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

  const onIntervalChange = (interval: string) => {
    stockPriceModel.setInterval(interval as TimeInterval);
    const {from, to} = getFromToDate(interval);

    stockPriceModel.getTimeSeries({
      company: companiesModel.currentCompany,
      from,
      to,
      interval,
    });
  };

  return (
    <IntervalContainer>
      <IntervalRadio>
        <RadioGroup
          options={timeOptions}
          onChange={onTimeChange}
          value={stockPriceModel.interval}
          isRounded
        />
      </IntervalRadio>

      <IntervalSelect>
        <Select
          options={timeSelectOptions}
          value={stockPriceModel.interval}
          onChange={onIntervalChange}
          isSearch={false}
          size={'middle'}
        />
      </IntervalSelect>
    </IntervalContainer>
  );
});

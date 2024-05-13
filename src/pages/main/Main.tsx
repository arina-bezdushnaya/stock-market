import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import type {RadioChangeEvent} from 'antd';
import {ChartContainer} from './styled';
import {stockPriceModel} from '../../features/chart/model/chart';
import {Option, Select} from '../../shared/Select';
import {RadioOption, RadioGroup} from '../../shared/RadioGroup';
import {Chart} from '../../features/chart/ui';
import {TimeInterval} from '../../features/chart/types';
import {getFromToDate} from '../../utils/date';
import {Spin} from 'antd';


export const Main = observer(() => {
  useEffect(() => {
    stockPriceModel.getCompanies();
  }, []);

  const isLoading = stockPriceModel.loading;

  const [interval, setInterval] = useState('1d');

  const timeIntArray = Object.entries(TimeInterval);
  const timeOptions: RadioOption[] = timeIntArray.map(opt => ({
    value: opt[1],
    title: opt[0],
  }));

  const companies = toJS(stockPriceModel.companies || []);
  const companiesOptions: Option[] = companies.map(opt => ({
    value: opt,
    label: opt,
  }));


  useEffect(() => {
    !currentCompany && setCompany(companies[0]);
  }, [companies]);


  const [currentCompany, setCompany] = useState('');

  const handleCompanyChange = (value: string) => {
    console.log(value);

    setCompany(value);
    const {from, to} = getFromToDate(interval);

    stockPriceModel.getTimeSeries({company: value, from, to, interval});
  };


  const onTimeChange = (e: RadioChangeEvent) => {
    setInterval(e.target.value);
    const {from, to} = getFromToDate(e.target.value);

    stockPriceModel.getTimeSeries({company: currentCompany, from, to, interval: e.target.value});
  };

  return (
    <>
      {isLoading ?
        <Spin size={'large'} /> :
        <ChartContainer>
          <Select
            placeholder={'Select company'}
            options={companiesOptions}
            defaultValue={companiesOptions[0]?.value}
            value={currentCompany}
            onChange={handleCompanyChange}
          />

          <RadioGroup options={timeOptions} onChange={onTimeChange} value={interval} />
          <Chart />
        </ChartContainer>
      }
    </>
  );
});

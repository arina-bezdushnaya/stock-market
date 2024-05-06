import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import type {RadioChangeEvent} from 'antd';
import {ChartContainer} from './styled';
import {stockPriceModel} from '../../features/chart/model/chart';
import {Option, Select} from '../../shared/Select';
import {RadioOption, RadioGroup} from '../../shared/RadioGroup';
import {Chart} from '../../features/chart/ui';
import {TimeInterval, StockPriceRequest} from '../../features/chart/types';

const defaultParams: StockPriceRequest = {
  company: 'IBM',
  time: TimeInterval['1Y'],
};

export const Main = observer(() => {
  useEffect(() => {
    stockPriceModel.getTimeSeries(defaultParams);
  }, []);

  // const citiesNames = ['NN', 'Moscow', 'Orsk'];
  // const citiesOptions: Option[] = citiesNames.map(city => ({
  //   value: city,
  //   label: city,
  // }));

  // const getDepartments = (city: string) => {
  //   const departments: string[] = [];

  //   for (let i = 1; i <= city.length; i++) {
  //     departments.push(String(i));
  //   }

  //   return departments;
  // };

  // const [currentCity, setCity] = useState(citiesNames[0]);
  // const [departments, setDepartments] = useState(getDepartments(currentCity));

  // const departmentsOptions: Option[] = departments.map(dep => ({
  //   value: dep,
  //   label: dep,
  // }));

  // const handleCityChange = (value: string) => {
  //   setCity(value);
  //   setDepartments(getDepartments(value));
  // };

  // const onDepartmentsChange = (department: string) => {
  //   console.log(department);
  // };

  const timeIntArray = Object.entries(TimeInterval);
  const timeOptions: RadioOption[] = timeIntArray.map(opt => ({
    value: opt[1],
    title: opt[0],
  }));

  console.log(timeOptions);

  const onTimeChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    stockPriceModel.getTimeSeries({...defaultParams, time: e.target.value});
  };

  return (
    <ChartContainer>
      {/* <div onClick={() => stockPriceModel.getTimeSeries()}>City</div>
      <Select
        defaultValue={citiesOptions[0].value}
        options={citiesOptions}
        onChange={handleCityChange}
        title={'dfgd'}
      />
      <div>Department</div>
      <Select
        defaultValue={getDepartments(citiesOptions[0].value)[0]}
        options={departmentsOptions}
        onChange={onDepartmentsChange}
      /> */}

      <RadioGroup options={timeOptions} onChange={onTimeChange} />
      <Chart />
    </ChartContainer>
  );
});

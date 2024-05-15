import React, {useEffect} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {Option, Select} from '../../../shared/Select';
import {getFromToDate} from '../../../utils/date';
import {companiesModel} from '../model';
import {stockPriceModel} from '../../chart/model/chart';
import {CompaniesContainer} from './styled';


export const CompaniesList = observer(() => {
  const {
    companies: companiesList,
    currentCompany,
    setCompany,
    getCompanies,
    loading,
  } = companiesModel;

  useEffect(() => {
    getCompanies();
  }, []);

  const companies = toJS(companiesList || []);
  const companiesOptions: Option[] = companies.map(opt => ({
    value: opt,
    label: opt,
  }));
  const interval = stockPriceModel.interval;

  const handleCompanyChange = (value: string) => {
    setCompany(value);
    const {from, to} = getFromToDate(interval);

    stockPriceModel.getTimeSeries({company: value, from, to, interval});
  };

  useEffect(() => {
    !currentCompany && setCompany(companies[0]);
  }, [companies]);

  return (
    <CompaniesContainer>
      <Select
        placeholder={'Select company'}
        options={companiesOptions}
        defaultValue={companiesOptions[0]?.value}
        value={currentCompany}
        onChange={handleCompanyChange}
        loading={loading}
      />
    </CompaniesContainer>
  );
});

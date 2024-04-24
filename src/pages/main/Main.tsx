import React from 'react';
import {observer} from 'mobx-react';
import {ChartContainer} from './styled';
import {Chart} from '../../features/chart/ui';
import {intradayModel} from '../../features/chart/model/chart';

export const Main = observer(() => {
  intradayModel.getIntraday();

  return (
    <ChartContainer>
      <Chart />
    </ChartContainer>
  );
});

import React from 'react';
import {observer} from 'mobx-react';
import {Container} from './styled';
import {Chart} from '../../features/chart/ui';
import {CompanySummary} from '../../features/summary/ui';

export const Main = observer(() => {
  return (
    <>
      <Container>
        <Chart />

        <CompanySummary />
      </Container>
    </>
  );
});

import React from 'react';
import {observer} from 'mobx-react';
import {Container} from './styled';
import {Chart} from '../../features/chart/ui';

export const Main = observer(() => {

  return (
    <>
      <Container>
        <Chart />
      </Container>
    </>
  );
});

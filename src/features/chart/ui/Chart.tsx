import React from 'react';
import {SidebarContainer} from './styled';
import {observer} from 'mobx-react';
import {intradayModel} from '../model/chart';

interface Props {}

export const Chart = observer((props: Props) => {

  return <SidebarContainer />;
});

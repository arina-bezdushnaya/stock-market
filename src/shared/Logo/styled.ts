import styled from 'styled-components/macro';
import {breakpoint, color} from '../../theme';
import {Link} from 'react-router-dom';

export const HeaderText = styled.div`
  display: none;
  padding-left: 15px;
  font-size: 22px;
  font-weight: 600;
  color: ${color.black};

  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

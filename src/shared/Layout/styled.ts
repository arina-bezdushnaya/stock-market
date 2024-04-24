import {Layout} from 'antd';
import {Header, Footer, Content} from 'antd/es/layout/layout';
import styled from 'styled-components/macro';
import {breakpoint, color} from '../../theme';
import {Link} from 'react-router-dom';

export const StyledLayout = styled(Layout)`
  position: relative;
  box-sizing: border-box;
  max-width: ${breakpoint.desktop};
  margin: 0 auto;
`;

export const StyledHeader = styled(Header)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  font-family: Roboto, sans-serif;
  color: #fff;
  z-index: 999;
  background-color: white;
`;

export const HeaderText = styled.div`
  display: none;
  padding-left: 15px;
  font-size: 24px;
  font-weight: 600;
  color: ${color.black};

  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledContent = styled(Content)`
  padding: 0 15px;
`;

export const StyledFooter = styled(Footer)`
  display: flex;
  align-items: center;
  padding: 15px;
`;


import {Layout} from 'antd';
import {
  Header as AndtHeader,
  Footer as AntdFooter,
  Content as AntdContent,
} from 'antd/lib/layout/layout';
import styled from 'styled-components/macro';
import {breakpoint, color} from '../../theme';
import Img from '../../assets/images/background.jpg';

export const StyledLayout = styled(Layout)`
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  background-image: url('${Img}');
  background-size: 100%;
  background-repeat: repeat-y;
`;

export const HeaderWrapper = styled(AndtHeader)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  font-family: Roboto, sans-serif;
  color: #fff;
  background-color: transparent;
`;

export const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: ${color.white};

  @media (min-width: ${breakpoint.desktop}) {
    width: ${breakpoint.desktop};
  }
`;

export const ContentWrapper = styled(AntdContent)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: Roboto, sans-serif;
  background-color: transparent;
`;

export const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 134px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  background-color: rgb(237, 237, 241);

  @media (min-width: ${breakpoint.desktop}) {
    width: ${breakpoint.desktop};
  }
`;

export const FooterWrapper = styled(AntdFooter)`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: Roboto, sans-serif;
  background-color: transparent;
  padding: 0;
`;

export const Footer = styled.div`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.white};
  padding: 0 25px;
  font-size: 16px;

  @media (min-width: ${breakpoint.desktop}) {
    width: ${breakpoint.desktop};
  }
`;

export const Links = styled.div`
  display: flex;

  svg {
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  display: flex;
`;

import {
  HeaderWrapper,
  Header,
  StyledLayout,
  HeaderText,
  Logo,
  FooterWrapper,
  Footer,
  Content,
  ContentWrapper,
} from './styled';
import logo from '../../assets/images/stock-market.png';
import React from 'react';
import {CompaniesList} from '../../features/companies/ui';

interface Props {
  children: JSX.Element;
}

export function LayoutWrapper({children}: Props) {
  return (
    <StyledLayout>
      <HeaderWrapper>
        <Header>
          <Logo to={'/'}>
            <img src={logo} alt="logo" width="60" height="56" />
            <HeaderText>Stock Market</HeaderText>
          </Logo>

          <CompaniesList />
        </Header>
      </HeaderWrapper>

      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>

      <FooterWrapper>
        <Footer>
          <div>© 2023—{new Date().getFullYear()}, LLC «Stock Market Inc.»</div>
        </Footer>
      </FooterWrapper>
    </StyledLayout>
  );
}

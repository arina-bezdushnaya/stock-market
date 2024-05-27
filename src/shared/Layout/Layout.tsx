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
  Copyright,
  Links,
} from './styled';
import logo from '../../assets/images/stock-market.png';
import React from 'react';
import {CompaniesList} from '../../features/companies/ui';
import {ReactComponent as TgIcon} from '../../assets/svg/tg.svg';
import {ReactComponent as LinkedinIcon} from '../../assets/svg/linkedin.svg';
import {ReactComponent as TwitterIcon} from '../../assets/svg/twitter-x.svg';

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
          <Copyright>
            Copyright © 2023—{new Date().getFullYear()}, LLC «Stock Market Inc.»
          </Copyright>

          <Links>
            <TgIcon width={24} height={24} fill={'#676666'} />
            <LinkedinIcon width={24} height={24} fill={'#676666'} />
            <TwitterIcon width={24} height={24} fill={'#676666'} />
          </Links>
        </Footer>
      </FooterWrapper>
    </StyledLayout>
  );
}

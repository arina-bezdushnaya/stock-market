import {
  StyledHeader,
  StyledLayout,
  HeaderText,
  Logo,
  StyledFooter,
  StyledContent,
} from './styled';
import logo from '../../assets/images/stock-market.png';

interface Props {
  children: JSX.Element;
}

export function LayoutWrapper({children}: Props) {
  return (
    <StyledLayout>
      <StyledHeader>
        <Logo to={'/'}>
          <img src={logo} alt="logo" width="60" height="56" />
          <HeaderText>Stock Market</HeaderText>
        </Logo>
      </StyledHeader>

      <StyledContent>{children}</StyledContent>

      <StyledFooter>
        <div>© 2023—{new Date().getFullYear()}, LLC «Stock Market Inc.»</div>
      </StyledFooter>
    </StyledLayout>
  );
}

import {HeaderText, LogoContainer} from './styled';
import logo from '../../assets/images/stock-market.png';

export function Logo() {
  return (
    <LogoContainer to={'/'}>
      <img src={logo} alt="logo" width="60" height="56" />
      <HeaderText>Stock Market</HeaderText>
    </LogoContainer>
  );
}

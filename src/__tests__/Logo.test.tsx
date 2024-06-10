import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Logo} from '../shared/Logo';

test('render stock market logo', () => {
  render(
    <Router>
      <Logo />
    </Router>
  );

  const appTitle = screen.getByText('Stock Market');
  expect(appTitle).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';
import store from './redux/store';

test('renders learn react link', () => {
  render(<App store={store}/>);  
});

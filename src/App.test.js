import { render } from '@testing-library/react';
import App from './App';
import {unmountComponentAtNode} from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});

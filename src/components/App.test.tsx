import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import { App } from "./App";

test("renders App without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
  
test('renders App title', async () => {
  render(<App />);
  const titleElement = screen.getByText((content, element:any) => {
    return element.tagName.toLowerCase() === 'h1' && content.startsWith('React Tac Toe')
  })
  expect(titleElement).toBeInTheDocument();
})

test('renders github component', async () => {
  render(<App />);
  const imgElement = screen.getByAltText(/github/i);
  expect(imgElement).toBeInTheDocument();
})

test('renders board component', async () => {
  render(<App />);
  const boardElement = screen.getByText(/you go first/i);
  expect(boardElement).toBeInTheDocument();
})


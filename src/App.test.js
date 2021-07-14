import { render, screen } from "@testing-library/react";
import App from "./App";

test('should NOT show the navbar header if not logged in', () => {
  render(<App/>);

  const navbarEl = screen.queryByRole('banner')
  expect(navbarEl).toBeNull();
});

// test('should display the Navbar header if user is logged in', () => {
//   render(<App/>)
// })

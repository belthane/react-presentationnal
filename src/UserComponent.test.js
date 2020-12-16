import { render, screen } from "@testing-library/react";
import UserComponent from "./UserComponent";

test("renders learn react link", () => {
  render(<UserComponent />);
  expect(screen.getByText("Id:")).toBeInTheDocument();
});

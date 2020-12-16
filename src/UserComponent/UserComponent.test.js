import { render, screen } from "@testing-library/react";
import UserComponent from "./UserComponent";

test("Loading while no user", () => {
  render(<UserComponent />);
  expect(screen.getByText("Loading")).toBeInTheDocument();
});

test("Displays email when user", () => {
  render(
    <UserComponent
      user={{
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      }}
    />
  );
  expect(screen.getByText("janet.weaver@reqres.in")).toBeInTheDocument();
});

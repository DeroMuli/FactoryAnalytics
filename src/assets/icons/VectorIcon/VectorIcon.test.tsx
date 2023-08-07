import VectorIcon from "./VectorIcon";
import type { Icon } from "./VectorIcon";
import { render, screen } from "@testing-library/react-native";

describe("VectorIcon", () => {
  it("should render the VectorIcon  and it should be visible", () => {
    const icon: Icon = {
      iconname: "question",
      iconlibrary: "AntDesign",
    };
    render(<VectorIcon icon={icon} color="black" iconstyle={{ margin: 0 }} />);
    expect(screen.getByTestId("VectorIcon")).toBeTruthy();
    expect(screen.getByTestId("VectorIcon")).toBeVisible();
  });
  it("should not display the fallback component", () => {
    const icon: Icon = {
      iconname: "question",
      iconlibrary: "AntDesign",
    };
    render(<VectorIcon icon={icon} color="black" iconstyle={{ margin: 0 }} />);
    expect(screen.queryByText("Icon not found")).toBeNull();
  });
  it("should display the fallback component", () => {
    const icon: Icon = {
      iconname: "",
      iconlibrary: "AntDesign",
    };
    render(<VectorIcon icon={icon} color="black" iconstyle={{ margin: 0 }} />);
    expect(screen.getByText("Icon not found")).toBeVisible();
  });
});

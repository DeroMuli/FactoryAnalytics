import GeneralStatsCard from "./GeneralStatsCard";
import { render, screen } from "@testing-library/react-native";
import type { Icon } from "../../../assets/icons/VectorIcon/VectorIcon";

describe("GeneralStatsCard", () => {
  const icon: Icon = {
    iconname: "question",
    iconlibrary: "AntDesign",
  };
  it("should render the GeneralStatsCard component", () => {
    render(
      <GeneralStatsCard
        dataTypeString="test"
        dataValue={1}
        dataicon={icon}
        units="test units"
      />
    );
    expect(screen.getByText("test")).toBeTruthy();
  });
  it("should display the data type string", () => {
    render(
      <GeneralStatsCard
        dataTypeString="test"
        dataValue={1}
        dataicon={icon}
        units="test units"
      />
    );
    expect(screen.getByText("test")).toBeVisible();
  });
  it("should display the data value", () => {
    render(
      <GeneralStatsCard
        dataTypeString="test"
        dataValue={1}
        dataicon={icon}
        units="test units"
      />
    );
    expect(screen.getByText("1")).toBeVisible();
  });
  it("should display the units", () => {
    render(
      <GeneralStatsCard
        dataTypeString="test"
        dataValue={1}
        dataicon={icon}
        units="test units"
      />
    );
    expect(screen.getByText("test units")).toBeVisible();
  });
});

/**
 * @jest-environment node
 */

import EquipmentInformationTable from "./EquipmentInformationTable";
import { render, screen } from "@testing-library/react-native";

jest.useFakeTimers();

describe("EquipmentInformationTable component", () => {
  it("renders correctly", () => {
    render(<EquipmentInformationTable />);
    expect(screen.getByTestId("EquipmentInformationTable")).toBeTruthy();
  });
  it("displays the correct texts and hardcoded values", () => {
    render(<EquipmentInformationTable />);
    expect(screen.getByText("Specification")).toBeVisible();
    expect(screen.getByText("Rating/Value")).toBeVisible();
    expect(screen.getByText("Rated speed")).toBeVisible();
    expect(screen.getByText("Rated Torque")).toBeVisible();
    expect(screen.getByText("159")).toBeVisible();
    expect(screen.getByText("237")).toBeVisible();
  });
});

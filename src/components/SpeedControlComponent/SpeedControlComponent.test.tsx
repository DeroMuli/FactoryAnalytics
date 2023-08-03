import SpeedControlComponent from "./SpeedControlComponent";
import { screen, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import { Server, Client } from "mock-socket";
import EquipmentNameProvider from "../../context/EquipmentNameContext";
import { setEquipements } from "../../state/equipmentstateslicer";

const mockurl = "ws://localhost:8080";
const socket = new WebSocket(mockurl);
const name = "Test Machine";

beforeEach(() => {
  store.dispatch(setEquipements([{ name, isOn: false }]));
});

afterEach(() => {
  store.dispatch(setEquipements([]));
});

describe("SpeedControlComponent", () => {
  it("should render the SpeedControlComponent component", () => {
    render(<SpeedControlComponent ws={socket} />, { wrapper: ProviderWrapper });
    expect(screen.getByTestId("SpeedControlComponent")).toBeTruthy();
  });
});

const ProviderWrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <EquipmentNameProvider equipmentname={name}>
        {children}
      </EquipmentNameProvider>
    </Provider>
  );
};

import FactoryEquipmentCard from "./FactoryEquipmentCard";
import {
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  Switch,
} from "react-native-paper";
import { fireEvent, render, screen } from "@testing-library/react-native";
import {} from "@testing-library/jest-native";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import type { Icon } from "../../../assets/icons/VectorIcon/VectorIcon";
import { setEquipements } from "../../../state/equipmentstateslicer";
import { NavigationContainer } from "@react-navigation/native";
import { Server, Client } from "mock-socket";

const name = "Test Machine";
const mockurl = "ws://localhost:8080";

//push the assert code to the correct test blocks or find a way to clearly describe what is being tested
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(() => ({
      navigate: jest.fn((name: String, params: { Equipemt_name: String }) => {
        expect(name).toBe("Equipment");
        expect(params.Equipemt_name).toBe("Test Machine");
      }),
    })),
  };
});

beforeEach(() => {
  store.dispatch(setEquipements([{ name, isOn: false }]));
});

afterEach(() => {
  store.dispatch(setEquipements([]));
});

describe("FactoryEquipmentCard", () => {
  const icon: Icon = {
    iconname: "question",
    iconlibrary: "AntDesign",
  };
  const mean_speed = 20;
  const mean_temp = 30;
  const socket = new WebSocket(mockurl);
  const TestFactoryCardEquipment = (
    <FactoryEquipmentCard
      name={name}
      icon={icon}
      mean_speed={mean_speed}
      mean_temp={mean_temp}
      socket={socket}
    />
  );
  it("should render the FactoryEquipmentCard component", () => {
    render(TestFactoryCardEquipment, { wrapper: ProviderWrapper });
    expect(screen.getByTestId("FactoryEquipmentCard")).toBeTruthy();
  });
  it("display the name of the equipment", () => {
    render(TestFactoryCardEquipment, { wrapper: ProviderWrapper });
    expect(screen.getByText(name)).toBeVisible();
  });
  it("displays the mean spead and mean temp", () => {
    render(TestFactoryCardEquipment, { wrapper: ProviderWrapper });
    expect(screen.getByText(`${mean_speed}° C`)).toBeVisible();
    expect(screen.getByText(`${mean_temp}m/s`)).toBeVisible();
  });
  it("has the right background color when the switch is off and changes when the switch on", () => {
    render(TestFactoryCardEquipment, { wrapper: ProviderWrapper });
    expect(screen.getByTestId("FactoryEquipmentCard")).toHaveStyle({
      backgroundColor: PaperDarkTheme.colors.onBackground,
    });
    //use ally labels to find the switch when you add accessibilityLabel to the switch
    fireEvent(screen.UNSAFE_getByType(Switch), "onValueChange");
    expect(screen.getByTestId("FactoryEquipmentCard")).toHaveStyle({
      backgroundColor: PaperDarkTheme.colors.onPrimaryContainer,
    });
  });
  it("chages the state and sends the data to the web socket server when the switch is pressed", () => {
    let mockServer = new Server(mockurl);
    mockServer.on("connection", (socket: Client) => {
      socket.on("message", (data: string) => {
        expect(data).toBe(JSON.stringify({ action: "toggle", payload: "ON" }));
      });
    });
    render(TestFactoryCardEquipment, { wrapper: ProviderWrapper });
    expect(store.getState().equipment[0].isOn).toBe(false);
    //use ally labels to find the switch when you add accessibilityLabel to the switch
    fireEvent(screen.UNSAFE_getByType(Switch), "onValueChange");
    expect(store.getState().equipment[0].isOn).toBe(true);
  });
  it("navigates to the equipment screen when the card is pressed", () => {
    render(TestFactoryCardEquipment, { wrapper: ProviderWrapper });
    fireEvent.press(screen.getByTestId("FactoryEquipmentCard"));
  });
});

const ProviderWrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider theme={PaperDarkTheme}>{children}</PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

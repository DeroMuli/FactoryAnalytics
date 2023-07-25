import FactoryEquipmentCard from "./FactoryEquipmentCard";
import {
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { render, screen } from "@testing-library/react-native";
import {} from "@testing-library/jest-native";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import type { Icon } from "../../../assets/icons/VectorIcons";
import { setEquipements } from "../../../state/equipmentstateslicer";
import { NavigationContainer } from "@react-navigation/native";

describe("FactoryEquipmentCard", () => {
  const name = "Test Machine";
  const icon: Icon = { iconlibrary: "MaterialCommunityIcons", iconname: "fan" };
  const mean_speed = 20;
  const mean_temp = 30;
  const socket = new WebSocket("ws://localhost:8080");
  store.dispatch(setEquipements([{ name, isOn: false }]));
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

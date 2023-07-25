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

describe("FactoryEquipmentCard", () => {
  const name = "Test Machine";
  const icon: Icon = { iconlibrary: "MaterialCommunityIcons", iconname: "fan" };
  const mean_speed = 20;
  const mean_temp = 30;
  const socket = new WebSocket("ws://localhost:8080");
  const TestFactoryCardEquipment = (
    <Provider store={store}>
      <PaperProvider theme={PaperDarkTheme}>
        <FactoryEquipmentCard
          name={name}
          icon={icon}
          mean_speed={mean_speed}
          mean_temp={mean_temp}
          socket={socket}
        />
      </PaperProvider>
    </Provider>
  );
  it("should render the FactoryEquipmentCard component", () => {
    render(TestFactoryCardEquipment);
    expect(screen.getByTestId("FactoryEquipmentCard")).toBeTruthy();
  });
});

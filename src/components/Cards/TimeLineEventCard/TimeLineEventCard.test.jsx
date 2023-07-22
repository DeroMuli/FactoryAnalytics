import TimeLineEventCard from "./TimeLineEventCard";
import { render, screen } from "@testing-library/react-native";
import {} from "@testing-library/jest-native";

//using jsx due to issues of jest native supporting typescript

//cheap hack for icons since they have issues with jest due to transpiling issues
jest.mock("react-native-vector-icons/FontAwesome", () => "MockedFontAwesome");
jest.mock("react-native-vector-icons/AntDesign", () => "MockedAntDesign");
jest.mock("react-native-vector-icons/Entypo", () => "MockedEntypo");
jest.mock("react-native-vector-icons/EvilIcons", () => "MockedEvilIcons");
jest.mock("react-native-vector-icons/Feather", () => "MockedFeather");
jest.mock(
  "react-native-vector-icons/MaterialCommunityIcons",
  () => "MockedMaterialCommunityIcons"
);
jest.mock(
  "react-native-vector-icons/MaterialIcons",
  () => "MockedMaterialIcons"
);

describe("The TimeLineEventCard component", () => {
  let date = new Date("2021-01-01T12:00:00");
  let event = "Breakdown";
  let message = "the machine goes brrrrr";
  let room = "boiler room";
  it("renders correctly", () => {
    render(
      <TimeLineEventCard
        date={date}
        event={event}
        message={message}
        room={room}
      />
    );
    expect(screen.getByTestId("TimeLineEventCard")).toBeTruthy();
  });
  it("shows the message text", () => {
    render(
      <TimeLineEventCard
        date={date}
        event={event}
        message={message}
        room={room}
      />
    );
    expect(screen.getByText(message)).toBeVisible();
  });
  it("shows the room text", () => {
    render(
      <TimeLineEventCard
        date={date}
        event={event}
        message={message}
        room={room}
      />
    );
    expect(screen.getByText(room)).toBeVisible();
  });
  it("shows the event text", () => {
    render(
      <TimeLineEventCard
        date={date}
        event={event}
        message={message}
        room={room}
      />
    );
    expect(screen.getByText(event)).toBeVisible();
  });
});

import TimeLineEventCard from "./TimeLineEventCard";
import { render, screen } from "@testing-library/react-native";
import type { EventType } from "./TimeLineEventCard";
import {} from "@testing-library/jest-native";
import { setupMockUTCtimezone } from "../../../util/setupmockUTCtimezone";

setupMockUTCtimezone();

describe("The TimeLineEventCard component", () => {
  let date = new Date(Date.UTC(2021, 1, 1, 12, 0, 0)); // 1st Feb 2021 12:00 PM
  let event: EventType = "Warning";
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
  it("shows the date, am/pm and time texts to be visible", () => {
    render(
      <TimeLineEventCard
        date={date}
        event={event}
        message={message}
        room={room}
      />
    );
    expect(screen.getByText("1/February/2021")).toBeVisible();
    expect(screen.getByText("12:00")).toBeVisible();
    expect(screen.getByText("PM")).toBeVisible();
  });
});

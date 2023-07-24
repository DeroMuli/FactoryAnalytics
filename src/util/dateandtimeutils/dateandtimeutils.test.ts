import {
  getamorpm,
  gettwelvehourtime,
  getmonthname,
  getfrindlytimestamp,
} from "./dateandtimeutils";
import { setupMockUTCtimezone } from "../setupmockUTCtimezone";

setupMockUTCtimezone();

describe("all date and time utils", () => {
  it("should return AM or PM depending on the hour", () => {
    let date = new Date("2021-01-01T12:00:00");
    expect(getamorpm(date)).toEqual("PM");
    date = new Date("2021-01-01T00:00:00");
    expect(getamorpm(date)).toEqual("AM");
  });
  it("should return the time in 12 hour format without the AM or PM stamp", () => {
    let date = new Date("2021-01-01T12:00:00");
    expect(gettwelvehourtime(date)).toEqual("12:00");
    date = new Date("2021-01-01T00:00:00");
    expect(gettwelvehourtime(date)).toEqual("0:00");
    date = new Date("2021-01-01T13:32:50");
    expect(gettwelvehourtime(date)).toEqual("1:32");
    date = new Date("2021-01-01T23:10:00");
    expect(gettwelvehourtime(date)).toEqual("11:10");
  });
  it("should return the month name", () => {
    let date = new Date("2021-01-01T12:00:00");
    expect(getmonthname(date)).toEqual("January");
    date = new Date("2021-02-01T00:00:00");
    expect(getmonthname(date)).toEqual("February");
    date = new Date("2021-03-01T13:32:50");
    expect(getmonthname(date)).toEqual("March");
  });
  it("should return a friendly timestamp", () => {
    let date = new Date("2021-01-01T12:00:00");
    expect(getfrindlytimestamp(date)).toEqual({
      day_month_year_date: "5/January/2021",
      twelve_hour_time: "12:00",
      am_or_pm: "PM",
    });
    date = new Date("2021-02-01T00:00:00");
    expect(getfrindlytimestamp(date)).toEqual({
      day_month_year_date: "1/February/2021",
      twelve_hour_time: "0:00",
      am_or_pm: "AM",
    });
    date = new Date("2021-03-01T13:32:50");
    expect(getfrindlytimestamp(date)).toEqual({
      day_month_year_date: "1/March/2021",
      twelve_hour_time: "1:32",
      am_or_pm: "PM",
    });
  });
});

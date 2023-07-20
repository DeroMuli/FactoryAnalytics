type FriendlyTimeStamp = {
  day_month_year_date: string;
  twelve_hour_time: string;
  am_or_pm: string;
};

const getamorpm = (date: Date): "AM" | "PM" => {
  const hours = date.getHours();
  if (hours >= 12) return "PM";
  else return "AM";
};

const gettwelvehourtime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hour = hours > 12 ? hours - 12 : hours;
  const minute = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  return `${hour}:${minute}`;
};

const getmonthname = (date: Date): string => {
  let monthnumber = date.getMonth();
  switch (monthnumber) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      throw new Error("No month corresponding to the number");
  }
};

const getfrindlytimestamp = (date: Date): FriendlyTimeStamp => {
  const day = date.getDay();
  const year = date.getFullYear();
  const month = getmonthname(date);
  const day_month_year_date = `${day}/${month}/${year}`;
  const twelve_hour_time = gettwelvehourtime(date);
  const am_or_pm = getamorpm(date);
  return {
    day_month_year_date,
    twelve_hour_time,
    am_or_pm,
  };
};

export { getamorpm, gettwelvehourtime, getmonthname, getfrindlytimestamp };

import moment from "moment";

const color1 = "#FF5733";
const color2 = "#33FF57";
const color3 = "#3357FF";
const color4 = "#FF33A1";
const color5 = "#A133FF";

export const colors = [color1, color2, color3, color4, color5];

export const handleTimeConvertion = (time: number): string => {
  return moment(time).fromNow();
};

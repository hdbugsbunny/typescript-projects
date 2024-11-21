const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => console.log("🚀 ~ message:", message);

const throwError = (message: string): never => {
  throw new Error(message);
};

const todayWeather = { date: new Date(), weather: "cloudy" };
const logWeather = ({ date, weather }: { date: Date; weather: string }): void =>
  console.log(`🚀 ~ Today's weather on ${date.toDateString()}: ${weather}`);

logWeather(todayWeather);

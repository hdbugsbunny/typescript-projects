@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `The boat is ${this.color}.`;
  }

  @logError("The Boat Sunk in Ocean!")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("The boat is going fast!");
    } else {
      console.log("The boat is going slow!");
    }
  }
}

function classDecorator(constructor: typeof Boat): void {
  console.log("🚀 ~ classDecorator ~ constructor:", constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log("🚀 ~ parameterDecorator ~ key:", key);
  console.log("🚀 ~ parameterDecorator ~ index:", index);
}

function testDecorator(target: any, key: string): void {
  console.log("🚀 ~ testDecorator ~ key:", key);
}

function logError(errMessage: string): Function {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const originalMethod = desc.value;
    desc.value = function (...args: any[]): void {
      try {
        originalMethod.apply(this, args);
      } catch (_) {
        console.error(`Error occurred in method "${key}":`, errMessage);
      }
    };
  };
}

class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `The boat is ${this.color}.`;
  }

  @logError("The Boat Sunk in Ocean!")
  pilot(): void {
    throw new Error();
    console.log("The boat is piloting...");
  }
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

new Boat().pilot();

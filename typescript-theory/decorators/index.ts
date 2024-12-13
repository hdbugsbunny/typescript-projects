class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `The boat is ${this.color}.`;
  }

  @logError
  pilot(): void {
    throw new Error("The Boat Sunk!");
    console.log("The boat is piloting...");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const originalMethod = desc.value;
  desc.value = function (...args: any[]): void {
    try {
      originalMethod.apply(this, args);
    } catch (error) {
      console.error(`Error occurred in method "${key}":`, error);
    }
  };
}

new Boat().pilot();

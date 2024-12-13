class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `The boat is ${this.color}.`;
  }

  @testDecorator
  pilot(): void {
    console.log("The boat is piloting...");
  }
}

function testDecorator(target: any, key: string): void {
  console.log("Target: ", target);
  console.log("Key: ", key);
}

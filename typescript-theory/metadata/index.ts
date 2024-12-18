import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");
// console.log("🚀 ~ note:", note);

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);
// console.log("🚀 ~ plane:", plane);

// const note = Reflect.getMetadata("note", plane);
// console.log("🚀 ~ note:", note);
// const height = Reflect.getMetadata("height", plane);
// console.log("🚀 ~ height:", height);

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("🚀 ~ Plane ~ fly ~ fly:");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log("🚀 ~ controller ~ path:", path);
  }
}

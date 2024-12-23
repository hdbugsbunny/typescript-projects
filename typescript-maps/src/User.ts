import { faker } from "@faker-js/faker";
import { MAPPABLE } from "./CustomMap";

export class User implements MAPPABLE {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>User Name: ${this.name}</h2>
      </div>
    `;
  }
}

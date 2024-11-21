const profile = {
  name: "Harshit",
  age: 27,
  coords: {
    lat: 28.7041,
    lng: 77.1025,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  coords: { lat, lng },
  name: newName,
}: {
  age: number;
  coords: { lat: number; lng: number };
  name: string;
} = profile;

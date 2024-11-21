// import { Company } from "./Company";
// import { User } from "./User";

async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  const map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  });
  console.log("🚀 ~ map:", map);
}

initMap();

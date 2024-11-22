import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.initializeMap(divId);
  }

  private async initializeMap(divId: string): Promise<void> {
    const { Map } = (await google.maps.importLibrary("maps")) as {
      Map: typeof google.maps.Map;
    };
    this.googleMap = new Map(document.getElementById(divId) as HTMLElement, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  async addMarker(mappable: User | Company): Promise<void> {
    const { Marker } = (await google.maps.importLibrary("marker")) as {
      Marker: typeof google.maps.Marker;
    };
    new Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  }

  //   async addCompanyMarker(company: Company): Promise<void> {
  //     const { Marker } = (await google.maps.importLibrary("marker")) as {
  //       Marker: typeof google.maps.Marker;
  //     };
  //     new Marker({
  //       map: this.googleMap,
  //       position: { lat: company.location.lat, lng: company.location.lng },
  //       title: company.companyName,
  //     });
  //   }
}

//* Instructions to Every Other Class on How They Can be an Argument to 'addMarker'
interface MAPPABLE {
  location: {
    lat: number;
    lng: number;
  };
}

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

  async addMarker(mappable: MAPPABLE): Promise<void> {
    const { Marker } = (await google.maps.importLibrary("marker")) as {
      Marker: typeof google.maps.Marker;
    };
    new Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  }
}

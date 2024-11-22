//* Instructions to Every Other Class on How They Can be an Argument to 'addMarker'
export interface MAPPABLE {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
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

    const marker = new Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener("click", async () => {
      const { InfoWindow } = (await google.maps.importLibrary("maps")) as {
        InfoWindow: typeof google.maps.InfoWindow;
      };
      const infoWindow = new InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

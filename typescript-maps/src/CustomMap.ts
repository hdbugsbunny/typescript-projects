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
}

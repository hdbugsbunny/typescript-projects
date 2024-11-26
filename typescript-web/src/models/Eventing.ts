type CALLBACK = () => void;

export class Eventing {
  events: { [key: string]: CALLBACK[] } = {};

  on(eventName: string, callback: CALLBACK): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  trigger(eventName: string): void {
    if (!this.events[eventName] || !this.events[eventName].length) {
      return;
    }

    this.events[eventName].forEach((callback) => callback());
  }
}

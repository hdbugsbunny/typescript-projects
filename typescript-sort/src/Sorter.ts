interface SORTABLE {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  sort(): void {
    const { length, compare, swap } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (compare(j, j + 1)) {
          swap(j, j + 1);
        }
      }
    }
  }
}

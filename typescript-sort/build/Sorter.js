"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
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
exports.Sorter = Sorter;

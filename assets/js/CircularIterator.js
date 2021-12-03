class CircularIterator {
    constructor(iterableArray, options={}) {
        this.values = iterableArray;
        this.lastIndex = this.values.length - 1;
        this.random = options.random || false;
        this.history = [];
        this.historyPointer = -1;
    }
    next() {
        console.log('CircularIterator:next()');
        if (this.historyPointer < this.history.length - 1) {
            // If we've gone backwards through our history, keep going forward until we're at the end
            // of the history list. The history array is an array of indices into the values array.
            console.log(`History pointer (${this.historyPointer}) is not at the end (${this.history.length - 1})`);
            console.log(`Returning index ${this.history[this.historyPointer]} of values (${this.values[this.history[this.historyPointer + 1]]})`);
            return this.values[this.history[++this.historyPointer]];
        }
        let nextIndex;
        if (this.random) {
            nextIndex = Math.floor(Math.random() * this.values.length - 1);
        } else {
            nextIndex = this.lastIndex + 1;
            if (nextIndex >= this.values.length) {
            // We've reached the end of our list. Circle back around to the beginning.
            nextIndex = 0;
            }
        }
        this.lastIndex = nextIndex;
        this.history.push(nextIndex);
        this.historyPointer++;
        return this.values[nextIndex];
    }
    prev() {
        console.log('CircularIterator:prev()');
        if (this.historyPointer <= 0) {
            console.log(`History pointer (${this.historyPointer}) is less than or equal to 0. Returning value at index 0.`)
            return this.values[this.history[0]];
        }
        console.log(`History pointer before: ${this.historyPointer}, after: ${this.historyPointer - 1}`);
        return this.values[this.history[--this.historyPointer]];
    }
}
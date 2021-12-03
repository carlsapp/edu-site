class DisplayController {
    constructor(iterator, updateDisplayFunc, options={}) {
        this.iterator = iterator;
        this.updateDisplay = updateDisplayFunc;
        this.interval = options.interval || 5000;
        this.displayNext();
    }
    displayNext() {
        if (this.timeoutID !== null)
            window.clearTimeout(this.timeoutID);
        this.updateDisplay(this.iterator.next());
        if (this.timeoutID !== null)
            this.timeoutID = window.setTimeout(this.displayNext.bind(this), this.interval);
    }
    displayPrev() {
        this.updateDisplay(this.iterator.prev());
    }
    pause() {
        if (this.timeoutID === null)
            return
        window.clearTimeout(this.timeoutID);
        this.timeoutID = null;
    }
    resume() {
        if (this.timeoutID !== null)
            return
        this.displayNext();
    }
    togglePause() {
        if (this.timeoutID === null)
            this.resume();
        else
            this.pause();
    }
}
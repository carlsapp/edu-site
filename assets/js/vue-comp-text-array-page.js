const VueCompTextCycle = {
    template: `
    <centered class="flashcard-text">{{displayText}}</centered>
    `,
    props: {
      values: Array,
    },
    data: function () {
        return {
            displayText: 0,
            displayController: undefined,
        }
    },
    methods: {
        updateNum: function (newVal) {
            this.displayText = newVal;
        },
        keyUpEventListener: function (event) {
            // console.log(event);
            if (event.key == ' ') {
                this.displayController.togglePause();
            } else if (event.key == "ArrowRight") {
                this.displayController.displayNext();
            } else if (event.key == "ArrowLeft") {
                this.displayController.displayPrev();
            }
        },
    },
    created: function () {
        console.log('Created');
        var numbers = new CircularIterator(this.values);
        this.displayController = new DisplayController(numbers, this.updateNum);
        document.addEventListener('keyup', this.keyUpEventListener);
    },
    destroyed: function () {
        console.log('Removing keyup event listener');
        document.removeEventListener('keyup', this.keyUpEventListener);
        this.displayController.pause();
    }
};

Vue.component('text-cycle', VueCompTextCycle);

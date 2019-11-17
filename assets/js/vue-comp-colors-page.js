const VueCompColors = {
    template: `
    <div style="height: 100%">
      <i class="fa fa-arrow-left back-arrow" @click="router.go(-1)"></i>
      <centered>
        <div style="height: 60vh; width: 60vw; border-radius: 20px" v-bind:style="{ 'background-color': backgroundColor }"></div>
      </centered>
    </div>
    `,
    data: function () {
        return {
            backgroundColor: 'blue',
            displayController: undefined,
        }
    },
    methods: {
        updateColor: function (newVal) {
            this.backgroundColor = newVal;
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
        const colors = new CircularIterator([
            'blue', 'red', 'black',
            'sienna',  // The brown doesn't look very brown. We'll do sienna instead for brown.
            'grey', 'green', 'orange',
            'purple', 'yellow',
        ]);
        this.displayController = new DisplayController(colors, this.updateColor);
        document.addEventListener('keyup', this.keyUpEventListener);
    },
    destroyed: function () {
        console.log('Removing keyup event listener');
        document.removeEventListener('keyup', this.keyUpEventListener);
        this.displayController.pause();
    }
};

Vue.component('colors-page', VueCompColors);

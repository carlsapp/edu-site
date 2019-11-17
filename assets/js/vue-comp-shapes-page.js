const VueCompShapes = {
    template: `
    <div style="height: 100%">
      <i class="fa fa-arrow-left back-arrow" @click="router.go(-1)"></i>
      <centered>
        <div style="width: 40vw">
          <svg v-if="shape == 'square'" viewBox="0 0 110 110" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="100" height="100" stroke="black" fill="transparent" stroke-width="10"/>
          </svg>
          <svg v-if="shape == 'rectangle'" viewBox="0 0 160 85" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="150" height="75" stroke="black" fill="transparent" stroke-width="10"/>
          </svg>
          <svg v-if="shape == 'circle'" viewBox="0 0 110 110" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="55" cy="55" r="50" stroke="black" fill="transparent" stroke-width="10"/>
          </svg>
            <!--circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
            <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
            
            <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
            <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                stroke="orange" fill="transparent" stroke-width="5"/>
            
            <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                stroke="green" fill="transparent" stroke-width="5"/>
            
            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
        </svg-->
        </div>
      </centered>
    </div>
    `,
    data: function () {
        return {
            shape: 'square',
            displayController: undefined,
        }
    },
    methods: {
        updateColor: function (newVal) {
            this.shape = newVal;
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
            'square',
            'rectangle',
            'circle',
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

Vue.component('shapes-page', VueCompShapes);

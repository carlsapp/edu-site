const VueCompNum0100 = {
    template: `
      <div style="height: 100%">
        <i class="fa fa-arrow-left back-arrow" @click="router.go(-1)"></i>
        <centered>
            <text-cycle :values="numbers"></text-cycle>
        </centered>
      </div>
    `,
    data: function () {
        return {
            numbers: [0],
        }
    },
    created: function () {
        this.numbers = [];
        for (let i = 0; i <= 100; i++) {
            this.numbers.push(i);
        }
    },
};

Vue.component('num-0-100', VueCompNum0100);

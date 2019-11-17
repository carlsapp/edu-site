const VueCompNumTens = {
    template: `
      <div style="height: 100%">
        <i class="fa fa-arrow-left back-arrow" @click="router.go(-1)"></i>
        <centered>
          <text-cycle :values="[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"></text-cycle>
        </centered>
      </div>
    `,
};

Vue.component('num-tens', VueCompNumTens);

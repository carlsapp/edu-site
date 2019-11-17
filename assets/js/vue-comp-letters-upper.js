const VueCompLettersUpper = {
    template: `
      <div style="height: 100%">
        <i class="fa fa-arrow-left back-arrow" @click="router.go(-1)"></i>
        <centered>
          <text-cycle values="ABCDEFGHIJKLMNOPQRSTUVWXYZ"></text-cycle>
        </centered>
      </div>
    `,
};

Vue.component('letters-upper', VueCompLettersUpper);

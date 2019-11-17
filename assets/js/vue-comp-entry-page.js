// This page shows a previously captured image
// TODO Change table to dynamic flexbox columns
const VueCompEntryPage = {
    template: `
    <centered>
      <table class="card-sets">
        <tr>
          <td @click="router.push('/num-0-100')">Numbers<br>0 - 100</td>
          <td @click="router.push('/num-tens')">Numbers<br>Tens</td>
        <tr>
        <tr>
          <td @click="router.push('/letters-upper')">Letters A-Z</td>
          <td @click="router.push('/letters-lower')">Letters a-z</td>
        <tr>
        <tr>
          <td @click="router.push('/shapes')">Shapes</td>
          <td @click="router.push('/colors')">Colors</td>
        <tr>
      <table>
    </centered>
    `,
    data: function () {
        return {}
    },
    methods: {},
    created: async function () {},
};

Vue.component('entry', VueCompEntryPage);

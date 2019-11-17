// This component allows us to easily center content using flexbox
const VueCompCentered = {
    template: `
    <div style="height: 100%; width: 100%; display: flex"
        v-bind:style="{
          'align-items': alignItems,
          'justify-content': justifyContent,
        }">
      <div>
        <slot></slot>
      </div>
    </div>
    `,
    props: {
      horizontal: {
        type: Boolean,
        default: true,
      },
      vertical: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      alignItems: function () {
        // If the user doesn't bind the vertical prop (:vertical="false"), then the vertical
        // property will be a string
        if (!this.vertical || this.vertical === 'false') {
          return 'inherit';
        }
        return 'center';
      },
      justifyContent: function () {
        // If the user doesn't bind the horizontal prop (:horizontal="false"), then the horizontal
        // property will be a string
        if (!this.vertical || this.vertical === 'false') {
          return 'inherit';
        }
        return 'center';
      },
    },
}

Vue.component('centered', VueCompCentered);

<template>
  <div :class="keyboardClass" />
</template>

<script>
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

export default {
  name: 'SimpleKeyboard',

  props: {
    keyboardClass: {
      default: 'simple-keyboard',
      type: String
    },
    input: {
      type: String,
      default: null
    }
  },
  data: () => ({
    keyboard: null
  }),
  watch: {
    input (input) {
      this.keyboard.setInput(input)
    }
  },
  mounted () {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      layout: {
        default: [
          '` 1 2 3 4 5 6 7 8 9 0 - =',
          'q w e r t y u i o p [ ] \\',
          '{lock} a s d f g h j k l ; \'',
          '{shift} z x c v b n m , . / {shift}'
        ],
        shift: [
          '~ ! @ # $ % ^ & * ( ) _ + ',
          'Q W E R T Y U I O P { } |',
          '{lock} A S D F G H J K L : "',
          '{shift} Z X C V B N M < > ? {shift}'
        ]
      }

    })
  },
  methods: {
    onChange (input) {
      this.$emit('onChange', input)
    },
    onKeyPress (button) {
      this.$emit('onKeyPress', button)

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === '{shift}' || button === '{lock}') { this.handleShift() }
    },
    handleShift () {
      const currentLayout = this.keyboard.options.layoutName
      const shiftToggle = currentLayout === 'default' ? 'shift' : 'default'

      this.keyboard.setOptions({
        layoutName: shiftToggle
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

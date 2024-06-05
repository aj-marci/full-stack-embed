unlayer.registerPropertyEditor({
  name: 'my_color_picker',
  Widget: unlayer.createWidget({
    render(value, updateValue, data) {
      return `
        <input class="color-value" value=${value} />
        <button class="red">Red</button>
        <button class="green">Green</button>
        <button class="blue">Blue</button>
      `
    },
    mount(node, value, updateValue, data) {
      var input = node.getElementsByClassName('color-value')[0]
      input.onchange = function(event) {
        updateValue(event.target.value)
      }

      var redButton = node.getElementsByClassName('red')[0]
      redButton.onclick = function() {
        updateValue('#f00')
      }

      var greenButton = node.getElementsByClassName('green')[0]
      greenButton.onclick = function() {
        updateValue('#0f0')
      }

      var blueButton = node.getElementsByClassName('blue')[0]
      blueButton.onclick = function() {
        updateValue('#00f')
      }
    }
  })
});
unlayer.registerPropertyEditor({
    name: 'my_letter_spacing_picker',
    layout: 'bottom',
    Widget: unlayer.createWidget({
      render(value, updateValue, data) {
        return `
          <input class="value" type="number" value="${value.replace('px', '')}" step="0.1" /> px
        `;
      },
      mount(node, value, updateValue, data) {
        var input = node.querySelector('.value');
  
        input.onchange = function (e) {
          updateValue(e.target.value + 'px');
        };
      },
    }),
  });
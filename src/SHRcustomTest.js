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

  unlayer.ready(function() {
    var stockTextTool = unlayer.getTool('text');
    
    // Modify the tool's options to add the custom property editor
    stockTextTool.options.default = stockTextTool.options.default || {};
    stockTextTool.options.default.title = stockTextTool.options.default.title || null;
  
    stockTextTool.options.text = stockTextTool.options.text || {};
    stockTextTool.options.text.title = stockTextTool.options.text.title || 'Text';
    stockTextTool.options.text.position = stockTextTool.options.text.position || 1;
  
    stockTextTool.options.text.options = stockTextTool.options.text.options || {};
    stockTextTool.options.text.options.letterSpacing = {
      label: 'Letter Spacing',
      defaultValue: '0px',
      widget: 'my_letter_spacing_picker', // custom property editor for letter spacing
    };
  
    // Re-register the modified tool
    unlayer.registerTool(stockTextTool);
  });


unlayer.registerTool({
    name: 'letter_spacing',
    label: 'Letter Spacing',
    icon: 'fa-smile',
    supportedDisplayModes: ['web', 'email'],
    options: {
      default: {
        title: null,
      },
      text: {
        title: 'Text',
        position: 1,
        options: {
          letterSpacing: {
            label: 'Letter Spacing',
            defaultValue: '0px',
            widget: 'my_letter_spacing_picker', // custom property editor for letter spacing
          },
        },
      },
    },
    values: {},
    renderer: {
      Viewer: unlayer.createViewer({
        render(values) {
          return `<div style="letter-spacing: ${values.letterSpacing};">I am a custom tool.</div>`;
        },
      }),
      exporters: {
        web: function (values) {
          return `<div style="letter-spacing: ${values.letterSpacing};">I am a custom tool.</div>`;
        },
        email: function (values) {
          return `<div style="letter-spacing: ${values.letterSpacing};">I am a custom tool.</div>`;
        },
      },
      head: {
        css: function (values) {},
        js: function (values) {},
      },
    },
  });


  unlayer.registerPropertyEditor({
    name: 'my_font_and_spacing_picker',
    layout: 'bottom',
    Widget: unlayer.createWidget({
      render(value, updateValue, data) {
        const letterSpacing = value.letterSpacing ? value.letterSpacing.replace('px', '') : '0';
        const fontWeight = value.fontWeight || '400';
        return `
          <div>
            <label>Letter Spacing: 
              <input class="letter-spacing" type="number" value="${letterSpacing}" step="0.1" /> px
            </label>
          </div>
          <div>
            <label>Font Weight: 
              <input class="font-weight" type="number" value="${fontWeight}" min="100" max="900" step="100" />
            </label>
          </div>`;
      },
      mount(node, value, updateValue, data) {
        const letterSpacingInput = node.querySelector('.letter-spacing');
        const fontWeightInput = node.querySelector('.font-weight');
  
        letterSpacingInput.onchange = function (e) {
          const newValue = {
            ...value,
            letterSpacing: e.target.value + 'px'
          };
          updateValue(newValue);
        };
  
        fontWeightInput.onchange = function (e) {
          const newValue = {
            ...value,
            fontWeight: e.target.value
          };
          updateValue(newValue);
        };
      },
    }),
  });
  


  
  

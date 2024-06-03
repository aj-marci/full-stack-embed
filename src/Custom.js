/* global unlayer: false */


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

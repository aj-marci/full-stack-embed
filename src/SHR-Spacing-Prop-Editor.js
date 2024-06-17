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
      title: 'Custom Letter Spacing Tool',
      position: 1,
      options: {
        letterSpacing: {
          label: 'Letter Spacing',
          defaultValue: '0px',
          widget: 'counter', // custom property editor for letter spacing
        },
        customText: {
          label: 'Text Styling',
          defaultValue: 'I am a custom tool.',
          widget: 'rich_text', // built-in text input property editor
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div style="letter-spacing: ${values.letterSpacing};">${values.customText}</div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return `<div style="letter-spacing: ${values.letterSpacing};">${values.customText}</div>`;
      },
      email: function (values) {
        return `<div style="letter-spacing: ${values.letterSpacing};">${values.customText}</div>`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

unlayer.registerPropertyEditor({
  name: 'counter',
  layout: 'bottom',
  Widget: unlayer.createWidget({
    render(value, updateValue, data) {
      return `
        <input class="value" type="number" value="${value.replace('px', '')}" step="0.1" /> px`;
    },
    mount(node, value, updateValue, data) {
      var input = node.querySelector('.value');

      input.onchange = function (e) {
        updateValue(e.target.value + 'px');
      };
    },
  }),
});

unlayer.registerPropertyEditor({
  name: 'text_input',
  layout: 'bottom',
  Widget: unlayer.createWidget({
    render(value, updateValue, data) {
      return `<input class="value" type="text" value="${value}" />`;
    },
    mount(node, value, updateValue, data) {
      var input = node.querySelector('.value');

      input.onchange = function (e) {
        updateValue(e.target.value);
      };
    },
  }),
});

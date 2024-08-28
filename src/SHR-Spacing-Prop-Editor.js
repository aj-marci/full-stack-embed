unlayer.registerTool({
  name: 'letter_spacing',
  label: 'Letter Spacing',
  icon: 'fa-text-width',
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
          widget: 'custom_letter_spacing', // custom property editor for letter spacing
        },
        customText: {
          label: 'Text Styling',
          defaultValue: 'I am a custom tool.',
          widget: 'rich_text', // built-in rich text input property editor
        },
        fontFamily: {
          label: 'Font Family',
          defaultValue: 'Helvetica',
          widget: 'font_family',
          value: 'arial,helvetica,sans-serif'
        }
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        console.log('Viewer initialized with values:', values); // Log the initialization
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

// Log when the tool is registered
console.log('Custom tool "letter_spacing" has been registered with Unlayer.');

unlayer.registerPropertyEditor({
  name: 'custom_letter_spacing',
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

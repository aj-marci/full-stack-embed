

unlayer.registerTool({
    name: 'letter_spacing',
    label: 'Letter Spacing',
    icon: 'fa-text-width',
    supportedDisplayModes: ['web', 'email'],
    options: {
      default: {
        title: null,
      },
      button: {
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
  
  
  


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
          customText: {
            label: 'Text Styling',
            defaultValue: 'I am a custom tool.',
            widget: 'rich_text', // built-in rich text input property editor
          },
        },
      },
    },
    values: {},
    renderer: {
      Viewer: unlayer.createViewer({
        render(values) {
          return `<div${values.customText}</div>`;
        },
      }),
      exporters: {
        web: function (values) {
          return `<div${values.customText}</div>`;
        },
        email: function (values) {
          return `<div${values.customText}</div>`;
        },
      },
      head: {
        css: function (values) {},
        js: function (values) {},
      },
    },
  });
  
  
  
unlayer.registerTool({
    name: 'custom_button',
    label: 'Custom Button',
    icon: 'fa-hand-pointer',
    supportedDisplayModes: ['web', 'email'],
    options: {
      default: {
        title: null,
      },
      button: {
        title: 'Custom Button Tool',
        position: 1,
        options: {
          buttonText: {
            label: 'Button Text',
            defaultValue: 'Click me!',
            widget: 'rich_text', // built-in rich text input property editor
          }
        },
      },
    },
    values: {},
    renderer: {
      Viewer: unlayer.createViewer({
        render(values) {
          return `<button>${values.buttonText}</button>`;
        },
      }),
      exporters: {
        web: function (values) {
          return `<button>${values.buttonText}</button>`;
        },
        email: function (values) {
          return `<button>${values.buttonText}</button>`;
        },
      },
      head: {
        css: function (values) {},
        js: function (values) {},
      },
    },
  });
  
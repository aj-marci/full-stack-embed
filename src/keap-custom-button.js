

unlayer.registerTool({
    name: 'custom_button',
    label: 'Custom Button',
    icon: 'fa-text-width',
    supportedDisplayModes: ['web', 'email'],
    options: {
      default: {
        title: null,
      },
      button: {
        title: 'Custom Button',
        position: 1,
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
  
  
  
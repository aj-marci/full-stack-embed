unlayer.registerTool({
  name: "my_custom_tool",
  label: "Custom Tool",
  icon: "fa-smile",
  options: {
    default: {
      title: "Image",
      position: 1,
      options: {
        image: {
          label: "Content",
          defaultValue: "",
          widget: "image",
          overrideAllowed: true,
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<img style="width: 100px" src="${values.image.url}" />`;
      },
    }),
  },
  exporters: {
    web: function (values) {
      return `<img style="width: 100px" src="${values.image.url}" />`;
    },
    email: function (values) {
      return `<img style="width: 100px" src="${values.image.url}" />`;
    },
  },
});


/*unlayer.registerTool({
  name: 'my_tool',
  label: 'My Tool',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email', 'document'],
  options: {
    occupation: {
      title: 'Occupation',
      position: 1,
      options: {
        occupation: {
          label: 'Occupation',
          defaultValue: 'Software Engineer',
          widget: 'dropdown',
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div>
          <img src="${values.data.photo}" />
          <div>My name is <strong>${values.data.name}</strong> and I am <strong>${values.data.age}</strong> years old.</div>
          <div>My occupation is <strong>${values.occupation}</strong>.</div>
        </div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return `<div>
          <img src="${values.data.photo}" />
          <div>My name is <strong>${values.data.name}</strong> and I am <strong>${values.data.age}</strong> years old.</div>
          <div>My occupation is <strong>${values.occupation}</strong>.</div>
        </div>`;
      },
      email: function (values) {
        return `<div>
          <img src="${values.data.photo}" />
          <div>My name is <strong>${values.data.name}</strong> and I am <strong>${values.data.age}</strong> years old.</div>
          <div>My occupation is <strong>${values.occupation}</strong>.</div>
        </div>`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});*/


//////////////// REACT CONFIG ///////////

/*const React = window.unlayer.React;

const Viewer = (values) => {
  return (
    <div>
      {`<div>
          <img src="${values.data.photo}" />
          <div>My name is <strong>${values.data.name}</strong> and I am <strong>${values.data.age}</strong> years old.</div>
          <div>My occupation is <strong>${values.occupation}</strong>.</div>
        </div>`}

    </div>
  );
}

unlayer.registerTool({
  name: 'my_tool',
  label: 'My Tool',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email', 'document'],
  options: {
    occupation: {
      title: 'Occupation',
      position: 1,
      options: {
        occupation: {
          label: 'Occupation',
          defaultValue: 'Software Engineer',
          widget: 'dropdown',
        },
      },
    },
  },
  values: {values},
  renderer: {
    Viewer: Viewer,
    exporters: {
      web: function (values) {
        return 
        ReactDOMServer.renderToStaticMarkup( <Viewer/>
      );
      },
      email: function (values) {
        return 
        ReactDOMServer.renderToStaticMarkup( <Viewer/>
      );
      },
      document: function (values) {
        return 
        ReactDOMServer.renderToStaticMarkup( <Viewer/>
      );
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});*/
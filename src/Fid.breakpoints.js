unlayer.registerTool({
  name: 'responsive_splash_banner',
  label: 'Responsive Splash Banner',
  icon: 'fa-image', // Icon for the tool
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    style: {
      title: 'Responsive Banner Tool',
      position: 1,
      options: {
        desktopBreakpoint: {
          label: 'Desktop Breakpoint',
          defaultValue: '1024px',
          widget: 'breakpoint_desktop',
        },
        tabletBreakpoint: {
          label: 'Tablet Breakpoint',
          defaultValue: '768px',
          widget: 'breakpoint_tablet',
        },
        fontSize: {
          label: 'Font Size (Desktop)',
          defaultValue: '24px',
          widget: 'font_size_desktop',
        },
        fontSizeTablet: {
          label: 'Font Size (Tablet)',
          defaultValue: '20px',
          widget: 'font_size_tablet',
        },
        fontSizeMobile: {
          label: 'Font Size (Mobile)',
          defaultValue: '16px',
          widget: 'font_size_mobile',
        },
        padding: {
          label: 'Padding (Desktop)',
          defaultValue: '20px',
          widget: 'padding_desktop',
        },
        paddingTablet: {
          label: 'Padding (Tablet)',
          defaultValue: '15px',
          widget: 'padding_tablet',
        },
        paddingMobile: {
          label: 'Padding (Mobile)',
          defaultValue: '10px',
          widget: 'padding_mobile',
        }
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `
          <div 
            style="
              font-size: ${values.fontSize}; 
              padding: ${values.padding};
            " 
            class="responsive-banner"
          >
            Responsive splash banner text
          </div>
          <style>
            /* Custom Desktop Breakpoint */
            @media (max-width: ${values.desktopBreakpoint}) {
              .responsive-banner {
                font-size: ${values.fontSizeTablet};
                padding: ${values.paddingTablet};
              }
            }
            /* Custom Tablet Breakpoint */
            @media (max-width: ${values.tabletBreakpoint}) {
              .responsive-banner {
                font-size: ${values.fontSizeMobile};
                padding: ${values.paddingMobile};
              }
            }
          </style>
        `;
      },
    }),
    exporters: {
      web: function (values) {
        return `
          <div 
            style="
              font-size: ${values.fontSize}; 
              padding: ${values.padding};
            " 
            class="responsive-banner"
          >
            Responsive splash banner text
          </div>
          <style>
            @media (max-width: ${values.desktopBreakpoint}) {
              .responsive-banner {
                font-size: ${values.fontSizeTablet};
                padding: ${values.paddingTablet};
              }
            }
            @media (max-width: ${values.tabletBreakpoint}) {
              .responsive-banner {
                font-size: ${values.fontSizeMobile};
                padding: ${values.paddingMobile};
              }
            }
          </style>
        `;
      },
      email: function (values) {
        return `<div style="font-size: ${values.fontSize}; padding: ${values.padding};">${values.customText}</div>`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

// Helper function to register each widget
const registerResponsiveEditor = (name) => {
  unlayer.registerPropertyEditor({
    name,
    layout: 'bottom',
    Widget: unlayer.createWidget({
      render(value, updateValue) {
        return `<input class="value" type="text" value="${value.replace('px', '')}" step="1" /> px`;
      },
      mount(node, value, updateValue) {
        var input = node.querySelector('.value');
        input.onchange = function (e) {
          updateValue(e.target.value + 'px');
        };
      },
    }),
  });
};

// Register each custom widget for responsive styles and breakpoints
registerResponsiveEditor('breakpoint_desktop');
registerResponsiveEditor('breakpoint_tablet');
registerResponsiveEditor('font_size_desktop');
registerResponsiveEditor('font_size_tablet');
registerResponsiveEditor('font_size_mobile');
registerResponsiveEditor('padding_desktop');
registerResponsiveEditor('padding_tablet');
registerResponsiveEditor('padding_mobile');

// Log confirmation
console.log('Custom tool "responsive_splash_banner" with adjustable breakpoints has been registered with Unlayer.');

unlayer.registerTool({
  name: 'responsive_style',
  label: 'Responsive Styles',
  icon: 'fa-mobile-alt', // Icon for the tool
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    style: {
      title: 'Responsive Style Tool',
      position: 1,
      options: {
        fontSize: {
          label: 'Font Size (Desktop)',
          defaultValue: '16px',
          widget: 'font_size_desktop',
        },
        fontSizeTablet: {
          label: 'Font Size (Tablet)',
          defaultValue: '14px',
          widget: 'font_size_tablet',
        },
        fontSizeMobile: {
          label: 'Font Size (Mobile)',
          defaultValue: '12px',
          widget: 'font_size_mobile',
        },
        padding: {
          label: 'Padding (Desktop)',
          defaultValue: '10px',
          widget: 'padding_desktop',
        },
        paddingTablet: {
          label: 'Padding (Tablet)',
          defaultValue: '8px',
          widget: 'padding_tablet',
        },
        paddingMobile: {
          label: 'Padding (Mobile)',
          defaultValue: '6px',
          widget: 'padding_mobile',
        }
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        // Render with device-specific styles based on breakpoints
        return `
          <div 
            style="
              font-size: ${values.fontSize}; 
              padding: ${values.padding};
            " 
            class="responsive-text"
          >
            Responsive styled text
          </div>
          <style>
            /* Tablet styles */
            @media (max-width: 768px) {
              .responsive-text {
                font-size: ${values.fontSizeTablet};
                padding: ${values.paddingTablet};
              }
            }
            /* Mobile styles */
            @media (max-width: 480px) {
              .responsive-text {
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
        // Apply the breakpoints in the HTML for web
        return `
          <div 
            style="
              font-size: ${values.fontSize}; 
              padding: ${values.padding};
            " 
            class="responsive-text"
          >
            Responsive styled text
          </div>
          <style>
            @media (max-width: 768px) {
              .responsive-text {
                font-size: ${values.fontSizeTablet};
                padding: ${values.paddingTablet};
              }
            }
            @media (max-width: 480px) {
              .responsive-text {
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

// Register custom widgets for each breakpoint-specific option
unlayer.registerPropertyEditor({
  name: 'font_size_desktop',
  layout: 'bottom',
  Widget: unlayer.createWidget({
    render(value, updateValue) {
      return `<input class="value" type="number" value="${value.replace('px', '')}" step="1" /> px`;
    },
    mount(node, value, updateValue) {
      var input = node.querySelector('.value');
      input.onchange = function (e) {
        updateValue(e.target.value + 'px');
      };
    },
  }),
});

// Similarly, register other widgets for `font_size_tablet`, `font_size_mobile`, `padding_desktop`, `padding_tablet`, and `padding_mobile` here
// This would include code similar to the above but using different names for each widget (font_size_tablet, etc.)

// Log to confirm tool registration
console.log('Custom tool "responsive_style" has been registered with Unlayer.');

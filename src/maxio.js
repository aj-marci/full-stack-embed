unlayer.registerTool({
  name: 'my_checkbox_tool',
  label: 'Checkbox Tool',
  icon: 'fa-check-square',
  supportedDisplayModes: ['email'],
  options: {
    default: {
      properties: {
        showSomething: {
          label: 'Show Something',
          defaultValue: false,
          widget: 'custom_checkbox', // We'll register this widget
        }
      }
    }
  },
  render: function({ values }) {
    return `<div>${values.showSomething ? 'You checked the box!' : 'Box is unchecked.'}</div>`;
  }
});


unlayer.registerPropertyEditor({
  name: 'custom_checkbox',
  widget: 'custom_checkbox',
  render: function({ value, onChange }) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = value;

    checkbox.addEventListener('change', function() {
      const newValue = checkbox.checked;
      onChange(newValue); // This will update the property value in the tool data
    });

    return checkbox;
  }
});

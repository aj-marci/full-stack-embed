unlayer.registerTool({
  name: 'greeting_tool',
  label: 'Greeting Tool',
  icon: 'fa-user',
  supportedDisplayModes: ['email', 'document'],
  options: {
    default: {
      properties: {
        first_name: {
          label: 'Select First Name',
          defaultValue: 'Alex',
          widget: 'first_name_picker',
        }
      }
    }
  },
  render({ values }) {
    const name = values.first_name || 'friend';
    return `<div>Hello, ${name}, it's nice to meet you!</div>`;
  }
});



unlayer.registerPropertyEditor({
  name: 'first_name_picker',
  Widget: unlayer.createWidget({
    render(value, updateValue) {
      return `
        <label><input type="radio" name="name" value="Alex" ${value === 'Alex' ? 'checked' : ''}/> Alex</label><br>
        <label><input type="radio" name="name" value="Jamie" ${value === 'Jamie' ? 'checked' : ''}/> Jamie</label><br>
        <label><input type="radio" name="name" value="Taylor" ${value === 'Taylor' ? 'checked' : ''}/> Taylor</label>
      `;
    },
    mount(node, value, updateValue) {
      const inputs = node.querySelectorAll('input[name="name"]');
      inputs.forEach((input) => {
        input.addEventListener('change', (e) => {
          updateValue(e.target.value); 
        });
      });
    },
  }),
});


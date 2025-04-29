unlayer.registerTool({
  name: 'invoice_tool',
  label: 'Invoice',
  icon: 'fa-file-invoice',
  supportedDisplayModes: ['web', 'email', 'document'],
  options: {
    default: {
      properties: {
        invoice_items: {
          label: 'Select Invoice Items',
          defaultValue: 'basic',
          widget: 'invoice_item_picker',
        }
      }
    }
  },
  values: {
    invoice_items: 'basic'
  },
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        const invoiceData = getInvoiceData(values.invoice_items);
        return renderInvoice(invoiceData);
      },
    }),
    exporters: {
      web: (values) => renderInvoice(getInvoiceData(values.invoice_items)),
      email: (values) => renderInvoice(getInvoiceData(values.invoice_items)),
      document: (values) => renderInvoice(getInvoiceData(values.invoice_items)),
    },
    head: {
      css: () => '',
      js: () => '',
    },
  },
  validator(data) {
    return [];
  },
});

// Define your invoice data sets
function getInvoiceData(set) {
  const dataSets = {
    basic: [
      { name: 'Website Design', quantity: 1, price: 500 },
      { name: 'Hosting (1 year)', quantity: 1, price: 120 },
    ],
    pro: [
      { name: 'Website Design', quantity: 1, price: 500 },
      { name: 'SEO Optimization', quantity: 1, price: 300 },
      { name: 'Hosting (1 year)', quantity: 1, price: 120 },
    ],
    enterprise: [
      { name: 'Website Design', quantity: 1, price: 500 },
      { name: 'SEO Optimization', quantity: 1, price: 300 },
      { name: 'Custom CRM Integration', quantity: 1, price: 1000 },
      { name: 'Hosting (1 year)', quantity: 1, price: 120 },
    ]
  };
  return dataSets[set] || [];
}

// Renders invoice HTML
function renderInvoice(items) {
  let rows = items.map(item => `
    <tr>
      <td style="padding: 8px; border: 1px solid #ccc;">${item.name}</td>
      <td style="padding: 8px; border: 1px solid #ccc; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border: 1px solid #ccc; text-align: right;">$${item.price.toFixed(2)}</td>
    </tr>
  `).join('');

  const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return `
    <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 16px;">
      <h3>Invoice</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <thead>
          <tr>
            <th style="text-align: left; border: 1px solid #ccc; padding: 8px;">Item</th>
            <th style="text-align: center; border: 1px solid #ccc; padding: 8px;">Qty</th>
            <th style="text-align: right; border: 1px solid #ccc; padding: 8px;">Price</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding: 8px; border: 1px solid #ccc; text-align: right;"><strong>Total</strong></td>
            <td style="padding: 8px; border: 1px solid #ccc; text-align: right;"><strong>$${total.toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

// property editor

unlayer.registerPropertyEditor({
  name: 'invoice_item_picker',
  Widget: unlayer.createWidget({
    render(value) {
      return `
        <label>
          <select>
            <option value="basic" ${value === 'basic' ? 'selected' : ''}>Basic</option>
            <option value="pro" ${value === 'pro' ? 'selected' : ''}>Pro</option>
            <option value="enterprise" ${value === 'enterprise' ? 'selected' : ''}>Enterprise</option>
          </select>
        </label>
      `;
    },
    mount(node, value, updateValue) {
      const select = node.querySelector('select');
      select.addEventListener('change', (e) => {
        updateValue(e.target.value);
      });
    }
  })
});

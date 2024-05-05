const AdminJS = require('adminjs');
const { BasePropertyComponent } = require('adminjs');

class MyFileComponent extends BasePropertyComponent {
  render() {
    const { property, record, onChange } = this.props;

    return AdminJS.bundle('./path/to/your/file/component', {
      property,
      record,
      onChange,
    });
  }
}

module.exports = MyFileComponent;

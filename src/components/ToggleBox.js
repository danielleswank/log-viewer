var React = require('react/addons');

var ToggleBox = React.createClass({
  render: function() {
    console.log('ToggleBox', checked);
    return (
      <input
        className="toggle-box"
        type="checkbox"
        onClick={this.props.onToggle}
        checked={this.props.checked}/>
    );
  }
});

module.exports = ToggleBox;
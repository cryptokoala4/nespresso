import React from 'react';
import Select from './Select';
import ToggleOption from '../ToggleOption';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

function Toggle(props) {
  // console.log("type B", props)
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: React.PropTypes.func,
  values: React.PropTypes.array,
  value: React.PropTypes.string,
  messages: React.PropTypes.object,
};

export default Toggle;


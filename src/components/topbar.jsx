import React from 'react';

function Topbar(props){
  return (
    <div>
      <b>Epoch Converter</b>
      <span style = {{float: "right"}}>{props.name}</span>
    </div>)
}

export default Topbar;

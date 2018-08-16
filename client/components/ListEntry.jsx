import React from 'react';

function ListEntry(props) {
  return <div onClick={() => props.click()}>{props.item}</div>;
}

export default ListEntry;

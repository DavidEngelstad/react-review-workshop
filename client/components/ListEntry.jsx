import React from 'react';

function ListEntry(props) {
  return <li onClick={() => props.click()}>{props.item}</li>;
}

export default ListEntry;

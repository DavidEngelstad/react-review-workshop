import React from 'react';

function ListEntry({ click, item, index }) {
  return <li onClick={() => click(index)}>{item}</li>;
}

export default ListEntry;

import React from 'react';

function SummaryCard(props) {
  return (
    <div>
      <div>{props.headerLabel}</div>
      <hr />
      <span>{props.value}</span>
    </div>
  );
}

export default SummaryCard;

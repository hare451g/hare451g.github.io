import React from 'react';

import { CardWrapper, ValueLabel } from './styled';

function SummaryCard(props) {
  return (
    <CardWrapper>
      <div>{props.headerLabel}</div>
      <hr />
      <ValueLabel>{props.value}</ValueLabel>
    </CardWrapper>
  );
}

export default SummaryCard;

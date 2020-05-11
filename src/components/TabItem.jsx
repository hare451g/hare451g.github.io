import React from 'react';
import { Text, Box } from 'rebass';

function TabItem({ list, index, selectedTab, onTabClick }) {
  return list.map(item => (
    <Box
      key={`${selectedTab}-${item[index]}`}
      variant={item[index] === selectedTab && 'activeTab'}
    >
      <Text onClick={() => onTabClick(item[index])} fontFamily="heading">
        {item[index]}
      </Text>
    </Box>
  ));
}

export default TabItem;

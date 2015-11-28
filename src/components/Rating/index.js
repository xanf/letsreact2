import React from 'react';

const Rating = ({list}) => (
  <ul>
    { list.map(item => <li key={item.id}>{item.name} - {item.points}</li>) }
  </ul>
);

export default Rating;

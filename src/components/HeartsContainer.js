import React from 'react'
import Heart from './Heart'

const HeartsContainer = () => {
  const heartSlots = 10;
  const fullHearts = 5;

  const coloredHearts = ['']

  for (let i = 0; i < heartSlots; i++) {
    coloredHearts.push(<Heart color={i >= fullHearts ? 'grey' : 'red'}/>)
  }

  return (
    <div className="hearts-container">{coloredHearts}</div>
  )
}

export default HeartsContainer
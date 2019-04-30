import React from 'react';

const Randomize = (props) => {
  return(
    <> 
      <button onClick={(e) => props.handleClick(e)}>Create some kick-ass names!</button>
    </>
  )
}

export default Randomize;
import React from 'react';

const Sector = (props) => {
  const { name, performance } = props.info;
  return (
    <div className='newSector'>
      <div className='name'>
      {name}
      </div>
      <div className='performance'>
      {performance} %
      </div>
    </div>
  );
}

export default Sector;
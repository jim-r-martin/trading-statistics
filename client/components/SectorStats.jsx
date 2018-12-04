import React from 'react';
import Sector from './Sector';

const SectorStats = (props) => {
  const sectors = props.sectorInfo.map((sector, index) => (
    <Sector key={index} info={sector} />
  ));
  return (
    <div className='info'>
      {sectors}
    </div>
  );
}

export default SectorStats;
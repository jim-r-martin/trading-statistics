import React from 'react';

const Header = (props) => (
  <div className='header'>
    <label>
      pick your desired page: 
      <select value={props.industry} onChange={(e) => props.handleChange(e)}>
        <option value="HomePage">HomePage</option>
        <option value="SectorStats">Sector Stats</option>
      </select>
    </label>
  </div>
);

export default Header;

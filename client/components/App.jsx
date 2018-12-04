import React from 'react';
import axios from 'axios';
import HomePage from './HomePage';
import Header from './Header';
import SectorStats from './SectorStats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: 'HomePage',
      sectorInfo: '',
    };
    this.components = {
      'HomePage': <HomePage />,
      'SectorStats': <SectorStats sectorInfo={this.state.sectorInfo} />,
    };
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
    this.fetchSectorData = this.fetchSectorData.bind(this);
    this.fetchSectorData();
  }

  fetchSectorData(){
    axios.request('/sectors')
    .then(res => {
      return JSON.stringify(res);
    }).then(dataString => {
      const { data } = JSON.parse(dataString);
      console.log(data);
      this.setState({ sectorInfo: data });
    });
  }

  handleIndustryChange(event){
    event.preventDefault();
    const industry = event.target.value;
    this.setState({ industry });
  }

  render(){
    const { industry } = this.state;
    if (industry === 'HomePage') {
      return (
        <div>
          <Header industry={industry} handleChange={this.handleIndustryChange} />
          <HomePage />
        </div>
      )
    }
    return (
      <div>
        <Header industry={industry} handleChange={this.handleIndustryChange}/>
        <SectorStats sectorInfo={this.state.sectorInfo} />
      </div>
    );
  };
}
export default App;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class ForecastList extends Component {
  renderArray(item) {
    let {city, list} = item
    let temps = (list.map(weather => weather.main.temp)).map(temp => temp - 272,15)
    let pressures = list.map(weather => weather.main.pressure)
    let humidities = list.map(weather => weather.main.humidity)
    let {lat, lon} = city.coord
    return (
      <tr key={city.name}>
        {/* <td>{city.name}</td> */}
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart color='red' data={temps} unit='C'/>
        </td>
        <td>
          <Chart color='green' data={pressures} unit='hPa'/>
        </td>
        <td>
          <Chart color='blue' data={humidities} unit='%'/>
        </td>
      </tr>
    )
  }

  render() {
    console.log(this.props.forecast);
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.forecast.map(this.renderArray)}
        </tbody>
      </table>
    )
  }
}

export default connect(({forecast}) => {
  return { forecast }
})(ForecastList)

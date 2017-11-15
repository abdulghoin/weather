import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchForecast } from '../actions/index'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  onInputChange(e) {
    this.setState({ city: e.target.value })
  }

  onSearch(e) {
    e.preventDefault()
    this.props.searchForecast(this.state.city)
  }

  render() {
    return (
      <form onSubmit={this.onSearch} className='input-group'>
        <input
          className='form-control'
          value={this.state.city}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn' >
          <button type='submit' className='btn btn-secondary'>Search</button>
        </span>
      </form>
    )
  }
}

export default connect(null, dispatch => bindActionCreators({ searchForecast }, dispatch))(SearchBar)

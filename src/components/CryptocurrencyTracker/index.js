import './index.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="TotalContainer">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker

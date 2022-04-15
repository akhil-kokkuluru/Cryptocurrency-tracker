import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoCureencyData: []}

  componentDidMount() {
    this.currenctListFetching()
  }

  currenctListFetching = async () => {
    const currencyList = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const listing = await currencyList.json()
    this.setState({
      cryptoCureencyData: listing.map(eachItem => ({
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        euroValue: eachItem.euro_value,
        usdValue: eachItem.usd_value,
      })),
      isLoading: false,
    })
  }

  loadingRendering = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  listRendering = () => {
    const {cryptoCureencyData} = this.state

    return cryptoCureencyData.map(item => (
      <CryptocurrencyItem key={item.id} cryptoCureencyData={item} />
    ))
  }

  render() {
    const {isLoading} = this.state
    const renderElements = () => (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          alt="cryptocurrency"
          className="titleImg"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <ul className="currenciesContainer">
          <div className="headingContainer">
            <p className="HeadingCss">Coin Type</p>
            <div className="currencyContainer">
              <p className="HeadingCss">USD</p>
              <p className="HeadingCss">EURO</p>
            </div>
          </div>
          {this.listRendering()}
        </ul>
      </>
    )
    return (
      <div className="ContentContainer">
        {isLoading ? this.loadingRendering() : renderElements()}
      </div>
    )
  }
}

export default CryptocurrenciesList

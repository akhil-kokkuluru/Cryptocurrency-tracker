import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = () => (
  //   const currencyList = await fetch(
  //     'https://apis.ccbp.in/crypto-currency-converter',
  //   )
  //   const listing = await currencyList.json()
  <div className="ContentContainer">
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <img
      alt="cryptocurrency"
      className="titleImg"
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
    />
    <div className="currenciesContainer">
      <div className="headingContainer">
        <p className="HeadingCss">Coin Type</p>
        <div className="currencyContainer">
          <p className="HeadingCss">USD</p>
          <p className="HeadingCss">EURO</p>
        </div>
      </div>
      <CryptocurrencyItem />
    </div>
  </div>
)

export default CryptocurrenciesList

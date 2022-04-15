import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCureencyData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoCureencyData

  return (
    <li className="CheadingContainer">
      <div className="logoContainer">
        <img className="logoCss" src={currencyLogo} alt={currencyName} />
        <p className="CHeadingCss">{currencyName}</p>
      </div>
      <div className="CcurrencyContainer">
        <p className="CHeadingCss">{usdValue}</p>
        <p className="CHeadingCss">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

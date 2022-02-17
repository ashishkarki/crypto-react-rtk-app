import { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { REACT_APP_ROUTE_NAMES } from '../constants'
import Loading from './Loading'

const CryptocurrenciesPage = ({ simplified }) => {
  const count = simplified ? 10 : 100

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  console.log('cryptos :>> ', cryptos)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredCryptos = cryptoList?.data?.coins.filter((crypto) => {
      return crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    setCryptos(filteredCryptos)
  }, [cryptoList, searchTerm])

  if (isFetching) {
    return <Loading />
  } else {
    return (
      <>
        {!simplified && (
          <div className="search-crypto">
            <Input.Search
              placeholder="Search a Crypto"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((crypto) => (
            <Col key={crypto.id} xs={24} sm={12} lg={6} className="crypto-card">
              <Link to={`${REACT_APP_ROUTE_NAMES.CRYPTO_DETAILS}/${crypto.id}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={crypto.iconUrl}
                      alt="crypto"
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(crypto.price)}</p>

                  <p>Market Cap: {millify(crypto.marketCap)}</p>

                  <p>Daily Change: {millify(crypto.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    )
  }
}

export default CryptocurrenciesPage

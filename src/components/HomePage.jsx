import React from 'react'
import millify from 'millify'
import { Col, Row, Statistic, Typography } from 'antd'
import { REACT_APP_ROUTE_NAMES, REACT_APP_STRING_LITERALS } from '../constants'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import { CryptocurrenciesPage, NewsPage } from '.'
import Loading from './Loading'

const { Title } = Typography

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  console.log('data', data)
  console.log('globalstats', globalStats)

  if (isFetching) {
    return <Loading />
  }

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row>
        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES
                .TOTAL_CRYPTOCURRENCIES
            }
            value={globalStats.total}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_EXCHANGES
            }
            value={millify(globalStats.totalExchanges)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_MARKET_CAP
            }
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_24H_VOLUME
            }
            value={millify(globalStats.total24hVolume)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_MARKETS
            }
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>

        <Title level={3} className="show-more">
          <Link to={REACT_APP_ROUTE_NAMES.CRYPTOCURRENCIES}>Show More</Link>
        </Title>
      </div>
      <CryptocurrenciesPage simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News for you
        </Title>

        <Title level={3} className="show-more">
          <Link to={REACT_APP_ROUTE_NAMES.NEWS}>Show More</Link>
        </Title>
      </div>
      <NewsPage simplified />
    </>
  )
}

export default HomePage

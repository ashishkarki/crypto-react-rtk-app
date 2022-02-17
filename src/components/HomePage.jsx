import React from 'react'
import millify from 'millify'
import { Col, Row, Statistic, Typography } from 'antd'
import { REACT_APP_STRING_LITERALS } from '../constants'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery()
  const globalStats = data?.data?.stats
  console.log('data', data)
  console.log('globalstats', globalStats)

  if (isFetching) {
    return <div>Loading...</div>
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
    </>
  )
}

export default HomePage

import React from 'react'
import millify from 'millify'
import { Col, Row, Statistic, Typography } from 'antd'
import { REACT_APP_STRING_LITERALS } from '../constants'

const { Title } = Typography

const HomePage = () => {
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
            value="5"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_EXCHANGES
            }
            value="5"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_MARKET_CAP
            }
            value="5"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_24H_VOLUME
            }
            value="5"
          />
        </Col>

        <Col span={12}>
          <Statistic
            title={
              REACT_APP_STRING_LITERALS.HOMEPAGE_STATS_TITLES.TOTAL_MARKETS
            }
            value="5"
          />
        </Col>
      </Row>
    </>
  )
}

export default HomePage

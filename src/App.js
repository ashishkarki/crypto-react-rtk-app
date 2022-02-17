import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import {
  Navbar,
  HomePage,
  ExchangesPage,
  CryptocurrenciesPage,
  CryptoDetailsPage,
  NewsPage,
} from './components'
import './App.css'
import { REACT_APP_ROUTE_NAMES, REACT_APP_STRING_LITERALS } from './constants'

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path={REACT_APP_ROUTE_NAMES.ROOT} element={<HomePage />} />
              <Route
                path={REACT_APP_ROUTE_NAMES.EXCHANGES}
                element={<ExchangesPage />}
              />

              <Route
                path={REACT_APP_ROUTE_NAMES.CRYPTOCURRENCIES}
                element={<CryptocurrenciesPage />}
              />

              <Route
                path={REACT_APP_ROUTE_NAMES.CRYPTO_DETAILS}
                element={<CryptoDetailsPage />}
              />

              <Route
                exact
                path={REACT_APP_ROUTE_NAMES.NEWS}
                element={<NewsPage />}
              />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            {REACT_APP_STRING_LITERALS.APP_NAME} <br />
            All rights reserved
          </Typography.Title>

          <Space>
            <Link to={REACT_APP_ROUTE_NAMES.ROOT}>Home</Link>
            <Link to={REACT_APP_ROUTE_NAMES.EXCHANGES}>Exchanges</Link>
            <Link to={REACT_APP_ROUTE_NAMES.CRYPTOCURRENCIES}>
              Cryptocurrencies
            </Link>
            <Link to={REACT_APP_ROUTE_NAMES.NEWS}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App

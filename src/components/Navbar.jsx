import React, { useEffect, useState } from 'react'

import { Avatar, Typography, Button, Menu } from 'antd'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import icon from '../images/cryptocurrency-2.jpg'
import { REACT_APP_ROUTE_NAMES, REACT_APP_STRING_LITERALS } from '../constants'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />

        <Typography.Title level={2} className="logo">
          <Link to={REACT_APP_ROUTE_NAMES.ROOT}>
            {REACT_APP_STRING_LITERALS.APP_NAME}
          </Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={(_e) => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark" onClick={(e) => setActiveMenu(!activeMenu)}>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to={REACT_APP_ROUTE_NAMES.ROOT}>
              {REACT_APP_STRING_LITERALS.NAVBAR_ITEMS.HOME}
            </Link>
          </Menu.Item>

          <Menu.Item icon={<FundOutlined />}>
            <Link to={REACT_APP_ROUTE_NAMES.CRYPTOCURRENCIES}>
              {REACT_APP_STRING_LITERALS.NAVBAR_ITEMS.CRYPTOCURRENCIES}
            </Link>
          </Menu.Item>

          {/* commented out since this now requires premium plan from rapid api */}
          {/* <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to={REACT_APP_ROUTE_NAMES.EXCHANGES}>
              {REACT_APP_STRING_LITERALS.NAVBAR_ITEMS.EXCHANGES}
            </Link>
          </Menu.Item> */}

          <Menu.Item icon={<BulbOutlined />}>
            <Link to={REACT_APP_ROUTE_NAMES.NEWS}>
              {REACT_APP_STRING_LITERALS.NAVBAR_ITEMS.NEWS}
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar

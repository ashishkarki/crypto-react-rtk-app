import { Card, Col, Input, Row, Select, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import moment from 'moment'
import { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loading from './Loading'

const { Option } = Select
const { Text, Title } = Typography

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const NewsPage = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  })

  const { data } = useGetCryptosQuery(100)

  // console.log('NewsPage => cryptoNews', cryptoNews)

  if (!cryptoNews?.value || isFetching) {
    return <Loading />
  } else {
    return (
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a News Category"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>

              {data?.data?.coins.map((crypto) => (
                <Option value={crypto.name}>{crypto.name}</Option>
              ))}
            </Select>
          </Col>
        )}

        {cryptoNews.value.map((news, idx) => (
          <Col key={idx} xs={24} sm={12} lg={8}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer" alt="news">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>

                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                    style={{
                      maxWidth: '200px',
                      maxHeight: '100px',
                    }}
                  />
                </div>

                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>

                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="provider"
                    />

                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>

                  <Text>
                    {moment(news.datePublished).startOf('ss').fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
}

export default NewsPage

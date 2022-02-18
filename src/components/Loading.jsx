import { Spin } from 'antd'

const Loading = () => {
  return (
    <div
      // style={{
      //   border: '2px groove #859fc9',
      //   margin: '1rem',
      //   marginTop: '20vh',
      //   padding: '1rem',
      // }}
      className="loader"
    >
      {/* <Progress percent={50} status="active" /> */}
      <Spin />
    </div>
  )
}

export default Loading

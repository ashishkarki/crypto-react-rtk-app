import { Progress } from 'antd'

const Loading = () => {
  return (
    <div
      style={{
        border: '2px groove #859fc9',
        margin: '1rem',
        marginTop: '40vh',
        padding: '1rem',
      }}
    >
      <Progress percent={50} status="active" />
    </div>
  )
}

export default Loading

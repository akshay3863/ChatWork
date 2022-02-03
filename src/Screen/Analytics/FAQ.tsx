import React from 'react'
import './analytics.css'

const FAQ = () => {
  const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({})

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }

      setStyle(newStyle)
    }, 200)

    return (
      <div className='progress'>
        <div className='progress-done' style={style}>
          {done}%
        </div>
      </div>
    )
  }
  return (
    <>
      <h1 className='common_header'>Topics</h1>
      <div className='FAQ_Container CBS'>
        <div className='FAQ_Cont'>
          <div className='FAQ_TOPIC CF18'>How to update my KYC details?</div>
          <div className='FAQ_PROGRESS'>
            <Progress done='70' />
          </div>
        </div>
        <div className='FAQ_Cont'>
          <div className='FAQ_TOPIC CF18'>What are offeres of the day?</div>
          <div className='FAQ_PROGRESS'>
            <Progress done='45' />
          </div>
        </div>
        <div className='FAQ_Cont'>
          <div className='FAQ_TOPIC CF18'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            nibh erat neque nisi, facilisis sodales purus varius at.
          </div>
          <div className='FAQ_PROGRESS'>
            <Progress done='30' />
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ

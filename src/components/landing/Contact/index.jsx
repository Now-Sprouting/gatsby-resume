import React, {useState, useContext} from 'react'
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details, Icons, Texts } from './styles';
import { Modal } from 'antd';
import img0 from 'assets/image/微信图片_20201017141401.jpg'
import img from 'assets/image/微信图片_20201017141401.jpg'
import wechact from 'assets/image/微信-方 (1).png'
import github from 'assets/image/Github.png'



export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [state, setstate] = useState(false)
  const showModal = () => {
    setstate(true)
  }
  const handleCancel = () => {
    setstate(false)
  }
  return (
  <Wrapper as={Container} id="contact">
    <h2>Contact</h2>
    <Details>
      {/* <Button type="primary" onClick={e => {showModal()}}>
          Open Modal
      </Button> */}
      <Icons height='10rem' theme={theme}>
        <img src={wechact} alt="" onClick={e => {showModal()}}/>
        <a href="https://github.com/Now-Sprouting" target='_blank'>
          <img src={github} alt=""/>
        </a>
        <img src={img0} alt="" className='hiddenImg'/>
      </Icons>
      <Texts theme={theme}>
        <h3>📞: 15542456716</h3>
        <h3>📧: 15542456716@163.com</h3>
      </Texts>
      <Modal
        footer={null}
        centered
        title="🎁 加个微信吧!"
        visible={state}
        onCancel={e => {handleCancel()}}
      >
        <img src={img} alt=""/>
      </Modal>
    </Details>
  </Wrapper>
  )
}

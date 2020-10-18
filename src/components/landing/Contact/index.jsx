import React, {useState} from 'react'
import { Container } from 'components/common';
import { Wrapper, Details, Icons } from './styles';
import { Modal, Button } from 'antd';
import img from 'assets/image/微信图片_20201017141401.jpg'
import wechact from 'assets/image/微信-方 (1).png'
import github from 'assets/image/Github.png'



export const Contact = () => {
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
      <Icons>
        <img src={wechact} alt="" onClick={e => {showModal()}}/>
        <a href="https://github.com/Now-Sprouting" target='_blank'>
          <img src={github} alt=""/>
        </a>
      </Icons>
      <Modal
        footer={null}
        centered
        title="💖加个微信吧!"
        visible={state}
        onCancel={e => {handleCancel()}}
      >
        <img src={img} alt=""/>
      </Modal>
    </Details>
  </Wrapper>
  )
}

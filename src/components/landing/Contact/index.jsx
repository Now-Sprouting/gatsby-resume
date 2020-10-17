import React, {useState} from 'react'
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';
import { Modal, Button } from 'antd';
import img from 'assets/image/微信图片_20201017141401.jpg'
import ContactForm from './ContactForm';



export const Contact = () => {
  const [state, setstate] = useState(false)
  const showModal = () => {
    setstate(true)
  }
  const handleOk = () => {
    setstate(false)
  }
  const handleCancel = () => {
    setstate(false)
  }
  return (
  <Wrapper as={Container} id="contact">
    <Details>
      <Button type="primary" onClick={e => {showModal()}}>
          Open Modal
      </Button>
      <Modal
        footer={null}
        centered
        title="加个微信吧"
        visible={state}
        onOk={e => {handleOk()}}
        onCancel={e => {handleCancel()}}
      >
        <img src={img} alt=""/>
      </Modal>
    </Details>
  </Wrapper>
  )
}

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css'


export function Example({showModal,onActive,onSubmitReport,idTask}) {  
    const [textArea,setTextArea] = useState()
    
    const report ={
        "report": textArea,
        "id":idTask.id,
        "name": idTask.nameTask
    }


  return (
      <Modal show={showModal} onHide={onActive} className='modal'>
          <h2>Salvar relatório</h2>
        <Modal.Body className='body'>
          <label>Relatório:</label>
          <textarea onChange={(e) => setTextArea(e.target.value)}></textarea>
        </Modal.Body>
        <Modal.Footer className='footer'>
          <Button variant="secondary" onClick={onActive}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSubmitReport(report)}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

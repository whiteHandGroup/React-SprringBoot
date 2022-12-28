import React, {useState} from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import axios from 'axios'

const InsertBook = ({ show, onHide }) => {
    const [book, setBook] = useState({bk_name:'', bk_author:'', bk_publisher:'', bk_price:''})

    function handleBookName(e) {
        console.log(e.target.value)
        setBook({...book,bk_name:e.target.value})
    }

    function handleBookAuthor(e) {
        console.log(e.target.value)
        setBook({...book,bk_author:e.target.value})
    }

    function handleBookPublisher(e) {
        console.log(e.target.value)
        setBook({...book,bk_publisher:e.target.value})
    }

    function handleBookPrice(e) {
        console.log(e.target.value)
        setBook({...book,bk_price:e.target.value})
    }

    function handleSubmit(){
        console.log(book);
        axios.post('/book/insertBook', book)
        .then(response => {
            alert('Insert Book Success!')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        도서 추가
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>제목</Form.Label>
                            <Form.Control placeholder="Enter Book Name" onChange={handleBookName} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>저자</Form.Label>
                            <Form.Control placeholder="Enter Book Author" onChange={handleBookAuthor} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>출판사</Form.Label>
                            <Form.Control placeholder="Enter Book Publisher" onChange={handleBookPublisher} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>가격</Form.Label>
                            <Form.Control placeholder="Enter Book Price" onChange={handleBookPrice} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>장르</Form.Label>
                            <Form.Check type="checkbox" label="만화" />
                            <Form.Check type="checkbox" label="여행" />
                            <Form.Check type="checkbox" label="소설/시/희곡" />
                            <Form.Check type="checkbox" label="외국어" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block="true" variant="info" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Container>
        </Modal>
    );
}

export default InsertBook;
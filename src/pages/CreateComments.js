import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

const CreateComments = () => {
    const [ content,   setContent   ] = useState("");
    const [ author,    setAuthor    ] = useState("");
    const [ articleId, setArticleId ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("content : ",   content);
        console.log("author : ",    author);
        console.log("articleId : ", articleId);
    }

    const handleChange = (event) => {
        console.log("target name : ", event.target.name);
        console.log("target value : ", event.target.value);

        switch(event.target.name) {
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            case "artilceId":
                setArticleId(event.target.value);
                break;
            // no default
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comment.content" >
                    <Form.Label>Créer un commentaire</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                    />
                </Form.Group>
                <Form.Group controlId="comment.author" >
                    <Form.Label>Id de l'Auteur</Form.Label>
                    <Form.Control
                        type="number"
                        name="author"
                        onChange={handleChange}
                        value={author}
                    />
                </Form.Group>
                <Form.Group controlId="comment.articleId" >
                    <Form.Label>Id de l'Article</Form.Label>
                    <Form.Control
                        type="number"
                        name="articleId"
                        onChange={handleChange}
                        value={articleId}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Publier</Button>
            </Form>
        </Container>
    )
};

export default CreateComments;
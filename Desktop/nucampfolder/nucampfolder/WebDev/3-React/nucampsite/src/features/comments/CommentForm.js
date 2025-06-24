import { useState } from "react";
import { Button,Modal,ModalHeader,ModalBody,FormGroup,Label } from "reactstrap";
import { Formik,Field,Form,ErrorMessage } from "formik";
import { validateContactForm } from "../../utils/validateCommentForm";
const CommentForm=({campsiteId})=>{
    const [modalOpen,setModalOpen]=useState(false);
 const handleSubmit=(values)=>{
   
     const comment= {
            id: values.id,
            campsiteId: parseInt(campsiteId),
            rating: parseInt(values.rating),
            text: values.commentText,
            author: values.author
        };
        console.log(comment);
        setModalOpen (false)
        }
    return(
       
        <>
        <Button
             outline
            onClick={() => { alert(`Add comment campsite ${campsiteId}`);setModalOpen(true);
   
             }}>

            <i className='fa fa-pencil fa-lg' /> add comment 
        </Button>
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
            <ModalHeader toggle={()=>setModalOpen(false)}>
                Add Comment
            </ModalHeader>
            <ModalBody>
            <Formik initialValues={{
                rating:undefined,
                 author:'',
                 commentText:''
                 }} 
                 onSubmit={handleSubmit}
                 validate={validateContactForm}>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                             <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                <ErrorMessage name='rating'>
                                  {msg => <div className='text-danger'>{msg}</div>}
                                  </ErrorMessage>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label htmlFor="author">Your Name</Label>
                              <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                 <ErrorMessage name='author'>
                                     {msg => <div className='text-danger'>{msg}</div>}
                                 </ErrorMessage>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label htmlFor="commentText"> Comment</Label>
                        </FormGroup>
                         <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        
                    </Form>

            </Formik>
            </ModalBody>
        </Modal>
        </>
    );
};
export default CommentForm;
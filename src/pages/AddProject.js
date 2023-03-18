import React,{useState} from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './AddProject.css'

  
const AddProject = () => {
  const [userInfo, setuserInfo] = useState({
    title: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value


    });
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    // event.persist();
    //   if(userInfo.description.value.length < 50){
    //     setError('Required, Add description minimum length 50 characters');
    //     return;
    //   }
    axios.post('http://localhost:80/api/user/save', {
      title: userInfo.title,
      description: userInfo.description.value
    })
  }
  
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }
  
  const [isError, setError] = useState(null);
  // const PoemAddbooks = async (event) => {
  //   try {
  //     event.preventDefault();
  //     axios.post(`http://localhost:80/user/save`, {
  //       title: userInfo.title,
  //       description: userInfo.description.value,
  //     })
  //     .then(res => { // then print response status
  //       if(res.data.success === true){
  //         // navigator('')
  //       }
  //     })
  //   } catch (error) { throw error;}    
  // }



  return (
    <>
    <div className="Addproject">
    <div className="container">  
    {/* this is where the section begins */}
      <div className="row"> 
        <form className="update__forms" onSubmit={handleSubmit}>
          <h3 className="myaccount-content"> Add  </h3>
          <div className="form-row">
            <div className="form-col-1">
              <label className="form-title"> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
            </div>
            <div className="form-col-2">
              <label className="form-description"> Description <span className="required"> * </span> </label>
                <Editor
                  editorState={description}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
              {/* change display to watch html code that wysiwyg creates */}
            </div>
            {isError !== null && <div className="errors"> {isError} </div>}
            <div className="col-3">
              <button type="submit" className="submit-button"> Submit  </button>
            </div> 
          </div> 
        </form>
      </div>
    </div>
  </div>
  </>
  );
};
  
export default AddProject;
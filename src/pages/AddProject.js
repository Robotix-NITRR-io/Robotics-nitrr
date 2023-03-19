import React,{useState} from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './AddProject.css'

 


const AddProject = () => {

  const navigate = useNavigate();

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
    event.persist();
      if(userInfo.description.value.length < 50){
        setError('Required, Add description minimum length 50 characters');
        return;
      }
    axios.post('http://localhost:80/api/user/save', {
      title: userInfo.title,
      description: userInfo.description.value,
      thumb: userInfo.thumb
    }).then(function(res){
      console.log(res.data);
      navigate('/ProjectList')
    })
  }
  
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }
  
  const [isError, setError] = useState(null);
 
  return (
    <>
    <div className="Addproject">
    <div className="container">  
    {/* this is where the section begins */}
      <div className="row"> 
        <form className="update__forms" onSubmit={handleSubmit}>
          <h3 className="form-add"> CREATE YOUR POST  </h3>
          <div className="form-row">
            <div className="form-col-1">
              <div className='row-1' id='test'>
              <label className="form-title"> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
              </div>
              <div className='row-2'>
              <label className="form-thumb">Thumbnail </label>
              <input type="text" name="thumb" value={userInfo.thumb} onChange={onChangeValue}  className="form-thumb" placeholder="Past your Thumbnail"/>
              </div>
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
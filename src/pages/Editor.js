import React, {useState} from 'react';
import RichEditor from '../components/RichEditor';
import './editor.css'
  
const Editor = () => {
    const [value, setValue] = useState('')

    const config = {
      buttons: ["bold","italic","underline","link","unlink","source","brush","font","fontsize","image","align"],
      theme: "dark",
      colorPickerDefaultTab: 'background',
      useSplitMode: true,
      width: '80vh',
      height: '60vh',
  
    }
  
    return (
      <div className="App row">
          <div className='area' style = {{Align:'center'}}>
              {/* <div style = {{Align:'center'}}>
                <h3>TEXT EDITOR</h3>
              </div> */}
              <RichEditor setValue={setValue} config = {config} />
              <br/>
              {/* <div>
                <div>{value}</div>
              </div> */}
          </div>
      </div>
    );
};
  
export default Editor;
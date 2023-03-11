import React,{useRef} from "react";
import JoditEditor from 'jodit-react'



const RichEditor = ({setValue, config }) => {
    const editor = useRef(null);
    return(<JoditEditor ref={editor}  config={config}/>)
}

export default RichEditor;
import React, {useState} from 'react';
import './editor.css'
  
const Editor = () => {
    const [value, setValue] = useState('')
    // const [image, setImage] = useState('')
    // function handleImage(e){
    //   console.log(e.target.file)
    //   setImage(e.target.files[0])
    // }

  // fuction
  const textarea = document.getElementById("textarea1");

function f1(e) {
    let value = e.value;
    console.log(value);
}

function f2(e) {
    // if (textarea.style.fontWeight == "bold") {
    //     textarea.style.fontWeight = "normal";
    //     e.classList.remove("active");
    // }
    // else {
    //     textarea.style.fontWeight = "bold";
    //     e.classList.add("active");
    // }
    let value = e.value;
    console.log(value);
}

function f3(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5(e) {
    textarea.style.textAlign = "left";
}

function f6(e) {
    textarea.style.textAlign = "center";
}

function f7(e) {
    textarea.style.textAlign = "right";
}

function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener('load', () => {
    textarea.value = "";
});

    return (
      <div className="editor">
        <section>
        <div className="row">
            <div className="col 1">
                <div className="first box">
                    <input id="font-size" type="number" value="16" min="1" max="100" onChange={f1}/>
                </div>
                <div className="second box">
                    <button type="button" onClick={f2}>
                        bold
                    </button>
                    <button type="button" onClick={f3}>
                        italic
                    </button>
                    <button type="button" onClick={f4}>
                        underline
                    </button>
                </div>
                <div className="third box">
                    <button type="button" onClick={f5}>
                       left
                    </button>
                    <button type="button" onClick={f6}>
                        center
                    </button>
                    <button type="button" onClick={f7}>
                        right
                    </button>
                </div>
                <div className="fourth box">
                    <button type="button" onClick={f8}>aA</button>
                    <button type="button" onClick={f9}>
                        slash
                    </button>
                    <input type="color" onChange={f10}/>
                </div>
            </div>
        </div>
        <br/>
        {/* <div className="row">
            <div className="fithbox">
                <input type="file" name="file"/>
                <button type="button" onClick="f10()">submit</button>
                <button type="button" onClick="f11()">quote</button>
            </div>
        </div> */}

            <div className="col">
                <textarea id="title" placeholder="Enter you title here"></textarea>
            </div>

            <div className="col">
                <textarea placeholder="Enter you text here"></textarea>
        </div>
    </section>

      </div>
    );
};
  
export default Editor;
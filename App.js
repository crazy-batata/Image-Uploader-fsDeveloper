import { useState , useRef} from "react";
import { useDropzone } from "react-dropzone";
import Container from "./components/Container";
import LoadingBar from "./components/LoadingBar";
import UrlBox from "./components/UrlBox";
import "./style/App.css";
import img from "./res/image.svg";
import successImg from "./res/sucess.svg";
import backImg from "./res/previous.svg";
function App() {
  const [appState,setAppState] = useState("start");
  const [file , setFile] = useState({});
  const [dragEvents,setDragEvents] = useState("leave"); 
  const {getRootProps,getInputProps,open} = useDropzone({
    accept:"image/*",
    onDragEnter:()=>{setDragEvents("enter");},
    onDragLeave:()=>{setDragEvents("leave");},
    onDrop:onDropFile,
  });

  function onDropFile(file){
    setFile({
      img:URL.createObjectURL(file[0]),
    });
    setAppState("loading");
    setTimeout(()=>{
      setAppState("show");
    },500)
  }
  function backToStart(){
    URL.revokeObjectURL(file.img);

    setAppState("start");
    setDragEvents("leave");
  }

  return (
    <div id="App">
        <Container customClass={`main-container ${appState === "start" ? "" :"display-none"}`}>
          <header>
            <h1>Upload your image</h1>
            <p>File should be Jpeg, Png,...</p>
          </header>
          <Container customClass={`img-drop-down drag-${dragEvents}`}>
            <div {...getRootProps()} style={{width:"100%",height:"100%"}}>
                <input {...getInputProps()} />
                <img src={img} alt="" />
                <p>Drag & Drop your image here</p>
            </div>
          </Container>
          <footer>
            <p>Or</p>
            <button onClick={open} className="btn">Choose a file</button>
          </footer>
        </Container>
        <LoadingBar customClass={`loading-bar ${appState === "loading" ? "play-loading-anim" :"display-none"}`}></LoadingBar>
        <Container customClass={`img-preview ${appState === "show"? "" : "display-none"}`}>
          <div className="grid-container">
            <img src={backImg} alt="" width="35px" className="back-btn" onClick={backToStart}/>
            <img src={successImg} alt="" width="35px"/>
          </div>
          <p>Uploaded Successfully!</p>
          <div className="img-container">
            <img  onClick={()=>{window.open(file.img)}} src={file.img}  className="preview"/>
          </div>
          <UrlBox customClass={"url-container"} url={file.img}/>
        </Container>
    </div>
  );
}

export default App;

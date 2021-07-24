import { useRef } from "react";
function UrlBox({customClass,url}) {
    const urlRef = useRef();
    function copyText(e){
        urlRef.current.select();
        document.execCommand("copy");
        alert("copying done.")
    }
    return (
        <div  className={`UrlBox-comp ${customClass}`}>
            <input ref={urlRef} type="text" value={url}  />
            <button onClick={copyText} className="btn">Copy Link</button>
        </div>
    );
}

export default UrlBox;

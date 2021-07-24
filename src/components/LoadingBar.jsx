import Container from "./Container";
function LoadingBar({customClass}) {
    return (
        <Container customClass={customClass}>
            <h1>Uploading...</h1>   
            <div className="bar">
                <div className="moving-part"></div>
            </div>         
        </Container>
    );
}

export default LoadingBar;

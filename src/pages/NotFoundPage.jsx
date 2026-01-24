import "../styles/CSPage.css"
import PixelSnow from '../PixelSnow';
import { Link } from "react-router-dom";

function NotFoundPage  () {
    return (
        <div className="cspage">  
            <div className="snow-layer">
                <PixelSnow 
                color="#ffffff"
                flakeSize={0.01}
                minFlakeSize={1.25}
                pixelResolution={400}
                speed={1.1}
                density={0.2}
                direction={125}
                brightness={4}
                />
            </div>
            <div style={{height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h1> Page Not Found</h1>
                <Link to={"/"}>
                    <button style={{color:""}}> Go Back Home</button>
                </Link>
            </div>
            
        </div>
    );

} 

export default NotFoundPage;
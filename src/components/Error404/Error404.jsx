// ... imports ...
import "./error404.css"
import { Link } from "react-router-dom"

// ... Main Component ...
export default function Error404(){
    return (
        <div>
            <h1 className='err404'>⚠️ Error 404: Está página no existe ⚠️</h1>
            <Link to="/"><button className="menuBtn">Volver al Menú</button></Link>
        </div>
    )
}
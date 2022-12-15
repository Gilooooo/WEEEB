import { BrowserRouter as Router, Route} from "react-router-dom";
import Data from "../components/Login/data";

export default function(){
    return(
        <div>
            <Router>
                <Route path="../components/Login/data" element={<Data/>} />
            </Router>
        </div>
    );

}
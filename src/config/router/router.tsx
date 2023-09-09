import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
// import ButtonAppBar from "../../pages/navbar";
import ResponsiveAppBar from "../../poages/navbar";
// import Main from "../../poages/mainui";
import Carousle from "../../poages/banner";

export default function AppRouter(){
    return(<>
     
     <Router>
        <Routes>
            <Route path="/*" element={<Carousle />}/>
        </Routes>
     </Router>
    
    </>)
}
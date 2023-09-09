import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ResponsiveAppBar from './navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './forproduct/product'
import Detailed from './forproduct/detailedProduct'


export default function Carousle(){
    return(<>
    <ResponsiveAppBar />
   

<Routes>
    <Route path='/' element={<Products />}/>
    <Route path='detailedproduct/:id' element={<Detailed />}/>
</Routes>
    </>)
}
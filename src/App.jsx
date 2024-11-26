import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./component/articles/Listarticles";


import Listcategories from "./component/categories/Listcategories";
import Listscategories from "./component/scategories/Listscategories";
import Menu from "./component/Menu";
import Insertarticle from "./component/articles/Insertarticle";
import Editarticle from "./component/articles/Editarticle";
import Listarticlescard from "./component/Client/Listarticlescard";


const App=() =>{
return (
<div>
<Router>
<Menu/>
<Routes>
<Route path="/articles" element={<Listarticles/>}/>
<Route path="/categorie" element={<Listcategories/>}/>
<Route path="/scategorie" element={<Listscategories/>}/>
<Route path="/articles/add" element={<Insertarticle />}/>
<Route path="/articles/edit/:id" element={<Editarticle />}/>
<Route path="/client" element={<Listarticlescard/>}/>

</Routes>

</Router>
</div>
);
}
export default App;
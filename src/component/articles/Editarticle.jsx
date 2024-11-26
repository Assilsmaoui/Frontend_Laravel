import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";

const Editarticle = () => {
  const navigate = useNavigate();
    const [article, setArticle] = useState({});
    const [scategories, setScategories] = useState([]);
    const{id}=useParams()
    
    const loadscategorie = async () => {
        try {
            const res = await axios.get("https://tp1-laravel.vercel.app/api/api/scategories");
            setScategories(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const loadarticles = async (id) => {
      try {
          const res = await axios.get(`https://tp1-laravel.vercel.app/api/api/articles/${id}`);
          setArticle(res.data);
      } catch (error) {
          console.log(error);
      }
  };

    useEffect(() => {
        loadscategorie();
        loadarticles(id)
    }, []);

    const handleUpdate = async (e) => {
        try {
            e.preventDefault();
            console.log(article);
            await axios.put(`https://tp1-laravel.vercel.app/api/api/articles/${id}`, article)
                .then(res => {
                    navigate("/articles");
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="com-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <center><h1>Modifier article</h1></center>
            <Form>
                <Row>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Reference</Form.Label>
                        <Form.Control type="text" placeholder="Reference"
                            value={article.reference}
                            onChange={(e) => setArticle({ ...article, reference: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Designation"
                            value={article.designation}
                            onChange={(e) => setArticle({ ...article, designation: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Marque</Form.Label>
                        <Form.Control type="text" placeholder="Marque"
                            value={article.marque}
                            onChange={(e) => setArticle({ ...article, marque: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number" placeholder="Stock"
                            value={article.qtestock}
                            onChange={(e) => setArticle({ ...article, qtestock: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control type="number" placeholder="Prix"
                            value={article.prix}
                            onChange={(e) => setArticle({ ...article, prix: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Image"
                            value={article.imageart}
                            onChange={(e) => setArticle({ ...article, imageart: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} mb="6">
                        <Form.Label>Scategorie</Form.Label>
                        <Form.Control type="text" as="select"
                            placeholder="S/Categorie"
                            value={article.scategorie}
                            onChange={(e) => setArticle({ ...article, scategorie: e.target.value })}
                        >
                            {scategories.map((scat, index) =>
                                <option value={scat.id} key={index}>{scat.nomscategorie}</option>
                            )}
                        </Form.Control>
                    </Form.Group>
                </Row>
            </Form>
            <button className='btn btn-success btn-sm' onClick={handleUpdate}><i className="fa-solid fa-floppy-disk"></i> Enregistrer</button>
            &nbsp;
            <button className='btn btn-danger btn-sm' onClick={() => navigate("/articles")}><i className="fa-solid fa-arrow-right-from-bracket"></i> Annuler</button>
        </div>
    );
};

export default Editarticle;

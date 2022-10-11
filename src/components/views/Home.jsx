import { Container } from "react-bootstrap";
import CardProducto from './producto/CardProducto'

const Home = () => {
    return (
        <Container className="my-5 mainSection">
            <h1 className="display-3 text-center">Bienvenidos</h1>
            <hr />
            <Row xs={1} md={4} className='g-4'>
                <CardProducto></CardProducto>
            </Row>
        </Container>
    );
};

export default Home;





import dioLogo from "../../assets/logo-dio.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import Avatar from "../Avatar";
import {
    Wrapper,
    Container,
    Col,
    SearchBar,
    Nav
} from "./styles";

export default function Header({ autenticado }) {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>

                <Col>
                    <Link className="teste" to="/">
                        <img src={dioLogo} alt="logo" />
                    </Link>

                    {autenticado ? (
                        <>
                            <SearchBar>
                                <input placeholder="Buscar" />
                            </SearchBar>
                            <Nav>
                                <Link to="/live-code">Live Code</Link>
                                <Link to="/global">Global</Link>
                            </Nav>
                        </>
                    ) : null}

                </Col>

                <Col className="flex-end">

                    {autenticado ? <Avatar src="https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg" size={42} /> : null}

                    <Nav>
                        <Button onClick={() => navigate("/login")} variant="secondary" label="Entrar" />
                        <Button onClick={() => navigate("/cadastro")} variant="secondary" label="Cadastrar" />
                    </Nav>
                </Col>
            </Container>
        </Wrapper>
    );
}

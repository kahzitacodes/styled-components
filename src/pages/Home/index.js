import Button from "../../components/Button";
import illustration from "../../assets/home-image.png";
import { Container, Title, Col, Copy } from "./styles";
import { useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate();

    return (
        <Container>

            <Col className="content flex-start">
                <Title><strong>Implemente</strong> seu futuro global agora!</Title>
                <Copy>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </Copy>
                <Button onClick={() => navigate('/cadastro')} variant="primary" label="Começar agora" />
            </Col>

            <Col className="flex-center flex-grow">
                <img src={illustration} alt="a future developer" />
            </Col>

        </Container>
    );
}
import Card from "../../components/Card";
import { Container, Title, Col, FeedList, UserList } from "./styles";
import UserInfo from "../../components/UserInfo";

export function Feed() {
    return (
        <Container>
            <Col flex={2}>
                <Title>Feed</Title>
                <FeedList>
                    <Card
                        image='https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
                        userPicture='https://avatars.githubusercontent.com/u/103468458?s=400&u=d87320c213469527d1b5f59dabe1c2df1e776116&v=4'
                    />
                    <Card
                        image='https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
                        userPicture='https://avatars.githubusercontent.com/u/103468458?s=400&u=d87320c213469527d1b5f59dabe1c2df1e776116&v=4'
                    />
                    <Card
                        image='https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
                        userPicture='https://avatars.githubusercontent.com/u/103468458?s=400&u=d87320c213469527d1b5f59dabe1c2df1e776116&v=4'
                    />
                </FeedList>
            </Col>
            <Col flex={1}>
                <Title># RANKING 5 TOP DA SEMANA</Title>
                <UserList>
                    <UserInfo
                        userName="Karine Pereira"
                        userPicture='https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
                        percentual={50}
                    />
                    <UserInfo
                        userName="Karine Pereira"
                        userPicture='https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
                        percentual={50}
                    />
                    <UserInfo
                        userName="Karine Pereira"
                        userPicture='https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
                        percentual={50}
                    />
                </UserList>

            </Col>
        </Container>
    );
}
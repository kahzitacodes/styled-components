import { MdThumbUp } from "react-icons/md";
import Avatar from "../Avatar";
import { ICard } from "./types";
import {
    CardContainer,
    CardImage,
    CardContent,
    UserInfo,
    PostInfo,
    PostTags,
    PostLikes
} from "./styles";

export default function Card({ userPicture, image }: ICard) {
    return (
        <CardContainer>
            <CardImage image={image} />
            <CardContent>
                <UserInfo>
                    <Avatar src={userPicture} size={40} />
                    <div>
                        <h4>Nome do usuario</h4>
                        <span>Há 8 minutos</span>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Nome do projeto</h4>
                    <p>ahiusdhaiushdiausd asdhaushdiua ausdhausd asdiuaisudhasd ausdhas sauhdsuas dud</p>

                </PostInfo>
                <PostTags>
                    <span className="tag">#HTML</span>
                    <span className="tag">#CSS</span>
                    <span className="tag">#REACT</span>
                </PostTags>

                <PostLikes>
                    <MdThumbUp />
                    <span>10</span>
                </PostLikes>

            </CardContent>
        </CardContainer>
    );
}

import { UserInfoContainer, UserProgress } from "./style";
import Avatar from "../Avatar";
import { IUserinfo } from "./types";

export default function UserInfo({ userName, userPicture, percentual }: IUserinfo) {
    return (
        <UserInfoContainer>
            <Avatar src={userPicture} size={48} />
            <div className="infos flex-grow">
                <h4>{userName}</h4>
                <UserProgress percentual={percentual} />
            </div>
        </UserInfoContainer>
    );
}

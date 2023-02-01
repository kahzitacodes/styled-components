import { AvatarContainer } from "./styles";
import { IAvatar } from "./types";

export default function Avatar({ src, size }: IAvatar) {
    return (
        <AvatarContainer src={src} size={size} />
    );
}

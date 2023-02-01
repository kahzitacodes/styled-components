import { Btn } from "./styles";
import { IButton } from "./types";

export default function Button({ label, onClick, variant }: IButton) {
    return (
        <Btn variant={variant} onClick={onClick}>{label}</Btn>
    );
}

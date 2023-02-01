import { Btn } from "./styles";

export default function Button({ label, onClick, variant }) {
    return (
        <Btn variant={variant} onClick={onClick}>{label}</Btn>
    );
}

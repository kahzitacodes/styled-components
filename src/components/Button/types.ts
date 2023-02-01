export interface IButton {
    label: string,
    variant: string,
    onClick?: () => void;
    type?: string,
}

export interface IButtonStyled {
    variant: string;
}
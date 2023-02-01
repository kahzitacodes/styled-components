import { InputContainer, IconWrap, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

export default function Input({ leftIcon, name, errorMsg, control, ...rest }) {
    return (
        <InputContainer>
            {leftIcon ? <IconWrap>{leftIcon}</IconWrap> : null}
            <Controller
                defaultValue={''}
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} {...rest} />}
            />

            {errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
        </InputContainer>
    );
}

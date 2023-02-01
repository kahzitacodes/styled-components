import { Container, Title, Col, Subtitle, LinksWrap, Disclaimer } from "./styles";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Este email não é válido').required('Campo obrigatório'),
    password: yup.string().min(6, 'Use no mínimo 6 caracteres').required('Campo obrigatório'),
}).required();

export function Register() {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        try {

            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);

            if (data.length === 0) {
                alert('Email ou usuário inválido');
                return;
            }

            navigate('/feed');

        } catch (error) {
            alert('Houve um erro, tente novamente');
        }
    };

    return (
        <Container>
            <Col className="flex-grow2">
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Col>
            <Col className="flex-grow">
                <Title>Já tem cadastro?</Title>
                <Subtitle>
                    Faça seu login e make the change._
                </Subtitle>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        name="name"
                        control={control}
                        leftIcon={<MdPerson />}
                        type="text"
                        placeholder="Nome"
                        errorMsg={errors.name?.message}
                    />

                    <Input
                        name="email"
                        control={control}
                        leftIcon={<MdEmail />}
                        type="email"
                        placeholder="Email"
                        errorMsg={errors.email?.message}
                    />

                    <Input
                        name="password"
                        control={control}
                        leftIcon={<MdLock />}
                        type="password"
                        placeholder="Senha"
                        errorMsg={errors.password?.message}
                    />

                    <Button variant="primary" label="Criar minha conta" type="submit" />

                </form>

                <Disclaimer>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </Disclaimer>

                <LinksWrap>
                    <p>Já tenho conta. <Link className="success" to="/login">Fazer login</Link></p>
                </LinksWrap>
            </Col>

        </Container>
    );
}
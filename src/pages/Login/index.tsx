import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { IFormLogin, defaultValues } from './types'
import { useEffect, useState } from "react";

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório')
  })
  .required()

const Login = () => {
  const {
    control,
    formState: {errors, isValid}

  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange'
  })
  const [buttonDisable, setbuttonDisable] = useState(true)

  useEffect(() =>{
      setbuttonDisable(!isValid)
  }, [isValid])

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" placeholder="Email" control={control} errorMessage={errors?.email?.message}/>
          <Spacing />
          <Input  name="password" placeholder="Senha" control={control} errorMessage={errors?.password?.message}/>
          <Spacing />
          <Button title="Entrar" disable={buttonDisable} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;

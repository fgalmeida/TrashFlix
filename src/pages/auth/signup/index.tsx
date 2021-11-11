import Router from "next/router";
import {
  Container,
  Form,
  Heading,
  Input,
  Button,
  Link,
  SubContainer
} from "../../../styles/SignInStyles";

import { AuthContext } from "../../../contexts/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";

import { toast } from "react-toastify";
import { useState } from "react";
import { api } from "../../../services/apiClient";
import Header from '../../../components/UI/Header';

type ToastProps = {
  newMessage?: string;
};

type RegisterFormData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  surname: yup.string().required("Sobrenome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

const SignUp = () => {
  const [termsConfirmation, setTermsConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });
  const handleRegister: SubmitHandler<RegisterFormData> = async (
    values,
    event
  ) => {
    try {
      const user = {
        name: values.name,
        last_name: values.surname,
        email: values.email,
        phrase: values.password,
      };

      if (!termsConfirmation)
        return handleSendErrorToast({
          newMessage: "Aceite os termos de uso para concluir o registro",
        });

      const res = await api.post("auth/register", user);

      if (res.status === 201 || res.status === 200) {
        Router.push("/auth/signin");
      }
    } catch (e) {
      if (e.response.status === 412) {
        return handleSendErrorToast({
          newMessage:
            "E-mail já cadastrado, tente recuperar a senha ou fazer o login",
        });
      }

      handleSendErrorToast({
        newMessage: "Erro interno, tente novamente mais tarde",
      });
    }
  };

  const handleSendErrorToast = ({ newMessage }: ToastProps) => {
    let message =
      newMessage ||
      errors?.name?.message ||
      errors?.surname?.message ||
      errors?.email?.message ||
      errors?.password?.message;

    if (message)
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  return (
    <Container>
      <Header logout={true} />
      <SubContainer>
        <Form onSubmit={handleSubmit}>
          <Heading>Sign Up</Heading>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            {...register("name")}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
            {...register("surname")}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            required
            {...register("password")}
          />
          <Button type="submit">Register</Button>
          <Link href="/auth/signin">Already have an account? Login</Link>
        </Form>
      </SubContainer>
    </Container>
  );
};

export default SignUp;

import Router from "next/router";
import {
  Container,
  Form,
  Heading,
  Input,
  Button,
  Link,
  SubContainer,
} from "../../../styles/SignInStyles";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";

import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import { api } from "../../../services/apiClient";
import Header from "../../../components/molecules/Header";
import Head from "next/head";

type ToastProps = {
  newMessage?: string;
};

type RegisterFormData = {
  name: string;
  last_name: string;
  email: string;
  password: string;
};

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  last_name: yup.string().required("Sobrenome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

const SignUp = () => {
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
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      };

      const res = await api.post("/auth/register", user);

      if (res.status === 201 || res.status === 200) {
        notifySucces("Sucesso ao se registrar!");
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
      errors?.last_name?.message ||
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

  const notifySucces = useCallback((message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <>
      <Head>
        <title>TrashFlix | Filmes </title>
      </Head>
      <Container>
        <Header black />
        <SubContainer>
          <Form onSubmit={handleSubmit(handleRegister)}>
            <Heading>Sign Up</Heading>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              required
              {...register("name")}
            />
            <Input
              type="text"
              name="lastname"
              placeholder="Sobrenome"
              required
              {...register("last_name")}
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
              placeholder="Senha"
              autoComplete="new-password"
              required
              {...register("password")}
            />
            <Button type="submit">REGISTRAR</Button>
            <Link href="/auth/signin">Ja tem conta? Login</Link>
          </Form>
        </SubContainer>
      </Container>
    </>
  );
};

export default SignUp;

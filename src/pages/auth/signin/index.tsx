import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";

import { toast } from "react-toastify";
import { Container, SubContainer, Input, Button, Form, Heading, Link } from "../../../styles/SignInStyles";
import { AuthContext } from "../../../contexts/AuthContext";
import Header from '../../../components/UI/Header';

type ToastProps = {
  newMessage?: string;
};

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Usuário ou senha icorretos"),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    try {
      const user = {
        email: values.email,
        password: values.password,
      };

      const res = await signIn(user);

      if (res.status === 200 || 201) {
        router.push("/dashboard");
      }
    } catch (e) {
      if (e.message.includes("401") || e.message.includes("404")) {
        handleSendErrorToast({ newMessage: "Email ou senha incorretos" });
      } else {
        handleSendErrorToast({
          newMessage: "Erro interno, tente novamente mais tarde",
        });
      }
    }
  };

  const handleSendErrorToast = ({ newMessage }: ToastProps) => {
    let message =
      newMessage || errors?.email?.message || errors?.password?.message;
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
      <Header logout={true}/>
      <SubContainer>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Heading>Login</Heading>
        <Input
          name="email"
          type="email"
          placeholder="example@hotmail.com"
          autoComplete="email"
          required
          {...register("email")}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          {...register("password")}
        />
        <Button type="submit">Login</Button>
        <Link href="/auth/signup"><span>New to TrashFlix? </span> Sign up</Link>
      </Form>
      </SubContainer>
    </Container>
  );
};

export default SignIn;

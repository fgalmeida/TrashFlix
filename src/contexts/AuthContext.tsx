import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";
import { AxiosResponse } from "axios";

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  email: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<AxiosResponse<any>>;
  signOut: () => void;
  isAuthenticaded: boolean;
  user: User;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

type AuthProviderProps = {
  children: ReactNode;
};

export function signOut() {
  destroyCookie(undefined, "trashflix.auth.token");
  destroyCookie(undefined, "trashflix.auth.refreshToken");

  authChannel.postMessage("signOut");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticaded = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "singOut":
          signOut();
          break;
        default:
          break;
      }
    };
  }, []);

  // useEffect(() => {
  //   const { 'ultimo.auth.token': token } = parseCookies();

  //   if(token) {
  //     api.get('/me').then(res => {
  //       const { email } = res.data;

  //       setUser({ email })
  //     }).catch(() => {
  //       signOut();
  //     })
  //   }
  // }, [])

  async function signIn({ email, password }: SignInCredentials) {
    const res = await api.post("/auth/signin", {
      email,
      password,
    });

    const token = res.data.token;

    authChannel.postMessage("signIn");

    setCookie(undefined, "trashflix.auth.token", token, {
      maxAge: 60 * 60 * 24 * 30, // 1 month
      path: "/",
      secure: true,
    });

    setUser({
      email,
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    return res;
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticaded, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

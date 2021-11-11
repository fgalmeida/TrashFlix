import Image from "next/image";
import { Icon, Avatar, Dropdown } from "rsuite";

import styles from "../Header/header.module.scss";
import "rsuite/dist/styles/rsuite-default.css";
import { useRouter } from 'next/router';
import { NavBar } from './Header';

type HeaderType = {
  user?: string;
  avatar?: string;
  email?: string;
  logout?: boolean;
};

export default function Header({ user, avatar, logout, email }: HeaderType) {
  const router = useRouter()
  const handleLogin = () => {
    router.push("/auth/signin")
  }
  return (
    <NavBar>
      <div className="left-container">
        <img src="/Logo.svg" alt="Logo" />
      </div>
      <div className="right-container">
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </NavBar>
  );
}

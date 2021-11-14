import Image from "next/image";
import { Icon, Avatar, Dropdown } from "rsuite";

import styles from "../Header/header.module.scss";
import "rsuite/dist/styles/rsuite-default.css";
import { useRouter } from "next/router";
import { NavBar } from "./Header";
import { signOut } from "contexts/AuthContext";

type HeaderType = {
  user?: string;
  avatar?: string;
  email?: string;
  black: boolean;
  home?: boolean; 
};

export default function Header({ user, avatar, email, black, home }: HeaderType) {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/auth/signin");
  };
  const handleHome = () => {
    if (home) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
    
  };
  return (
    <NavBar black={black}>
      <div className="left-container">
        <img onClick={handleHome} src="/Logo.svg" alt="Logo" />
      </div>
      <div className="right-container">
        {user ? (
          <Dropdown
            placement="bottomEnd"
            renderTitle={() => {
              return <Avatar src={avatar} size="sm" />;
            }}
          >
            <Dropdown.Item
              panel
              style={{ padding: 10, width: 160, color: "black" }}
            >
              <p>Account</p>
              <strong>{user}</strong>
            </Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item onSelect={() => signOut()}>Sair</Dropdown.Item>
          </Dropdown>
        ) : (
          <button onClick={handleLogin}>LOGIN</button>
        )}
      </div>
    </NavBar>
  );
}

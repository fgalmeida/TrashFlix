import Image from "next/image";
import { Icon, IconButton, Avatar, Dropdown } from "rsuite";

import { signOut } from "next-auth/client";

import styles from "../Header/header.module.scss";
import "rsuite/dist/styles/rsuite-default.css";

export default function Header({ user, avatar, email }) {
  return (
    <header className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <div className={styles.navBarLogoBox}>
          <Image src="/Logo.svg" width={173} height={38} />
        </div>
      </div>
      <div className={styles.navBarRight}>
        <div className={styles.navBarSearchBox}></div>
        <div className={styles.navBarAccountBox}>
          <Dropdown
            placement="bottomEnd"
            renderTitle={() => {
              return <Avatar src={avatar} size="sm" />;
            }}
          >
            <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
              <p>Logado como</p>
              <strong>{user}</strong>
            </Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item onSelect={() => signOut()}>Sair</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

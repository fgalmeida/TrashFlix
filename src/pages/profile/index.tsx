import { useRouter } from "next/router";
import { setupApiClient } from "services/api";
import { withSSRAuth } from "utils/withSSRAuth";
import jwt from "jwt-decode";
import { parseCookies } from "nookies";
import { useState } from 'react';

interface HomeProps {
  user: {
    email: string;
    name: string;
    last_name: string;
    profile_image: string;
  };
}

const Watch = ({ user }: HomeProps) => {
  const router = useRouter();
  const { id } = router.query;

  return <></>;
};

export default Watch;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const cookies = parseCookies(ctx);
  const { sub } = jwt(cookies["trashflix.auth.token"])
  const res = await apiClient.get(`/users/${sub}`);

  return {
    props: {
      user: res.data,
    },
  };
});

import { useRouter } from "next/router";

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

// export const getServerSideProps = withSSRAuth(async (ctx) => {
//   const apiClient = setupApiClient(ctx);

//   const res = await apiClient.get("/users/me");

//   return {
//     props: {
//       user: res.data.body,
//     },
//   };
// });

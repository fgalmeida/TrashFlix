import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const GITHUB_ID = "ADD YOUR GITHUB ID";
const GITHUB_SECRET = "ADD YOUR GITHUB SECRET";

const DISCORD_CLIENT_ID = "ADD YOUR DISCORD CLIENT";
const DISCORD_CLIENT_SECRET = "ADD YOUR DISCORD CLIENT SECRET";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    // ...add more providers here
    Providers.Discord({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const GITHUB_ID = "Iv1.97b3c02409f5794b";
const GITHUB_SECRET = "239c70ced67f9efa11157a9e7107afa73449ca77";

const DISCORD_CLIENT_ID = "869039109191131207";
const DISCORD_CLIENT_SECRET = "3eYvm_e2Jxwokxpa7Lb7IRIrl0YcNlBN";

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

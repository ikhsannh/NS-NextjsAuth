import NextAuth from "next-auth";
import GihubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GihubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
});
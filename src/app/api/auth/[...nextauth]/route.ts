/* eslint-disable */
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { randomBytes, createHmac } from "crypto";
import { Session, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type NextAuthOptions from "next";

declare module "next-auth" {
  interface Profile {
    picture?: string;
  }
}
const GoogleAuthHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Nexavault",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req // Use NextApiRequest instead
      ): Promise<User | null> {
        // console.log("the credentials--->", credentials);
        if (!credentials) {
          return null;
        }
        if (
          credentials.email === process.env.admin_email &&
          credentials.password === process.env.admin_password
        ) {
          return { email: credentials.email } as User;
        } else return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        return true;
      } catch (err) {
        console.error("Error in signIn callback:", err);
        return false;
      }
    },
    async jwt({ token, user, profile, account }) {
      // console.log("JWT callback - profile:", profile);
      // console.log("JWT callback - token before update:", token);
      if (user) {
        token.email = user.email;
      }
      // console.log("JWT callback - token after update:", token);

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // console.log("Session callback - session:", session);
      if (session.user) {
        session.user.email = token.email as string;
        // console.log("-----", token.image);
      }
      // console.log("Session callback - session after update:", session);

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { GoogleAuthHandler as GET, GoogleAuthHandler as POST };

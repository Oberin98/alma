import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const MOCK_USER = {
  id: "58d822f4-e45f-4169-839b-58133a71e403",
  username: "JohnDoe",
  password: "JohnDoe",
};

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      authorize(credentials) {
        if (
          credentials?.username !== MOCK_USER.username ||
          credentials?.password !== MOCK_USER.password
        ) {
          return null;
        }

        return MOCK_USER;
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      // User object is present only immediately after sign in
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
});

export { handler as GET, handler as POST };

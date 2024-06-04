import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const fakePromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (
              credentials.email === "johndoe@gmail.com" &&
              credentials.password === "password123"
            ) {
              resolve({
                id: 1,
                name: "John Doe",
                email: "johndoe@gmail.com",
              });
            } else {
              resolve(null);
            }
          }, 1000);
        });

        const user = await fakePromise;

        if (user) {
          return user;
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

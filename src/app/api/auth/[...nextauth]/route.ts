import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const cookieStore = cookies();
        const userId = cookieStore.get('userId')?.value;
        if (!credentials) {
          return null;
        }

        const values = {
          email: credentials.email,
        };

        const findUser = await prisma.user.findFirst({
          where: values,
        });

        if (!findUser || !findUser.password) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          findUser.password,
        );

        if (!isPasswordValid) {
          return null;
        }

        if (!findUser.verified) {
          return null;
        }

        if (userId) {
          try {
            await prisma.cartItem.updateMany({
              where: {
                userId: userId,
              },
              data: {
                userId: findUser.id,
              },
            });
            prisma.user.delete({
              where: {
                id: userId,
              },
            });
          } catch (error) {
            console.log(error);
          }

          cookieStore.delete('userId');
        }
        return {
          id: findUser.id,
          email: findUser.email!,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }

      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (findUser) {
        token.id = findUser.id;
        token.role = findUser.role;
      }

      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.email = token.email;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };

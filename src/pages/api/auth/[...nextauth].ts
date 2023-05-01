import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { redirect } from 'next/dist/server/api-utils';

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      // GoogleProvider({
      //   clientId: "443041395266-8eld4huh0p7pk3bnd90ac3vfrnsjtuo4.apps.googleusercontent.com" ?? 'missing_google_client_id',
      //   clientSecret: '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' ?? 'missing_google_client_secret',
      //   authorization: {
      //     params: {
      //       prompt: 'consent',
      //       access_type: 'offline',
      //       response_type: 'code',
      //     },
      //   },
      // }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? 'missing_google_client_id',
        clientSecret: process.env.GOOGLE_SECRET ?? 'missing_google_client_secret',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
      }),
    ],
    callbacks: {
      async signIn({ account, profile }) {
        if (account?.provider === "google" && profile?.email) {
          return profile?.email.endsWith("@gmail.com")
        }
        return true // Do different verification for other providers that don't have `email_verified`
      },
    }
}

export default NextAuth(authOptions);
import "~/styles/globals.css";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
        variables: { colorPrimary: "red" },
        signIn: {
          baseTheme: [shadesOfPurple],
          variables: { colorPrimary: "blue" },
        },
      }}
    >
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

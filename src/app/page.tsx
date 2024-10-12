
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center min-h-screen gap-6 mx-auto">
      <h1 className="text-5xl font-bold">Invoicepedia</h1>
      <p>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}

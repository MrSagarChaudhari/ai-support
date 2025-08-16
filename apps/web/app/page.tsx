"use client";

import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <Button onClick={() => addUser()}>add</Button>
            <p>apps/web</p>
            <UserButton />
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be singe in!</p>
        <SignInButton>SineIn</SignInButton>
      </Unauthenticated>
    </>
  );
}

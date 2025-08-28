import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col gap-8">
          <h1 className="text-5xl font-bold">Sign in</h1>
          <SignIn />
        </div>
      </div>
    </div>
  );
}

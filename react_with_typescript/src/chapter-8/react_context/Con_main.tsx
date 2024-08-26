import { useAppContext } from "./App_provider";
import { Con_content } from "./Con_content";

export function Con_main() {
  const { user } = useAppContext();
  return (
    <main className="py-8">
      <h1 className="text-3xl text-center font-bold selection underline">
        Welcome
      </h1>
      <p className="mt-8 text-xl text-center">
        {user ? `Hello ${user.name}!` : "Please sign in"}{" "}
      </p>
      <Con_content />
    </main>
  );
}
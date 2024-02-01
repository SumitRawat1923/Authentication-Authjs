import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Home() {
  return (
    <main className="h-full flex items-center justify-center bg-sky-500">
      <div className="space-y-2 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Authentication
        </h1>
        <p className={cn("text-white", font.className)}>
          A simple authentication service.
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign-In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

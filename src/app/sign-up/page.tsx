import SignUpComponents from "@/components/navbarAndSignup/SignUpComponents";
import { Suspense } from "react";

export default function RegisterForm() {
  return (
    <>
      <Suspense fallback={null}>
        <SignUpComponents />
      </Suspense>
    </>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { PropagateLoader } from "react-spinners";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove("biznode_token");
    router.push("/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h6 className="font-medium text-[24px]">Logging out</h6>
        <PropagateLoader
          color="#27A4FF"
          cssOverride={{}}
          size={20}
          speedMultiplier={1}
        />{" "}
      </div>
    </div>
  );
}

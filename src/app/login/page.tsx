"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GenericForm, GenericFormRef } from "@/components/form/GenericForm";
import { loginSchema } from "@/schema/loginAndRegister/loginSchema";
import { z } from "zod";
import { useRef, useState } from "react";
import { TextField } from "@/components/form/fields/TextField";
import { SubmitButton } from "@/components/form/fields/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import { GoEye, GoEyeClosed } from "react-icons/go";
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/components/shared/toast/ToastSuccess";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { LoginResponse } from "@/types/loginType/loginType";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

type FormType = z.infer<typeof loginSchema>;

const initialValues: FormType = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();
  const formRef = useRef<GenericFormRef<FormType>>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormType | React.FormEvent<HTMLFormElement>) => {
      const response = await axiosInstance.post<LoginResponse>(`/login`, data);
      return response.data;
    },
    onSuccess: (data: LoginResponse) => {
      if (data.success === true) {
        Cookies.set("biznode_token", data.data.data?.token ?? "", {
          expires: 3,
        });
        router.push("/dashboard");
        showSuccessAlert(data?.data?.message);
      } else {
        showErrorAlert(data?.data?.errors?.email);
      }
    },

    onError: (err: AxiosError<{ message: string }>) => {
      console.error("Login failed", err);
      showErrorAlert(err.response?.data.message || err.message);
    },
  });

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    mutate(data);
  };

  const [showPass, setShowPass] = useState<boolean>(false);
  const handlePass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#000D2E] text-white">
      <div className="flex justify-center w-full">
        <Link href="/">
          <Image
            className="md:w-44 w-28"
            src="/logo.png"
            alt="img"
            width={500}
            height={500}
          />
        </Link>
      </div>

      <Card className="w-full max-w-md bg-[#041746] text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
          <CardDescription className="text-white/70">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <GenericForm
            schema={loginSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="space-y-4">
              <TextField
                name="email"
                label="Email"
                type="email"
                placeholder="xyz@gmail.com"
                inputClass="px-3 text-gray-900"
                labelClass=""
              />
              <div className="relative">
                <TextField
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type={!showPass ? "password" : "text"}
                  inputClass="px-3 text-gray-900"
                  labelClass=""
                />
                {!showPass ? (
                  <GoEyeClosed
                    onClick={handlePass}
                    className="absolute top-[30px] size-5 right-3 cursor-pointer text-gray-900"
                  />
                ) : (
                  <GoEye
                    onClick={handlePass}
                    className="absolute top-[30px] size-5 right-3 cursor-pointer text-gray-900"
                  />
                )}
                <div className="w-full text-end">
                  <Link
                    className="text-end text-[14px] font-medium "
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <SubmitButton
                width="full"
                label="Login"
                isLoading={isPending}
                loadingLabel="Processing.."
              />
            </div>
          </GenericForm>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-white/70">
            {`Don't have an account?`}
            <Link href="/sign-up" className="text-white hover:underline">
              Join Now
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

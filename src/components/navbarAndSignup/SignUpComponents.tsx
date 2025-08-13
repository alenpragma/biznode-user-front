"use client";

import type React from "react";
import { useRef, useState } from "react";
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
import { z } from "zod";
import { TextField } from "@/components/form/fields/TextField";
import { SubmitButton } from "@/components/form/fields/SubmitButton";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

import {
  showErrorAlert,
  showSuccessAlert,
} from "@/components/shared/toast/ToastSuccess";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { registerSchema } from "@/schema/loginAndRegister/registerSchema";
import { signUpResponse } from "@/types/loginType/loginType";
import { AxiosError } from "axios";
import { APIErrorResponse } from "@/types/signUpType/signUpType";
import Image from "next/image";

export default function SignUpComponents() {
  const router = useRouter();
  const [showPass, setShowPass] = useState<boolean>(false);
  const handlePass = () => {
    setShowPass(!showPass);
  };

  const searchParams = useSearchParams();
  const referCode = searchParams.get("ref");
  const formRef = useRef<GenericFormRef<FormType>>(null);

  type FormType = z.infer<typeof registerSchema>;
  type RegisterPayload = Omit<FormType, "confirm_password">;

  const initialValues: FormType = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    referCode: referCode || "",
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (
      data: RegisterPayload | React.FormEvent<HTMLFormElement>
    ) => {
      const response = await axiosInstance.post<signUpResponse>(
        `/register`,
        data
      );
      return response.data;
    },
    onSuccess: (data: signUpResponse) => {
      if (data.success === true) {
        Cookies.set("biznode_token", data.data?.token ?? "", {
          expires: 3,
        });
        showSuccessAlert(data.data?.message);
        router.push("/dashboard")
      }
    },
    onError: (err: AxiosError<APIErrorResponse>) => {
      console.log("Registration failed", err);
      showErrorAlert(err.message);
    },
  });

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    if ("preventDefault" in data) return;
    const { confirm_password, ...rest } = data;
    console.log(confirm_password);
    mutate(rest);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000D2E] p-4 text-white">
      <div className="w-full max-w-md">
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

        <Card className="bg-[#041746] text-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-white">
              Create an account
            </CardTitle>
            <CardDescription className="text-center text-white/70">
              Enter your information to create an account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <GenericForm
              schema={registerSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="space-y-3 mb-5">
                <TextField
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="Enter name"
                  inputClass="px-3 text-gray-900"
                  labelClass=""
                />

                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="xyz@gmail.com"
                  inputClass="px-3 text-gray-900"
                  labelClass=""
                />
                <TextField
                  name="mobile"
                  label="Mobile"
                  type="number"
                  placeholder="Enter your mobile number"
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
                      className="absolute top-[30px] size-5 text-gray-900 right-1 cursor-pointer"
                    />
                  ) : (
                    <GoEye
                      onClick={handlePass}
                      className="absolute top-[42px] size-5 text-gray-900  right-1 cursor-pointer"
                    />
                  )}
                </div>

                <TextField
                  name="confirm_password"
                  label="Confirm Password"
                  placeholder="Enter your confirm password"
                  type="password"
                  inputClass="px-3 text-gray-900"
                  labelClass=""
                />

                <TextField
                  name="referCode"
                  label="Refer Code"
                  placeholder="Refer code"
                  type="text"
                  inputClass="px-3 text-gray-900"
                  labelClass=""
                  readOnly={!!referCode}
                />

                <SubmitButton
                  width="full"
                  label="Register"
                  isLoading={isPending}
                  loadingLabel="Processing.."
                />
              </div>
            </GenericForm>
          </CardContent>

          <CardFooter className="flex flex-col">
            <div className="text-center text-sm /70">
              Already have an account?{" "}
              <Link href="/login" className=" hover:underline font-medium">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

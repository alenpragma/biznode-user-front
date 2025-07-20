"use client";

import { SubmitButton } from "@/components/form/fields/SubmitButton";
import { TextField } from "@/components/form/fields/TextField";
import { GenericForm, GenericFormRef } from "@/components/form/GenericForm";
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/components/shared/toast/ToastSuccess";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { withdrawSchema } from "@/schema/withdrawSchema/withdrawSchema";
import { WithdrawalResponse } from "@/types/withdraw/withdrawType";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef } from "react";
import z from "zod";

type FormType = z.infer<typeof withdrawSchema>;

const initialValues: FormType = {
  amount: "",
  wallet: "",
  network: "bnb",
};

const WithdrawPage = () => {
  const formRef = useRef<GenericFormRef<FormType>>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormType | React.FormEvent<HTMLFormElement>) => {
      const response = await axiosInstance.post<WithdrawalResponse>(
        `/withdraw`,
        data
      );
      return response.data;
    },
    onSuccess: (data: WithdrawalResponse) => {
      showSuccessAlert(data?.data?.message);
    },

    onError: (err: AxiosError<{ message: string }>) => {
      showErrorAlert(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <h6 className="text-[18px] font-medium text-white my-6 text-center">
        Withdraw
      </h6>
      <div className="md:max-w-5xl mx-auto bg-gray-700 w-full p-5 rounded">
        <GenericForm
          schema={withdrawSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="space-y-4">
            <TextField
              name="amount"
              label="Amount"
              type="number"
              placeholder="Enter amount"
              inputClass="px-3 text-gray-900"
              labelClass=""
            />
            <TextField
              name="wallet"
              label="Wallet"
              type="text"
              placeholder="Enter wallet"
              inputClass="px-3 text-gray-900"
              labelClass=""
            />
            <TextField
              name="network"
              label="Network"
              type="text"
              placeholder="Enter Network"
              inputClass="px-3 text-gray-900"
              labelClass=""
              readOnly
            />

            <SubmitButton
              width="full"
              label="Withdraw"
              isLoading={isPending}
              loadingLabel="Processing.."
              className="cursor-pointer w-full bg"
            />
          </div>
        </GenericForm>
      </div>
    </div>
  );
};

export default WithdrawPage;

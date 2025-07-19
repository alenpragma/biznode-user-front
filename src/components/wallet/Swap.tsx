import { swapSchema } from "@/schema/wallet";
import React, { useRef } from "react";
import z from "zod";
import { TextField } from "../form/fields/TextField";
import { GenericForm, GenericFormRef } from "../form/GenericForm";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { showErrorAlert, showSuccessAlert } from "../shared/toast/ToastSuccess";
import { AxiosError } from "axios";
import { SubmitButton } from "../form/fields/SubmitButton";
import { ConversionResponse } from "@/types/swap/swapType";

export type FormType = z.infer<typeof swapSchema>;

export const initialSwapValues: FormType = {
  amount: "",
};

const Swap = ({ refetch }: { refetch: () => void }) => {
  const formRef = useRef<GenericFormRef<FormType>>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormType | React.FormEvent<HTMLFormElement>) => {
      const response = await axiosInstance.post<ConversionResponse>(
        `/convert`,
        data
      );
      return response.data;
    },
    onSuccess: (data: ConversionResponse) => {
      if (data.data.status === true) {
        showSuccessAlert(data?.data?.message);
        refetch();
        formRef.current?.reset();
      } else {
        showErrorAlert(data.data.message);
      }
    },

    onError: (err: AxiosError<{ message: string }>) => {
      showErrorAlert(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    mutate(data);
  };
  return (
    <div>
      <GenericForm
        schema={swapSchema}
        initialValues={initialSwapValues}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="max-w-md mx-auto space-y-4">
          <TextField
            name="amount"
            label="Amount"
            type="number"
            placeholder="00.00"
            inputClass="bg-gray-700 border-gray-600 text-white"
          />

          <SubmitButton
            width="full"
            label="Swap Now"
            isLoading={isPending}
            loadingLabel="Processing.."
            className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-base lg:text-lg"
          />
        </div>
      </GenericForm>
    </div>
  );
};

export default Swap;

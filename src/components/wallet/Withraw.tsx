import { useRef } from "react";
import z from "zod";
import { TextField } from "../form/fields/TextField";
import { GenericForm, GenericFormRef } from "../form/GenericForm";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { withdrawSchema } from "@/schema/withdrawSchema/withdrawSchema";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { WithdrawalResponse } from "@/types/withdraw/withdrawType";
import { showErrorAlert, showSuccessAlert } from "../shared/toast/ToastSuccess";
import { AxiosError } from "axios";
import { SubmitButton } from "../form/fields/SubmitButton";

export type FormType = z.infer<typeof withdrawSchema>;

const Withraw = ({ refetch }: { refetch: () => void }) => {
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
      refetch()
      formRef.current?.reset();
    },

    onError: (err: AxiosError<{ message: string }>) => {
      showErrorAlert(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    mutate(data);
  };
  return (
    <GenericForm
      schema={withdrawSchema}
      initialValues={{
        amount: "",
        wallet: "",
        network: "bnb",
      }}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <Label htmlFor="network" className="text-white font-medium mb-1">
            Select Network
          </Label>
          <Select name="network" defaultValue="bsc">
            <SelectTrigger className="bg-gray-700 w-full border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600 text-white">
              <SelectItem value="bsc">BEP20</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TextField
          name="amount"
          label="amount"
          type="number"
          placeholder="00.00"
          inputClass="bg-gray-700 border-gray-600 text-white"
        />

        <TextField
          name="wallet"
          label="Withdrawal Address"
          type="text"
          placeholder="Enter wallet address"
          inputClass="bg-gray-700 border-gray-600 text-white"
        />

        <SubmitButton
          width="full"
          label="Withdraw"
          isLoading={isPending}
          loadingLabel="Processing.."
          className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-base lg:text-lg"
        />
      </div>
    </GenericForm>
  );
};

export default Withraw;

import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { swapSchema } from "@/schema/wallet";
import { TUserProfileResponse } from "@/types/dashboard/dashboardType";
import React, { useRef } from "react";
import z from "zod";
import { TextField } from "../form/fields/TextField";
import { GenericForm, GenericFormRef } from "../form/GenericForm";
import { Button } from "../ui/button";

export type FormType = z.infer<typeof swapSchema>;

export const initialSwapValues: FormType = {
  available_bizt: 0,
  price: 0,
  swap_amount: 0,
  recivedUsdt: 0,
};

const Swap = () => {
  const formRef = useRef<GenericFormRef<FormType>>(null);

  const { data: dashboard, } = useGetData<TUserProfileResponse>(
    ["profile"],
    `/profile`
  );
  const userProfile = dashboard?.data;
  formRef.current?.setValue("available_bizt", Number(userProfile?.bizt_wallet));
  formRef.current?.setValue("price", 0.002);

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    console.log(data, "swap data");
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
            name="available_bizt"
            label="Available BIZT"
            type="number"
            placeholder="100.00"
            inputClass="bg-gray-700 border-gray-600 text-white"
            disabled
          />

          <TextField
            name="price"
            label="Price Bizt"
            type="number"
            placeholder="1.00"
            inputClass="bg-gray-700 border-gray-600 text-white"
            disabled
          />

          <TextField
            name="swap_amount"
            label="Swap Amount"
            type="number"
            placeholder="100.00"
            inputClass="bg-gray-700 border-gray-600 text-white"
          />

          <TextField
            name="recivedUsdt"
            label="Received USDT"
            type="number"
            placeholder="100.00"
            inputClass="bg-gray-700 border-gray-600 text-white"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-base lg:text-lg cursor-pointer"
          >
            Swap Now
          </Button>
        </div>
      </GenericForm>
    </div>
  );
};

export default Swap;

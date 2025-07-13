import { useRef, useState } from "react";
import z from "zod";
import { TextField } from "../form/fields/TextField";
import { GenericForm, GenericFormRef } from "../form/GenericForm";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const swapSchema = z.object({
  amount: z.coerce
    .number()
    .positive({ message: "Swap amount must be greater than 0" }),
  wallet_address: z.coerce
    .string()
    .min(8, { message: "Enter valid Wallet address" }),
  coin: z.string().optional(),
  network: z.coerce.string().min(1, { message: "Network is required" }),
});

export type FormType = z.infer<typeof swapSchema>;

const Withraw = () => {
  const formRef = useRef<GenericFormRef<FormType>>(null);
  const [coin, setCoin] = useState("bizt");

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    console.log(data, "swap data");
  };

  return (
    <GenericForm
      schema={swapSchema}
      initialValues={{
        amount: 0,
        wallet_address: "",
        coin: "",
        network: "",
      }}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <Label htmlFor="coin" className="text-white font-medium mb-1">
            Select Coin
          </Label>
          <Select
            value={coin}
            onValueChange={(value) => {
              setCoin(value);
              formRef.current?.setValue("coin", value);
            }}
            name="coin"
          >
            <SelectTrigger className="bg-gray-700 w-full border-gray-600 text-white">
              <SelectValue placeholder="Select Coin" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600 text-white">
              <SelectItem value="bizt">BIZT</SelectItem>
              <SelectItem value="usdt">USDT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="network" className="text-white font-medium mb-1">
            Select Network
          </Label>
          <Select name="network" defaultValue="bsc">
            <SelectTrigger className="bg-gray-700 w-full border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600 text-white">
              <SelectItem value="bsc">BSC (Binance Smart Chain)</SelectItem>
              <SelectItem value="eth">Ethereum</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TextField
          name="amount"
          label="amount"
          type="number"
          placeholder="100.00"
          inputClass="bg-gray-700 border-gray-600 text-white"
        />

        <TextField
          name="wallet_address"
          label="Withdrawal Address"
          type="number"
          placeholder="100.00"
          inputClass="bg-gray-700 border-gray-600 text-white"
        />

        <Button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-base lg:text-lg"
        >
          Withdraw Now
        </Button>
      </div>
    </GenericForm>
  );
};

export default Withraw;

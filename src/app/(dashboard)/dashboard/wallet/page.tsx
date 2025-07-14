"use client";

import { CopyToClipboard } from "@/components/shared/copyClipboard/copyClipboard";
import LoadingContainer from "@/components/shared/loading/LoadingComponents";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Swap from "@/components/wallet/Swap";
import Withraw from "@/components/wallet/Withraw";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { TUserProfileResponse } from "@/types/dashboard/dashboardType";
import { TWallet } from "@/types/wallet/wallet";

import {
  AlertTriangle,
  Copy,
  Download,
  Eye,
  EyeOff,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { IoCheckmarkDoneOutline, IoSwapHorizontal } from "react-icons/io5";
import QRCode from "react-qr-code";

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("deposit");
  const [showBalance, setShowBalance] = useState(true);
  const { copy, copied } = CopyToClipboard();

  const { data: dashboard, isLoading } = useGetData<TUserProfileResponse>(
    ["profile"],
    `/profile`
  );
  const { data: deposit, isLoading: walletLoading } = useGetData<TWallet>(
    ["deposit"],
    `/deposit`
  );
  const { data: payment, isLoading: paymentLoading } = useGetData<TWallet>(
    ["deposit-check"],
    `/deposit-check`
  );
  console.log(payment);
  const userProfile = dashboard?.data;
  const walletAddress = deposit?.data;
  if (paymentLoading && isLoading && walletLoading) {
    return <LoadingContainer />;
  }

  // const { mutate, isPending } = useMutation({
  //   mutationFn: async (data: FormType | React.FormEvent<HTMLFormElement>) => {
  //     const response = await axiosInstance.post<any>(`/`, data);
  //     return response.data;
  //   },
  // });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1  lg:p-6">
          {/* Balance Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Card className="bg-gray-800 border-2 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-base lg:text-lg">
                        B
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white">
                        BIZT Balance
                      </h3>
                      <p className="text-gray-300 text-xs lg:text-sm">
                        Platform Token
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-gray-400 hover:text-white"
                  >
                    {showBalance ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {Number(userProfile?.bizt_wallet)
                      .toFixed(3)
                      .toLocaleString()}{" "}
                    BIZT
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {Number(userProfile?.bizt_wallet)
                      .toFixed(3)
                      .toLocaleString()}{" "}
                    BIZT
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-green-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base lg:text-lg">
                        $
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white">
                        USDT Balance
                      </h3>
                      <p className="text-gray-300 text-xs lg:text-sm">
                        Stablecoin
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-gray-400 hover:text-white"
                  >
                    {showBalance ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    $
                    {Number(userProfile?.usdt_wallet)
                      .toFixed(2)
                      .toLocaleString()}{" "}
                    USDT
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    $
                    {Number(userProfile?.usdt_wallet)
                      .toFixed(2)
                      .toLocaleString()}{" "}
                    USDT
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction Tabs */}
          <Card className="bg-gray-800 border-2 border-gray-600 mb-6 lg:mb-8">
            <CardHeader>
              <CardTitle className="text-white text-lg lg:text-xl font-bold">
                Deposit, Withdraw
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-gray-700 mb-6">
                  <TabsTrigger
                    value="deposit"
                    className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-white text-xs lg:text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span className="  sm:inline">Deposit</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="withdraw"
                    className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-white text-xs lg:text-sm"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="  sm:inline">Withdraw</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="swap-now"
                    className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-white text-xs lg:text-sm"
                  >
                    <IoSwapHorizontal className="w-4 h-4" />
                    <span className="  sm:inline">Swap Now</span>
                  </TabsTrigger>
                </TabsList>

                {/* Deposit Tab */}

                <TabsContent value="deposit" className="space-y-6">
                  <div className="max-w-md mx-auto space-y-5">
                    {/* QR Code */}
                    <div className="flex justify-center">
                      <div className="bg-white p-2 rounded-md">
                        {walletAddress && (
                          <QRCode value={walletAddress} size={150} />
                        )}
                      </div>
                    </div>

                    {/* Deposit Address Input and Copy */}
                    <div>
                      <Label
                        htmlFor="deposit-address"
                        className="text-white font-medium"
                      >
                        Network
                      </Label>
                      <div className="flex gap-2 mt-3">
                        <Input
                          id="deposit-address"
                          value={"BEP20"}
                          readOnly
                          className="bg-gray-700 border-gray-600 text-white text-xs lg:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="deposit-address"
                        className="text-white font-medium mb-1"
                      >
                        Deposit Address
                      </Label>
                      <div className="flex gap-2 mt-3">
                        <Input
                          id="deposit-address"
                          value={walletAddress}
                          readOnly
                          className="bg-gray-700 border-gray-600 text-white text-xs lg:text-sm"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-600 hover:bg-gray-700 bg-transparent"
                          onClick={() => copy(walletAddress)}
                        >
                          {copied ? (
                            <IoCheckmarkDoneOutline className="w-4 h-4 text-white" />
                          ) : (
                            <Copy className="w-4 h-4 text-white" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Warning Section */}
                    <div className="bg-yellow-100/10 border border-yellow-500 text-yellow-300 p-4 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 mt-0.5" />
                      <p className="text-xs lg:text-sm">
                        Send only BIZT or USDT using the Binance Smart Chain
                        (BEP20) network to this address. Sending any other token
                        may result in the permanent loss of your funds.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Withdraw Tab */}
                <TabsContent
                  value="withdraw"
                  className="space-y-4 lg:space-y-6"
                >
                  <Withraw />
                </TabsContent>

                {/* swap Tab */}
                <TabsContent
                  value="swap-now"
                  className="space-y-4 lg:space-y-6"
                >
                  {/* swap */}
                  <Swap />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

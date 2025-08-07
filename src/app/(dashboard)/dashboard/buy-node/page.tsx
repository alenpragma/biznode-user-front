"use client";

import { useState } from "react";
import { Crown, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { TNodeResponse } from "@/types/package/packageType";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/fetch/axiosConfig/axiosConfig";
import { AxiosError } from "axios";
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/components/shared/toast/ToastSuccess";
import LoadingContainer from "@/components/shared/loading/LoadingComponents";
import { TBuyNode } from "@/types/buynode/buyNodeType";

export default function BuyNodePage() {
  const [activeTab, setActiveTab] = useState("mini");

  const { data: nodePackage, isLoading } = useGetData<TNodeResponse>(
    ["node"],
    `/package`
  );
  const node = nodePackage?.data;

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      const response = await axiosInstance.post<TBuyNode>(`/buy-package`, {
        package_id: id,
      });
      return response.data;
    },
    onSuccess: (data: TBuyNode) => {
      console.log(data);
      if (data?.data.status === false) {
        showErrorAlert(data?.data?.message);
      } else {
        showSuccessAlert(data?.data?.message);
      }
    },
    onError: (err: AxiosError<{ message: string }>) => {
      showErrorAlert(err.response?.data.message || err.message);
    },
  });

  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleBuy = (id: number) => {
    setLoadingId(id);
    mutate(id, {
      onSettled: () => {
        setLoadingId(null);
      },
    });
  };

  if (isLoading) return <LoadingContainer />;

  const nodeTypes = [...new Set(node?.map((item) => item.type))].reverse();
  const filteredNodes = node?.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <div className="flex-1 p-4 lg:p-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList
              className={`grid w-full max-w-md grid-cols-${nodeTypes.length} bg-gray-800 mb-6 lg:mb-8`}
            >
              {nodeTypes.map((type) => (
                <TabsTrigger
                  key={type}
                  value={type}
                  className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-white text-sm capitalize"
                >
                  {type === "master" ? (
                    <Crown className="w-4 h-4" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">{type} Node</span>
                  <span className="sm:hidden">{type}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 capitalize">
                  {activeTab} Node Sale Phases
                </h3>
                <p className="text-gray-300 text-base lg:text-lg">
                  Build & Scale Your Crypto Business with Nodes and Beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredNodes?.length ? (
                  filteredNodes.map((item) => (
                    <Card
                      key={item.id}
                      className="bg-gray-800 border-3 border-yellow-500 relative overflow-hidden shadow-2xl gap-4"
                    >
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-500" />

                      <CardHeader className="text-center">
                        <div className="flex justify-center">
                          <div className="w-16 lg:w-20  bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                            {item.type === "master" ? (
                              <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-black" />
                            ) : (
                              <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-black" />
                            )}{" "}
                          </div>
                        </div>

                        <Badge className="bg-yellow-500 text-black font-bold mb-2 text-xs lg:text-sm px-3 py-1">
                          {item.name}
                        </Badge>

                        <CardTitle className="text-3xl lg:text-4xl font-bold text-white">
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}{" "}
                          Node
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="text-center space-y-3">
                        <div>
                          <div className="text-4xl lg:text-5xl font-bold text-yellow-400">
                            ${item.price}
                          </div>
                          <div className="text-gray-300 text-base lg:text-lg font-medium">
                            Per Node
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-sm lg:text-base">
                            <span className="text-gray-300 font-medium">
                              Progress
                            </span>
                            <span className="text-white font-bold">
                              {item.total_sell}/{item.stock}
                            </span>
                          </div>
                          <Progress
                            value={
                              (parseInt(item.total_sell) /
                                parseInt(item.stock)) *
                              100
                            }
                            className="h-3 bg-gray-700"
                          />
                          <div className="text-center text-white font-bold text-base lg:text-lg">
                            {parseInt(item.stock) - parseInt(item.total_sell)}{" "}
                            remaining
                          </div>
                        </div>

                        <div className="grid grid-cols-2 text-sm lg:text-base gap-y-2 text-gray-300">
                          <div>
                            <span className="font-semibold text-white">
                              Interest Rate:
                            </span>{" "}
                            {item.interest_rate}%
                          </div>
                          <div className="capitalize">
                            <span className="font-semibold text-white ">
                              Return:
                            </span>{" "}
                            {item.return_type}
                          </div>
                          <div>
                            <span className="font-semibold text-white">
                              Node Status:
                            </span>{" "}
                            <span
                              className={
                                item.active === "1"
                                  ? "text-green-400"
                                  : "text-red-500"
                              }
                            >
                              {item.active === "1" ? "Active" : "Inactive"}
                            </span>
                          </div>
                          <div>
                            <span className="font-semibold text-white">
                              Duration:
                            </span>{" "}
                            <span>
                              {item.type === "master" ? "5 Year" : "3 Years"}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleBuy(item.id)}
                          disabled={loadingId === item.id}
                          className={`w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-2 rounded cursor-pointer text-md shadow-lg transition-opacity ${
                            loadingId === item.id
                              ? "opacity-60 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {loadingId === item.id ? "Processing..." : "Buy Now"}
                        </button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center col-span-full text-gray-400">
                    No {activeTab} nodes found.
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

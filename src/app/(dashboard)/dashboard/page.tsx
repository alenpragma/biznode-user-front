"use client";

import {
  ChevronRight,
  Users,
  Award,
  Server,
  Cpu,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import {
  TUserProfile,
  TUserProfileResponse,
} from "@/types/dashboard/dashboardType";
import { useEffect } from "react";
import { useUserStore } from "@/lib/store/userStore";
import LoadingContainer from "@/components/shared/loading/LoadingComponents";
import { CopyToClipboard } from "@/components/shared/copyClipboard/copyClipboard";
import { TTransactionResponse } from "@/types/transactionsHistory/transactionHistory";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const chartData = [
    { month: "Jan", refer: 50, reward: 80 },
    { month: "Feb", refer: 70, reward: 90 },
    { month: "Mar", refer: 60, reward: 100 },
    { month: "Apr", refer: 80, reward: 120 },
    { month: "May", refer: 110, reward: 150 },
    { month: "Jun", refer: 90, reward: 130 },
    { month: "Jul", refer: 100, reward: 140 },
    { month: "Aug", refer: 85, reward: 125 },
    { month: "Sep", refer: 95, reward: 135 },
    { month: "Oct", refer: 105, reward: 145 },
    { month: "Nov", refer: 115, reward: 155 },
    { month: "Dec", refer: 120, reward: 160 },
  ];

  const { data: dashboard, isLoading } = useGetData<TUserProfileResponse>(
    ["products"],
    `/profile`
  );
  const { data: transactionHistory, isLoading: transactionLoading } =
    useGetData<TTransactionResponse>(["transactionHistory"], `/transactions`);
  const userProfile = dashboard?.data;
  useEffect(() => {
    useUserStore.getState().setUserData(userProfile as TUserProfile);
  }, [dashboard]);
  const { copy, copied } = CopyToClipboard();

  if (isLoading && transactionLoading) {
    return <LoadingContainer />;
  }

  return (
    <div className=" text-white">
      <div className="flex">
        <div className="flex-1 p-4 lg:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Card className="bg-gray-800 border-2 border-yellow-500/30 relative overflow-hidden hover:border-yellow-500/50 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Cpu className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                  </div>
                  <div>
                    <p className="text-md font-bold text-white">
                      {Number(userProfile?.bizt_wallet).toFixed(3)} BIZT
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      ${Number(userProfile?.bizt_wallet) * 0.02} USDT
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    BIZT Price
                  </span>
                  <span className="text-yellow-400 font-bold text-base lg:text-lg">
                    $0.02
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-green-500/30 relative overflow-hidden hover:border-green-500/50 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-xl font-bold text-white">
                      Earned Reward
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      {userProfile?.totalEarning} BIZT
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    Total Value
                  </span>
                  <span className="text-white font-bold text-base lg:text-lg">
                    ${Number(userProfile?.totalEarning.toFixed(2)) * 0.02}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-blue-500/30 relative overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-xl font-bold text-white">
                      Total Earned
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium text-sm lg:text-base">
                      Refer Income
                    </span>
                    <span className="text-white font-bold text-sm lg:text-base">
                      {userProfile?.totalReferBonus} BIZT
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium text-sm lg:text-base">
                      Generation Income
                    </span>
                    <span className="text-white font-bold text-sm lg:text-base">
                      {0} BIZT
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-pink-500/30 relative overflow-hidden hover:border-pink-500/50 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-xl font-bold text-white">
                      Referrals
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-400 font-medium text-sm lg:text-base">
                      Active Miners
                    </span>
                    <span className="text-white font-bold text-base lg:text-lg">
                      {userProfile?.total_active_team}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-400 font-medium text-sm lg:text-base">
                      Inactive Miners
                    </span>
                    <span className="text-white font-bold text-base lg:text-lg">
                      {userProfile?.total_inactive_team}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Link href="/dashboard/buy-node">
              <Card className="bg-gray-800 border-2 border-yellow-500/30 hover:border-yellow-500/60 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Server className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base lg:text-lg">
                          Buy More Nodes
                        </p>
                        <p className="text-gray-300 text-xs lg:text-sm">
                          Expand your portfolio
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/dashboard/node-report">
              <Card className="bg-gray-800 border-2 border-green-500/30 hover:border-green-500/60 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base lg:text-lg">
                          View Reports
                        </p>
                        <p className="text-gray-300 text-xs lg:text-sm">
                          Check your earnings
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/dashboard/wallet">
              <Card className="bg-gray-800 border-2 border-blue-500/30 hover:border-blue-500/60 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Wallet className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base lg:text-lg">
                          Manage Wallet
                        </p>
                        <p className="text-gray-300 text-xs lg:text-sm">
                          Deposits & withdrawals. Transfer
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
            {/* Recent Activity */}
            <Card className="bg-gray-800 border-2 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white text-lg lg:text-xl font-bold">
                  Recent Transaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactionHistory?.data.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex justify-between items-center py-3 border-b border-gray-600 last:border-b-0"
                    >
                      <div>
                        <p className="text-white font-semibold text-sm lg:text-base">
                          {activity.remark}
                        </p>
                        <p className="text-gray-300 text-xs lg:text-sm">
                          {activity.details}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "font-medium",
                          activity.type === "+"
                            ? "text-green-500"
                            : "text-yellow-500"
                        )}
                      >
                        {`(${activity.type})`}{" "}
                        {activity.remark !== "referral_commission"
                          ? "$"
                          : "BIZT"}{" "}
                        {activity.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chart */}
            <Card className="bg-gray-800 border-2 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white text-lg lg:text-xl font-bold">
                  Your Refer And Reward Income
                </CardTitle>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-xs lg:text-sm font-medium">
                      Refer Income
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-300 text-xs lg:text-sm font-medium">
                      Reward
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-48 lg:h-64 flex items-end justify-between gap-1 lg:gap-2">
                  {chartData.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1 flex-1"
                    >
                      <div className="flex flex-col items-center gap-1 h-40 lg:h-48 justify-end">
                        <div
                          className="w-3 lg:w-5 bg-gray-400 rounded-t"
                          style={{ height: `${(data.reward / 160) * 100}%` }}
                        ></div>
                        <div
                          className="w-3 lg:w-5 bg-yellow-400 rounded-t"
                          style={{ height: `${(data.refer / 160) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-300 text-xs font-medium">
                        {data.month}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 lg:p-4 bg-gray-700 rounded-lg border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium text-sm lg:text-base">
                      May 2025
                    </span>
                    <span className="text-yellow-400 font-bold text-base lg:text-lg">
                      0 BIZT
                    </span>
                  </div>
                </div>
                <div className="text-white font-medium  gap-3 mt-5 border border-gray-300 p-3 rounded-lg">
                  Referral Link : <br />
                  <p className="">
                    <span className="text-yellow-500">
                      https://www.biznode.io/sign-up?ref=
                      {dashboard?.data.user.refer_code}
                    </span>
                    <span
                      className=" cursor-pointer border border-gray-300 rounded px-4 py-1 text-[12px] ml-5"
                      onClick={() =>
                        copy(
                          `https://www.biznode.io/sign-up?ref=${dashboard?.data.user.refer_code}`
                        )
                      }
                    >
                      {copied ? "Copied" : "Copy"}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

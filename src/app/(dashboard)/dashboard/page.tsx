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

export default function DashboardPage() {
  const recentActivities = [
    {
      id: 1,
      type: "DEV-1Daily Reward Received042",
      time: "2 hours ago",
      amount: "254 BIZT",
    },
    { id: 2, type: "New Referral", time: "8 hours ago", amount: "254 BIZT" },
    {
      id: 3,
      type: "DEV-1Daily Reward Received042",
      time: "12 hours ago",
      amount: "254 BIZT",
    },
    {
      id: 4,
      type: "Receive Redward",
      time: "18 hours ago",
      amount: "254 BIZT",
    },
    {
      id: 5,
      type: "Master Node Purchased",
      time: "22 hours ago",
      amount: "254 BIZT",
    },
    {
      id: 6,
      type: "DEV-1Daily Reward Received042",
      time: "1 Days ago",
      amount: "254 BIZT",
    },
  ];

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
  const userProfile = dashboard?.data.data;
  useEffect(() => {
    useUserStore.getState().setUserData(userProfile as TUserProfile);
  }, [dashboard]);
  if (isLoading) {
    return <p>Loading...</p>;
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
                      {userProfile?.bizt_wallet} BIZT
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      ${userProfile?.usdt_wallet}
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
                    $44.24
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
                      123 BIZT
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
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex justify-between items-center py-3 border-b border-gray-600 last:border-b-0"
                    >
                      <div>
                        <p className="text-white font-semibold text-sm lg:text-base">
                          {activity.type}
                        </p>
                        <p className="text-gray-300 text-xs lg:text-sm">
                          {activity.time}
                        </p>
                      </div>
                      <span className="text-yellow-400 font-bold text-sm lg:text-lg">
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
                      110 BIZT
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   "status": true,
//   "message": "User Profile Retrieved Successfully",
//   "data": {
//       "user": {
//           "id": 5,
//           "name": "Remon Tripura",
//           "image": null,
//           "birthday": null,
//           "nid_or_passport": null,
//           "address": null,
//           "email": "remontripura045@gmail.com",
//           "mobile": "01518398689",
//           "refer_code": "700EC6",
//           "refer_by": null,
//           "is_active": "0",
//           "is_block": "0",
//           "kyc_status": "0",
//           "created_at": "2025-07-08T10:58:57.000000Z",
//           "updated_at": "2025-07-08T10:58:57.000000Z"
//       },
//       "usdt_wallet": "0.00000000",
//       "bizt_wallet": "0.00000000",
//       "teamInvest": 0,
//       "directRefer": 0,
//       "totalTeam": 0,
//       "total_active_team": 0,
//       "total_inactive_team": 0,
//       "reward": 0,
//       "totalInvestment": 0,
//       "totalWithdraw": 0,
//       "totalTransfer": 0,
//       "totalDeposit": 0,
//       "totalEarning": 0,
//       "totalReferBonus": 0
//   }
// }

"use client";

import {
  Users,
  TrendingUp,
  DollarSign,
  UserCheck,
  UserX,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useUserStore } from "@/lib/store/userStore";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { TUserResponse } from "@/types/myTeam/myTeamType";
import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import { cn } from "@/lib/utils";
import LoadingContainer from "@/components/shared/loading/LoadingComponents";

export default function NetworkPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const networkStats = {
    totalTeamMembers: 156,
    activeMiners: 98,
    inactiveMiners: 58,
    totalTeamInvestment: "2,450,000 BIZT",
    teamEarnings: "345,000 BIZT",
    monthlyVolume: "125,000 BIZT",
  };

  const levelStats = [
    {
      level: 1,
      members: 12,
      investment: "150,000 BIZT",
      earnings: "12,500 BIZT",
    },
    {
      level: 2,
      members: 24,
      investment: "320,000 BIZT",
      earnings: "28,000 BIZT",
    },
    {
      level: 3,
      members: 36,
      investment: "480,000 BIZT",
      earnings: "42,000 BIZT",
    },
    {
      level: 4,
      members: 48,
      investment: "720,000 BIZT",
      earnings: "65,000 BIZT",
    },
    {
      level: 5,
      members: 36,
      investment: "780,000 BIZT",
      earnings: "85,000 BIZT",
    },
  ];

  // const activeMiners = [
  //   {
  //     id: 1,
  //     name: "Alice Johnson",
  //     email: "alice@example.com",
  //     level: 1,
  //     nodes: 3,
  //     investment: "15,000 BIZT",
  //     earnings: "2,500 BIZT",
  //     joinDate: "2024-01-15",
  //     lastActive: "2 hours ago",
  //   },
  //   {
  //     id: 2,
  //     name: "Bob Smith",
  //     email: "bob@example.com",
  //     level: 2,
  //     nodes: 5,
  //     investment: "25,000 BIZT",
  //     earnings: "4,200 BIZT",
  //     joinDate: "2024-01-10",
  //     lastActive: "1 hour ago",
  //   },
  //   {
  //     id: 3,
  //     name: "Carol Davis",
  //     email: "carol@example.com",
  //     level: 1,
  //     nodes: 2,
  //     investment: "10,000 BIZT",
  //     earnings: "1,800 BIZT",
  //     joinDate: "2024-01-20",
  //     lastActive: "30 minutes ago",
  //   },
  //   {
  //     id: 4,
  //     name: "David Wilson",
  //     email: "david@example.com",
  //     level: 3,
  //     nodes: 8,
  //     investment: "40,000 BIZT",
  //     earnings: "7,500 BIZT",
  //     joinDate: "2024-01-05",
  //     lastActive: "5 minutes ago",
  //   },
  //   {
  //     id: 5,
  //     name: "Eva Brown",
  //     email: "eva@example.com",
  //     level: 2,
  //     nodes: 4,
  //     investment: "20,000 BIZT",
  //     earnings: "3,600 BIZT",
  //     joinDate: "2024-01-12",
  //     lastActive: "1 day ago",
  //   },
  // ];

  const inactiveMiners = [
    {
      id: 1,
      name: "Frank Miller",
      email: "frank@example.com",
      level: 1,
      nodes: 1,
      investment: "5,000 BIZT",
      earnings: "500 BIZT",
      joinDate: "2023-12-20",
      lastActive: "2 weeks ago",
    },
    {
      id: 2,
      name: "Grace Lee",
      email: "grace@example.com",
      level: 2,
      nodes: 3,
      investment: "15,000 BIZT",
      earnings: "1,200 BIZT",
      joinDate: "2023-12-15",
      lastActive: "1 month ago",
    },
    {
      id: 3,
      name: "Henry Taylor",
      email: "henry@example.com",
      level: 1,
      nodes: 2,
      investment: "10,000 BIZT",
      earnings: "800 BIZT",
      joinDate: "2023-12-10",
      lastActive: "3 weeks ago",
    },
  ];

  const filteredInactiveMiners = inactiveMiners.filter(
    (miner) =>
      miner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      miner.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLevelBadge = (level: number) => {
    const colors = [
      "bg-gray-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-red-500",
    ];
    return (
      <Badge className={`${colors[level]} text-white`}>Level {level}</Badge>
    );
  };

  const { userData } = useUserStore();
  const { data: teamHistory, isLoading } = useGetData<TUserResponse>(
    ["team"],
    `/team`
  );
  if (isLoading) {
    return <LoadingContainer />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Network Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Card className="bg-gray-800 border-2 border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl font-bold text-white">
                      {userData?.totalTeam}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Total Team Members
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-green-400 font-medium text-sm lg:text-base">
                    Active: {userData?.total_active_team}
                  </span>
                  <span className="text-red-400 font-medium text-sm lg:text-base">
                    Inactive: {userData?.total_inactive_team}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <DollarSign className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl font-bold text-white">
                      {userData?.totalInvestment}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Total Team Investment
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    Team Earnings
                  </span>
                  <span className="text-yellow-400 font-bold text-sm lg:text-lg">
                    {userData?.totalEarning}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-green-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl font-bold text-white">
                      {networkStats.monthlyVolume}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Monthly Volume
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    Growth
                  </span>
                  <span className="text-green-400 font-bold text-sm lg:text-lg">
                    +15.2%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Level-wise Statistics */}
          <Card className="bg-gray-800 border-2 border-gray-600 mb-6 lg:mb-8">
            <CardHeader>
              <CardTitle className="text-white text-lg lg:text-xl font-bold">
                Level-wise Team Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Level
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Members
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Investment
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Earnings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {levelStats.map((level) => (
                      <tr
                        key={level.level}
                        className="border-b border-gray-700"
                      >
                        <td className="py-3 px-2 lg:px-4">
                          {getLevelBadge(level.level)}
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-white font-bold text-sm lg:text-base">
                          {level.members}
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-yellow-400 font-bold text-sm lg:text-base">
                          {level.investment}
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-green-400 font-bold text-sm lg:text-base">
                          {level.earnings}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Tabs */}
          <Tabs defaultValue="active" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <TabsList className="grid w-full sm:w-auto grid-cols-2 bg-gray-800">
                <TabsTrigger
                  value="active"
                  className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                >
                  <UserCheck className="w-4 h-4" />
                  Active Miners ({networkStats.activeMiners})
                </TabsTrigger>
                <TabsTrigger
                  value="inactive"
                  className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                >
                  <UserX className="w-4 h-4" />
                  Inactive Miners ({networkStats.inactiveMiners})
                </TabsTrigger>
              </TabsList>

              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search team members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white w-full sm:w-64"
                />
              </div>
            </div>

            {/* Active Miners Tab */}
            <TabsContent value="active">
              <Card className="bg-gray-800 border-2 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg lg:text-xl font-bold">
                    Active Team Members
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamHistory?.team.map((miner, index) => (
                      <Card
                        key={index}
                        className="bg-gray-700 border border-gray-600"
                      >
                        <CardContent className="p-4">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase">
                                  {miner.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-sm lg:text-base">
                                  {miner.name}
                                </h3>
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  {miner.email}
                                </p>
                                <p className="text-gray-400 text-xs">
                                  Joined: {formatDate(miner.created_at)}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6">
                              <div className="text-center lg:text-left">
                                {getLevelBadge(miner.level)}
                              </div>
                              <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  Investment
                                </p>
                                <p className="text-yellow-400 font-bold text-sm lg:text-base">
                                  {miner.investment}
                                </p>
                              </div>
                              <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  Status
                                </p>
                                <p
                                  className={cn(
                                    "text-xs lg:text-sm",
                                    miner.is_active !== "0"
                                      ? "text-green-400"
                                      : "text-red-400"
                                  )}
                                >
                                  {miner.is_active !== "0"
                                    ? "Active"
                                    : "Inactive"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Inactive Miners Tab */}
            <TabsContent value="inactive">
              <Card className="bg-gray-800 border-2 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg lg:text-xl font-bold">
                    Inactive Team Members
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredInactiveMiners.map((miner) => (
                      <Card
                        key={miner.id}
                        className="bg-gray-700 border border-gray-600 opacity-75"
                      >
                        <CardContent className="p-4">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                  {miner.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-sm lg:text-base">
                                  {miner.name}
                                </h3>
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  {miner.email}
                                </p>
                                <p className="text-gray-400 text-xs">
                                  Joined: {miner.joinDate}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6">
                              <div className="text-center lg:text-left">
                                {getLevelBadge(miner.level)}
                              </div>
                              <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  Nodes
                                </p>
                                <p className="text-blue-400 font-bold text-sm lg:text-base">
                                  {miner.nodes}
                                </p>
                              </div>
                              <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  Investment
                                </p>
                                <p className="text-yellow-400 font-bold text-sm lg:text-base">
                                  {miner.investment}
                                </p>
                              </div>
                              <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  Earnings
                                </p>
                                <p className="text-green-400 font-bold text-sm lg:text-base">
                                  {miner.earnings}
                                </p>
                              </div>
                              <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                                <p className="text-gray-300 text-xs lg:text-sm">
                                  Last Active
                                </p>
                                <p className="text-red-400 text-xs lg:text-sm">
                                  {miner.lastActive}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

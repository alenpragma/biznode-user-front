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
import { TReferralType } from "@/types/my-referral/myReferralType";

export type LevelInfo = {
  total: number;
  totalInvestment: number;
};

export type LevelDataResponse = {
  status: true;
  data: {
    Level1: LevelInfo;
    Level2: LevelInfo;
  };
};

export default function NetworkPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const networkStats = {
    totalTeamMembers: 156,
    activeMiners: 98,
    inactiveMiners: 58,
    totalTeamInvestment: "2,450,000 BIZT",
    teamEarnings: "345,000 BIZT",
    monthlyVolume: "0.00 BIZT",
  };

  // const filteredInactiveMiners = inactiveMiners.filter(
  //   (miner) =>
  //     miner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     miner.email.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
  const { data: directRefer, isLoading } = useGetData<TReferralType>(
    ["directRefer"],
    `/direct-refer`
  );
  const { data: network, isLoading: networkLoading } =
    useGetData<LevelDataResponse>(["network"], `/network`);
  const networkData = network?.data;
  const { data: teamMember, isLoading: teamLoading } =
    useGetData<TUserResponse>(["team"], `/team`);

  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const levelStats = [
    {
      level: 1,
      members: `${networkData?.Level2.total}`,
      investment: `${networkData?.Level1.totalInvestment}`,
    },
    {
      level: 2,
      members: `${networkData?.Level2.total}`,
      investment: `${networkData?.Level2.totalInvestment}`,
    },
  ];
  if (isLoading && teamLoading && networkLoading) {
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
                      ${userData?.totalInvestment}
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
                    {userData?.totalEarning} BIZT
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
                          {level.investment} BIZT
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Tabs */}
          <Tabs defaultValue="refer" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <TabsList className="grid w-full sm:w-auto grid-cols-2 bg-gray-800">
                <TabsTrigger
                  value="refer"
                  className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-white"
                >
                  <UserCheck className="w-4 h-4" />
                  Direct Refer
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-white"
                >
                  <UserX className="w-4 h-4" />
                  Team
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
            <TabsContent value="refer">
              {directRefer?.data.length === 0 ? (
                <p>No direct referrals found.</p>
              ) : (
                <Card className="bg-gray-800 border-2 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white text-lg lg:text-xl font-bold">
                      Direct Refer Team Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {directRefer?.data.map((miner, index) => (
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
                                  <p className="text-gray-300 text-xs lg:text-sm">
                                    Investment
                                  </p>
                                  <p className="text-yellow-400 font-bold text-sm lg:text-base">
                                    ${miner.investment}
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
              )}
            </TabsContent>

            {/* Inactive Miners Tab */}
            <TabsContent value="team">
              {directRefer?.data.length === 0 ? (
                <p>No direct teams found.</p>
              ) : (
                <Card className="bg-gray-800 border-2 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white text-lg lg:text-xl font-bold">
                      Team Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamMember?.team.map((miner, index) => (
                        <div key={index}>
                          {/* Parent Card */}
                          <Card
                            className="bg-gray-700 border border-gray-600 opacity-75 cursor-pointer"
                            onClick={() => toggleExpand(index)}
                          >
                            <CardContent className="px-3">
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
                                      Joined: {formatDate(miner.created_at)}
                                    </p>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6">
                                  <div className="text-center lg:text-left">
                                    {getLevelBadge(miner.level)}
                                  </div>
                                  {/* <div className="text-center lg:text-left">
                                    <p className="text-gray-300 text-xs lg:text-sm">
                                      Nodes
                                    </p>
                                    <p className="text-blue-400 font-bold text-sm lg:text-base">
                                      {miner.team?.length || 0}
                                    </p>
                                  </div> */}
                                  <div className="text-center lg:text-left">
                                    <p className="text-gray-300 text-xs lg:text-sm">
                                      Investment
                                    </p>
                                    <p className="text-yellow-400 font-bold text-sm lg:text-base">
                                      ${miner.investment}
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

                          {/* Child Cards (Level 2) */}
                          {expanded.includes(index) &&
                            miner.team?.length > 0 && (
                              <div className="ml-6 mt-2 space-y-3">
                                {miner.team.map((child, childIndex) => (
                                  <Card
                                    key={childIndex}
                                    className="bg-gray-800 border border-gray-600 opacity-70"
                                  >
                                    <CardContent className="px-3">
                                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                          <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                              {child.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                            </span>
                                          </div>
                                          <div>
                                            <h3 className="text-white font-bold text-sm lg:text-base">
                                              {child.name}
                                            </h3>
                                            <p className="text-gray-300 text-xs lg:text-sm">
                                              {child.email}
                                            </p>
                                            <p className="text-gray-400 text-xs">
                                              Joined:{" "}
                                              {formatDate(child.created_at)}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6">
                                          <div className="text-center lg:text-left">
                                            {getLevelBadge(child.level)}
                                          </div>
                                          {/* <div className="text-center lg:text-left">
                                            <p className="text-gray-300 text-xs lg:text-sm">
                                              Nodes
                                            </p>
                                            <p className="text-blue-400 font-bold text-sm lg:text-base">
                                              {0}
                                            </p>
                                          </div> */}
                                          <div className="text-center lg:text-left">
                                            <p className="text-gray-300 text-xs lg:text-sm">
                                              Investment
                                            </p>
                                            <p className="text-yellow-400 font-bold text-sm lg:text-base">
                                              ${child.investment}
                                            </p>
                                          </div>
                                          <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                                            <p className="text-gray-300 text-xs lg:text-sm">
                                              Status
                                            </p>
                                            <p
                                              className={cn(
                                                "text-xs lg:text-sm",
                                                child.is_active !== "0"
                                                  ? "text-green-400"
                                                  : "text-red-400"
                                              )}
                                            >
                                              {child.is_active !== "0"
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
                            )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

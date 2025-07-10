"use client";

import {
  DollarSign,
  Activity,
  // Crown,
  // Zap,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { TInvestmentResponse } from "@/types/nodeHisotory/nodeHistory";
import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import Status from "@/components/shared/Status/Status";
import Pagination from "@/components/shared/pagination/Pagination";
import LoadingContainer from "@/components/shared/loading/LoadingComponents";

export default function HodeHisotoryComponents({
  pageNumber,
}: {
  pageNumber: string;
}) {
  const nodeStats = {
    totalNodes: 5,
    activeNodes: 5,
    totalInvested: "25,150 BIZT",
    totalRewards: "2,740 BIZT",
    averageUptime: "99.4%",
    monthlyEarnings: "450 BIZT",
  };

  // const getNodeIcon = (nodeType: string) => {
  //   return nodeType === "Master Node" ? (
  //     <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
  //   ) : (
  //     <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
  //   );
  // };
  const { data: nodeHistory, isLoading } = useGetData<TInvestmentResponse>(
    ["nodeHistory", pageNumber],
    `/invest-history?page=${pageNumber}`
  );
  if (isLoading) {
    return <LoadingContainer />;
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Node Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Card className="bg-gray-800 border-2 border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-white">
                      {nodeStats.totalNodes}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Total Nodes
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    Active Nodes
                  </span>
                  <span className="text-green-400 font-bold text-base lg:text-lg">
                    {nodeStats.activeNodes}
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
                    <p className="text-xl lg:text-2xl font-bold text-white">
                      {nodeStats.totalInvested}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Total Invested
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    Total Rewards
                  </span>
                  <span className="text-yellow-400 font-bold text-base lg:text-lg">
                    {nodeStats.totalRewards}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-green-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Activity className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-white">
                      {nodeStats.averageUptime}
                    </p>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Average Uptime
                    </p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">
                    Monthly Earnings
                  </span>
                  <span className="text-green-400 font-bold text-base lg:text-lg">
                    {nodeStats.monthlyEarnings}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Node Report Tabs */}
          <Card className="bg-gray-800 border-2 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white text-lg lg:text-xl font-bold">
                Node Purchase History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Date
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Node Type
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Price
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base hidden md:table-cell">
                        Rewards
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base hidden md:table-cell">
                        Uptime
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {nodeHistory?.data.map((item) => (
                      <tr key={item.id} className="border-b border-gray-700">
                        <td className="py-3 px-2 lg:px-4 text-gray-300 text-sm lg:text-base">
                          {formatDate(item.created_at)}
                        </td>
                        <td className="py-3 px-2 lg:px-4">
                          <div className="flex items-center gap-2">
                            {/* {getNodeIcon(item.nodeType)} */}
                            <span className="text-white font-medium text-sm lg:text-base">
                              {item.package_name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-white font-bold text-sm lg:text-base">
                          ${item.investment}
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-yellow-400 font-bold text-sm lg:text-base hidden md:table-cell">
                          {item.daily_roi}%
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-green-400 font-bold text-sm lg:text-base hidden md:table-cell">
                          {formatDate(item.last_cron)}
                        </td>
                        <td className="py-3 px-2 lg:px-4">
                          {item.status === "0" ? (
                            <Status title="In Active" />
                          ) : (
                            <Status title="Active" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  total={nodeHistory?.total || 0}
                  perPage={10}
                  route="/dashboard/node-report"
                  currentPage={
                    nodeHistory?.current_page ? parseInt(pageNumber) : 1
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

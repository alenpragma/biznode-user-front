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
import UseTable, { TData } from "@/components/shared/table/UseTable";
import { useUserStore } from "@/lib/store/userStore";

const headers = [
  "data",
  "Node Type",
  "Price",
  "Rewards",
  "Earned Reward",
  "Remaining",
  "Status",
];

export default function HodeHisotoryComponents({
  pageNumber,
}: {
  pageNumber: string;
}) {
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
  const { userData } = useUserStore();

  if (isLoading) {
    return <LoadingContainer />;
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8 mt-8">
        <Card className="bg-gray-800 border-2 border-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold text-white">
                  {nodeHistory?.data.length || 0}
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
                {nodeHistory?.data.length || 0}
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
                  ${userData?.totalInvestment || 0}
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                  Total Invested
                </p>
              </div>
            </div>
            <div className="mt-3 lg:mt-4 flex justify-between items-center">
              <span className="text-gray-300 font-medium text-sm lg:text-base">
                Earned Block Rewards
              </span>
              <span className="text-yellow-400 font-bold text-base lg:text-lg">
              {Number(Number(userData?.reward).toFixed(3)).toLocaleString()} BIZT

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
                  Total Earned
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                  {userData?.totalEarning != null
                    ? Number(userData.totalEarning.toFixed(3)).toLocaleString()
                    : "0.000"}{" "}
                  BIZT
                </p>
              </div>
            </div>
            <div className="mt-3 lg:mt-4 flex justify-between items-center">
              <span className="text-gray-300 font-medium text-sm lg:text-base">
                Monthly Earnings
              </span>
              <span className="text-green-400 font-bold text-base lg:text-lg">
                {0}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Node Report Tabs */}
      {nodeHistory?.data.length === 0 ? (
        <p className="text-center text-gray-400">No node history</p>
      ) : (
        <Card className="bg-gray-800 border-2 border-gray-600">
          <CardHeader>
            <CardTitle className="text-white text-lg lg:text-xl font-bold">
              Node Purchase History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <UseTable headers={headers} className="rounded-md">
              {nodeHistory?.data.map((item) => (
                <tr key={item.id}>
                  <TData className="  font-medium">
                    {formatDate(item.created_at)}
                  </TData>

                  <TData className="  font-medium">{item.package_name}</TData>
                  <TData className="font-medium">${item.investment}</TData>
                  <TData className="font-medium text-yellow-500">
                    {item.daily_roi} BIZT
                  </TData>
                  <TData className=" text-green-400 font-medium">
                    {" "}
                    {item.total_receive_day} days
                  </TData>
                  <TData className=" text-green-400 font-medium">
                    {" "}
                    {Number(item.total_due_day).toLocaleString()} days
                  </TData>
                  <TData>
                    {" "}
                    {item.status === "0" ? (
                      <Status title="In Active" />
                    ) : (
                      <Status title="Active" />
                    )}
                  </TData>
                </tr>
              ))}
            </UseTable>

            <Pagination
              total={nodeHistory?.total || 0}
              perPage={10}
              route="/dashboard/node-report"
              currentPage={nodeHistory?.current_page ? parseInt(pageNumber) : 1}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

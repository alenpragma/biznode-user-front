"use client"

import { Calendar, DollarSign, Activity, Crown, Zap, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NodeReportPage() {
  const nodePurchaseHistory = [
    {
      id: 1,
      date: "2024-01-18",
      nodeType: "Master Node",
      price: "12,200 BIZT",
      status: "Active",
      rewards: "1,250 BIZT",
      uptime: "99.8%",
    },
    {
      id: 2,
      date: "2024-01-15",
      nodeType: "Mini Node",
      price: "250 BIZT",
      status: "Active",
      rewards: "125 BIZT",
      uptime: "99.5%",
    },
    {
      id: 3,
      date: "2024-01-10",
      nodeType: "Master Node",
      price: "12,200 BIZT",
      status: "Active",
      rewards: "1,180 BIZT",
      uptime: "99.9%",
    },
    {
      id: 4,
      date: "2024-01-05",
      nodeType: "Mini Node",
      price: "250 BIZT",
      status: "Active",
      rewards: "98 BIZT",
      uptime: "98.7%",
    },
    {
      id: 5,
      date: "2024-01-01",
      nodeType: "Mini Node",
      price: "250 BIZT",
      status: "Active",
      rewards: "87 BIZT",
      uptime: "99.2%",
    },
  ]

  const nodeStats = {
    totalNodes: 5,
    activeNodes: 5,
    totalInvested: "25,150 BIZT",
    totalRewards: "2,740 BIZT",
    averageUptime: "99.4%",
    monthlyEarnings: "450 BIZT",
  }

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <Badge className="bg-green-500 text-white">Active</Badge>
      case "inactive":
        return <Badge className="bg-red-500 text-white">Inactive</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-500 text-black">Maintenance</Badge>
      default:
        return <Badge className="bg-gray-500 text-white">{status}</Badge>
    }
  }

  const getNodeIcon = (nodeType: string) => {
    return nodeType === "Master Node" ? (
      <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
    ) : (
      <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
    )
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
                    <p className="text-xl lg:text-2xl font-bold text-white">{nodeStats.totalNodes}</p>
                    <p className="text-gray-300 text-sm lg:text-base">Total Nodes</p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">Active Nodes</span>
                  <span className="text-green-400 font-bold text-base lg:text-lg">{nodeStats.activeNodes}</span>
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
                    <p className="text-xl lg:text-2xl font-bold text-white">{nodeStats.totalInvested}</p>
                    <p className="text-gray-300 text-sm lg:text-base">Total Invested</p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">Total Rewards</span>
                  <span className="text-yellow-400 font-bold text-base lg:text-lg">{nodeStats.totalRewards}</span>
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
                    <p className="text-xl lg:text-2xl font-bold text-white">{nodeStats.averageUptime}</p>
                    <p className="text-gray-300 text-sm lg:text-base">Average Uptime</p>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm lg:text-base">Monthly Earnings</span>
                  <span className="text-green-400 font-bold text-base lg:text-lg">{nodeStats.monthlyEarnings}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Node Report Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-800 mb-6 lg:mb-8">
              <TabsTrigger
                value="overview"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-sm"
              >
                <FileText className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-sm"
              >
                <Calendar className="w-4 h-4" />
                History
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <Card className="bg-gray-800 border-2 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg lg:text-xl font-bold">Active Nodes Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {nodePurchaseHistory.map((node) => (
                      <Card key={node.id} className="bg-gray-700 border border-gray-600">
                        <CardContent className="p-4">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex items-center gap-3 lg:gap-4">
                              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                                {getNodeIcon(node.nodeType)}
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-sm lg:text-base">{node.nodeType}</h3>
                                <p className="text-gray-300 text-xs lg:text-sm">Purchased: {node.date}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6">
                              <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-xs lg:text-sm">Rewards Earned</p>
                                <p className="text-yellow-400 font-bold text-sm lg:text-base">{node.rewards}</p>
                              </div>
                              <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-xs lg:text-sm">Uptime</p>
                                <p className="text-green-400 font-bold text-sm lg:text-base">{node.uptime}</p>
                              </div>
                              <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-start">
                                {getStatusBadge(node.status)}
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

            {/* History Tab */}
            <TabsContent value="history">
              <Card className="bg-gray-800 border-2 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg lg:text-xl font-bold">Node Purchase History</CardTitle>
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
                        {nodePurchaseHistory.map((purchase) => (
                          <tr key={purchase.id} className="border-b border-gray-700">
                            <td className="py-3 px-2 lg:px-4 text-gray-300 text-sm lg:text-base">{purchase.date}</td>
                            <td className="py-3 px-2 lg:px-4">
                              <div className="flex items-center gap-2">
                                {getNodeIcon(purchase.nodeType)}
                                <span className="text-white font-medium text-sm lg:text-base">{purchase.nodeType}</span>
                              </div>
                            </td>
                            <td className="py-3 px-2 lg:px-4 text-white font-bold text-sm lg:text-base">
                              {purchase.price}
                            </td>
                            <td className="py-3 px-2 lg:px-4 text-yellow-400 font-bold text-sm lg:text-base hidden md:table-cell">
                              {purchase.rewards}
                            </td>
                            <td className="py-3 px-2 lg:px-4 text-green-400 font-bold text-sm lg:text-base hidden md:table-cell">
                              {purchase.uptime}
                            </td>
                            <td className="py-3 px-2 lg:px-4">{getStatusBadge(purchase.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

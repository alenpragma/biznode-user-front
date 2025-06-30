"use client"

import { useState } from "react"
import { Download, Upload, ArrowLeftRight, Copy, Eye, EyeOff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("withdraw")
  const [showBalance, setShowBalance] = useState(true)

  const transactionHistory = [
    {
      id: 1,
      type: "Deposit",
      amount: "100 BIZT",
      date: "2024-01-18",
      details: "0x742a35...........b4C4C84C4C",
      status: "Completed",
    },
    {
      id: 2,
      type: "Purchase",
      amount: "12,500 BIZT",
      date: "2024-01-18",
      details: "Master Node Purchase",
      status: "Completed",
    },
    {
      id: 3,
      type: "Withdrawal",
      amount: "150 BIZT",
      date: "2024-01-18",
      details: "0x742a35...........b4C4C84C4C",
      status: "Completed",
    },
    {
      id: 4,
      type: "Deposit",
      amount: "200 BIZT",
      date: "2024-01-18",
      details: "0x742a35...........b4C4C84C4C",
      status: "Completed",
    },
    {
      id: 5,
      type: "Deposit",
      amount: "200 BIZT",
      date: "2024-01-18",
      details: "0x742a35...........b4C4C84C4C",
      status: "Completed",
    },
    {
      id: 6,
      type: "Purchase",
      amount: "12,200 BIZT",
      date: "2024-01-18",
      details: "Mini Node Purchase",
      status: "Completed",
    },
    {
      id: 7,
      type: "Deposit",
      amount: "12,200 BIZT",
      date: "2024-01-18",
      details: "0x742a35...........b4C4C84C4C",
      status: "Pending",
    },
    {
      id: 8,
      type: "Withdrawal",
      amount: "12,200 BIZT",
      date: "2024-01-18",
      details: "0x742a35...........b4C4C84C4C",
      status: "Completed",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <Badge className="bg-green-500 text-white">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-500 text-black">Pending</Badge>
      case "active":
        return <Badge className="bg-green-500 text-white">Active</Badge>
      default:
        return <Badge className="bg-gray-500 text-white">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Balance Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Card className="bg-gray-800 border-2 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-base lg:text-lg">B</span>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white">BIZT Balance</h3>
                      <p className="text-gray-300 text-xs lg:text-sm">Platform Token</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-gray-400 hover:text-white"
                  >
                    {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {showBalance ? "1247.89 BIZT" : "••••••••"}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {showBalance ? "≈ $1497.47 USD" : "≈ $••••••"}
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
                      <span className="text-white font-bold text-base lg:text-lg">$</span>
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white">USDT Balance</h3>
                      <p className="text-gray-300 text-xs lg:text-sm">Stablecoin</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-gray-400 hover:text-white"
                  >
                    {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {showBalance ? "523.45 USDT" : "••••••••"}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {showBalance ? "≈ $523.45 USD" : "≈ $••••••"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction Tabs */}
          <Card className="bg-gray-800 border-2 border-gray-600 mb-6 lg:mb-8">
            <CardHeader>
              <CardTitle className="text-white text-lg lg:text-xl font-bold">Deposit, Withdraw & Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-700 mb-6">
                  <TabsTrigger
                    value="deposit"
                    className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-xs lg:text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Deposit</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdraw"
                    className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-xs lg:text-sm"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="hidden sm:inline">Withdraw</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="transfer"
                    className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-xs lg:text-sm"
                  >
                    <ArrowLeftRight className="w-4 h-4" />
                    <span className="hidden sm:inline">Transfer</span>
                  </TabsTrigger>
                </TabsList>

                {/* Deposit Tab */}
                <TabsContent value="deposit" className="space-y-4 lg:space-y-6">
                  <div className="max-w-md mx-auto space-y-4">
                    <div>
                      <Label htmlFor="deposit-coin" className="text-white font-medium">
                        Select Coin
                      </Label>
                      <Select defaultValue="bizt">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="bizt">BIZT</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="deposit-network" className="text-white font-medium">
                        Select Network
                      </Label>
                      <Select defaultValue="bsc">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="bsc">BSC (Binance Smart Chain)</SelectItem>
                          <SelectItem value="eth">Ethereum</SelectItem>
                          <SelectItem value="polygon">Polygon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="deposit-address" className="text-white font-medium">
                        Deposit Address
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="deposit-address"
                          value="0x742a35Cc6Db50e532D5536FD93a4C4C84C4C"
                          readOnly
                          className="bg-gray-700 border-gray-600 text-white text-xs lg:text-sm"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-600 hover:bg-gray-700 bg-transparent"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-700 p-3 lg:p-4 rounded-lg">
                      <p className="text-gray-300 text-xs lg:text-sm">
                        Send only BIZT to this address. Sending any other coin may result in permanent loss.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Withdraw Tab */}
                <TabsContent value="withdraw" className="space-y-4 lg:space-y-6">
                  <div className="max-w-md mx-auto space-y-4">
                    <div>
                      <Label htmlFor="withdraw-coin" className="text-white font-medium">
                        Select Coin
                      </Label>
                      <Select defaultValue="bizt">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="bizt">BIZT</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="withdraw-network" className="text-white font-medium">
                        Select Network
                      </Label>
                      <Select defaultValue="bsc">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="bsc">BSC (Binance Smart Chain)</SelectItem>
                          <SelectItem value="eth">Ethereum</SelectItem>
                          <SelectItem value="polygon">Polygon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="withdraw-amount" className="text-white font-medium">
                        Amount
                      </Label>
                      <Input
                        id="withdraw-amount"
                        placeholder="50.00"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="withdraw-address" className="text-white font-medium">
                        Withdrawal Address
                      </Label>
                      <Input
                        id="withdraw-address"
                        placeholder="0x742a35Cc6Db50e532D5536FD93a4C4C84C4C"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-base lg:text-lg">
                      Withdraw Now
                    </Button>
                  </div>
                </TabsContent>

                {/* Transfer Tab */}
                <TabsContent value="transfer" className="space-y-4 lg:space-y-6">
                  <div className="max-w-md mx-auto space-y-4">
                    <div>
                      <Label htmlFor="transfer-coin" className="text-white font-medium">
                        Select Coin
                      </Label>
                      <Select defaultValue="bizt">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="bizt">BIZT</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="transfer-recipient" className="text-white font-medium">
                        Recipient Email/Username
                      </Label>
                      <Input
                        id="transfer-recipient"
                        placeholder="user@example.com"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="transfer-amount" className="text-white font-medium">
                        Amount
                      </Label>
                      <Input
                        id="transfer-amount"
                        placeholder="100.00"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="transfer-note" className="text-white font-medium">
                        Note (Optional)
                      </Label>
                      <Input
                        id="transfer-note"
                        placeholder="Transfer note..."
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-base lg:text-lg">
                      Transfer Now
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card className="bg-gray-800 border-2 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white text-lg lg:text-xl font-bold">Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Type
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Amount
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Date
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base hidden md:table-cell">
                        Details
                      </th>
                      <th className="text-left py-3 px-2 lg:px-4 text-gray-300 font-medium text-sm lg:text-base">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionHistory.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-700">
                        <td className="py-3 px-2 lg:px-4 text-white font-medium text-sm lg:text-base">
                          {transaction.type}
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-white font-bold text-sm lg:text-base">
                          {transaction.amount}
                        </td>
                        <td className="py-3 px-2 lg:px-4 text-gray-300 text-sm lg:text-base">{transaction.date}</td>
                        <td className="py-3 px-2 lg:px-4 text-gray-300 font-mono text-xs lg:text-sm hidden md:table-cell">
                          {transaction.details}
                        </td>
                        <td className="py-3 px-2 lg:px-4">{getStatusBadge(transaction.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

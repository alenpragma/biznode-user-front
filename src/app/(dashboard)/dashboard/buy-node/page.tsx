"use client";

import { useState } from "react";
import {
  Crown,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Timer,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function BuyNodePage() {
  const [activeTab, setActiveTab] = useState("master");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Desktop Sidebar */}

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-800 mb-6 lg:mb-8">
              <TabsTrigger
                value="master"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-sm"
              >
                <Crown className="w-4 h-4" />
                <span className="hidden sm:inline">Master Node</span>
                <span className="sm:hidden">Master</span>
              </TabsTrigger>
              <TabsTrigger
                value="mini"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-sm"
              >
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Mini Node</span>
                <span className="sm:hidden">Mini</span>
              </TabsTrigger>
            </TabsList>

            {/* Master Node Content */}
            <TabsContent value="master">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">
                  Master Node Sale Phases
                </h3>
                <p className="text-gray-300 text-base lg:text-lg">
                  Build & Scale Your Crypto Business with Nodes and Beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Phase 1 - Active */}
                <Card className="bg-gray-800 border-3 border-yellow-500 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                        <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-black" />
                      </div>
                    </div>
                    <Badge className="bg-yellow-500 text-black font-bold mb-3 text-xs lg:text-sm px-3 py-1">
                      Active Phase
                    </Badge>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-white">
                      Phase 1
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 text-red-400 mt-3">
                      <Timer className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-base font-semibold">
                        Ends in: 2d 14h 15m 52s
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4 lg:space-y-6">
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                        $500
                      </div>
                      <div className="text-gray-300 text-base lg:text-lg font-medium">
                        Per Node
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm lg:text-base">
                        <span className="text-gray-300 font-medium">
                          Progress
                        </span>
                        <span className="text-white font-bold">4000/5000</span>
                      </div>
                      <Progress value={80} className="h-3 bg-gray-700" />
                      <div className="text-center text-white font-bold text-base lg:text-lg">
                        1000 remaining
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 lg:py-4 text-lg lg:text-xl shadow-lg">
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Phase 2 - Upcoming */}
                <Card className="bg-gray-800 border-2 border-gray-600 relative overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-300">
                      Phase 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4 lg:space-y-6">
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-gray-300 mb-2">
                        $1000
                      </div>
                      <div className="text-gray-400 text-base lg:text-lg font-medium">
                        Per Node
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm lg:text-base">
                        <span className="text-gray-400 font-medium">
                          Progress
                        </span>
                        <span className="text-gray-300 font-bold">0/5000</span>
                      </div>
                      <Progress value={0} className="h-3 bg-gray-700" />
                      <div className="text-center text-gray-300 font-bold text-base lg:text-lg">
                        5000 remaining
                      </div>
                    </div>

                    <Button
                      disabled
                      className="w-full bg-gray-600 text-gray-300 font-bold py-3 lg:py-4 text-lg lg:text-xl cursor-not-allowed"
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Phase 3 - Future */}
                <Card className="bg-gray-800 border-2 border-gray-600 relative overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-300">
                      Phase 3
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4 lg:space-y-6">
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-gray-300 mb-2">
                        $2000
                      </div>
                      <div className="text-gray-400 text-base lg:text-lg font-medium">
                        Per Node
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm lg:text-base">
                        <span className="text-gray-400 font-medium">
                          Progress
                        </span>
                        <span className="text-gray-300 font-bold">0/5000</span>
                      </div>
                      <Progress value={0} className="h-3 bg-gray-700" />
                      <div className="text-center text-gray-300 font-bold text-base lg:text-lg">
                        5000 remaining
                      </div>
                    </div>

                    <Button
                      disabled
                      className="w-full bg-gray-600 text-gray-300 font-bold py-3 lg:py-4 text-lg lg:text-xl cursor-not-allowed"
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mini Node Content */}
            <TabsContent value="mini">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-white">
                  Mini Node Sale Phases
                </h3>
                <p className="text-gray-300 text-base lg:text-lg">
                  Build & Scale Your Crypto Business with Nodes and Beyond.
                </p>
              </div>

              <div className="flex justify-center">
                <Card className="w-full max-w-lg bg-gray-800 border-3 border-blue-500 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>

                  <CardHeader className="text-center pb-4 lg:pb-6">
                    <div className="flex justify-center mb-4 lg:mb-6">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                        <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                      Mini Node
                    </CardTitle>
                    <div>
                      <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-3">
                        $250.00
                      </div>
                      <Badge className="bg-green-500 text-white font-bold text-sm lg:text-base px-4 py-2">
                        2 Years Validity
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 lg:space-y-8">
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-white">
                        Features:
                      </h4>
                      <div className="space-y-3 lg:space-y-4">
                        <div className="flex items-center gap-3 lg:gap-4">
                          <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-200 text-base lg:text-lg">
                            Standard staking rewards (8% APY)
                          </span>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-4">
                          <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-200 text-base lg:text-lg">
                            Basic referral bonuses (5%)
                          </span>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-4">
                          <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-200 text-base lg:text-lg">
                            3-year guaranteed validity
                          </span>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-4">
                          <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-200 text-base lg:text-lg">
                            Community access
                          </span>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-gray-700 border-2 border-blue-500/30">
                      <CardContent className="p-4 lg:p-6 text-center">
                        <div className="text-sm lg:text-base text-gray-300 mb-3 font-medium">
                          Estimated Annual Return
                        </div>
                        <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-3">
                          $225
                        </div>
                        <div className="text-gray-200 text-base lg:text-lg">
                          <span className="font-bold">Daily Reward</span> $0.5
                        </div>
                      </CardContent>
                    </Card>

                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 lg:py-5 text-lg lg:text-xl shadow-lg">
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

import { Badge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Button } from "../ui/button";
import MainContainer from "../shared/container/MainContainer";

const TokenSaleSection = () => {
  return (
    <section
      id="token-sale"
      className="py-20 bg-gradient-to-br from-slate-900 to-black"
    >
      <MainContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Token Sale Phases - Get in Early for Maximum Benefits
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <Card className="bg-gradient-to-br from-blue-900 to-slate-800 border-blue-500 text-white relative">
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-500 text-white">Live Now</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <CardTitle className="text-2xl">Phase 1</CardTitle>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-yellow-400">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Pre-Sale Ends In</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-blue-600 rounded p-2">
                    <div className="text-xl font-bold">02</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className="bg-blue-600 rounded p-2">
                    <div className="text-xl font-bold">20</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="bg-blue-600 rounded p-2">
                    <div className="text-xl font-bold">36</div>
                    <div className="text-xs">Minutes</div>
                  </div>
                  <div className="bg-blue-600 rounded p-2">
                    <div className="text-xl font-bold">46</div>
                    <div className="text-xs">Second</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                $500 <span className="text-lg font-normal">Per Node</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>4000/5000</span>
                </div>
                <Progress value={80} className="h-2" />
                <p className="text-center mt-2 text-sm">1000 remaining</p>
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Buy BIZ Node
              </Button>
            </CardContent>
          </Card>

          {/* Phase 2 */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 text-white">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gray-500 text-white">Coming soon</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <CardTitle className="text-2xl">Phase 2</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                $1000 <span className="text-lg font-normal">Per Node</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>0/5000</span>
                </div>
                <Progress value={0} className="h-2" />
                <p className="text-center mt-2 text-sm">5000 remaining</p>
              </div>
              <Button className="w-full bg-gray-600 text-white" disabled>
                Buy BIZ Node
              </Button>
            </CardContent>
          </Card>

          {/* Phase 3 */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 text-white">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gray-500 text-white">Coming soon</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <CardTitle className="text-2xl">Phase 3</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                $2000 <span className="text-lg font-normal">Per Node</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>0/5000</span>
                </div>
                <Progress value={0} className="h-2" />
                <p className="text-center mt-2 text-sm">5000 remaining</p>
              </div>
              <Button className="w-full bg-gray-600 text-white" disabled>
                Buy BIZ Node
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainContainer>
    </section>
  );
};
export default TokenSaleSection;

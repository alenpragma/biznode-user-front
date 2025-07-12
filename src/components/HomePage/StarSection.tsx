import { BarChart3, Coins, Shield, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import MainContainer from "../shared/container/MainContainer";

const StartSection = () => {
  return (
    <section
      id="stats"
      className="py-14 bg-gradient-to-br from-slate-900 to-blue-900"
    >
      <MainContainer>
        {" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Live Stats & Trust Signals
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-5">
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-8">
              <Coins className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                12,500,000
              </div>
              <p className="text-gray-300">Total BIZT Node Sale</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-8">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25,000+</div>
              <p className="text-gray-300">Total Users</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-8">
              <BarChart3 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">$1.2M+</div>
              <p className="text-gray-300">Rewards</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-8">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">Yes</div>
              <p className="text-gray-300">KYC Verified</p>
            </CardContent>
          </Card>
        </div>
      </MainContainer>
    </section>
  );
};
export default StartSection;

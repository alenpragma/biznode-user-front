import { Coins, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import MainContainer from "../shared/container/MainContainer";

const GettingStartSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-slate-900">
      <MainContainer>
        {" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Started in 3 Easy Steps
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-blue-900 to-slate-800 border-blue-500 text-white text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-xl">
                Create Account & Connect Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Sign up and connect your MetaMask or Trust Wallet
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-slate-800 border-blue-500 text-white text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <Coins className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-xl">Activate with $10/BIZT</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Sign up and connect your MetaMask or Trust Wallet
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-slate-800 border-blue-500 text-white text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-xl">
                Buy Tokens or Nodes Directly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Purchase BIZT tokens or activate nodes immediately
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
          >
            Buy BIZ Node
          </Button>
        </div>
      </MainContainer>{" "}
    </section>
  );
};
export default GettingStartSection;

import {
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import MainContainer from "../shared/MainContainer";
import { Images } from "@/lib/images";
import Image, { StaticImageData } from "next/image";

const cardData = [
  {
    icon: Images.utils1,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Buy Master Node / Mini Nodes",
    description: "Earn consistent returns through our staking mechanism",
  },
  {
    icon: Images.utils2,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Earn Daily Rewards from Node Staking",
    description: "Earn consistent returns through our staking mechanism",
  },
  {
    icon: Images.utils3,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Grow with Referral Commissions",
    description: "Earn consistent returns through our staking mechanism",
  },
  {
    icon: Images.utils4,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    title: "Unlock Ranks & Receive Team Bonuses",
    description: "Earn consistent returns through our staking mechanism",
  },
  {
    icon: Images.utils5,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Access Future DApps Built on Biz Node Chain",
    description: "Earn consistent returns through our staking mechanism",
  },
  {
    icon: Images.utils6,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Trade or Swap within Biz Node Wallet",
    description: "Earn consistent returns through our staking mechanism",
  },
];

const CardItem = ({
  icon,
  bgColor,
  title,
  description,
}: {
  icon: StaticImageData;
  bgColor: string;
  title: string;
  description: string;
}) => (
  <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center justify-center">
        <div
          className={`size-44 ${bgColor} rounded-lg flex items-center justify-center mb-4`}
        >
          <Image
            className="size-full"
            src={icon}
            alt="img"
            width={500}
            height={500}
          />
        </div>
      </div>
      <CardTitle className="text-xl text-gray-900">
        {(() => {
          const words = title.trim().split(" ");
          if (words.length === 1) {
            return <>{title}</>;
          } else {
            const mid = Math.floor(words.length / 2);
            const firstLine = words.slice(0, mid).join(" ");
            const secondLine = words.slice(mid).join(" ");
            return (
              <>
                {firstLine} <br />
                <span className="block">{secondLine}</span>
              </>
            );
          }
        })()}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
        <ArrowRight className="w-4 h-4 -rotate-45 text-white" />
      </div>
    </CardContent>
  </Card>
);

const TokenUtilsSections = () => {
  return (
    <section id="utilities" className="py-20 bg-gray-50">
      <MainContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where Your Tokens Work Hard For You
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((item, index) => (
            <CardItem key={index} {...item} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
};

export default TokenUtilsSections;

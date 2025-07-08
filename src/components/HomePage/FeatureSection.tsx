
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainContainer from "../shared/container/MainContainer";
import { Images } from "@/lib/images";
import Image from "next/image";

const FeatureData = [
  {
    icon: Images.section1,
    title: "Staking Rewards with Daily Income",
    description: "Earn consistent returns through our staking mechanism",
  },
  {
    icon: Images.section2,
    title: "Node Activation & Lifetime Validity",
    description: "Activate nodes that generate income for life",
  },
  {
    icon: Images.section3,
    title: "Affiliate Commission System",
    description: "Build your network and earn from referrals",
  },
  {
    icon: Images.section4,
    title: "Cross-Utility with 20+ Partner Coins",
    description: "Use BIZT across our entire ecosystem. staking mechanism",
  },
  {
    icon: Images.section5,
    title: "Scalable ROI & Rank Based Bonuses",
    description:
      "Higher ranks unlock better rewards Higher ranks unlock better rewards",
  },
  {
    icon: Images.section6,
    title: "KYC-verified Secure Platform",
    description: "Fully compliant and audited for security",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-[#000D2E]">
      <MainContainer>
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Not Just a Token - A Crypto Business Utility Engine
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-5">
            {FeatureData.map((item, index) => (
              <Card
                key={index}
                className="bg-[#041746] border-slate-700 text-white"
              >
                <CardHeader>
                  <Image className="size-8" src={item.icon} alt="img" width={300} height={300} />{" "}
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.description} </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
export default FeatureSection;

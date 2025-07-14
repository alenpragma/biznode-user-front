import MainContainer from "@/components/shared/container/MainContainer";
import { Button } from "@/components/ui/button";
import { Images } from "@/lib/images";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";

const HeroSection = ({ token }: { token: string | undefined }) => {
  return (
    <section
      id="home"
      className="relative min-h-fit  overflow-hidden bg-cover"
      style={{ backgroundImage: "url('/images/hero/background.jpg')" }}
    >
      <div className=" bg-gradient-to-br from-[#0f0e0ea4] to-[#00000096] py-20">
        <MainContainer>
          <div className="relative container mx-auto px-4 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="space-y-8">
                <div className="bg-[#003F63] text-white px-4 py-2 font-medium w-fit flex items-center gap-2 rounded-full">
                  <FaFireFlameCurved className="text-yellow-500 size-6" />
                  Over BIZT Node Already Sale
                </div>
                <h1 className="text-5xl lg:text-5xl font-bold text-white leading-tight">
                  Secure Your Share in the Future of Crypto Utility
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Join our limited-time token sale and be part of the Biz Node
                  ecosystem powering 20+ utility coins, nodes, and staking
                  income.
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                  <Link href={!token ? "/sign-up" : "/dashboard"}>
                    {" "}
                    <Button
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <a
                    href="/biznode_whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-white hover:bg-[#b8b8b8] text-black font-semibold px-8 py-4 text-lg"
                    >
                      Business Plan
                      <ArrowDown className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="">
                <Image
                  className="w-full"
                  src={Images.bannerImage}
                  alt="img"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </section>
  );
};

export default HeroSection;

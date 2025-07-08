import MainContainer from "../shared/container/MainContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <MainContainer>
        {" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    What is ICO Biz Node
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-600">
                    Join our limited-time token sale and be part of the Biz Node
                    ecosystem powering 20+ utility coins, nodes, and staking
                    income. Join our limited-time token sale and be part of the
                    Biz Node ecosystem powering 20+ utility coins, nodes, and
                    staking income.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    Which cryptocurrency is best to buy today?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-600">
                    BIZT offers unique utility and staking opportunities in the
                    current market.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    How about day trading crypto?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-600">
                    Our platform supports various trading strategies including
                    day trading with advanced tools.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    When to sell a cryptocurrency?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-600">
                    Timing depends on your investment strategy and market
                    conditions. Our platform provides analytics to help.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    What is ICO Crypto?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-600">
                    ICO stands for Initial Coin Offering, a fundraising method
                    for new cryptocurrency projects.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MainContainer>
    </section>
  );
};
export default FaqSection;

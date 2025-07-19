import MainContainer from "../shared/container/MainContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-900">
      <MainContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {/* FAQ 1 */}
            <AccordionItem
              value="item-1"
              className="bg-gray-700 text-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    Why should I buy BIZ Node?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-300">
                    Because early movers earn the most! BIZ Node is your opportunity to secure a spot in a growing blockchain ecosystem and start earning passive crypto rewards from day one.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 2 */}
            <AccordionItem
              value="item-2"
              className="bg-gray-700 text-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    Can I really earn daily rewards?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-300">
                    Yes! With a one-time node purchase, you unlock daily BIZT income for up to 3/5 years—no tech skills needed, just smart buy.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 3 */}
            <AccordionItem
              value="item-3"
              className="bg-gray-700 text-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    What makes BIZ Node different?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-300">
                    BIZ Node combines real utility, a powerful ecosystem, and rewarding incentives—making it one of the most accessible and profitable node-based platforms today.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 4 */}
            <AccordionItem
              value="item-4"
              className="bg-gray-700 text-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    Is this a long-term opportunity?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-300">
                    Absolutely. Our 3–5 year reward cycles, expanding ecosystem, and validator program are built for sustainable, long-term income and growth.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 5 */}
            <AccordionItem
              value="item-5"
              className="bg-gray-700 text-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    ?
                  </div>
                  <span className="text-lg font-semibold">
                    Who is BIZ Node perfect for?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="pl-9 border-l-4 border-blue-500 ml-3">
                  <p className="text-gray-300">
                    Anyone with big dreams and bold goals—entrepreneurs, crypto believers, team builders, or anyone ready to create financial freedom through blockchain.
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

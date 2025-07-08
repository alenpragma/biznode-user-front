import {
  ArrowRight,
  CheckCircle,
  Facebook,
  Mail,
  MessageCircle,
  Network,
  Send,
  Shield,
  Youtube,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MainContainer from "../shared/container/MainContainer";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Main Footer Content */}
      <MainContainer>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 md:gap-8 gap-5 py-5">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-black font-bold" />
              </div>
              <h3 className="text-3xl font-bold">
                <span className="text-yellow-400">BIZT</span>
                <span className="text-white"> Node</span>
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Building the future of decentralized utility infrastructure. Join
              our ecosystem of 20+ partner coins, nodes, and staking rewards
              that generate passive income for life.
            </p>

            {/* Network Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                <div className="text-sm text-gray-400">Network Uptime</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Node Monitoring</div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-green-900/30 px-3 py-2 rounded-full border border-green-700">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">
                  KYC Verified
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/30 px-3 py-2 rounded-full border border-blue-700">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">
                  Audited
                </span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white border-b border-slate-700 pb-2">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Node Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Staking Rewards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Token Swap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Referral Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white border-b border-slate-700 pb-2">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Node Setup Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Security Audit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white border-b border-slate-700 pb-2">
              Stay Connected
            </h4>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">support@biztnode.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Telegram</div>
                  <div className="text-white">@BiztNodeOfficial</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <div className="text-sm text-gray-400">Get Updates</div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter email address"
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500 flex-1"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <div className="text-sm text-gray-400">Follow Us</div>
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/biztoken"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors border border-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@biztoken"
                  className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors border border-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/TokenBiz3525"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors border border-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-5 h-5 text-white" />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/BizToken_BIZT"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors border border-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-5">
        <MainContainer>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <div>© 2024 BIZT Node. All rights reserved.</div>
              <div className="hidden md:block">|</div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Cookie Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Risk Disclosure
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Network Status: Online</span>
              </div>
              <div className="hidden md:block">|</div>
              <div>Block Height: 2,847,392</div>
            </div>
          </div>
        </MainContainer>
      </div>

      {/* Disclaimer */}
      <div className="bg-slate-900 border-t border-slate-800 py-4">
        <MainContainer>
          {" "}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Risk Warning:</strong> Cryptocurrency investments carry
            significant risk. Past performance does not guarantee future
            results. Please invest responsibly and only what you can afford to
            lose. BIZT Node is not a financial advisor. This website does not
            constitute investment advice.
          </p>
        </MainContainer>{" "}
      </div>
    </footer>
  );
};
export default FooterSection;

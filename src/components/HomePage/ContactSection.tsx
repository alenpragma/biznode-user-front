import { Mail, MapPin, Phone } from "lucide-react";
import MainContainer from "../shared/MainContainer";
import { Card, CardContent } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 to-blue-900"
    >
      <MainContainer>
        {" "}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300">
                {` Any question? Reach out to us and we'll get back to you shortly.`}{" "}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+23 0123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">E-Mail</h3>
                  <p className="text-gray-300">
                    22 International Division Via G.B. Pirelli
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">+23 0123 4567</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  E-Mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Messages
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter Your Messages"
                  rows={4}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainContainer>
    </section>
  );
};
export default ContactSection;

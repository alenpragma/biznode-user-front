import FooterSection from "@/components/NavbarAndFooter/Footer";
import Navbar from "@/components/NavbarAndFooter/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
};
export default LandingLayout;

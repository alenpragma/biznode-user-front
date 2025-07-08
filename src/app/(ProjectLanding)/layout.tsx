import FooterSection from "@/components/NavbarAndFooter/Footer";
import Navbar from "@/components/NavbarAndFooter/Navbar";
import { cookies } from "next/headers";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const token = await cookieStore.get("biznode_token")?.value;
  return (
    <>
      <Navbar token={token}/>
      {children}
      <FooterSection />
    </>
  );
};
export default LandingLayout;

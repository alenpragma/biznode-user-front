import { Header } from "@/components/NavbarAndFooter/Header";
import { Sidebar } from "@/components/NavbarAndFooter/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full bg-gray-900">
      <div className="hidden lg:block max-w-[250px] w-full fixed h-screen bg-gray-500">
        <Sidebar />
      </div>
      <div className="md:ml-[250px] w-full h-fit relative">
        <Header title="Dashboard" subtitle="Dashboard" />
        <div className="min-h-screen w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

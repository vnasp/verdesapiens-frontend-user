import { Navbar } from "@/components";

export default function
  GeneralLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="bg-green-50 shadow-md rounded-md p-4 max-h-screen">
      {children}
    </div>
  );
}
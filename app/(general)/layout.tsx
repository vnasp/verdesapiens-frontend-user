import { Navbar } from "@/components";

export default function
  GeneralLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="bg-lime-200 shadow-md rounded-lg p-4 max-h-screen">
      {children}
    </div>
  );
}
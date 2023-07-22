import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center">
      <MobileSidebar />
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
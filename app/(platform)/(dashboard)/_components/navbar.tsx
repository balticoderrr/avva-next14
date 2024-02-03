import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-bottom shadow-sm bg-white flex items-center">
      {/* Mobile sidebar*/}
      <div className="flex item-center gap-x-4">
        <div className="hidden md:flex ">
          <Logo />
        </div>
        <Button
          variant="primary"
          size="sm"
          className="rounded-sm hidden md:block h-auto p-1.5 px-2"
        >
          Create
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="rounded-sm block md:hidden ml-2"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex item-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectPersonalUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

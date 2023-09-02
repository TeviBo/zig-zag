import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input} from "@nextui-org/react";
import ZZLogo from '../../../../assets/images/zz-logo.png';
import SearchIcon from "./SearchIcon";

const AppBar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
      <Navbar shouldHideOnScroll isBordered className="dark bg-[#122c68]">
        <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<img src={ZZLogo} alt="Menu Logo" />}
          className="sm:flex md:flex lg:hidden xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      <NavbarBrand className="hidden lg:flex xl:flex text-white text-4xl gap-3" >
        <img src={ZZLogo} alt='Zig Zag Logo' className="w-12 pt-2" />
        <p className="font-bold text-inheri">
        <span className='text-[#ff2c31]'>Z</span>
        <span className="text-[#49709d]">ig</span>{" "}
        <span className='text-[#ff2c31]'>Z</span>
        <span className='text-[#49709d]'>ag</span>
        </p>
      </NavbarBrand>
        </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10 ml-4",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat"  style={{ opacity: 1 }}>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )

}
export default AppBar;
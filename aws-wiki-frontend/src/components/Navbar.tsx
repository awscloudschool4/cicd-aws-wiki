"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { menu: "화면공유", href: "/class" },
    { menu: "자격증/취업", href: "/job" },
    { menu: "필기공유", href: "/note" },
  ];

  return (
    <>
      <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-xl">AWESOME WIKI</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`web-${item.menu}-${index}`}>
              <Link
                href={item.href}
                color={pathname == item.href ? "primary" : "foreground"}
                key={index}
              >
                <p className="font-semibold">{item.menu}</p>
              </Link>{" "}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="필기 검색"
            size="sm"
            startContent={<IoMdSearch size={18} />}
            type="search"
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`mobile-${item.menu}-${index}`}>
              <Link
                className="w-full"
                href={item.href}
                size="lg"
                color="foreground"
                key={index}
              >
                {item.menu}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Navigation;

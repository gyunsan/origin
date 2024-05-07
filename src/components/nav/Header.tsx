'use client';
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { "link": "/", "name": "Home" },
        { "link": "/blog", "name": "Blog" },
        { "link": "/about", "name": "About" },
    ]

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="2xl"

        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Logo />
                    <p className="font-bold text-inherit">My App</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Logo />
                    <p className="font-bold text-inherit">My App</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/blog" aria-current="page">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contact">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" >
                <NavbarItem className="hidden lg:flex" >
                    <Link href="#" color="secondary">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="secondary" href="#" variant="flat">
                        Sign Up
                    </Button>

                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full "
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={item.link}

                        >
                            <p className="my-3 text-3xl border-b-1 border-default text-center"> {item.name} </p>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

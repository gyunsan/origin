

import React from 'react';
import { Chip, Divider, Link } from '@nextui-org/react';
import { Logo } from '../Logo';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
    {
        name: 'Terms',
        href: '/terms',
    },
    {
        name: 'Privacy',
        href: '/privacy',
    },
    {
        name: 'Cookie',
        href: '/cookie',
    },
    {
        name: 'FAQs',
        href: '/faqs',
    },
];

export default function Footer() {
    return (
        <>
            <Divider className="w-full mt-12" />

            <footer className="flex w-full justify-between">
                <div className="w-full pt-6 pb-6 md:flex md:items-center md:justify-between">
                    <div>
                        <div className="flex items-center justify-center gap-3 py-6">
                            Select theme
                            <Divider className="h-4" orientation="vertical" />
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 pb-4">
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                            {navLinks.map((item) => (
                                <Link key={item.name} className="text-default-500" href={item.href} size="sm">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-center gap-3 md:justify-start ">
                            <div className="flex items-center">
                                <Logo />
                                <span className="text-lg font-medium">{process.env.SITE_NAME}</span>
                            </div>
                            <Divider className="h-4" orientation="vertical" />
                            <Chip className="border-none px-0 text-tiny text-default-500" color="success" variant="dot">
                                All systems operational
                            </Chip>
                        </div>

                        <p className="text-center text-tiny text-default-400 md:text-start">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
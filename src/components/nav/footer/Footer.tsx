
import { Divider } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";


export default function Footer() {

    return (
        <footer className="mb-6 md:mx-2">
            <Divider className="mt-16 sm:mt-20 lg:mt-24" />
            <div className="flex flex-wrap justify-between gap-2 pt-8">
                <p className="text-small text-foreground/70">&copy; 2024 Acme Inc. All rights reserved.</p>
                <ThemeSwitcher />
            </div>
        </footer >
    );
}

import { getNavList } from "@/lib/NavList";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export default function NavLinks() {
    const [activeSection, setActiveSection] = useState("home-section");
    const menuList = getNavList(activeSection);

    useEffect(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });
                }
            });
        });

        return () => {
            anchors.forEach((anchor) => {
                anchor.removeEventListener("click", function (e) {});
            });
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row lg:gap-10 gap-6">
            {menuList.map((link, idx) => (
                <a
                    key={idx}
                    className={cn(
                        "hover:text-primary",
                        link.active ? "text-primary hover:text-primary " : ""
                    )}
                    href={link.href}
                    onClick={() => setActiveSection(link.href.slice(1))}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}

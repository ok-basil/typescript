'use client';
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    return (
        <div>
            {
                isAboveMediumScreens ? (
                    <div className="flex items-center gap-2.5">
                        {links.map((link =>(
                            <NavLink key={link.title} item={link} />
                            )
                        ))}
                        {session ? (
                            <>
                                {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                                <button className="p-2.5 cursor-pointer font-bold bg-#ededed!important text-[#0a0a0a]">Logout</button>
                            </>
                        ): (
                            <NavLink item={{ title: "Login", path: "/login" }} />
                        )}
                    </div>
                ) : (
                    <button onClick={() => setOpen((open) => !open)}>Menu</button>
                )
            }
            
            {
                !isAboveMediumScreens && open && <div className="absolute pt-5 h-[100vh] top-0 right-0 flex flex-col items-center justify-center gap-2.5 transition ease-in-out w-[50%] bg-[rebeccapurple]">
                    {links.map((link =>(
                        <NavLink key={link.title} item={link} />
                        )
                    ))}
                    {session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className="p-2.5 cursor-pointer font-bold bg-#ededed!important text-[#0a0a0a]">Logout</button>
                        </>
                    ): (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )}
                </div>
            }
        </div>
        
    )
}

export default Links
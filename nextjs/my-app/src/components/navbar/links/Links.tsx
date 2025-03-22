import NavLink from "./navLink/NavLink"

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

    const session = true;
    const isAdmin = true;
    return (
        <div className="flex align-center gap-2.5">
            {links.map((link =>(
                <NavLink key={link.title} item={link} />
                )
            ))}
            {session ? (
                <>
                    {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                    <button className="p-2.5 cursor-pointer font-bold bg-#">Logout</button>
                </>
            ): (
                <NavLink item={{ title: "Login", path: "/login" }} />
            )}
        </div>
    )
}

export default Links
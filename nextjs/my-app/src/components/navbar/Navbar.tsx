import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between h-[100px] align-center pt-5">
            <Link href="/" className="text-2xl font-bold">Logo</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar
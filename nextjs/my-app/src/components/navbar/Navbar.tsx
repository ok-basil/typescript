import Links from "./links/Links"

const Navbar = () => {
    return (
        <div className="flex justify-between h-[100px] align-center pt-5">
            <div className="text-2xl font-bold">Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar
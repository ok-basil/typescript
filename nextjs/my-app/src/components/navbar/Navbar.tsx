import Links from "./links/Links"

const Navbar = () => {
    return (
        <div className="bg-blue-500 flex justify-between h-[100px] align-center">
            <div>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar
import Link from "next/link";

export default function SideMenu() {
    return (
        <div className="flex flex-col text-sm font-poppins">
            <span className="py-1 duration-200 ease-in-out border-b border-white hover:border-b hover:border-primary">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </span>
            <span className="py-1">About Me</span>
            <span className="py-1">My Gallery</span>
            <span className="py-1">Contact Me</span>
        </div>        
    )
}
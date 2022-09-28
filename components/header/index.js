import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default function Header(){
    return (
        <div className="fixed top-0 z-40 w-full py-4 bg-white">
            <div className="container flex items-center justify-between px-10 mx-auto">
                <h1 className="text-2xl font-bold font-poppins">Zaan<span className="text-primary">.</span></h1>
                <div className="flex justify-center text-2xl">
                    <FontAwesomeIcon icon={faGithub} className="px-1" />
                    <FontAwesomeIcon icon={faInstagram} className="px-1" />
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"
import profile from "../../public/zanuk.png"

export default function Content (){
    return (
        <div className="relative px-10 overflow-hidden">
            <h5 className="text-base font-semibold font-poppins">Hallo, I am</h5>
            <h1 className="w-3/4 text-5xl font-bold font-poppins text-primary">Muhammad Zainuddin Basyar</h1>
            <p className="w-3/4 py-2 text-xs font-light font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris erat, consectetur id lectus eu, auctor lacinia lorem. </p>
            <div className="absolute bottom-3 -right-14">
                <Image src={profile} height={200} width={200} style={{borderRadius: '100%'}} />
            </div>
        </div>
    )
}
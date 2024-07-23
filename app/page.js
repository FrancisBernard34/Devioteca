'use client'
import Modal from "./components/modal"
import Image from "next/image";


export default function Home() {
  return (
    <header className="">
      <ul className="flex justify-evenly p-4 bg-stone-700">
        <li className="self-center"> <Image 
        src={"/img-devioteca.jpeg"}
        className={"rounded-md bg-white"}
        width={100}
        height={100}
        alt ="logo"
        priority/> </li>
        <li className="flex items-center ">
          <select className="bg-[#D4D4D4] rounded-md h-10 cursor-pointer">
            <option className=""> Todos</option>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
            <option> 4</option>
            <option> 5</option>
            <option> 6</option>
            <option> 7</option>
            <option> 8</option>
            <option> 9</option>
          </select>
          <div className="flex items-center relative">
          <input type='text'placeholder="Pesquisa devioteca"  className=" focus:outline-[#F3A847] text-center  w-96 h-10 border-2 border-black rounded-md "></input>
          <Image src={'/lupa.png'}
          className="bg-[#F3A847] p-2 cursor-pointer rounded-md absolute left-80 ml-6 "
          width={40}
          height={30}
          alt = 'lupa'
          priority/>
          </div>
        </li>
        <div className="flex p-2">
          <div className=" bg-[#D4D4D4] gap-3 flex w-full p-5 rounded-md h-full cursor-pointer">
            <h3>Login</h3>
            <Image src={"/down-arrow.png"}
            width={20}
            height={10}
            alt={'seta'}
            priority />
            <Modal isOpen={true}/>
            </div>
          <Image src={"/img-cart.png"}
          className="ml-5 cursor-pointer"
          width={30}
          height={30}
          priority
          alt="Carrinho"/>
        </div>
        </ul>
     
    </header>
  ); }


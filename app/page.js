'use client'
import Modal from "./components/modal"
import BookCarousel from "./components/BookCarousel";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="h-full">
        <ul className="flex justify-evenly p-4 bg-stone-700 h-full">
          <li className="self-center"> <Image
            src={"/img-devioteca.jpeg"}
            className={"rounded-md bg-white"}
            width={100}
            height={100}
            alt="logo"
            priority /> </li>
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
              <input type='text' placeholder="Pesquisa devioteca" className=" focus:outline-[#F3A847] text-center  w-96 h-10 border-2 border-black rounded-md "></input>
              <Image src={'/lupa.png'}
                className="bg-[#F3A847] p-2 cursor-pointer rounded-md absolute left-80 ml-6 "
                width={40}
                height={30}
                alt='lupa'
                priority />
            </div>
          </li>
          <div className="flex flex-col p-2 z-50">
            <div className="flex flex-row z-50 h-full">
              <div className=" bg-[#D4D4D4] gap-2 flex w-full h-full items-center justify-center p-5 rounded-md cursor-pointer z-50"
                onClick={() => setOpen(!open)}>
                <h3>Login</h3>
                <Image src={"/down-arrow.png"}
                  width={20}
                  height={10}
                  alt={'seta'}
                  priority />
              </div>
              <Image src={"/img-cart.png"}
                className="ml-5 cursor-pointer"
                width={30}
                height={30}
                priority
                alt="Carrinho" />
            </div>
            <div>
              {open && <Modal />}
            </div>
          </div>
        </ul>
        <ul className="w-full flex bg-blue-700">
          <li className="px-5 py-2">Todos</li>
          <li className="px-5 py-2">Vendas na Devioteca</li>
          <li className="px-5 py-2">Ofertas do Dia</li>
          <li className="px-5 py-2">Mais Vendidos</li>
          <li className="px-5 py-2">Livros</li>
          <li className="px-5 py-2">Novidades na Devioteca</li>
        </ul>
      </header>
      <main className="px-8 py-36">
        <div className="flex flex-col justify-start gap-8">
          <h2 className="text-2xl font-bold">Recomendados para você:</h2>
          <BookCarousel />
        </div>
      </main>
      {open && <div class="fixed inset-x-0 inset-y-[9rem] w-full h-full bg-gray-500 opacity-20 z-40"></div>}
    </>
  );
}


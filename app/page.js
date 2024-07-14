import Image from "next/image";

export default function Home() {
  return (
    <header className="">
      <ul className="flex justify-evenly p-4 bg-stone-700">
        <li> <Image 
        src={"/img-devioteca.jpg"}
        width={100}
        height={100}
        alt ="logo"
        priority/> </li>
        <li className="flex ">
          <select className="bg-[#D4D4D4] rounded-md">
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
          <div className="flex relative">
          <input id = "inputPesquisa"type='text'placeholder="Pesquisa devioteca" className=" text-center w-96 border-2 border-black rounded-md "></input>
          <Image src={'/lupa.png'}
          className="bg-[#F3A847] p-2 rounded-md absolute left-80 "
          width={67}
          height={100}
          priority/>
          </div>
        </li>
        <li className="flex p-2">
          <select className="rounded-md">
            <option>Login</option>
          </select>
          <Image src={"/img-cart.png"}
          className="ml-5"
          width={30}
          height={30}
          priority/>
        </li>
      </ul>
     
    </header>
  );
}

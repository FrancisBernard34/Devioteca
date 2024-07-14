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
        <li className="flex items-center ">
          <select className="bg-[#D4D4D4] rounded-md h-10">
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
          <input id = "inputPesquisa"type='text'placeholder="Pesquisa devioteca" className=" text-center  w-96 h-10 border-2 border-black rounded-md "></input>
          <Image src={'/lupa.png'}
          className="bg-[#F3A847] p-2 rounded-md absolute left-80 ml-6 "
          width={40}
          height={30}
          priority/>
          </div>
        </li>
        <li className="flex items-center p-2">
          <select className="rounded-md h-10">
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

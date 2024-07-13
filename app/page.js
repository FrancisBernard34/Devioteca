import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <ul>
        <li> <Image 
        src={"/img-devioteca.png"}
        width={100}
        height={100}
        alt ="logo"
        priority/> </li>
      </ul>
     
    </main>
  );
}

import BookCard from "./BookCard";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const books = [
  {
    id: 1,
    title: "JavaScript: O Guia Definitivo",
    author: "David Flanagan",
    price: "R$ 189,75",
    image: "/javascript_guia.jpg",
  },
  {
    id: 2,
    title:
      "Lógica de Programação e Algoritmos com JavaScript: uma Introdução à Programação de Computadores com Exemplos e Exercícios Para Iniciantes",
    author: "Edécio Fernando Iepsen",
    price: "R$ 75,70",
    image: "/logica_programacao.jpg",
  },
  {
    id: 3,
    title:
      "Domain-Driven Design: Atacando as Complexidades no Coração do Software",
    author: "Eric Evans",
    price: "R$ 102,75",
    image: "/domain_driven_design.jpg",
  },
  {
    id: 4,
    title: "Apaixone-se pelo problema, não pela solução",
    author: "Uri Levine",
    price: "R$ 46,48",
    image: "/apaixone_problema.jpg",
  },
  {
    id: 5,
    title: "O Programador Pragmático: De Aprendiz a Mestre",
    author: "Andrew Hunt e David Thomas",
    price: "R$ 157,50",
    image: "/programador_pragmatico.jpg",
  },
  {
    id: 6,
    title: "Código Limpo: Habilidades Práticas do Agile Software",
    author: "Robert C. Martin",
    price: "R$ 74,00",
    image: "/codigo_limpo.jpg",
  },
];

export default function BookCarousel() {
  return (
    <div className="flex flex-row justify-center items-center gap-8">
      <div>
        <button><IoIosArrowBack size={32} /></button>
      </div>
      <div className="flex flex-row gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div>
        <button><IoIosArrowForward size={32} /></button>
      </div>
    </div>
  );
}

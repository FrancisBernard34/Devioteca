import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="flex flex-col gap-2">
      <Image src={book.image} alt={book.title} width={100} height={200} />
      <div className="relative group">
        <h2 className="text-orange-500 text-[0.8rem] max-w-[6rem] max-h-[4rem] break-words text-left whitespace-normal text-ellipsis overflow-hidden line-clamp-3">
          {book.title}
        </h2>
        <div className="absolute top-full left-0 w-max max-w-[30rem] p-2 mt-1 text-sm bg-white border border-gray-300 shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          {book.title}
        </div>
      </div>
      <p className="text-orange-500 text-[0.7rem] max-w-[6.5rem]">
        {book.author}
      </p>
      <p className="font-bold text-gray-700 text-[0.9rem]">{book.price}</p>
    </div>
  );
}

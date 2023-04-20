import { useRef } from "react";
import { BsPencil, BsPlus, BsSearch, BsTrash } from "react-icons/bs";

type SearchFormProps = {
    onSearch: (value: string) => void
  }
  
  const SearchForm = ({
    onSearch,
  }: SearchFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
  
    return (
      <>
        <div className="p-10 flex flex-col gap-6 bg-[#16151E]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">Meus contatos</h1>
            <div className="flex gap-5">
              <BsPlus />
              <BsPencil />
              <BsTrash />
            </div>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();

            if (inputRef?.current) onSearch(inputRef.current.value)
          }}>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#24243D] rounded-md">
              <BsSearch />
              <input
                ref={inputRef}
                className="w-full bg-transparent outline-none
                 placeholder:text-[#E1E1E6]
                text-xs"
                placeholder="Busque por nome ou por dados de contato..."
              />
            </div>
          </form>
        </div>
      </>
    );
  }

  export default SearchForm;

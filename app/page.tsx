import { formatToMoney } from "@/lib/formatting";
import { MainProductCategories, Products } from "@/utils/constants";
import Image from "next/image";
import { BsCart, BsCartFill } from "react-icons/bs";
import { FaCartPlus, FaPlus, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex-col gap-2 w-full py-4 flex justify-between items-center bg-[#989898] border-b border-gray-500 rounded-bl-sm rounded-br-sm">
        <div className="w-full flex items-center justify-between px-12">
          <div className="relative w-[45px] h-[45px]">
            <Image
              src={"/main-logo.png"}
              alt="Logo de Lua"
              fill={true}
              quality={100}
            />
          </div>
          <div className="grow items-center justify-center hidden lg:flex">
            <div className="group flex items-center p-3 w-[600px] border border-[#bcbbbb] group-focus-within:border-gray-100 rounded-md">
              <input
                placeholder="Pesquise aqui o nome do item que deseja..."
                className="outline-none bg-transparent text-white text-xs grow placeholder:text-white"
              />
              <FaSearch color="#fff" />
            </div>
          </div>
          <button className="text-white relative">
            <BsCartFill size={20} />
            <div className="bg-black text-white w-[15px] h-[15px] -top-2 -right-2 absolute rounded-full flex items-center justify-center">
              <p className="text-white text-[0.5rem] font-bold">1</p>
            </div>
          </button>
        </div>
        <div className="w-full items-center justify-center flex lg:hidden px-6">
          <div className="group flex items-center p-3 w-full border border-[#bcbbbb] group-focus-within:border-gray-100 rounded-md">
            <input
              placeholder="Pesquise aqui o nome do item que deseja..."
              className="outline-none bg-transparent text-white text-xs grow placeholder:text-white"
            />
            <FaSearch color="#fff" />
          </div>
        </div>
      </div>
      <div className="grow flex flex-col w-full py-2 px-4">
        <h1 className="scroll-m-20 text-base text-center font-light tracking-tight lg:text-2xl my-4">
          CONHEÇA JÁ NOSSOS PRODUTOS
        </h1>
        {/* <Carousel className="w-full p-2">
          <CarouselContent>
            {MainProductCategories.map((info, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 cursor-pointer hover:scale-[1.02] flex flex-col gap-2 rounded-lg shadow-sm border border-gray-200 h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
              >
                <div className="w-full h-[250px] bg-[#989898] relative">
                  {info.mainImageUrl ? (
                    <Image
                      src={info.mainImageUrl}
                      alt={info.category}
                      fill={true}
                    />
                  ) : null}
                </div>
                <div className="w-full flex flex-col gap-2 p-3">
                  <h1 className="font-bold w-full text-center tracking-wide">
                    {info.category}
                  </h1>
                  <p className="text-sm font-light text-[#989898] text-center">
                    {info.call}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
        <div className="w-full flex items-center justify-around gap-4 px-4 lg:px-12 flex-wrap">
          {MainProductCategories.map((info, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-[1.02] flex flex-col gap-2 w-[300px] rounded-lg shadow-sm border border-gray-200 h-fit lg:h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
            >
              <div className="w-full min-h-[150px] max-h-[150px] h-[150px] lg:min-h-[250px] lg:max-h-[250px] lg:h-[250px] bg-[#989898] relative">
                {info.mainImageUrl ? (
                  <Image
                    src={info.mainImageUrl}
                    alt={info.category}
                    fill={true}
                  />
                ) : null}
              </div>
              <div className="w-full flex flex-col gap-2 p-3">
                <h1 className="font-bold w-full text-center tracking-wide">
                  {info.category}
                </h1>
                <p className="text-sm font-light text-[#989898] text-center">
                  {info.call}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="scroll-m-20 text-base text-start font-light tracking-tight lg:text-xl my-4">
          EM DESTAQUE
        </h1>
        <div className="w-full flex items-center justify-around gap-4 px-4 lg:px-12 flex-wrap">
          {Products.filter((p) => !!p.highlighted).map((info, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-[1.02] flex flex-col gap-2 min-w-[250px] w-[250px] rounded-lg shadow-sm border border-gray-200 h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
            >
              <div className="w-full h-[200px] bg-[#989898] relative">
                {!!info.lastUnits ? (
                  <div className="w-full h-[200px] bg-[#989898] relative">
                    <div className="absolute top-5 bg-white flex flex-col p-2 gap-0.5">
                      <h1 className="text-xs leading-none font-bold">
                        ÚLTIMAS UNIDADES
                      </h1>
                      <h2 className="text-[0.5rem] leading-none tracking-tight">
                        GARANTA JÁ O SEU
                      </h2>
                    </div>
                  </div>
                ) : null}
                {!!info.release ? (
                  <div className="absolute bottom-0 bg-gray-900 text-white flex flex-col p-2 gap-0.5 w-full">
                    <h1 className="text-center text-xs leading-none font-bold">
                      LANÇAMENTO
                    </h1>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col grow gap-2 p-3">
                <div className="w-full flex flex-col grow gap-2">
                  <h1 className="font-bold w-full text-center tracking-wide text-xs">
                    {info.name}
                  </h1>
                  <div className="w-full flex items-center gap-2 justify-start flex-wrap">
                    {info.category.map((c) => (
                      <div className="px-2 py-1 text-[0.6rem] text-white bg-[#989898] rounded-lg">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <h1 className="font-black w-full text-center text-lg leading-none">
                    {formatToMoney(info.price)}
                  </h1>
                  <p className="text-xs text-gray-500 tracking-tight text-center">
                    em até 3x no cartão
                  </p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 duration-300 ease-in-out rounded px-2 py-1 text-xs text-gray-500">
                    <FaPlus />
                    <h1>DETALHES</h1>
                  </button>
                  <button className="flex hover:bg-gray-500 items-center gap-1 bg-[#989898] rounded px-2 py-1 text-xs text-white duration-300 ease-in-out hover:scale-[1.01]">
                    <FaCartPlus />
                    <h1>CARRINHO</h1>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {MainProductCategories.map((category, categoryIndex) => {
          const categoryProducts = Products.filter((p) =>
            p.category
              .map((c) => c.toUpperCase())
              .includes(category.category.toUpperCase())
          );
          return (
            <div key={categoryIndex} className="w-full flex flex-col gap-2">
              <h1 className="scroll-m-20 text-base text-start font-light tracking-tight lg:text-xl my-4">
                {category.category.toUpperCase()}
              </h1>
              <div className="w-full flex items-center justify-around gap-4 px-4 lg:px-12 flex-wrap">
                {categoryProducts.map((info, index) => (
                  <div
                    key={index}
                    className="hover:scale-[1.02] flex flex-col gap-2 min-w-[250px] w-[250px] rounded-lg shadow-sm border border-gray-200 h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
                  >
                    <div className="w-full h-[200px] bg-[#989898] relative">
                      {!!info.lastUnits ? (
                        <div className="w-full h-[200px] bg-[#989898] relative">
                          <div className="absolute top-5 bg-white flex flex-col p-2 gap-0.5">
                            <h1 className="text-xs leading-none font-bold">
                              ÚLTIMAS UNIDADES
                            </h1>
                            <h2 className="text-[0.5rem] leading-none tracking-tight">
                              GARANTA JÁ O SEU
                            </h2>
                          </div>
                        </div>
                      ) : null}
                      {!!info.release ? (
                        <div className="absolute bottom-0 bg-gray-900 text-white flex flex-col p-2 gap-0.5 w-full">
                          <h1 className="text-center text-xs leading-none font-bold">
                            LANÇAMENTO
                          </h1>
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full flex flex-col grow gap-2 p-3">
                      <div className="w-full flex flex-col grow gap-2">
                        <h1 className="font-bold w-full text-center tracking-wide text-xs">
                          {info.name}
                        </h1>
                        <div className="w-full flex items-center gap-2 justify-start flex-wrap">
                          {info.category.map((c) => (
                            <div className="px-2 py-1 text-[0.6rem] text-white bg-[#989898] rounded-lg">
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full flex flex-col">
                        <h1 className="font-black w-full text-center text-lg leading-none">
                          {formatToMoney(info.price)}
                        </h1>
                        <p className="text-xs text-gray-500 tracking-tight text-center">
                          em até 3x no cartão
                        </p>
                      </div>
                      <div className="w-full flex items-center justify-between">
                        <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 duration-300 ease-in-out rounded px-2 py-1 text-xs text-gray-500">
                          <FaPlus />
                          <h1>DETALHES</h1>
                        </button>
                        <button className="flex hover:bg-gray-500 items-center gap-1 bg-[#989898] rounded px-2 py-1 text-xs text-white duration-300 ease-in-out hover:scale-[1.01]">
                          <FaCartPlus />
                          <h1>CARRINHO</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {/* <h1 className="scroll-m-20 text-base text-start font-light tracking-tight lg:text-xl my-4">
          ALIANÇAS
        </h1>
        <div className="w-full flex items-center justify-start gap-4 px-12 flex-wrap">
          {Products.filter((p) =>
            p.category.some((c) => c.includes("Alianças"))
          ).map((info, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-[1.02] flex flex-col gap-2 min-w-[250px] w-[250px] rounded-lg shadow-sm border border-gray-200 h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
            >
              <div className="w-full h-[200px] bg-[#989898] relative">
                {!!info.lastUnits ? (
                  <div className="w-full h-[200px] bg-[#989898] relative">
                    <div className="absolute top-5 bg-white flex flex-col p-2 gap-0.5">
                      <h1 className="text-xs leading-none font-bold">
                        ÚLTIMAS UNIDADES
                      </h1>
                      <h2 className="text-[0.5rem] leading-none tracking-tight">
                        GARANTA JÁ O SEU
                      </h2>
                    </div>
                  </div>
                ) : null}
                {!!info.release ? (
                  <div className="absolute bottom-0 bg-gray-900 text-white flex flex-col p-2 gap-0.5 w-full">
                    <h1 className="text-center text-xs leading-none font-bold">
                      LANÇAMENTO
                    </h1>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col grow gap-2 p-3">
                <div className="w-full flex flex-col grow gap-2">
                  <h1 className="font-bold w-full text-center tracking-wide text-xs">
                    {info.name}
                  </h1>
                  <div className="w-full flex items-center gap-2 justify-start flex-wrap">
                    {info.category.map((c) => (
                      <div className="px-2 py-1 text-[0.6rem] text-white bg-[#989898] rounded-lg">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <h1 className="font-black w-full text-center text-lg leading-none">
                    {formatToMoney(info.price)}
                  </h1>
                  <p className="text-xs text-gray-500 tracking-tight text-center">
                    em até 3x no cartão
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="scroll-m-20 text-base text-start font-light tracking-tight lg:text-xl my-4">
          ANÉIS
        </h1>
        <div className="w-full flex items-center justify-start gap-4 px-12 flex-wrap">
          {Products.filter((p) =>
            p.category.some((c) => c.includes("Anéis"))
          ).map((info, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-[1.02] flex flex-col gap-2 min-w-[250px] w-[250px] rounded-lg shadow-sm border border-gray-200 h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
            >
              <div className="w-full h-[200px] bg-[#989898] relative">
                {!!info.lastUnits ? (
                  <div className="w-full h-[200px] bg-[#989898] relative">
                    <div className="absolute top-5 bg-white flex flex-col p-2 gap-0.5">
                      <h1 className="text-xs leading-none font-bold">
                        ÚLTIMAS UNIDADES
                      </h1>
                      <h2 className="text-[0.5rem] leading-none tracking-tight">
                        GARANTA JÁ O SEU
                      </h2>
                    </div>
                  </div>
                ) : null}
                {!!info.release ? (
                  <div className="absolute bottom-0 bg-gray-900 text-white flex flex-col p-2 gap-0.5 w-full">
                    <h1 className="text-center text-xs leading-none font-bold">
                      LANÇAMENTO
                    </h1>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col grow gap-2 p-3">
                <div className="w-full flex flex-col grow gap-2">
                  <h1 className="font-bold w-full text-center tracking-wide text-xs">
                    {info.name}
                  </h1>
                  <div className="w-full flex items-center gap-2 justify-start flex-wrap">
                    {info.category.map((c) => (
                      <div className="px-2 py-1 text-[0.6rem] text-white bg-[#989898] rounded-lg">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <h1 className="font-black w-full text-center text-lg leading-none">
                    {formatToMoney(info.price)}
                  </h1>
                  <p className="text-xs text-gray-500 tracking-tight text-center">
                    em até 3x no cartão
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="scroll-m-20 text-base text-start font-light tracking-tight lg:text-xl my-4">
          PULSEIRAS
        </h1>
        <div className="w-full flex items-center justify-start gap-4 px-12 flex-wrap">
          {Products.filter((p) =>
            p.category.some((c) => c.includes("Pulseiras"))
          ).map((info, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-[1.02] flex flex-col gap-2 min-w-[250px] w-[250px] rounded-lg shadow-sm border border-gray-200 h-[350px] overflow-hidden hover:border-gray-500 duration-300 ease-in-out"
            >
              <div className="w-full h-[200px] bg-[#989898] relative">
                {!!info.lastUnits ? (
                  <div className="w-full h-[200px] bg-[#989898] relative">
                    <div className="absolute top-5 bg-white flex flex-col p-2 gap-0.5">
                      <h1 className="text-xs leading-none font-bold">
                        ÚLTIMAS UNIDADES
                      </h1>
                      <h2 className="text-[0.5rem] leading-none tracking-tight">
                        GARANTA JÁ O SEU
                      </h2>
                    </div>
                  </div>
                ) : null}
                {!!info.release ? (
                  <div className="absolute bottom-0 bg-gray-900 text-white flex flex-col p-2 gap-0.5 w-full">
                    <h1 className="text-center text-xs leading-none font-bold">
                      LANÇAMENTO
                    </h1>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col grow gap-2 p-3">
                <div className="w-full flex flex-col grow gap-2">
                  <h1 className="font-bold w-full text-center tracking-wide text-xs">
                    {info.name}
                  </h1>
                  <div className="w-full flex items-center gap-2 justify-start flex-wrap">
                    {info.category.map((c) => (
                      <div className="px-2 py-1 text-[0.6rem] text-white bg-[#989898] rounded-lg">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <h1 className="font-black w-full text-center text-lg leading-none">
                    {formatToMoney(info.price)}
                  </h1>
                  <p className="text-xs text-gray-500 tracking-tight text-center">
                    em até 3x no cartão
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

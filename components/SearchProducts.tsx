"use client";
import { GeneralVisibleHiddenExitMotionVariants } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounceValue } from "usehooks-ts";

function SearchProducts() {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useDebounceValue(
    searchText,
    3000
  );
  console.log(searchText, debouncedValue);
  return (
    <AnimatePresence>
      <div className="w-full flex flex-col relative">
        <div className="group flex items-center p-3 grow border border-[#bcbbbb] group-focus-within:border-gray-100 rounded-md">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Pesquise aqui o nome do item que deseja..."
            className="outline-none bg-transparent text-white text-xs grow placeholder:text-white"
          />
          <FaSearch color="#fff" />
        </div>
      </div>
      {/* {debouncedValue.length > 3 ? (
        <motion.div
          key={"editor"}
          variants={GeneralVisibleHiddenExitMotionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-15 flex w-[450px] self-center flex-col gap-2 rounded-md border border-gray-300 bg-[#fff] p-2"
        ></motion.div>
      ) : null} */}
    </AnimatePresence>
  );
}

export default SearchProducts;

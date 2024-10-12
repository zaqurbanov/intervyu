import React, { useState } from "react";
import PageHeaderName from "./PageHeaderName";
import { FaSearch } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { DateInput, Select, SelectItem } from "@nextui-org/react";

const Search2 = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-lg">
        <div className="flex justify-between items-center ">
          <PageHeaderName name={"Axtaris"} />
          <div
            className=" bg-purple-500 p-3 rounded-md w-max cursor-pointer "
            onClick={() => handleOpenSearch()}
          >
            <FaSearch className="text-white " />
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-out  ${
            openSearch ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <form action="" className="py-6 ">
            <div className="flex justify-start items-center gap-4 gap-y-5 flex-wrap ">
              <div className="min-w-60 h-[30px]">
                <Select
                  
                  placeholder="Rezident statusu"
                  selectionMode="multiple"
                  className="max-w-xs"
                >
                  <SelectItem>"1"</SelectItem>
                  <SelectItem>"2"</SelectItem>
                </Select>
              </div>
              <div className="min-w-60 h-[30px]">
                <Input type="text" placeholder="Bank adi" className="h-full" />
              </div>
              <div>
                <Input type="text" placeholder="Bankin Voeni" className="" />
              </div>
              <div>
                <Input type="text" placeholder="Filial Adi" className="" />
              </div>
              <div>
              <Select
                  placeholder="Qeydiyyat oldugu unvan"
                  
                 
                >
                  <SelectItem>"1"</SelectItem>
                  <SelectItem>"2"</SelectItem>
                </Select>
              </div>
              <div>
                <Input type="text" placeholder="Muxbir hesabi" className="" />
              </div>
              <div>
                <Input type="text" placeholder="SWIFT" className="" />
              </div>
              <div>
                <Input type="text" placeholder="Kod" className="" />
              </div>

              <div>
              <DateInput
                label="Başlama tarixi"
                placeholderValue=""
                className="max-w-sm "
              />

              </div>
              <div>
              <DateInput
                label="Bitmə tarixi"
                placeholderValue=""
                className=""
              />

              </div>
            </div>

            <div className="flex justify-end items-center gap-4 mt-10">
              <Button color="primary" className="bg-purple-500">Axtarış et</Button>
              <Button color="secondary" className='bg-gray-400'>Axtarışı təmizlə</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search2;

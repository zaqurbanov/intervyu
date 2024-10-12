import React, { useState } from 'react'
import PageHeaderName from './PageHeaderName'
import { FaSearch } from 'react-icons/fa'
import { DateInput } from '@nextui-org/date-input'
import { Button } from '@nextui-org/button'
import { Input } from "@nextui-org/input";


const Search = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const handleOpenSearch = () => {
      setOpenSearch((prev) => !prev);
    };
  return (
    <div className=''>
        <div className="bg-white p-4 rounded-md shadow-lg">
        <div className="flex justify-between items-center ">
          <PageHeaderName name={"Axtaris"} />
          <div className=" bg-purple-500 p-3 rounded-md w-max cursor-pointer " onClick={() => handleOpenSearch()}>
            <FaSearch
              className="text-white "
              
            />
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-out  ${
            openSearch ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <form action="" className="py-6 ">
            <div className="flex justify-center items-center gap-20">
              <Input type="text" placeholder="Hesab növü" className="" />

              <DateInput
                label="Başlama tarixi"
                placeholderValue=""
                className="max-w-sm "
              />
              <DateInput
                label="Bitmə tarixi"
                placeholderValue=""
                className=""
              />
            </div>

            <div className="flex justify-end items-center gap-4 mt-10">
              <Button color="primary" className="bg-purple-500">Axtarış et</Button>
              <Button color="secondary" className='bg-gray-400'>Axtarışı təmizlə</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search

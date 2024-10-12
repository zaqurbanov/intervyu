import React, { useState } from "react";
import PageHeaderName from "../components/PageHeaderName";
import { Input } from "@nextui-org/input";
import { DateInput } from "@nextui-org/date-input";
import { Button } from "@nextui-org/button";
import { FaPencilAlt, FaSearch } from "react-icons/fa";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { Pagination } from "@nextui-org/pagination";
import Table1 from "../components/Table1";
import Search from "../components/Search";
import { FaPenToSquare } from "react-icons/fa6";

const BankAccount = () => {


  return (
    <div className="flex flex-col gap-8 py-10 px-6">
      {/* Search hissesi */}
      <Search/>

      <div className="flex justify-between items-center  p-2">
        <div>

        <PageHeaderName name={"Bank ve hesab novu"} />

        </div>

        <div className="flex gap-3">
          
            <Button color="success" className="text-white space-x-2"> <FaPencilAlt /><span className="font-semibold"> Excele gonder</span></Button>

            <Button color="primary" className="bg-purple-500 space-x-2"><FaPenToSquare /> <span>Yeni bank hesabi elave et</span></Button>
          
        </div>
      </div>

      {/* Table hissesi */}
            <Table1/>

      
    </div>
  );
};

export default BankAccount;

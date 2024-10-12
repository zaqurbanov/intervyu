import React from 'react'
import Table2 from '../components/Table2'
import Search2 from '../components/Search2'
import PageHeaderName from '../components/PageHeaderName'
import { Button } from '@nextui-org/button'
import { FaPencilAlt } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'

const Branch = () => {
  return (
    <div className='flex flex-col gap-8 py-10 px-6'>
        <Search2 />
        <div className="flex justify-between items-center  p-2">
        <div>

        <PageHeaderName name={"Bank ve hesab novu"} />

        </div>

        <div className="flex gap-3">
          
          <Button color="success" className="text-white space-x-2"> <FaPencilAlt /><span className="font-semibold"> Excele gonder</span></Button>

          <Button color="primary" className="bg-purple-500 space-x-2"><FaPenToSquare /> <span>Yeni bank hesabi elave et</span></Button>
        
      </div>
      </div>
      <Table2/>
    </div>
  )
}

export default Branch

import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/pagination';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table';
import React, { useEffect, useState } from 'react'
import ContextMenu from './ContextMenu';

const Table1 = () => {
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [showMenu, setShowMenu] = useState(false);
    const handleContextMenu = (event) => {
        event.preventDefault();
        setMenuPosition({ x: event.pageX, y: event.pageY });
        setShowMenu(true); 
      };

      const closeMenu = () => {
        setShowMenu(false);
      };

      useEffect(()=>{
        if(showMenu){
            window.addEventListener('click',closeMenu)
        }else{
            window.removeEventListener('click',closeMenu)
        }
      })
    const tableData = [
        { id: 1, hesabNovu: 'Test1', baslamaTarixi: '25.09.2024', bitmeTarixi: '25.09.2024' },
        { id: 2, hesabNovu: 'Test2', baslamaTarixi: '26.09.2024', bitmeTarixi: '26.09.2024' },
       
      ];

  return (
    <div>
        <div>
      <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Sira</TableColumn>
        <TableColumn>Hesab Novu</TableColumn>
        <TableColumn>Baslama Tarixi</TableColumn>
        <TableColumn>Bitme Tarixi</TableColumn>
        <TableColumn>Emeliyyatlar</TableColumn>


      </TableHeader>
      <TableBody>
      {tableData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell onContextMenu={handleContextMenu}>{index + 1}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.hesabNovu}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.baslamaTarixi}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.bitmeTarixi}</TableCell>
              <TableCell>
                <Button color="warning" className='text-white bg-purple-500' onClick={handleContextMenu}>Əməliyyatlar</Button>
              </TableCell>
            </TableRow>
          ))}
        
      </TableBody>
    </Table>
            <div className="mt-5 flex justify-center">
            <Pagination isCompact showControls total={10} initialPage={1} />
            </div>
      </div>

      {/* Context menu */}
      <div>
        {showMenu &&
                    (
                        <ContextMenu x={menuPosition.x} y={menuPosition.y}/>

                    )
        }
      </div>
    </div>
  )
}

export default Table1

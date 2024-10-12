import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/pagination';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table';
import React, { useEffect, useState } from 'react'
import ContextMenu from './ContextMenu';

const Table2 = () => {

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
        { id: 1, rezidenStatus:'Rezident',bankAdi:"ASC bank",bankinVoeni:20054,qeydiyyat:'Baku street',swift:"CTREAZ",kod:21007,baslamaTarixi: '26.09.2024', bitmeTarixi: '26.09.2024' },
        { id: 2, rezidenStatus:'Rezident',bankAdi:"ASC bank",bankinVoeni:20054,qeydiyyat:'Baku street',swift:"CTREAZ",kod:21007,baslamaTarixi: '26.09.2024', bitmeTarixi: '26.09.2024' },
        { id: 3, rezidenStatus:'Rezident',bankAdi:"ASC bank",bankinVoeni:20054,qeydiyyat:'Baku street',swift:"CTREAZ",kod:21007,baslamaTarixi: '26.09.2024', bitmeTarixi: '26.09.2024' },
        { id: 4, rezidenStatus:'Rezident',bankAdi:"ASC bank",bankinVoeni:20054,qeydiyyat:'Baku street',swift:"CTREAZ",kod:21007,baslamaTarixi: '26.09.2024', bitmeTarixi: '26.09.2024' },
       
      ];
  return (
    <div>
        <div>
        <div>
      <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Rezident Statusu</TableColumn>
        <TableColumn>Bank Adi</TableColumn>
        <TableColumn>Bank Voeni</TableColumn>
        <TableColumn>Filial adi</TableColumn>
        <TableColumn>Qeydiyyatda oldugu unvan</TableColumn>
        <TableColumn>Muxbir hesabi</TableColumn>
        <TableColumn>Swift</TableColumn>
        <TableColumn>Kod</TableColumn>
        <TableColumn>Baslama Tarixi</TableColumn>
        <TableColumn>Bitme Tarixi</TableColumn>




      </TableHeader>
      <TableBody>
      {tableData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell onContextMenu={handleContextMenu}>{index + 1}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.rezidenStatus}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.bankAdi}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.bankinVoeni}</TableCell>

              <TableCell onContextMenu={handleContextMenu}>{item.qeydiyyat}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.swift}</TableCell>
              <TableCell onContextMenu={handleContextMenu}>{item.kod}</TableCell>
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
    </div>
  )
}

export default Table2

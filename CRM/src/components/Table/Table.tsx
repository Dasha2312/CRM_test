import React, { useState } from "react";
import TableBody from "./TableBody";

import TableActions from "./TableActions";
import Pagination from "../../UI/Pagination/Pagination";
import { useSelector } from "react-redux";
import TableHeader from "./tableHeader";

interface TableRow {
  id: number,
  name: string,
  email: string,
  [key: string]: any
}

interface TableProps {
  data: TableRow[],
  loading: boolean,
  error: string,
}

function Table({data, loading, error}: TableProps) {
  const {userSearchResult} = useSelector((state: any) => state.users);

  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [isSelectedRows, setIsSelectedRows] = useState<number[]>([]);

  function handleSelectAll() {
    const newSelectAllState = !isAllSelected;
    setIsAllSelected(newSelectAllState);
    
    if (!newSelectAllState) {
      setIsSelectedRows([]);
    } else {
      setIsSelectedRows(data.map(list => list.id));
    }
  }
  
  function handleClickInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    const numericId = Number(id);

    if (checked) {
      setIsSelectedRows(prevData => 
        prevData.includes(numericId) ? prevData : [...prevData, numericId]
      );
    } else {
      setIsAllSelected(false)
      setIsSelectedRows(prevData => 
        prevData.filter(itemId => itemId !== numericId)
      );
    }
  }

  return (
    <div>
      <div className="container px-4 mx-auto">
        <TableActions />
        <>
        {
          userSearchResult ? (
            <div className="pt-[65px] font-medium text-lg">{userSearchResult}</div>
          ) : (

         <>
          <div className="table-response overflow-auto">
            <table className="table-auto w-full">
              <TableHeader handleClick={handleSelectAll} isChecked={isAllSelected} />
              <TableBody data={data} loading={loading} error={error} handleClick={handleClickInput} isSelectedRows={isSelectedRows} isChecked={isSelectedRows} />
            </table>
          </div>
        <Pagination />
        </>
      )
    }
    </>
      </div>

    </div>
  );
}

export default Table;
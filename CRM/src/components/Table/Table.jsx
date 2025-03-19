import { useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./tableHeader";
import TableActions from "./TableActions";
import Pagination from "../../UI/Pagination/Pagination";

function Table({data, loading, error}) {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isSelectedRows, setIsSelectedRows] = useState([]);

  function handleSelectAll() {
    const newSelectAllState = !isAllSelected;
    setIsAllSelected(newSelectAllState);
    
    if (!newSelectAllState) {
      setIsSelectedRows([]);
    } else {
      setIsSelectedRows(data.map(list => list.id));
    }
  }
  
  function handleClickInput(e) {
    const { id, checked } = e.target;
    console.log('id', Number(id))
    console.log('checked', checked)
    
    if (checked) {
      setIsSelectedRows(prevData => 
        prevData.includes(id) ? prevData : [...prevData, Number(id)]
      );
    } else {
      setIsAllSelected(false)
      setIsSelectedRows(prevData => 
        prevData.filter(itemId => itemId !== Number(id))
      );
    }
  }

  return (
    <div>
      <div className="container px-4 mx-auto">
        <TableActions />
        <div className="table-response overflow-auto">
          <table className="table-auto w-full">
            <TableHeader handleClick={handleSelectAll} isChecked={isAllSelected} />
            <TableBody data={data} loading={loading} error={error} handleClick={handleClickInput} isSelectedRows={isSelectedRows} isChecked={isSelectedRows} />
          </table>
        </div>
        <Pagination />
      </div>

    </div>
  );
}

export default Table;
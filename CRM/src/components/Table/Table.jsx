import { useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./tableHeader";
import TableActions from "./TableActions";
import Pagination from "../../UI/Pagination/Pagination";
import { useSelector } from "react-redux";

function Table({data, loading, error}) {
  const {userSearchResult} = useSelector(state => state.users);

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
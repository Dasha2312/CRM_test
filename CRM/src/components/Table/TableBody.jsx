import { useDispatch, useSelector } from "react-redux";
import InputCheckbox from "../../UI/InputCheckbox/InputCheckbox";
import { selectUser } from "../../store/Slices/UsersSlice";

function TableBody({data, loading, error, handleClick, isSelectedRows}) {
  const { currentPage, usersPerPage } = useSelector(state => state.users);
  const dispatch = useDispatch();

  function handleCheckInput(e,item) {
    handleClick(e)

    if (isSelectedRows.includes(item.id)) {
      dispatch(selectUser([]))
    } else {
      dispatch(selectUser([item]))
    }
  }

  if(error) {
    return <div>{error}</div>
  }

  if(loading) {
    return (
      <>
      <tbody className="animate-pulse">
       { Array.from({length: 10}).map((_,index) => (
        <tr key={index} className="h-[100px]">
          <td>
            <div className="h-[20px] w-[20px] bg-gray-200 ml-[12px] my-1 rounded"></div>
          </td>
          <td>
            <div className="w-[85px] h-[25px] bg-gray-200 mr-2 my-1 rounded"></div>
          </td>
          <td>
            <div className="bg-gray-200 w-[250px] h-[25px] mr-2 my-1 rounded"></div>
          </td>
          <td>
            <div className="bg-gray-200 w-[250px] h-[25px] mr-2 my-1 rounded"></div>
          </td>
          <td>
            <div className="bg-gray-200 w-[200px] h-[25px] mr-2 my-1 rounded"></div>
          </td>
          <td>
            <div className="bg-gray-200 w-[100px] h-[25px] mr-2 my-1 rounded"></div>
          </td>
          <td>
            <div className="bg-gray-200 w-[100px] h-[25px] mr-2 my-1 rounded"></div>
          </td>
          <td>
            <div className="bg-gray-200 w-[100px] h-[25px] mr-2 my-1 rounded"></div>
          </td>
        </tr>
       ))}
      </tbody>
    </>
    )
  }

  return (
    <tbody className="">
      {data?.map((item,index) => {
        const userIndex = (currentPage - 1) * usersPerPage + index + 1;
        return (
          <tr key={item.id} id={item.id}>
            <td className="py-4 pl-[12px] pr-1 min-h-[105px] w-[53px]">
              <InputCheckbox  name={`row-${item.id}`} onChange={(e) => handleCheckInput(e, item)} id={item.id} isChecked={isSelectedRows.includes(item.id)} />
            </td>
            <td className="py-4 px-1 text-center w-[85px]">{userIndex}</td>
            <td className="py-4 px-1 w-[250px]">{item.name}</td>
            <td className="py-4 px-1 w-[250px]">{item.email}</td>
            <td className="py-4 px-1 w-[200px]">
            {item?.address && (
              <div>
                <div>{item.address.street}</div>
                <div>{item.address.suite}</div>
                <div>{item.address.city}</div>
                <div>{item.address.zipcode}</div>
              </div>
            )}
            </td>
            <td className="py-4 px-1">{item.phone}</td>
            <td className="py-4 px-1">
              {item?.company?.name}
            </td>
            <td className="py-4 pr-[12px] pl-1">{item?.website}</td>
          </tr>
        )
      })
    }
    </tbody>
  );
}

export default TableBody;
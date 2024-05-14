import { Link } from "react-router-dom";

const TableRow = ({item}) => {
    const {_id,title,mark,examineeName} = item;
    return (
        <tr>        
            <td>{title}</td>
            <td>{mark}</td>
            <td>{examineeName}</td>
            <td><Link to={`/previewassignment/${_id}`} className="rounded-md py-1 px-2 font-normal bg-[#FAB519] text-white" >Give Mark</Link></td>
      </tr>
    );
};

export default TableRow;
const AttempRow = ({item}) => {
   const {title,mark,link,note,status,archiveMark,feedBack} = item;
    return (
        <tr>
        <th>{title}</th>
        <td>{status === "Pending" ? <span className="font-semibold text-red-600">{status}</span> : <span className="font-semibold text-blue-600">{status}</span> }</td>
        <td>{mark}</td>
        <td>{archiveMark ? archiveMark : "-"}</td>
        <td>{feedBack ? feedBack : "-"}</td>
      </tr>
    );
};

export default AttempRow;
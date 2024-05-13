import { useLoaderData } from "react-router-dom";
import TableRow from "../../Components/TableRow/TableRow";

const Pending = () => {
    const pendingAssignment = useLoaderData();

    return (
        <div className="container mx-auto px-3 mt-16">
            <div className="my-6 border-l-4 border-l-[#FAB519] px-4">
              <h1 className="text-2xl font-semibold md:text-3xl">Pending Assignments</h1>
            </div>
            <div className="-z-[1000] mt-20 md:mt-6">
            <div className="overflow-x-auto">
  <table className="table z-10">
    {/* head */}
    <thead>
      <tr>        
        <th>Title</th>
        <th>Marks</th>
        <th>Examinee Name</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
      {pendingAssignment.map((item,i)=> <TableRow key={i} item={item}></TableRow>)}
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Pending;
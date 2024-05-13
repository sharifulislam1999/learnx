import CreateAssignment from "../../Components/Create/Createassignment";

const Create = () => {
    document.title = "Create Assignment"
    return (
        <div className="container mx-auto px-3 mt-16">
            <CreateAssignment></CreateAssignment>     
        </div>
    );
};

export default Create;
import { useLoaderData } from 'react-router-dom';
import Banner from './../../Components/Banner/Banner';
import AssignmentCard from '../../Components/AssignmentCard/AssignmentCard';
import Title from '../../Components/Title/Title';
import Accordian from '../../Components/Accordian/Accordian';
import Featurecard from '../../Components/Featurecard/Featurecard';
const Home = () => {
    const assignment = useLoaderData()
    document.title = "Learn.X | Home"
    return (
       <>
        <Banner></Banner>
        <div className="container mx-auto px-3">
            <div>
                <Title title="Explore Our Assignments" des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."></Title>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {assignment.map((item,i)=> <Featurecard key={i} item={item}></Featurecard>)}
        </div>
            <div className='mt-40'>
                <Title title="What Say Our Client" des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."></Title>
            </div>
            <div>
                <Accordian></Accordian>
            </div>
        </div>
       </>
    );
};

export default Home;
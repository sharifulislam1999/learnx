import { useLoaderData } from 'react-router-dom';
import Banner from './../../Components/Banner/Banner';
import Title from '../../Components/Title/Title';
import Accordian from '../../Components/Accordian/Accordian';
import Featurecard from '../../Components/Featurecard/Featurecard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import "./Home.css";
AOS.init();
const Home = () => {
    const assignment = useLoaderData()
    const [assignmetItem,setAssignmetItem] = useState(assignment)
    const count = assignment.length;
    const itemPerPage = 6;
    const [currentPage,setCurrentPage] =  useState(0);
    const numberOfPages = Math.ceil(count/itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)
    document.title = "Learn.X | Home"
    useEffect(()=>{
        fetch(`https://learnx-omega.vercel.app/pageitem?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setAssignmetItem(data))
    },[currentPage]);
    console.log(currentPage)
    
    return (
       <>
        <Banner></Banner>
        <div className="container mx-auto px-3">
            <div data-aos="fade-up">
                <Title title="Explore Our Assignments" des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."></Title>
            </div>
        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {assignmetItem.map((item,i)=> <Featurecard key={i} item={item}></Featurecard>)}
        </div>
        <div>
            <div className='flex justify-center my-10'>
                <div className='pagination'>                    
                    {pages.map((item,i)=> <button key={i} className={` btn mx-1 ${currentPage === item && 'selected'}`} onClick={()=>setCurrentPage(item)}>{item}</button>)}
                  
                </div>
            </div>
        </div>
            {/* <div>
           <div className='mt-40' data-aos="fade-up">
                <Title itle title="What Say Our Client" des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."></Title>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <Accordian></Accordian>
            </div>
            </div> */}
            <div>
            <div className='mt-40'>
                <Title itle title="What Say Our Client" des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."></Title>
            </div>
            <div>
                <Accordian></Accordian>
            </div>
            </div>
        </div>
       </>
    );
};

export default Home;
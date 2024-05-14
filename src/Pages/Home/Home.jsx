import { useLoaderData } from "react-router-dom";
import Banner from "./../../Components/Banner/Banner";
import Title from "../../Components/Title/Title";
import Accordian from "../../Components/Accordian/Accordian";
import Featurecard from "../../Components/Featurecard/Featurecard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./Home.css";
import JoinNow from "../../Components/JoinNow/JoinNow";
import Contact from "../../Components/Contact/Contact";
AOS.init();
const Home = () => {
  const assignment = useLoaderData();
  const [assignmetItem, setAssignmetItem] = useState(assignment);
  const count = assignment.length;
  const itemPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);
  document.title = "Learn.X | Home";
  useEffect(() => {
    fetch(
      `https://learnx-omega.vercel.app/pageitem?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAssignmetItem(data));
  }, [currentPage]);
  console.log(currentPage);

  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto px-3">
        <div>
          <Title
            title="Explore Our Assignments"
            des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."
          ></Title>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {assignmetItem.map((item, i) => (
            <Featurecard key={i} item={item}></Featurecard>
          ))}
        </div>
        <div>
          <div className="flex justify-center my-10">
            <div className="pagination">
              {pages.map((item, i) => (
                <button
                  key={i}
                  className={` btn mx-1 ${currentPage === item && "selected"}`}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </button>
              ))}
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
          <div className="mt-40">
            <Title 
              title="What Say Our Client"
              des="Delve into a comprehensive overview of assignment-focused functionalities on our group study website, empowering users to leverage these tools for streamlined collaborative learning."
            ></Title>
          </div>
          <div>
            <Accordian></Accordian>
          </div>
        </div>
        <div className="mt-40">
          <Title
            title="Join Our Team"
            des="As an instructor with us, you`ll have the opportunity to inspire, guide, and mentor our diverse community of students. Whether you`re an industry expert, an academic guru, or an experienced professional"></Title>
        </div>
        <div className="mt-40">
          <JoinNow></JoinNow>
        </div>
        <div className="mt-40">
          <Title
            title="Get In Touch"
            des="Have questions, suggestions, or just want to reach out? We're here to help! Use the form below to connect with our team. Whether you need technical assistance, want to share feedback, or explore partnership opportunities"></Title>
        </div>
        <div className="mt-20">
            <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default Home;

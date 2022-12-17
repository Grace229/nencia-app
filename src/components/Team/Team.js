import React from "react";
import "./Team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profile6 from "../../assets/img/profile6.jpg";
import profilePic2 from "../../assets/img/profile2.jpg";
import profilePic3 from "../../assets/img/profile3.jpg";
import profilePic4 from "../../assets/img/profile4.jpg";

const Team = () => {
  const teams = [
    {
      img: profile6,
      name: "Ibbie Eckart",
      position: "Founder & CEO",
    },
    {
      img: profilePic2,
      name: "Arden Vasek",
      position: "CFO",
    },
    {
      img: profilePic3,
      name: "Toribio Nerthus",
      position: "Operations Manager",
    },
    {
      img: profilePic4,
      name: "Malvina Cilla",
      position: "CTO",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-header">
        <h1>Our Amazing Team </h1>
        <p>Dedicated to quality and your success</p>
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {teams.map((teams, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="team-members">
                <img src={teams.img} alt="" />
                <h3>{teams.name}</h3>
                <h5>{teams.position}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Team;

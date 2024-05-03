import { useEffect, useState } from 'react'
import axios from "axios"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Cards from "./Cards"

const Freebook = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async() =>{
      try {
      const res =  await axios.get("http://localhost:4001/book/")
      const data = res.data.filter((data) => data.category === "Free")
      setBook(data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook()
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing alit. Accusantium veritais alias palias pariatur ad dolor requdiandae eligendi  corporis nulla non suscipit, iure neque earun?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {
              book.map((item)=>(
                <Cards item={item} key={item.id} />
              ))
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
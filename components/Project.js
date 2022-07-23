
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Project = ({ id, name, tech, url, imgs, classes}) => {

  // const [colorState, setColorState] = useState('not-visible');
  // const [active, setActive ] = useState(true);

  // const onChange = (isVisible) => {
  //   isVisible ? setColorState("visible") : setColorState("not-visible");
  //   isVisible ? setActive(false) : setActive(true);
  // }

  const params = {
    speed: 400,
    //effect: 'fade',
    loop: true,
    updateOnImagesReady: true,
    watchOverflow: true,
    autoplay: {
      delay: 9000
    },
    pagination: {
      clickable: true 
    }
  }

  return (
    <div>
        <Swiper 
          //{...params}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          //navigation
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // }
          loop
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {imgs.map((img, index) =>
            <SwiperSlide key={index}>
              <img
                src={img.url}
                alt={name}
              />
            </SwiperSlide>
          )}
        </Swiper>

        <h3>
          <a href="#">{name}</a>
        </h3>
    </div>
  );
}

export default Project;
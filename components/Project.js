
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
    // on: {
    //     init: function () {
    //         if (this.slides.length <= 3) {
    //             // First way:
    //             this.allowSlidePrev = this.allowSlideNext = false; // disabling swiping
    //             this.el.querySelector(".swiper-button-prev").setAttribute('hidden', '');  // hiding arrows prev&next
    //             this.el.querySelector(".swiper-button-next").setAttribute('hidden', '');
    //             this.el.querySelector(".swiper-pagination").setAttribute('hidden', '');
    //             console.log(this);                // Second way:
    //             // this.el.classList.add('swiper-no-swiping');
    //         }
    //     }
    // },
    // navigation,
    pagination: {
      clickable: true 
    }
  }

  return (
    <div>
    {/*  <VisibilitySensor onChange={onChange} partialVisibility={true} active={active} >
      </VisibilitySensor>*/}

     {/* <Link href={`/projects/[id]`} as={`/projects/${id}`} passHref>
         {name}
      </Link>*/}

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
  

     {/* {imgs.map((img, index) =>
            <img
              src={img.url}
              alt={name}
            />
        )}*/}

     {/* <Swiper {...params}>
        {imgs.map((img, index) => 
          <div key={img.id}>
            <img
              src={img.url}
              alt={name}
            />
          </div>
        )}
      </Swiper>*/}


        <div className="">
          <h3>
            <a href="#">{name}</a>
          </h3>
        </div>
    </div>
  );
}

export default Project;
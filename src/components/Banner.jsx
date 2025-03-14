import '../scss/components/_banner.scss'
import '../scss/components/_buttons.scss'
import portal from '../assets/img/bannerportal.svg'
import tg from '../assets/img/Telegram.svg'
import vk from '../assets/img/Vk.svg'

function Banner() {

  return (
    <div className='banner'>
        <div className="banner__container">
            <div className='banner__container_portal'>
                <img  src={portal} alt="banner" />
            </div>
            <div className='banner__container_box'>
                <div className="banner__container_box_title">
                    <h1>Разработка 3D-моделей</h1>
                    <h1>от людей для людей</h1>
                </div>
                <div className="banner__container_box_text">
                    <h3>Визуализация как образ мышления.</h3>
                    <h3>Сделать сложное доступным, а невидимое - наглядным.</h3>
                </div>

                <div className='banner__container_box_btns'>
                    <button className="banner__container_box_btns_social">
                        {/* <div> */}
                            <img src={tg} alt="Telegram"  className="banner__container_box_btns_social_img" />
                        {/* </div> */}
                        <h3>@Shinka4u</h3>
                    </button>
                    <button className="banner__container_box_btns_social">
                        {/* <div> */}
                            <img src={vk} alt="Vkontakte"  className="banner__container_box_btns_social_img" />
                        {/* </div> */}
                        <h3>VertexVisions.id</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner;
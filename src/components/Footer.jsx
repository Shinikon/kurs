import '../scss/components/_footer.scss';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="footer">
        <hr style={{
            borderColor: '#7155C6'
        }}/>
        <div className="footer__container">
            <div className="footer__container_box">
                <div className="footer__container_box_top">
                    <p>Студия</p>
                    <p>Портфолио</p>
                    <p>Услуги</p>
                </div>
                <div className="footer__container_box_bottom">
                    <p>Т. +7 (499) 7000 111</p>
                    <p>info@forumvostok.ru</p>
                    <p>Юридический/фактический адрес: 117418,</p>
                    <p>г. Москва, ул. Зюзинская, д. 6, корп. 2</p>
                </div>
            </div>
            <div className="footer__container_order">
                <button>
                    <Link to="/Order" style={{
                        textDecoration:'none'
                    }}><h2>Заказать проект</h2></Link>
                </button>
            </div>
            <div className='footer__container--icons'>
                <img src="../assets/img/Telegram.svg" alt="" />
                <img src="../assets/img/Vk.svg" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Header;
import '../scss/app.scss';
import '../scss/components/_buttons.scss';
import ContactsBtns from '../components/ContactsBtns'
 
function Contacts() {

  return (
    <div className="wrapper">
      <div className="contacts">
        <div className="main__title">
          <h1>
            Контакты
          </h1>
        </div>
        <div className="buttons-animation">
          <ContactsBtns
          initialContent="Написать на почту"
          toggledContent="info@Vertex Visions.studio"
          />
          <ContactsBtns
          initialContent="Написать Вконтакте"
          toggledContent="info@Vertex Visions.studio"
          />
          <ContactsBtns
          initialContent="Написать в Телеграм"
          toggledContent="info@Vertex Visions.studio"
          />
        </div>
        <div className="contacts__phone">
          <h1>+7 (800) 555 35 35</h1>
          <h1>+8 (800) 355 21 15</h1>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
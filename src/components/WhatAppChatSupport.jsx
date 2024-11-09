import React from 'react'
import "../src/scss/scss/WhatsappChatSupport.css";

const WhatsappChatSupport = ({ onPopupOpen, onPopupClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    if (isPopupOpen) {
      handleClosePopup();
    } else {
      handleOpenPopup();
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    if (onPopupOpen) onPopupOpen();
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    if (onPopupClose) onPopupClose();
  };

  return (
    <div className={`whatsapp_chat_support wcs_fixed_right ${isPopupOpen ? 'wcs-show' : ''} wcs-effect`} id="whatsapp-widget">
      <div className={`wcs_button_label ${isPopupOpen ? 'wcs_button_label_hide' : ''}`} onClick={handleTogglePopup}>
        <img src="https://i.postimg.cc/XJXbyGhW/Untitled-design-11.png" alt="Icon" className="wcs_button_icon" />
        <span className="wcs_button_text">Hi there, have a question? Let's chat!</span>
      </div>

      <div className="wcs_button wcs_button_circle" onClick={handleTogglePopup}>
        <span className="fa-brands fa-whatsapp"></span>
      </div>

      {isPopupOpen && (
        <div className="wcs_popup">
          <div className="wcs_popup_close" onClick={handleClosePopup}>
            <span className="fa fa-close"></span>
          </div>
          <div className="wcs_popup_header">
            <strong>Have a question?</strong>
            <div className="wcs_popup_header_description">Typically replies in seconds!</div>
          </div>
          <div className="wcs_popup_person_container">
            <a className="wcs_popup_person" href="https://api.whatsapp.com/send?phone=447473255886&text=" rel="noreferrer noopener" target="_blank">
              <div className="wcs_popup_person_img">
                <img src="https://i.postimg.cc/XJXbyGhW/Untitled-design-11.png" alt="" />
              </div>
              <div className="wcs_popup_person_content">
                <div className="wcs_popup_person_name">Khamare Clarke</div>
                <div className="wcs_popup_person_description">Customer Support</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappChatSupport;
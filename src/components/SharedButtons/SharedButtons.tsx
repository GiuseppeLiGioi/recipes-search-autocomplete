import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { FaWhatsapp, FaTelegram, FaFacebook } from "react-icons/fa";
import "./sharedButtons.css";
type SharedButtonsProps = {
  url: string;
  title: string;
};
export default function SharedButtons({ url, title }: SharedButtonsProps) {
  return (
    <div className="container-buttons">
      <div className="share-button facebook">
        <FacebookShareButton url={url} title={title}>
          <p className="share-icon">
            <FaFacebook />
          </p>
          <span className="share-text">Facebook</span>
        </FacebookShareButton>
      </div>
      <div className="share-button telegram">
        <TelegramShareButton url={url} title={title}>
          <p className="share-icon">
            <FaTelegram />
          </p>
          <span className="share-text">Telegram</span>
        </TelegramShareButton>
      </div>
      <div className="share-button whatsapp">
        <WhatsappShareButton url={url} title={title}>
          <p className="share-icon">
            <FaWhatsapp />
          </p>
          <span className="share-text">Whatsapp</span>
        </WhatsappShareButton>
      </div>
    </div>
  );
}

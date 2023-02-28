import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PetItem = ({ item }: any) => {
  // Một số pet trường hình ảnh và chi tiết bị thiếu, rỗng hoặc null.
  const defaultDescription =
    "Midnight came to the shelter after his previous owner passed away. He is an aloof boy that doesn&#039;t require a...";

  const defaultImg =
    "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60188407/1/?bust=1677513981&width=600";

  return (
    <article className="pet-item">
      <Link to={item.url} className="pet-item__link">
        <img
          src={
            item?.photos[0]?.large ||
            item?.primary_photo_cropped?.large ||
            defaultImg
          }
          alt="imgPet"
          className="pet-item__image"
        />
        <h5 className="pet-item__name">{item.description}</h5>
        <div className="pet-item__info">
          <span className="pet-item__info-gender">Gender: {item.gender}</span>
          <span className="pet-item__info-age">Age: {item.age}</span>
        </div>
        <div className="pet-item__origin">
          <span className="pet-item__origin-city">
            {item?.contact?.address?.city}
          </span>
          <span className="pet-item__origin-country">
            {item?.contact?.address?.country}
          </span>
        </div>
        <div style={{ height: "1px" }}></div>
        <div className="pet-item__status">
          <FaCheck className="pet-item__status-icon" />
          <span>{item?.status}</span>
        </div>
      </Link>
    </article>
  );
};

export default PetItem;

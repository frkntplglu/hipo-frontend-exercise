import "./_photo.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import PhotoModal from "../photomodal/PhotoModal";

function Photo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { id, urls, alt_description } = props;
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const showModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <PhotoModal isOpen={isOpen} onClose={handleModalClose} id={id} />
      <div className="photo-box">
        <button onClick={showModal}>
          <img src={urls.regular} alt={alt_description} />
        </button>
      </div>
    </>
  );
}

Photo.propTypes = {
  id: PropTypes.string,
  urls: PropTypes.object,
  alt_description: PropTypes.string,
};

export default Photo;

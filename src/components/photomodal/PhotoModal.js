import "./_photomodal.scss";
import { useEffect } from "react";
import ReactDom from "react-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

function PhotoModal(props) {
  const { onClose, id } = props;
  const { data, error, isLoaded } = useFetch(`/photos/${id}`);
  console.log(isLoaded);
  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keyup", handleEscapeClose, false);
    return () => {
      window.removeEventListener("keyup", handleEscapeClose, false);
    };
  }, [onClose]);

  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {error ? (
          <Alert type="error" message={error.message} />
        ) : !isLoaded ? (
          <Loader />
        ) : (
          <div className="photo-detail">
            <img
              src={data.urls.regular}
              alt={data.alt_description}
              className="photo-detail-img"
            />
            <div className="photo-info">
              <div className="user">
                <div className="user-avatar">
                  <img
                    src={data.user.profile_image.medium}
                    alt={data.user.name}
                  />
                </div>
                <div className="user-info">
                  <div className="user-firstname">{data.user.name}</div>
                  <div className="username">@{data.user.username}</div>
                </div>
              </div>
              <a href={data.links.download} className="download-btn">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>,
    modalRoot
  );
}

PhotoModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string,
};

export default PhotoModal;

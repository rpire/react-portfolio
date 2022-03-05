import propTypes from 'prop-types';

const Modal = (props) => {
  const {
    project: {
      title,
      description,
    },
    curtainVisibility,
    modalVisibility,
    handleClose,
  } = props;

  return (
    <div className={`modal-curtain ${curtainVisibility}`}>
      <article className={`modal ${modalVisibility}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          type="button"
          onClick={handleClose}
          className="modal-btn"
        >
          Close me here
        </button>
      </article>
    </div>
  );
};

Modal.propTypes = {
  project: propTypes.instanceOf(Object).isRequired,
  curtainVisibility: propTypes.string.isRequired,
  modalVisibility: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default Modal;

import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const element = document.getElementById("modal-root");

  return ReactDOM.createPortal(children, element);
};

export default ModalPortal;

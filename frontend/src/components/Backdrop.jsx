import "./Backdrop.css";

function Backdrop({ show, toggle, togglefalse }) {
  return { show } && <div className="backdrop" onClick={togglefalse}></div>;
}

export default Backdrop;

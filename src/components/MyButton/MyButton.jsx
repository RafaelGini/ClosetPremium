import "./MyButton.css";

function MyButton(props) {
  
  return (
    <button className="btn" onClick={props.onTouchButton}>
      {props.children}
    </button>
  );
}

export default MyButton;
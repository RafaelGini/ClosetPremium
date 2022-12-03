import "./MyButton.css";

function MyButton(props) {
  
  return (
    <button className={"btn " + props.set} onClick={props.onTouchButton}>
      {props.children}
    </button>
  );
}

export default MyButton;
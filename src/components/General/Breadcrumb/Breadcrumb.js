import "./Breadcrumb.css";

export default function Breadcrumb(props) {
  return (
    <div className="breadcrumb" style={props.style}>
      {props.children}
    </div>
  );
}

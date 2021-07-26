// import { useState } from "react";
import "./Checkbox.css";

export default function Checkbox(props) {
  // const [x, setX] = useState(false);
  // console.log(x);

  return (
    <li>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={props.defaultChecked}
          value={props.children}
        />
        <span>{props.children}</span>
      </label>
    </li>
  );
}

// checked={x} onChange={() => setX(!x)}

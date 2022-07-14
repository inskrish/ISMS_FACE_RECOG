import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label ,stateChanger }) => {
    const [checked, setChecked] = React.useState(true); 
    function setChecke(){
        setChecked(!checked)
        stateChanger(checked)
    }
return (
	<div className="container" style={{color:"#fff"}}>
	{label}{" "}
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name={label} id={label}  onChange={setChecke} />
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;

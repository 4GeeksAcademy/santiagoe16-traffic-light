import React, { useState } from "react";


const TrafficLight = () => {
	const [selectedRed, setSelectedRed] = useState(null);
	const [selectedYellow, setSelectedYellow] = useState(null);
	const [selectedGreen, setSelectedGreen] = useState(null);
	
	const lightOnRed = () =>{
		if(selectedRed === null){
			setSelectedRed("selected")
			setSelectedYellow(null)
			setSelectedGreen(null)
		}
		
	}

	const lightOnYellow = () =>{
		if(selectedYellow === null){
			setSelectedYellow("selected")
			setSelectedRed(null)
			setSelectedGreen(null)
		}
	}

	const lightOnGreen = () =>{
		if(selectedGreen === null){
			setSelectedGreen("selected")
			setSelectedYellow(null)
			setSelectedRed(null)
		}
	}
	return (
		<div>
			<div className="stick"></div>
			<div className="traffic-light">
				<div className={`light red ${selectedRed}`} onClick={()=>lightOnRed()} ></div>
				<div className={`light yellow ${selectedYellow}`} onClick={lightOnYellow}></div>
				<div className={`light green ${selectedGreen}`} onClick={lightOnGreen}></div>
			</div>
		</div>
	);
};
export default TrafficLight;

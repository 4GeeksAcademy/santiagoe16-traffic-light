import React, { useState, useRef} from "react";


const TrafficLight = () => {
	const [selectedRed, setSelectedRed] = useState(null);
	const [selectedYellow, setSelectedYellow] = useState(null);
	const [selectedGreen, setSelectedGreen] = useState(null);
	const [selectedViolet, setSelectedViolet] = useState(null);
	const [violetVisibility,setVioletVisibility] = useState("none")
	const [isActive, setIsActive] = useState(false);
  	const intervalRef = useRef(null);

	const lightOnRed = () =>{
		if(selectedRed === null){
			setSelectedRed("selected")
			setSelectedYellow(null)
			setSelectedGreen(null)
			setSelectedViolet(null)
		}else{
			setSelectedRed(null)
		}
		
	}

	const lightOnYellow = () =>{
		if(selectedYellow === null){
			setSelectedYellow("selected")
			setSelectedRed(null)
			setSelectedGreen(null)
			setSelectedViolet(null)
		}else{
			setSelectedYellow(null)
		}
	}

	const lightOnGreen = () =>{
		if(selectedGreen === null){
			setSelectedGreen("selected")
			setSelectedYellow(null)
			setSelectedRed(null)
			setSelectedViolet(null)
		}else{
			setSelectedGreen(null)
		}
	}

	const lightOnVIolet = () =>{
		if(selectedViolet === null){
			setSelectedViolet("selected")
			setSelectedYellow(null)
			setSelectedRed(null)
			setSelectedGreen(null)
		}
		else{
			setSelectedViolet(null)
		}
	}

	const violetDisplay = () =>{
		if(violetVisibility === "none"){
			setVioletVisibility("block")
		}
		else{
			setVioletVisibility("none")
		}
	}

	const randomLight = () =>{
		if(isActive == false){
			intervalRef.current = setInterval(() => {
				const newRandomNumber = Math.ceil(Math.random() * 4);
				console.log(newRandomNumber);
				if(newRandomNumber == 1){
					setSelectedRed("selected")
					setSelectedYellow(null)
					setSelectedGreen(null)
					setSelectedViolet(null)		
				}
				if(newRandomNumber == 2){
					setSelectedYellow("selected")
					setSelectedRed(null)
					setSelectedGreen(null)
					setSelectedViolet(null)	
				}
				if(newRandomNumber == 3){
					setSelectedGreen("selected")
					setSelectedYellow(null)
					setSelectedRed(null)
					setSelectedViolet(null)	
				}
				if(newRandomNumber == 4){
					setSelectedViolet("selected")
					setSelectedYellow(null)
					setSelectedRed(null)
					setSelectedGreen(null)		
				}
			}, 500);
			setIsActive(true)
		}
		else{
			clearInterval(intervalRef.current);
			intervalRef.current = null;
			setIsActive(false);
		}
		
	}

	return (
		<>
		<div className="d-flex container justify-content-evenly">
			<div className="d-flex flex-column ">
				<button className="button-violet mt-auto mb-3" onClick={()=> violetDisplay()}>Violet</button>
				<button className="button-random mb-auto" onClick={()=> randomLight()}>Random</button>
			</div>
			<div>
				<div className="stick"></div>
				<div className="traffic-light">
					<div className={`light red ${selectedRed}`} onClick={()=>lightOnRed()} ></div>
					<div className={`light yellow ${selectedYellow}`} onClick={lightOnYellow}></div>
					<div className={`light green ${selectedGreen}`} onClick={lightOnGreen}></div>
					<div className={`light violet ${selectedViolet}`} onClick={lightOnVIolet} style={{display: violetVisibility}}></div>
				</div>
			</div>
		</div>
		</>
	);
};
export default TrafficLight;

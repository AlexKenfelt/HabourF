import { useState } from "react";

function Boat({ facade, setErrorMessage }) {

    const init = { Brand: "", Make: "", Name: "", Image: "" };
    const [boatInfo, setBoatInfo] = useState(init);
    //boat info indeholder parameterne for båden

    const performCreateBoat = (evt) =>
    {
        evt.preventDefault();
        facade.createBoat(boatInfo.Brand, boatInfo.Make,boatInfo.Name, boatInfo.Image, setErrorMessage)
    }
    const onChange = (evt) =>
    {
        //id skal matche det oppe i  useState(init)
        setBoatInfo({ ...boatInfo, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <form onChange={onChange} className="login" >
                <h2>Create boat</h2>
                <input style={{textAlign:"center"}} placeholder="Brand" id="Brand" />
                <input style={{textAlign:"center"}} placeholder="Make" id="Make" />
                <input style={{textAlign:"center"}} placeholder="Name" id="Name" />
                <input style={{textAlign:"center"}} placeholder="Image" id="Image" />
                <button onClick={performCreateBoat}>Create</button>
            </form>
        </div>
    )
}

export default Boat;
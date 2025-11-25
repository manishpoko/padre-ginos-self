

//this is the main Pizza component that will be used in many places
const Pizza = (props) => {
    
    return (
        <div className="pizza">
            <h1>{props.name} </h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name}/>

        </div>
    )
}

export default Pizza;

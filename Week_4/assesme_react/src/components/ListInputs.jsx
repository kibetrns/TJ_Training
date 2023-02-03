export default function ListInput({input}) {

    let style = {
        textDecoration:"none",
        listStyle: "none",
        margin: "32px",
        
    };

    
    let planets = [
        "Mars",
        "Earth",
        "Jupiter",
        "mercury",
        "venus",
        "Sartun"
    ]


    // if (input === "") { return <li>dfe</li> } else { planets.map(planet =>  <li style={style}>{planet}</li> ) }
    // return console.log({input});
    
    return planets.map(planet =>  <li style={style}>{planet}</li> )
        
    
    
}
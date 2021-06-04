/*assets & packages*/
import {useState, useEffect} from "react";
import './App.css';

/*components*/
import WeatherDisplay from "./components/weather/WeatherDisplay";

//main app function
function App() {
    // default cities for the sidebar
    const [cities, setCities] = useState([
        {
            'id': 0,
            'name': 'Geneva'
        },
        {
            'id': 1,
            'name': 'London'
        },
        {
            'id': 2,
            'name': 'New York'
        },
        {
            'id': 3,
            'name': 'Tokyo'
        }
    ]);
    // hook for when a city is clicked in the menu
    const [city, setCity] = useState('Geneva');
    // hook for when a city is typed
    const [newCity, setNewCity] = useState(null);

    // set the state of newCity every time a word is
    const handleChange = (e) => {
        setNewCity(e.target.value);
    };

    // click event for add button
    const handleClick = () => {
        if (newCity === null || newCity === 'null') {
            return;
        }
        setCities(oldCities => [...oldCities, {'id': cities.length, 'name': newCity}]);
    };

    return (
        <div className={'App'}>
            <div className={'Sidebar'}>
                <h1>Weather</h1>

                <div className={'CityForm'}>
                    <form>
                        <label>Enter a new city</label>
                        <input onChange={handleChange} name={'city'} placeholder={'e.g. London...'}/>
                    </form>
                    <button onClick={handleClick}>Add</button>
                    <hr/>
                </div>

                <ul>
                    {cities.map(city => (
                        <button onClick={() => setCity(city.name)} key={city.id}>
                            {city.name}
                        </button>
                    ))}
                </ul>
            </div>

            <WeatherDisplay city={city}/>
        </div>
    );
}

export default App;

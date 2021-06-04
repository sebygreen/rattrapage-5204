import {useState, useEffect} from "react";

/*components*/
import Spinner from "../common/Spinner";
import Clock from "./Clock";

const WeatherDisplay = ({city}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a89d6186113e2e58907bf91a553e6628`);
        const res = await req.json();

        setData(res);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchData(city);
    }, [city]);

    return (
        <div className={'WeatherDisplay'}>
            {loading ? (
                <Spinner type={'spin'} />
            ) : (
                <div className={'data'}>
                    <h1>{data.name}</h1>
                    <Clock />
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={'Weather icon'} />
                    <h2>{Math.round(data.main.temp)}°C</h2>
                    <p>min {Math.round(data.main.temp_min)}°C &bull; max {Math.round(data.main.temp_max)}°C</p>
                    <p>{data.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherDisplay;
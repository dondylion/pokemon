import React, {useEffect, useState} from 'react';
import API from "./utils/API";

function App() {
    const [image, setImage] = useState<string | null>(null);

    const getData = () => {
        API.get('pokemon/pikachu')
            .then((response) => {
                setImage(response.data.sprites.front_default)
            })
            .catch((error) => {
                console.dir(error)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="border text-xl font-semibold">
            {image && <img src={image} alt={'hi'}/>}
        </div>
    );
}

export default App;

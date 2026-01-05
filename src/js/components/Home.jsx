import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { characters } from "../data/characters";
import { Header } from "./Header";
import { Input } from "./Input";
import { CardList } from "./CardList";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
    const [charactersList, setCharacterList] = useState(characters);
    const [newCharacter, setNewCharacter] = useState({
        id: charactersList.length + 1,
        nombre: "",
        frase: "",
        imagen: ""
    });


    const handlerChange = (e) => {
        const { name, value } = e.target;
        setNewCharacter({
            ...newCharacter,
            [name]: value
        });
    };

    const handlerClick = () => {
        if (!newCharacter.nombre || !newCharacter.frase || !newCharacter.imagen) {
            alert("Debes añadir los datos correspondientes!!");
            return;
        }
        setCharacterList([...charactersList, newCharacter]);

        setNewCharacter({
            id: charactersList.length + 2,
            nombre: "",
            frase: "",
            imagen: ""
        });
    };
    console.log(charactersList)
    return (
        <>
            <div className="container main" >
                <Header />
                <Input
                    form={newCharacter}
                    onChange={handlerChange}
                    onClick={handlerClick}
                />
                <CardList characters={charactersList} />
            </div>
            <Footer />
        </>

    );
};

export default Home;
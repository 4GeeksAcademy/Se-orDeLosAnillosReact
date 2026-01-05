import React, { useState } from "react";
import { Card } from "./Card";


export const CardList = ({ characters }) => {
    return (
        <div className="container mt-3">
            <div className="row">
                {
                    characters.map(character => (
                        <Card key={character.id} character={character} />
                    ))
                }
            </div>
        </div>

    )
}
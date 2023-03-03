import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import "./pokemon.css";


const Pokemon = () => {

    const [getPokemon, setPokemon] = useState([]);

    useEffect(() => {
        getCreatedPokemon();
    }, []);

    const getCreatedPokemon = async () => {
        const response = await axios.get("https://pokemon-053i.onrender.com/pokemon/get");
        setPokemon(response.data);
    }

    return (
        <>
            <div id="pokemon">
                <h1 id="headingPokemon">Pokemon</h1>
                <Grid id="pokemonGrid" container spacing={2}>
                    {getPokemon.length && getPokemon.map((row, index) => (
                        <Grid item key={index}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={row.image} alt="Avatar" id="cardImage" />
                                    </div>
                                    <div className="flip-card-back"> <br />
                                        <Typography id="typoPoke" gutterBottom variant="h6" component="div">
                                            <b>{row.name}</b>
                                        </Typography>
                                        <Typography id="typoPokes" gutterBottom variant="h6" component="div">
                                            <b>Weight:</b> <br /> {row.weight}
                                        </Typography>
                                        <Typography id="typoPokes" gutterBottom variant="h6" component="div">
                                            <b>Height:</b> <br /> {row.height}
                                        </Typography>
                                        <Typography id="typoPokes" gutterBottom variant="h6" component="div">
                                            <b>Ability:</b> <br />  {row.ability}
                                        </Typography>
                                        <Typography id="typoPokes" gutterBottom variant="h6" component="div">
                                            <b>Moves:</b> <br /> {row.moves}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default Pokemon;

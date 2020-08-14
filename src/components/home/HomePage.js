import React, { useState, useEffect } from 'react'
import PokeCard from '../card/PokeCard'
import styles from './home.module.css'
import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2'

export default function Home() {

    const [pokes, setPokes] = useState([])

    useEffect(() => {
        getPokemon()
    }, [])

    const nextPokemon = () => {
        pokes.shift()
        if (!pokes.length) {
            // get more pokes
        }
        setPokes([...pokes])
    }
    const renderPokemon = () => {
        const pkmn = pokes[0]
        return (
            <PokeCard leftClick={nextPokemon} {...pkmn} />
        )
    }
    const getPokemon = () => {
        return axios.get(`${URL}/pokemon?limit=30`)
            .then(res => {
                setPokes(res.data.results)
            })
    }

    return (
        <div className={styles.container}>
            <h2>Pokedex</h2>
            <div>
                {renderPokemon()}
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import styles from './card.module.css'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import axios from 'axios'

function onClick(side) {
    return () => console.log(side)
}

export default function PokeCard({
    url, rightClick, leftClick
}) {
    const [poke, setPoke] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url).then(res => {
            setPoke(res.data)
            setLoading(false)
        })
    })

    if (!loading) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <img alt="bulbasaur" src={poke.sprites.other["official-artwork"].front_default} />
                    <p className={styles.name}>
                        {poke.name}
                    </p>
                    <div className={styles.actions}>
                        <div
                            onClick={leftClick || onClick("left")}
                            className={styles.left}>
                            <FontAwesome
                                name="thumbs-down"
                                size="2x"
                            />
                        </div>
                        <div
                            onClick={rightClick || onClick("right")}
                            className={styles.right}>
                            <FontAwesome
                                name="heart"
                                size="2x"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else{
        return null
    }
}

PokeCard.propTypes = {
    url: PropTypes.string.isRequired,
    leftClick: PropTypes.func,
    rightClick: PropTypes.func,
}
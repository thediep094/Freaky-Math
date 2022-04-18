import './MayTinh.scss'
import { useState, useEffect } from 'react'

const MayTinh = () => {
    const [game, setGame] = useState(true)
    const [number1, setNumber1] = useState(Math.floor(Math.random() * 10))
    const [number2, setNumber2] = useState(Math.floor(Math.random() * 10))
    const [random, setRandom] = useState(Math.floor(Math.random() * 10))
    const [result, setResult] = useState(Math.floor(Math.random() * 2))
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(5)
    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
            return () => {
                clearInterval(timer)
            }
        }
        else {
            setGame(false)
        }
    }, [time])

    const handleClickTrue = () => {
        if (result == 1) {
            setScore(prev => prev + 1)
            setNumber1(Math.floor(Math.random() * 10))
            setNumber2(Math.floor(Math.random() * 10))
            setRandom(Math.floor(Math.random() * 10))
            setResult(Math.floor(Math.random() * 2))
            setTime(5)
        }
        else {
            setGame(false)
        }
    }
    const handleClickFalse = () => {
        if (result == 0) {
            setScore(prev => prev + 1)
            setNumber1(Math.floor(Math.random() * 10))
            setNumber2(Math.floor(Math.random() * 10))
            setRandom(Math.floor(Math.random() * 10))
            setResult(Math.floor(Math.random() * 2))
            setTime(5)
        }
        else {
            setGame(false)
        }
    }

    const playAgain = () => {
        setGame(true)
        setTime(5)
        setScore(0)
        setNumber1(Math.floor(Math.random() * 10))
        setNumber2(Math.floor(Math.random() * 10))
        setRandom(Math.floor(Math.random() * 10))
        setResult(Math.floor(Math.random() * 2))
    }

    return (
        <div className="FreakyMath">
            {game === false ? (
                <div className="popup">
                    <p>
                        Your score is {score}
                    </p>
                    <button className='popup__button' onClick={playAgain}>Play Again</button>
                </div>
            ) : null}
            <div className="FreakyMath__timeout">
                <h1>{time}s</h1>
            </div>
            <div className="FreakyMath__math">
                <p>{number1} + {number2} = {result === 1 ? (number1 + number2) : (number1 + number2 + random)}</p>
            </div>
            <div className="FreakyMath__true__false">
                <button className='button true' onClick={handleClickTrue}>True</button>
                <button className='button false' onClick={handleClickFalse}>False</button>
            </div>
        </div>
    )
}

export default MayTinh
import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/audios.json';
import { GET_UNIT } from '../enums/GET_UNIT.enum';
const AudioListPage = () => {
    const { bookId, unit } = useParams();


    let audios = data.filter(item => item._id === bookId)[0]

    if (!audios) {
        return <div>No data</div>
    }
    console.log(audios)
    const audiosData = !unit ? audios.audios.filter(audio => audio.name.includes("BIENVENI")) : audios.audios.filter(audio => audio.name.includes(GET_UNIT[unit]) && !audio.name.includes(".wav"));

    return (
        <main className='audioPage'>
            <header className='header'>
                <div className='header-container'>
                    <a href="https://arcadepapel.net" className='logo'>
                        <img src="https://arcadepapel.net/keep1/wp-content/uploads/2019/04/LOGO.png" alt="" />
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="">Unidad 1</a>
                            </li>
                            <li>
                                <a href="">Unidad 2</a>
                            </li>
                            <li>
                                <a href="">Unidad 3</a>
                            </li>
                            <li>
                                <a href="">Unidad 4</a>
                            </li>
                            <li>
                                <a href="">Unidad 5</a>
                            </li>
                            <li>
                                <a href="">Unidad 6</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <ul>
                {
                    audiosData.map(audio => (
                        <li key={audio.name}>
                            <h3>{`${audio.name.split("-")[0]} - ${audio.name.split("-")[1]} ${unit ? `${audio.name.split("-")[2]} - ${audio.name.split("-")[3]} - ${audio.name.split("-")[4]} - ${audio.name.split("-")[5]}` : ''}`}</h3>
                            <audio src={`../../assets/${bookId}/${audio.audio}`} controls />
                        </li>
                    ))
                }
            </ul>

            <footer>
                <a href="https://arcadepapel.net">
                    <img src="https://arcadepapel.net/keep1/wp-content/uploads/2019/04/LOGO.png" alt="" />
                </a>
            </footer>
        </main>
    )
}

export default AudioListPage
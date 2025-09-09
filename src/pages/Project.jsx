import './Project.css'
import huffmanImage from '../assets/huffmanScreenshot.png'
import boardGame from '../assets/BoardGame.png'
export default function Project() {
    return (
        <div  className="project-container">
                <h1 className='main-title'>Projects</h1>

                <div className='individual-projects'>
                    <h2 className="project-title">Interactive Particle System</h2>
                    <iframe 
                        src="https://sandra-thadathil.github.io/Particles/" 
                        title="Live Particle System"
                        className="project-image"
                        style={{ border: 'none' }} 
                    ></iframe>
                    <p className="project-description">A fun, interactive particle system made with HTML and JavaScript. 
                        Just move your mouse around, and watch particles pop up and float around! 
                        It’s super relaxing to play with.</p>
                </div>

                <div className='individual-projects'>
                    <h2 className="project-title">Decoder: HuffMan Coding</h2>
                    <a href="https://github.com/Sandra-Thadathil/Decoder-Huffman" target="_blank" rel="link to the project">
                        <img src={huffmanImage} alt="Huffman Coding Image" className="project-image" />
                    </a>
                    <p className="project-description">I tried implementing Huffman coding after studying it in my Data Structures class. So, here’s what it does: 
                        You provide a file with character probabilities (one is already uploaded for your use),
                        and the program builds a Huffman tree to help you encode and decode text.
                        It’s a cool way to see how data compression works in action. Want to give it a try?</p>
                </div>

                <div className='individual-projects'>
                    <h2 className="project-title">Board Game</h2>
                    <a href="https://github.com/Sandra-Thadathil/Board-Game" target="_blank" rel="link to the project">
                        <img src={boardGame} alt="Board Game Image" className="project-image" />
                    </a>
                    <p className="project-description">This is a simple game where you can create and move pieces on a board! 
                        <ul>
                            <li>Create Pieces: Choose a piece type (fast, slow, flexible) and place it on the board.</li>
                            <li> Move Pieces: Move your pieces in any direction, for as many steps as you want.</li>
                            <li> Print the Board: See where everything is located with a quick board view</li>
                        </ul>
                    Just type your commands and watch the game update in real time. Have fun! ✨.</p>
                </div>
        </div>
        
    )
}
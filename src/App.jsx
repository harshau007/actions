import { useState } from 'react'
import './App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {

  return (
    <div>
        <h4>DevOPs</h4>
        <Popup trigger=
                {<button> Click to open modal </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content' style={{ color: 'black'}}>
                                Hii! My name is Harsh and I am DevOps Team Member
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
    </div>
)
}

export default App

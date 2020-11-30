import React, {useState, useEffect} from 'react';

//comps
import Row from './Row/Row'

//assets
import { buttonsConstruct } from './assets/buttonsConstruct'

//styles
import './alignButtons.css'

function Controls(props) {
    let [writeCache, setWriteCache] = useState('')

    useEffect(() => {
        if (writeCache.length) {
            console.log('writeCache', writeCache)
        }
    }, [writeCache])

    const writeChara = (chara) => {
        if (!writeCache.length) {
            setWriteCache(chara)
        } else {
            setWriteCache(writeCache + chara)
        }
    }

    const negate = () => {
        console.log('in negate')
        if (writeCache.length) {
            setWriteCache( (parseFloat(writeCache) * -1).toString() )
        }
    }

    return (
        <div className='controls_wrapper'>
            {
                buttonsConstruct.map((rowConstruct, rowID) => {
                    return (
                        <Row 
                        key={rowID}
                        rowConstruct={rowConstruct} 
                        writeChara={writeChara}
                        negate={negate}
                        />
                        )
                })
            }
        </div>
    );
}

export default Controls;
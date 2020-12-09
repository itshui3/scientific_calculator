import { useState, useEffect } from 'react'

const WriteCache = (initState) => {

    const [writeCache, setWriteCache] = useState(
        () => (
            typeof initState === String
            ?
            initState
            :
            ''
            )
        )

    const writeChara = (chara) => {
        if (!writeCache.length) {
            setWriteCache(chara)
        } else {
            writeCache[0] === '0'
            ?
            setWriteCache(chara)
            :
            setWriteCache(writeCache + chara)

        }
    }

    const negate = () => {
        if (writeCache.length) {
            setWriteCache( (parseFloat(writeCache) * -1).toString() )
        }
    }

    const backspace = () => {
        if (writeCache.length) {
            setWriteCache((writeCache) => {
                if (writeCache.length === 1) {
                    return ''
                } else {
                    return writeCache.substr(0, writeCache.length-1)
                }
                
            })
        }
    }

    const reset = () => {
        setWriteCache('')
    }

    return [writeCache, writeChara, setWriteCache, negate, backspace, reset]
}

export { WriteCache }
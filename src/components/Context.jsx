import React, { useState } from 'react'
import { createContext } from 'react'
const ChannelContext = createContext();
export const Context = ({ children }) => {

    const [Allchannels, setAllchannels] = useState([]);
    const [PrimaryChannel, setPrimaryChannel] = useState([[]]);
    const [DefaultChannel, setDefaultChannel] = useState([[]])
    return (
        <ChannelContext.Provider
            value={{
                Allchannels, setAllchannels, PrimaryChannel, setPrimaryChannel,
                DefaultChannel, setDefaultChannel
            }}
        >
            {children}
        </ChannelContext.Provider>
    )
}

export default ChannelContext;
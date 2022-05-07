//import React from 'react';

import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio}) => {
    if(!lyric || !bio) return null;

    

    return ( 
        <>
            {lyric.error || lyric.name === "AbortError" || lyric.err ? (
                <Message 
                    msg={`Error: no existe el nombre de la cancion ${search.song}`} 
                    bgColor="#dc3545" /> 
                ) : (
                    <SongLyric title={search.song} lyrics={lyric.lyrics} /> 
                )}
          
            {bio.artists ? ( 
                <SongArtist artist={bio.artists[0]} /> 
                ) : (
                    <Message 
                        msg={`Erro: no existe el intérprete ${search.artist}`}
                        bgColor="#dc3545" /> 
                )}
        </>
     );
}
 
export default SongDetails;
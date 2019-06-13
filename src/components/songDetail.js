import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) =>{
    if(song){
        return (
            <div> {song.title}</div>
        );
    }
    return (
        <div> Select a song ! </div>
    );

    
}


const mapStateToProps = (state) =>{
    return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);


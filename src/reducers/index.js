import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Ek ladki ko dekha to', duration: '2:05'},
        {title: 'Pyar kiya to darna kya', duration: '3.10'},
        {title: 'I love my India', duration: '1.10'}
    ]
}

const selectedSongReducer =(selectedSong= null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
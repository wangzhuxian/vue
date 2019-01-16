import { combineReducers } from 'redux'
import newSongs from './newSongs'
import rankList from './rankList'
import songList from './songList'
import singerCategories from './singerCategories'
import rankInfo from './rankInfo'
import songListInfo from './songListInfo'

const rootReducer = combineReducers({
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo
})

export default rootReducer

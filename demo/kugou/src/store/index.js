import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../assets/js/api'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    musicList: [],
    music: undefined,
    song: {},
    audioEl: {},
    isPlaying: false,
    device: {
      vMax: Math.max(window.innerHeight, window.innerWidth)
    }
  },
  getters: {
    curMusicIndex: (state) => {
      return state.musicList.findIndex(music => music === state.music)
    }
  },
  mutations: {
    findAudioEl (state, el) {
      state.audioEl = el
    },
    wantPlay (state, { music, musicList = state.musicList }) {
      state.music = music
      state.musicList = musicList
      axios.get(api.song_info + music.hash).then(res => {
        state.song = res.data
      })
    },
    togglePlay (state) {
      if (state.isPlaying) {
        state.audioEl.pause()
        state.isPlaying = false
      } else {
        state.audioEl.play()
        state.isPlaying = true
      }
    },
    next (state) {
      let index = store.getters.curMusicIndex
      index = index === state.musicList.length - 1 ? -1 : index
      store.commit('wantPlay', { music: state.musicList[index + 1] })
    },
    prev (state) {
      let index = store.getters.curMusicIndex
      index = index === 0 ? state.musicList.length : index
      store.commit('wantPlay', { music: state.musicList[index - 1] })
    }
  }
})
window.store = store
export default store
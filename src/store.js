import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            postList: []
        }
    },
    mutations : {
        updatePost(state, data){
            state.postList = [...state.postList, ...data]
        }
    }
})

export default store
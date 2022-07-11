import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            count : 10
        }
    },
    mutations : {
        countAdd(state){
            state.count += 1
        }
    }
})

export default store
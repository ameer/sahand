export const state = () => ({
  display: false,
  msg: 'Null',
  color: 'green darken-1',
  type: 'success'
})

export const mutations = {
  setData (state, data) {
    state.display = data.display
    state.msg = data.msg
    state.type = data.type
    if (state.type === 'error') {
      state.color = 'red darken-1'
    } else {
      state.color = 'green darken-1'
    }
  }
}

function useState(initialValue){
  const state = {
    value: initialValue != undefined ? initialValue : (this?.value || null),
    stateFn: function(newValue) {
      this.value = newValue
      return newValue
    }
  }
  return [
    state.value,
    state.stateFn
  ]
} 
function component(){
    const [state, setState] = useState(0)
    const [strState, setStrState] = useState('1')
    console.log("log state", state)
    console.log("second state", strState)
    if(state < 5){
        setState(state + 1)
        setStrState(strState + `${state}`)
        component()
    }
}

// component()

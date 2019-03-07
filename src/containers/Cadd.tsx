import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Padd } from '../presentations/Padd'
import { addTodo, Action } from '../actions'
//import { State } from '../appstate/index'

export function mapStateToProps () {
    return 
  }

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return { 
        addClick: (text: string) => {
            dispatch(addTodo(text))
        } 
    }
}

const Cadd = connect(mapStateToProps,mapDispatchToProps)(Padd)

export default Cadd
import {useSelector,useDispatch} from 'react-redux'
import {incrementOne,decrementOne, incrementByAmount} from "./ducks/counterSlice"
import {useState} from 'react'

export default function Counter(){
     const [input, setInput] = useState('')
    const count = useSelector((state) => state.value) 
    const dispatch = useDispatch()

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrementOne())}>-</button>
            <button onClick={() => dispatch(incrementOne())}>+</button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Submit</button>
             </form>
        </div>
    )

}

// export default function Counter() {
//    
//     const count = useSelector((state) => state.value)
//     const dispatch = useDispatch()

//     const byAmountSubmit = (e) => {
//         e.preventDefault()
//         dispatch(incrementByAmount(Number(input)))
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch(decrementOne())}>-</button>
//             <button onClick={() => dispatch(incrementOne())}>+</button>
//             
//         </div>
//     )
// }
import { useReducer } from 'react'

function UseReducerExample() {
    const reducer = (state: number, action: any) => {

        switch (action) {
            case "plus":
                return state + 1
            case "minus":
                return state - 1
            case "reset":
                return 0
            default:
                return state
        }
    }

    const initialeValue = 0
    const [state, dispatch] = useReducer(reducer, initialeValue)


    return (
        <>
            <h3 className="text-center text-3xl mt-4 font-medium">UseReducer Example</h3>
            <div className='py-16'>
                <h1 className='text-red-pri text-center font-semibold'>{state} </h1>
                <div className='flex justify-center items-center pt-4 gap-4 h-full'>

                    <button className='rounded-lg p-1 !w-14 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch('plus')}>+</button>
                    <button className='rounded-lg p-1 !w-14 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch('minus')}>-</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <button className='rounded-lg p-2 !px-8 !w-14 flex justify-center items-center !border-2 !border-green-sec hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch('reset')}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default UseReducerExample




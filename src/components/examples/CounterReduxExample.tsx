import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus, minus, reset } from '../../redux/slices/counterSlice';

function ReduxExample() {
    const x = useSelector(state => state.counter.x);
    const dispatch = useDispatch();

    return (
        <>
            <h3 className="text-center text-3xl mt-4 font-medium">Redux Example</h3>
            <div className='py-16'>
                <h1 className='text-red-pri text-center font-semibold'>{x} </h1>
                <div className='flex justify-center items-center pt-4 gap-4 h-full'>
                    <button className='rounded-lg p-1 !w-14 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch(plus())}>+</button>
                    <button className='rounded-lg p-1 !w-14 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch(minus())}>-</button>

                    <div className='flex flex-col justify-center items-center'>
                        <button className='rounded-lg px-8 p-1 !w-14 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch(reset())}>Reset</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxExample;



import React from 'react';
import NewScript from '../components/NewScript'
import { useRouter } from 'next/router'


function Body() {

    const router = useRouter()

    return (
        <div className="w-3/4 md:w-2/4 lg:w-2/4 bg-white border-2 rounded-lg p-8 shadow-lg">
            {/*Text*/}
            < NewScript />
            {/*Buttons*/}
            <div className="space-x-4 mt-4 flex w-full justify-center items-center">
                <button onClick={() => router.reload()} className="p-2 rounded-full text-xs bg-gray-300">New</button>
            </div>
        </div>
    )
}


export default Body

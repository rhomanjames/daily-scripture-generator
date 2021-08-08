import React from 'react';
import { RefreshIcon} from '@heroicons/react/outline';
import NewScript from '../components/NewScript';
import { useRouter } from 'next/router'


function Body() {

    const router = useRouter()

    return (
        <div className="w-3/4 md:w-2/4 lg:w-2/4 bg-white border-2 rounded-lg p-8 shadow-lg">
            {/*Text*/}
            < NewScript />
            {/*Buttons*/}
            <div className="space-x-4 mt-4 flex w-full justify-center items-center">
                <button className="p-2 rounded-full"><RefreshIcon onClick={() => router.reload()}className="h-4 hover:-rotate-180 transition"/></button>
            </div>
        </div>
    )
}


export default Body

import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center align-middle py-10'>
            <div>
                <progress className="progress bg-cyan-700 w-56 "></progress>
            </div>

        </div>
    );
};

export default Loading;
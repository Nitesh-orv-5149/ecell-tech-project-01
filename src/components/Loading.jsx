import React from 'react'

export default function Loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-black'>
        <div class="w-32 h-32 relative flex items-center justify-center">
        <div
            class="absolute inset-0 rounded-xl bg-[#2D2A9E]/20 blur-xl animate-pulse"
        ></div>

        <div class="w-full h-full relative flex items-center justify-center">
            <div
            class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#03D4D7] via-[#2D2A9E] to-[#F36F21] animate-spin blur-sm"
            ></div>

            <div
            class="absolute inset-1 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden"
            >
            <div class="flex gap-1 items-center">
                <div
                class="w-1.5 h-12 bg-[#03D4D7] rounded-full animate-[bounce_1s_ease-in-out_infinite]"
                ></div>
                <div
                class="w-1.5 h-12 bg-[#2D2A9E] rounded-full animate-[bounce_1s_ease-in-out_infinite_0.1s]"
                ></div>
                <div
                class="w-1.5 h-12 bg-indigo-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.2s]"
                ></div>
                <div
                class="w-1.5 h-12 bg-[#F36F21] rounded-full animate-[bounce_1s_ease-in-out_infinite_0.3s]"
                ></div>
            </div>

            <div
                class="absolute inset-0 bg-gradient-to-t from-transparent via-[#2D2A9E]/10 to-transparent animate-pulse"
            ></div>
            </div>
        </div>

        <div
            class="absolute -top-1 -left-1 w-2 h-2 bg-[#2D2A9E] rounded-full animate-ping"
        ></div>
        <div
            class="absolute -top-1 -right-1 w-2 h-2 bg-[#F36F21] rounded-full animate-ping delay-100"
        ></div>
        <div
            class="absolute -bottom-1 -left-1 w-2 h-2 bg-[#03D4D7] rounded-full animate-ping delay-200"
        ></div>
        <div
            class="absolute -bottom-1 -right-1 w-2 h-2 bg-[#2D2A9E] rounded-full animate-ping delay-300"
        ></div>
        </div>

    </div>
  )
}

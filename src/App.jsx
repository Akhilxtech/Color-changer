import { useState } from 'react'


function App() {
  const [color, setColor]=useState("black")

  return (
    <>
     <div style={{background: color}} className='min-h-screen transition-colors duration-700 ease-in-out flex flex-col items-center justify-center relative pb-40 sm:pb-32'>

      <h1 className='text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight select-none mb-2 sm:mb-4 transition-all duration-500 text-center px-6'>
        Color Changer
      </h1>
      <p className='text-white/60 text-sm sm:text-lg md:text-xl font-medium tracking-wide mb-6 sm:mb-8 select-none text-center px-6'>
        Pick a vibe ✨
      </p>

      {/* Floating glassmorphic button bar */}
      <div className='fixed bottom-3 sm:bottom-6 md:bottom-8 inset-x-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-row md:flex-wrap md:justify-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl sm:w-auto sm:max-w-[90vw]'>
        <div>
          <button onClick={()=>setColor("red")} className='text-white shadow-2xl w-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-red-500 hover:bg-red-400 hover:scale-110 hover:shadow-red-500/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer'>Red</button>
        </div>

         <div>
          <button onClick={()=>setColor("green")} className='text-white shadow-2xl w-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-green-500 hover:bg-green-400 hover:scale-110 hover:shadow-green-500/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer'>Green</button>
        </div>

         <div>
          <button onClick={()=>setColor("yellow")} className='text-white shadow-2xl w-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-yellow-400 hover:bg-yellow-300 hover:scale-110 hover:shadow-yellow-400/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer text-gray-900'> Yellow</button>
        </div>

         <div>
          <button onClick={()=>setColor("blue")} className='text-white shadow-2xl w-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-blue-500 hover:bg-blue-400 hover:scale-110 hover:shadow-blue-500/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer'>blue</button>
        </div>

         <div>
          <button  onClick={()=>setColor("purple")} className='text-white shadow-2xl w-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-purple-500 hover:bg-purple-400 hover:scale-110 hover:shadow-purple-500/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer'>purple</button>
        </div>

         <div>
          <button onClick={()=>setColor("voilet")} className='text-white shadow-2xl w-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-violet-500 hover:bg-violet-400 hover:scale-110 hover:shadow-violet-500/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer'>Voilet</button>
        </div>

         <div className='col-span-3 sm:col-span-4 md:col-auto flex justify-center'>
          <button onClick={()=>setColor("pink")} className='text-white shadow-2xl w-full md:w-auto px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base tracking-wide bg-pink-500 hover:bg-pink-400 hover:scale-110 hover:shadow-pink-500/50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer'>Pink</button>
        </div>

      </div>

     </div>
    </>
  )
}

export default App

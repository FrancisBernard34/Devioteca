import React from 'react'

export default function Modal() {
  return (
    <div className='absolute bg-gray-700 flex flex-col  items-center z-50 w-80 h-80 rounded-br-lg rounded-bl-lg rounded-tr-lg'>
      <h2 className='bg-yellow-400 text-center  mt-10 p-5 rounded-md  '>Faça seu login</h2>
      <p className='mt-5'>Cliente novo? <a className="text-blue-300"href='#'>Clique aqui</a></p>
      </div>
  )
}

import React from 'react';

function InputText({name, placeholder, onChange, value}) {
  return (
    <>
     <input type="text" name={name} onChange={onChange} value={value} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" /> 
    </>
  );
}

export default InputText;
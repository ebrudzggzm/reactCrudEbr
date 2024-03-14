import React from 'react'

const EditMode = ({todo,handleUpdate,setIsEdit}) => {
  return (
    <form onSubmit={handleUpdate} className='container relative d-flex justify-content-between  align-items-center'>
      <select defaultValue={todo.status} className='form-select w-25 shadow'><option value="important">Önemli</option>
      <option value="job">İş</option>
      <option value="daily">Günlük</option></select>
      <input defaultValue={todo.title} className='form-control w-50 shadow' type="text" />
      <div className='d-flex justify-content-end btn-group'>
        <button type="submit" className='btn btn-sm btn-success'>Onayla</button>
        <button type="button" onClick={()=>setIsEdit(false)} className='btn btn-sm btn-secondary'>İptal</button>
      </div>
    </form>
  )
}

export default EditMode;

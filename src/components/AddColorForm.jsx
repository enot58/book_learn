import React from 'react'

function AddColorForm() {
  return (

        <form>
            <input type="text" placeholder='color title...' required />                                                                                             />
            <input type="color" required />
            <button>ADD</button>
        </form>

  )
}

export default AddColorForm;
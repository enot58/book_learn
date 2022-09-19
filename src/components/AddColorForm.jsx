import React from 'react'

function AddColorForm() {
  return (
    <div>
        <form>
            <input type="text" placeholder='color title...' required/>                                                                                            />
            <input type="color" required/>
            <button>ADD</button>
        </form>
    </div>
  )
}

export default AddColorForm;
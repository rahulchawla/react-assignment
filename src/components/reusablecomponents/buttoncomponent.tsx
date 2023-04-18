import React from 'react'
 /* Define Props */

 type SelectProps = {

    action:Function
 }


const ButtonComponent = (props:SelectProps) => {

    const onClickEvent=(evt:any)=>{
        // Dynamic function will be created
        props.action(evt.target)
    }


  return (
    <div className='container'>
        <button className='form-action'
        onClick={onClickEvent}
       >
         Delete

         </button>
    </div>
  )
}

export default ButtonComponent;

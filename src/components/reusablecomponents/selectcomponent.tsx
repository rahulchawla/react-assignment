import React from 'react'
 /* Define Props */

 type SelectProps = {
    dataSource:string[],
    selectedData:Function,
    bindableProperty:string
 }


const SelectComponent = (props:SelectProps) => {

    const onSelectionChanged=(evt:any)=>{
        // Dynamic function will be created
        props.selectedData(evt.target.value)    
    }


  return (
    <div className='container'>
        <select className='form-control'
        onChange={onSelectionChanged}
        value={props.bindableProperty}
         title='select data'>
            <option>Chose value</option>
            {
                props.dataSource.map((v,i)=>(
                    <option key={i} value={v}>{v}</option>
                ))
            }
         </select>
    </div>
  )
}

export default SelectComponent;

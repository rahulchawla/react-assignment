import React from 'react'
import { DataContextEvent } from '../../datacontext'
import { useContext } from 'react'
import ButtonComponent from '../reusablecomponents/buttoncomponent';
const DataGridContextComponent = () => {

    // 1. Subscribe to the Context
 const consumer = useContext(DataContextEvent);

 let dataSource:Array<object> = new  Array<object>();

 dataSource = consumer[Object.keys(consumer)[0]]; // Array
 let evt = consumer[Object.keys(consumer)[1]]; // callback
 let deleteAction = consumer[Object.keys(consumer)[2]]; // callback
 let sortProduct = consumer[Object.keys(consumer)[3]]; // callback
 console.log(`In the Component ${JSON.stringify(consumer)}`);

 // always check the state of the data received
 // in the re-usable component so that it won't crash

 if(consumer === undefined || consumer === null){
   return (
    <div className='alert alert-danger'>
        <strong>No Data to Show</strong>
    </div>
   );
}

if(dataSource === undefined || dataSource === null || dataSource.length === 0){
    return (
        <>
          The Data is not received
        </>
    );
}


if(Array.isArray(dataSource)){
    // 2.a.
    // read keys for the 0th index

    // header as keyof typeof record
     // this means that the header is the key in the record type
    let columns = Object.keys(dataSource[0])
    return (
        <div className='containers'>
           <table className='table table-bordered table-striped'>
              <thead>
                  <tr>
                    {
                        columns.map((header,idx)=>(
                            <th key={idx} onClick={()=>sortProduct(header)}>{header}</th>
                        ))
                    }
                  </tr>
              </thead>
              <tbody>
               {
                 dataSource.map((record:object,index:number)=>(
                    <tr key={index} onClick={()=>evt(record)}>
                        {
                           columns.map((header,idx)=>(

                            <td key={idx}>{record[header as keyof typeof record]!==true?record[header as keyof typeof record]:<ButtonComponent action={()=>deleteAction(index)}></ButtonComponent>}</td>
                        ))
                        }
                    </tr>
                 ))
               }
              </tbody>
            </table>
        </div>
      )
    }
        return (
            <>
              No Data
            </>
        )

  }



export default DataGridContextComponent

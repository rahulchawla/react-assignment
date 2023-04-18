import React, {useState} from 'react'
import { ProductInfo } from '../../models/productinfo';

import SelectComponent from '../reusablecomponents/selectcomponent';

import { DataContextEvent } from '../../datacontext';
import DataGridContextComponent from '../reusablecomponents/datagridcontextcompnent';

const ProductInfoComponent = () => {
  const [product, setProduct] = useState<ProductInfo>({
    ProductRowId:0,
    ProductId:'',
    ProductName:'',
    CategoryName:'',
    Manufacturer:'',
    Description:'',
    BasePrice:0,
    CanDelete:true

  });
  const [products, setProducts] = useState<ProductInfo[]>([]);


  const categories = ['Electronics', 'Electrical', 'Food', 'Fashion'];
  const manufacturers = ['MS-ECT', 'MS-ECL', 'MS-FOOD', 'MS-FASHION'];
  const clear=()=>{
    setProduct({
        ProductRowId:0,
        ProductId:'',
        ProductName:'',
        CategoryName:'',
        Manufacturer:'',
        Description:'',
        BasePrice:0,
        CanDelete:true
      });
  }
  const save=()=>{
    setProducts([...products, product]);
    // setDataCollection([...products, product]);
    // console.log(JSON.stringify(collection));

  }

  const deleteProduct=(i:number)=>{
    setProducts(products=>{
      return products.filter((a,b)=> b!==i)
    })
  }


//not sure how below code will work as typescript is new to me and
  const sortProduct=(orderBy:string)=>{

    console.log(orderBy);
    // setProducts(products=>{
    //   return products.sort((a,b)=>a[orderBy] - b[orderBy])
    // })
  }


  return (
    <div className='container'>
       <div className='form-group'>
          <label>Product Id</label>
          <input type='text' className='form-control'
          value={product.ProductId}
            onChange={(evt)=>setProduct({...product, ProductId:evt.target.value})}
            placeholder='Enter Product Id'/>
       </div>
       <div className='form-group'>
          <label>Product Name</label>
          <input type='text' className='form-control'
           value={product.ProductName}
           onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}
            placeholder='Enter Product Id'/>
       </div>
       <div className='form-group'>
          <label>Category Name</label>
          <SelectComponent
            dataSource={categories}
            selectedData={(value:string)=>setProduct({...product, CategoryName:value})}
            bindableProperty={product.CategoryName}
          ></SelectComponent>
          {/* <select className='form-control'
             value={product.CategoryName}
             onChange={(evt)=>setProduct({...product, CategoryName:evt.target.value})}
            title='catname'>
                <option>Select Category</option>
                {
                    categories.map((c,i)=>(
                        <option key={i} value={c}>{c}</option>
                    ))
                }
            </select> */}
       </div>
       <div className='form-group'>
          <label>Manufacturer Name</label>
          <SelectComponent
            dataSource={manufacturers}
            bindableProperty={product.Manufacturer}
            selectedData={(value:string)=>setProduct({...product, Manufacturer:value})}
          ></SelectComponent>
          {/* <select className='form-control'
           value={product.Manufacturer}
           onChange={(evt)=>setProduct({...product, Manufacturer:evt.target.value})}
             title='manuname'>

                <option>Select Manufacturer</option>
                {
                    manufacturers.map((m,i)=>(
                        <option key={i} value={m}>{m}</option>
                    ))
                }
             </select> */}
       </div>
       <div className='form-group'>
          <label>Description</label>
          <textarea  className='form-control'
           value={product.Description}
           onChange={(evt)=>setProduct({...product, Description:evt.target.value})}
            placeholder='Enter Product Id'></textarea>
       </div>
       <div className='form-group'>
          <label>Base Price</label>
          <input type='text' className='form-control'
           value={product.BasePrice}
           onChange={(evt)=>setProduct({...product, BasePrice:parseInt(evt.target.value)})}
            placeholder='Enter Price'/>
       </div>
       <div className='form-group'>
           <button className='btn btn-warning'
             onClick={clear}
           >New</button>
           <button className='btn btn-success'
             onClick={save}
           >Save</button>
       </div>
       <hr/>
       {/* {
        JSON.stringify(products)
       } */}
       <DataContextEvent.Provider value={{products,setProduct,deleteProduct,sortProduct}}>
          <DataGridContextComponent></DataGridContextComponent>
       </DataContextEvent.Provider>
    </div>
  )
}

export default ProductInfoComponent

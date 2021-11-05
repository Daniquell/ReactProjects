import {useState,useEffect} from 'react'
import {devices} from '../components/DevicesItem'

const Devices=()=>{
    const[phones,setPhones]=useState(null);
    useEffect(()=>{
        setPhones(devices)
    },[])
    const value=[
        'apple',
        'samsung',
        'huawei',
    ];
    const onChange=(e)=>{
        if(e.target.value==""){
            setPhones(devices)
        return
    }
        setPhones(devices.filter((phone)=>phone.brand==e.target.value))
    };
    return(
        <div className="container">
            <h4>AllDevices</h4>
            
                <label>Materialize Select</label>
                <select onChange={onChange} class="browser-default">
    
        <option value="" disabled>
          Choose brand phone
        </option>
      {value.map((key)=> <option key={key} value={key}>{key}</option>)}
     
    </select>
    
  

            <table>
<thead>
  <tr>
   
         {Object.keys(devices[0]).map((field)=>(

        <th key={field}>{field}</th>))} 
      
    
            </tr>
            </thead>

                <tbody>
                    {phones&&phones.map((devices)=>(
                        <tr key={devices.id}>
                            <td>{devices.id}</td>
                            <td>{devices.name}</td>
                            <td>{devices.brand}</td>
                            <td>{devices.description}</td>
                            <td>{devices.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Devices;

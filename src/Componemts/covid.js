import React,{useState,useEffect} from 'react'
import './covid.css';

function Covid() {

     const [data,setData]=useState([])
    const getCovidData=async()=>{
        try{
            
         const res= await fetch('https://api.covid19india.org/data.json')
         const actualData=await res.json();
         setData(actualData.statewise[0]);
        //  console.log(actualData.statewise)
     }catch(err){
       console.log(err);
        }
         }

    useEffect(() => {
             getCovidData();
    }, [])

    return (
        <>
        <section className='secClass'>
          <h1>LIVE</h1>
          <h2>COVID-19 CORONAVIRUS TRACKER</h2>  
           <ul>
           <div className='grid-container'>
               <div className='cardInner'>
                   <p className='cardName'><span className='spanOur'>OUR</span>COUNTRY</p>
                   <p className='cardTotal cardSmall'>INDIA</p>
               </div>
               <div className='cardInner'>
                   <p className='cardName'><span className='spanOur'>TOTAL</span>RECOVERED</p>
                   <p className='cardTotal cardSmall'>{data.recovered}</p>
               </div>
               <div className='cardInner'>
                   <p className='cardName'><span className='spanOur'>TOTAL</span>CONFIRMED</p>
                   <p className='cardTotal cardSmall'>{data.confirmed}</p>
               </div>
               <div className='cardInner'>
                   <p className='cardName'><span className='spanOur'>TOTAL</span>DEATHS</p>
                   <p className='cardTotal cardSmall'>{data.deaths}</p>
               </div>                            
               <div className='cardInner'>
                   <p className='cardName'><span className='spanOur'>TOTAL</span>ACTIVE</p>
                   <p className='cardTotal cardSmall'>{data.active}</p>
               </div>               
               <div className='cardInner'>
                   <p className='cardName2'><span className='spanOur'>LAST</span>UPDATE</p>
                   <p className='cardTotal2 cardSmall'>{data.lastupdatedtime}</p>
               </div>
                </div>
           </ul>
        </section>
        </>
    )
}
export default Covid

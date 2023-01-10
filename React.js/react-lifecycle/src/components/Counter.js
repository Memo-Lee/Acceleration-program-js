import {useState,useEffect} from 'react';

function Counter() {
   /* useEffect ve useState gibi hooklar 
  if,while vs. gibi kontrol mekanizmalarının içerisinde bulunmaz.*/
  const [number,setNumber] = useState(0);

  useEffect(() => {
    console.log("Component mount edildi.");
    const interval = setInterval(() => {
      setNumber((n)=> n+1); //n param = number 
    },1000);
    return () => clearInterval(interval); //clearInterval param -> interval 
  }, []); //dependency array
  useEffect(()=> {
    console.log("number state güncellendi");
  }, [number]);
  
    return (
    <div>
        <h1>{number}</h1>
        <br/>
        <button onClick={()=> setNumber(number + 1)}>Click Number</button>
        <br/>
    </div>
  )
}

export default Counter
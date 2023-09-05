import React, { useCallback, useState } from 'react';
import Label from '../../Label.tsx'
import Button from '../../Button.tsx'

const Callback = () => {
    const [count, setCount] = useState(0)
    const [salary, setSalay] = useState(0)
    const handleCount =  useCallback(() => {
      setCount(count+1)
  },[count])
  

    const handleSalary = useCallback(() => {
        setSalay(salary+10000)
    }, [salary])

  return (
    
    <div>
      <section>
        <Label label='Count value: ' value={count}/>
        <Button label='count: ' onClick={handleCount}/>
      </section>
      <section>
        <Label label='Count value $: ' value={salary}/>
        <Button label='Salary $: ' onClick={handleSalary}/>
      </section>
    </div>
  );
}

export default Callback;

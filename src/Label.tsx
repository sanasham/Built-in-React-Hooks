import React from 'react';

interface LabelProps{
    label: string
    value: number
}

const Label:React.FC<LabelProps> = (props) => {
    const { label, value } = props;
    console.log("Label: " + value);
  return (
    <div>
      <label >{label}:{value}</label>
    </div>
  );
}

export default React.memo(Label);

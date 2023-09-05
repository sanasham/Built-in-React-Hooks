import React from 'react';

interface IButton{
    onClick: ()=>void;
    label:string;
}

const Button:React.FC<IButton> = (props) => {
    const { label, onClick } = props;
    console.log("Button: " + label);
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

export default React.memo(Button);

import React from 'react'
import { Button } from './Button'

export const NumberPanel = ({setValue, ...otherProps}) => {
  const buttonClick = (value) => {
    setValue(value);
  }

  return (
    <>
      <div className='row'>
        <div>
          <Button text="1" handleClick={()=>{buttonClick("1")}}></Button>
        </div>
        <div>
          <Button text="2" handleClick={()=>{buttonClick("2")}}></Button>
        </div>
        <div>
          <Button text="3"  handleClick={()=>{buttonClick("3")}}></Button>
        </div>
        <div>
          <Button text="4" handleClick={()=>{buttonClick("4")}}></Button>
        </div>
      </div>
      <div  className='row'>
        <div>
          <Button text="5" handleClick={()=>{buttonClick("5")}}></Button>
        </div>
        <div>
          <Button text="6" handleClick={()=>{buttonClick("6")}}></Button>
        </div>
        <div>
          <Button text="7" handleClick={()=>{buttonClick("7")}}></Button>
        </div>
        <div>
          <Button text="8" handleClick={()=>{buttonClick("8")}}></Button>
        </div>
      </div>
      <div  className='row'>
        <div>
          <Button text="9" handleClick={()=>{buttonClick("9")}}></Button>
        </div>
        <div>
          <Button text="0" handleClick={()=>{buttonClick("0")}}></Button>
        </div>
        
      </div>
      <div className='row'>
        <div>
          <Button text="+" handleClick={()=>{buttonClick("+")}}></Button>
        </div>
        <div>
          <Button text="-" handleClick={()=>{buttonClick("-")}}></Button>
        </div>
        <div>
          <Button text="/" handleClick={()=>{buttonClick("/")}}></Button>
        </div>
        <div>
          <Button text="*" handleClick={()=>{buttonClick("*")}}></Button>
        </div>
      </div>
    </>
  );
}

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //함수바깥이나 화살표함수 안에서는 불러올수없음. 컴포넌트함수안에서 사용가능
  const clickHandler = () => {
    setTitle('hihi');
  };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick={clickHandler}></button>
      </Card>
    </li>
  );
};

export default ExpenseItem;

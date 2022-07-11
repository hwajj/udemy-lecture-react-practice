import React from 'react';
import '../UI/Card.css';
//
// 카드컴포넌트가 Card.js에서
//    return <div className="card">{props.children}</div>;
// 이렇게 되어있고, Card를 사용하는 ExpenseItem.js에서
// <Card className = "expense-item" 하고있으면
// (Card컴포넌트의 클래스로 expense-item 주고 싶었어도 )
//  내가 지정한 컴포넌트에서는 className 을 내가 지정한 card하나만 받는다.
// className을 expense-item 도 받고싶으면 props.className을 클래스네임에 추가해준다.

// Wrapper안에 들어간 컴포넌트는 props.children에 할당됨)
const Card = (props) => {
  const classes = 'card ' + props.className; //외부에서 받은 className추가
  return <div className={classes}> {props.children}</div>;
};

export default Card;

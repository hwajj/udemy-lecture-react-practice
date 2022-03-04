# udemy-lecture-react-practice

## UseState

### 다수의 state에 접근하는 방법

1. 다수의 state설정

```
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    }
```

2. 1개의 state설정

- 1개의 state가지도록 useState에 객체 넣는 방법
- 하나의 state에 접근하면서 다른 데이터 사라지지않도록
  기존 data 복사한다. 스프레드 연산자 사용 하여 ...userInput
- 이전 snapshot에 의존, 기존 값 복사한다음에 덮어쓰기
- state업데이트할때마다 이전 state에 의존해야함

  ```
   const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
  });
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
  });
  ```

### 방법 3

- state 업데이트 폼의 대안

```
  const titleChangeHandler = (event) => {

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

```

- 동시에 많은 업데이트 계획하는 경우 잘못된 snapshow에 의존하게 될 수 있다
- setUserInput안에 함수넣는 경우는 userState 함수가 제공하는 상태 snapshot이 가장 최신상태 snapshot임을 보장
  -> 이전상태에 기반한다면

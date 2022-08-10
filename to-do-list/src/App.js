import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (taskfObj) => {
      const loadedTasks = [];

      for (const taskKey in taskfObj) {
        loadedTasks.push({ id: taskKey, text: taskfObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: 'https://react-http-9393c-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      },
      transformTasks
    );
  }, []);

  //의존성 배열에 fetchTasks 넣으면, fetchTask호출시
  //setError setIsLoading이 state변화 => 재렌더링 =>
  //sendRequest함수 재생성 ~ fetchTask안의 state변화 => 무한반복
  //useHttp 의 sendRequest를 useCallback으로 감싸서 훅이 호출될때마다 함수가 재생성되는것 (무한루프유도)방지

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

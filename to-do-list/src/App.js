import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTasks = (taskfObj) => {
    const loadedTasks = [];

    for (const taskKey in taskfObj) {
      loadedTasks.push({ id: taskKey, text: taskfObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(
    {
      url: 'https://react-http-9393c-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
    },
    transformTasks
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  //의존성 배열에 fetchTasks 넣으면, fetchTask호출시
  //setError setIsLoading이 state변화 => 재렌더링 =>
  //sendRequest함수 재생성 ~ fetchTask안의 state변화 => 무한반복

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

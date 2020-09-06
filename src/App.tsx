import React, { useState } from 'react';
import { 
  TaskInput,
  TaskList,
  ColorBrowser,
  ColorPickerList,
} from './components';
import { Color } from './model/color';
import { Task } from './Types';
import './App.css';

const initialState: Task[] = [
  {
      id: 2,
      title: '次のTodo',
      done: false
  },{
      id: 1,
      title: '最初のTodo',
      done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  const [color, setColor] = useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  });

  return (
    <div>
      <ColorBrowser color={color}/>
      <ColorPickerList color={color} onColorUpdated={setColor}/>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App;

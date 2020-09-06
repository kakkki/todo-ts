import React, { useState } from 'react'
import { Task } from '../Types'
import { useForm } from 'react-hook-form'

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}
type FormData = {
    title: string
}
export const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
    const [ count, setCount ] = useState<number>(tasks.length + 1)
    const { register, handleSubmit, errors, reset } = useForm<FormData>()
 
    const handleOnSubmit = (data: FormData) => {
        console.log(data.title);
        setCount(count + 1)
        const newTask: Task = {
            id: count,
            title: data.title,
            done: false
        }
        setTasks([newTask, ...tasks])
        reset()
    }

    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <input
                            type="text"
                            className={errors.title && 'error'}
                            name="title"
                            ref={register({
                                required: 'タイトルは必ず入力してください。'
                            })}
                        />
                        { errors.title && <span className="error-message">{ errors.title.message }</span> }
                        <button className="btn is-primary">追加</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// export default TaskInput
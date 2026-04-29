import {ListElement, ButtonElement, TaskName} from './styledComponents'

const TaskItem = props => {
  const {details} = props
  const {task, category} = details
  return (
    <ListElement>
      <TaskName>{task}</TaskName>
      <ButtonElement>{category}</ButtonElement>
    </ListElement>
  )
}

export default TaskItem

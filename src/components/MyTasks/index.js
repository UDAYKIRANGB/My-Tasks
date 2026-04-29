import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  BgContainer,
  FormElement,
  Heading,
  SpanInputElement,
  SpanElement,
  InputElement,
  OptionElement,
  SelectElement,
  ButtonElement,
  MyTaskContainer,
  TagHeading,
  CategoryList,
  CategoryButton,
  TaskList,
  NoTaskAdd,
} from './styledComponents'

import TaskItem from '../TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    myTasksList: [],
    taskInput: '',
    categoryInput: tagsList[0].optionId,
    categoryFIlterId: '',
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onchangeCateory = event => {
    this.setState({categoryInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()

    const {taskInput, categoryInput} = this.state

    if (taskInput !== '') {
      const newTask = {
        id: uuidv4(),
        task: taskInput,
        category: categoryInput,
      }

      this.setState(prev => ({
        myTasksList: [...prev.myTasksList, newTask],
        taskInput: '',
        categoryInput: tagsList[0].optionId,
      }))
    }
  }

  onClickCategory = id => {
    this.setState({categoryFIlterId: id})
  }

  render() {
    const {myTasksList, taskInput, categoryInput, categoryFIlterId} = this.state
    const filteredList =
      categoryFIlterId === ''
        ? myTasksList
        : myTasksList.filter(each => each.category === categoryFIlterId)

    return (
      <BgContainer>
        <FormElement onSubmit={this.onClickAdd}>
          <Heading>Create a task!</Heading>
          <SpanInputElement>
            <SpanElement htmlFor="task">Task</SpanElement>
            <InputElement
              id="task"
              type="text"
              onChange={this.onChangeTask}
              value={taskInput}
              placeholder="Enter the task here"
            />
          </SpanInputElement>
          <SpanInputElement>
            <SpanElement htmlFor="tags">Tags</SpanElement>
            <SelectElement
              id="tags"
              onChange={this.onchangeCateory}
              value={categoryInput}
            >
              {tagsList.map(each => (
                <OptionElement value={each.optionId} key={each.displayText}>
                  {each.displayText}
                </OptionElement>
              ))}
            </SelectElement>
          </SpanInputElement>
          <ButtonElement type="submit">Add Task</ButtonElement>
        </FormElement>
        <MyTaskContainer>
          <TagHeading>Tags</TagHeading>
          <CategoryList>
            {tagsList.map(each => (
              <li key={each.optionId}>
                <CategoryButton
                  onClick={() => this.onClickCategory(each.optionId)}
                >
                  {each.displayText}
                </CategoryButton>
              </li>
            ))}
          </CategoryList>
          <TagHeading>Tasks</TagHeading>
          {filteredList.length === 0 ? (
            <NoTaskAdd as="p">No Tasks Added Yet</NoTaskAdd>
          ) : (
            <TaskList>
              {filteredList.map(each => (
                <TaskItem details={each} key={each.id} />
              ))}
            </TaskList>
          )}
        </MyTaskContainer>
      </BgContainer>
    )
  }
}

export default MyTasks

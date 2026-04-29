import styled from 'styled-components'

export const BgContainer = styled.div`
  display:flex;
  min-height:100vh;
  padding:40px;

`

export const FormElement = styled.form`
  display:flex;
  flex-direction:column;
  padding:10px;
  width:40vw;
  background-color: #131213;
  padding-top:70px;
`

export const Heading = styled.h1`
  color:#f3aa4e;
  text-align:center;
`
export const SpanInputElement = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:20px;
  margin-bottom:20px;
`

export const SpanElement = styled.label`
  color:white;
  font-weight:500;
`

export const InputElement = styled.input`
  background-color:#f1f5f9;
  width:90%;
  border:none;
  height:35px;
`
export const SelectElement = styled.select`
  background-color:#f1f5f9;
  width:90%;
  border:none;
  height:35px;
`
export const OptionElement = styled.option`
  background-color:#f1f5f9;
  width:90%;
  border:none;
  height:35px;
`

export const ButtonElement = styled.button`
   color:#f3aa4e;
   width:100px;
   height:35px;
   border-radius:7px;
   color:white;
   background-color:#f3aa4e;
   align-self:center;
`

export const MyTaskContainer = styled.div`
   display:flex;
  flex-direction:column;
  padding:10px;
  width:60vw;
  background-color:#000000;
  padding-top:50px;
`
export const TagHeading = styled.h1`
  color:white;
  font-size:32px;
`

export const CategoryList = styled.ul`
  display:flex;
  align-items:center;
  padding-left:0px;
  list-style-type:none;
`

export const CategoryButton = styled.button`
  background-color:transparent;
  border:1px solid #ffffff;
  padding:3px 6px;
  color:white;
  height:25px;
  border-radius:15px;
  margin-right:10px;
`

export const TaskList = styled.ul`
  display:flex;
  flex-direction:column;
  padding-left:0px;
  list-style-type:none;
`

export const NoTaskAdd = styled.h1`
  color:white;
  text-align:center;
`

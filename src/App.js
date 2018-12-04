import React, { Component } from 'react';
import './App.css';
import students from './components/students'
import Textbox from './components/Textbox'
import Navbottom from './components/Navbottom'
import Newstudent from './components/Newstudent'
import Editstudent from './components/Editstudent'

class App extends Component {
  constructor (){
    super()
    this.state = {
      students: students,
      index: 0,
      newStudent: false,
      canEdit: false
    }
  this.handleNextClick = this.handleNextClick.bind(this)
  this.handlePreviousClick = this.handlePreviousClick.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
  this.setNew = this.setNew.bind(this)
  this.addNewStudent = this.addNewStudent.bind(this)
  this.cancelClick = this.cancelClick.bind(this)
  this.editClick = this.editClick.bind(this)
  this.cancelEdit = this.cancelEdit.bind(this)
  this.editStudent = this.editStudent.bind(this)
  }
  handleNextClick(){
    if(this.state.index < this.state.students.length -1 ){
    this.setState({index: this.state.index + 1})
    }else{
      this.setState({index: 0})
    }
  }
  handlePreviousClick(){
    if(this.state.index > 0){
    this.setState({index: this.state.index - 1})
    }else{
      this.setState({index: this.state.students.length -1})
    }
  }

  handleDelete(){
    let arr = [...this.state.students]
    arr.splice(this.state.index,1)
    if(arr.length >= 1){
    this.setState({students: arr})
    }else{
      window.alert('This is the last Student')
    }
  }

  addNewStudent(n,f,fn,c,io,t,s,d){
    let arr = [...this.state.students]
    let newS = {name: n,
    from: f,
    funFact: fn,
    cityOrCountry: c,
    indoorsOrOutdoors: io,
    travel: t,
    food: s,
    dogOrCat: d}
    arr.push(newS)
    this.setState({students: arr})
    this.setState({newStudent: false})
  }

  editStudent(n,f,fn,c,io,t,s,d){
    let arr = [...this.state.students]
    let i = this.state.index
    arr[i] = {name: n?n:this.state.students[i].name,
    from: f?f:this.state.students[i].from,
    funFact: fn?fn:this.state.students[i].funFact,
    cityOrCountry: c?c:this.state.students[i].cityOrCountry,
    indoorsOrOutdoors: io?io:this.state.students[i].indoorsOrOutdoors,
    travel: t?t:this.state.students[i].travel,
    food: s?s:this.state.students[i].food,
    dogOrCat: d?d:this.state.students[i].dogOrCat}
    arr.splice(0,1,arr[i])
    this.setState({students: arr})
    this.setState({canEdit: false})
  }

  setNew (){
    this.setState({newStudent: true})
  }

  cancelClick (){
    this.setState({newStudent: false})
  }

  cancelEdit(){
    this.setState({canEdit: false})
  }

  editClick(){
    this.setState({canEdit: true})
  }

  render() {
    return (
      <div className="App">
        <nav className="top">
          <p className="left">Home</p>
          <p className="right">DevMountain Directory</p>
        </nav>
        <>
        {this.state.newStudent===false && this.state.canEdit===false?
          <Textbox students={this.state.students} index={this.state.index}/>: this.state.canEdit===true ? 
          <Editstudent students={this.state.students} index={this.state.index} cancelEdit={this.cancelEdit} editStudent={this.editStudent}/>:
          <Newstudent students={this.state.students} setNew={this.setNew} cancelClick={this.cancelClick}
          addNewStudent={this.addNewStudent} editStudent={this.editStudent}/>}
        </>
      <Navbottom next={this.handleNextClick} previous={this.handlePreviousClick} handleDelete={this.handleDelete}
        setNew={this.setNew} canEdit={this.editClick}/>
      </div>
    );
  }
}

export default App;

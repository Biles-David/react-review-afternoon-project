import React, {Component} from 'react'

class Editstudent extends Component {
  constructor (props){
    super(props)
    this.state ={
      name: props.students.name,
      from: props.students.from,
      funFact:props.students.funFact,
      cityOrCountry:props.students.cityOrCountry,
      indoorsOrOutdoors:props.students.indoorsOrOutdoors,
      travel: props.students.travel,
      food:props.students.food,
      dogOrCat:props.students.dogOrFood
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const index = this.props.index
    let info = this.props.students[index]
    
    return(
      <body className="textBox">
        <a className="counter">{`${index + 1} of ${this.props.students.length}`}</a>
        <input name="name" placeholder={info.name} onChange={this.handleChange}></input>
        <br/>
        <br/>
        <br/>
        <a className={''}><span className = "bold" >From:</span> <input name="from" onChange={this.handleChange} placeholder={info.from}></input> </a>
        <br/>
        <span className = "bold">Fun Fact:</span><input name="funFact" onChange={this.handleChange} placeholder={info.funFact}></input>
        <br/>
        <h4>Would you Rather...</h4>
        <ul>
          <li className={''}><span className='bold'>...Live in the city or country?</span><input name="cityOrCountry" placeholder={info.cityOrCountry} onChange={this.handleChange}></input></li>
          <li className={''}><span className='bold'>...Be indoors or outdoors?</span><input name="indoorsOrOutdoors" onChange={this.handleChange} placeholder={info.indoorsOrOutdoors}></input></li>
          <li className={''}><span className='bold'>...travel every day or never leave home?</span><input name="travel" placeholder={info.travel} onChange={this.handleChange}></input></li>
          <li className={''}><span className='bold'>...eat at Top's or Subway?</span><input name="food" placeholder={info.food} onChange={this.handleChange}></input></li>
          <li className={''}><span className='bold'>...have a dog or a cat?</span><input name="dogOrCat" placeholder={info.dogOrCat} onChange={this.handleChange}></input></li>
        </ul>
        <button onClick={()=>this.props.editStudent(
          this.state.name,this.state.from,this.state.funFact,this.state.cityOrCountry,this.state.indoorsOrOutdoors,this.state.travel,this.state.food,this.state.dogOrCat)}> Submit </button>
        <button onClick={this.props.cancelEdit}> Cancel </button>
      </body>
    )
  }
};

export default Editstudent;
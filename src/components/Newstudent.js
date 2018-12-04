import React, {Component} from 'react'

class Newstudent extends Component {
  constructor (props){
    super(props)
    this.state = {
      name:'',
      from:'',
      funFact:'',
      cityOrCountry:'',
      indoorsOrOutdoors:'',
      travel:'',
      food:'',
      dogOrCat:''
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
    return (
      <body className="textBox">
        <h1>Name: </h1> <input name="name" type='text' onChange={this.handleChange}></input>
        <br/>
        <a ><span className = "bold" >From:</span> <input name='from' onChange={this.handleChange}></input> </a>
        <br/>
        <span className = "bold">Fun Fact:</span><input name="funFact" onChange={this.handleChange}></input>
        <br/>
        <h4>Would you Rather...</h4>
        <ul>
          <li><span className='bold'>...Live in the city or country?</span><input name="cityOrCountry" onChange={this.handleChange}></input></li>
          <li><span className='bold'>...Be indoors or outdoors?</span><input name="indoorsOrOutdoors" onChange={this.handleChange}></input></li>
          <li><span className='bold'>...travel every day or never leave home?</span><input name="travel" onChange={this.handleChange}></input></li>
          <li><span className='bold'>...eat at Top's or Subway?</span><input name="food" onChange={this.handleChange}></input></li>
          <li><span className='bold'>...have a dog or a cat?</span><input name="dogOrCat" onChange={this.handleChange}></input></li>
        </ul>
        <button onClick={()=>this.props.addNewStudent(
          this.state.name,this.state.from,this.state.funFact,this.state.cityOrCountry,this.state.indoorsOrOutdoors,this.state.travel,this.state.food,this.state.dogOrCat)}> Submit </button>
        <button onClick={this.props.cancelClick}> Cancel </button>
      </body>
    )
  }
}

export default Newstudent
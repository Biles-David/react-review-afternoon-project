import React, {Component} from 'react'

class Textbox extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const index = this.props.index
    const info = this.props.students[index]
    return (
      <body className="textBox">
        <a className="counter">{`${index + 1} of ${this.props.students.length}`}</a>
        <h1>{info.name}</h1>
        <br/>
        <a className={info.from?'':'hidden'}><span className = "bold" >From:</span> <span>{info.from}</span> </a>
        <br/>
        <span className = "bold">Fun Fact:</span><span> {info.funFact}</span>
        <br/>
        <h4>Would you Rather...</h4>
        <ul>
          <li className={info.cityOrCountry ? '' : 'hidden'}><span className='bold'>...Live in the city or country?</span><span>{info.cityOrCountry}</span></li>
          <li className={info.indoorsOrOutdoors?'':'hidden'}><span className='bold'>...Be indoors or outdoors?</span><span>{info.indoorsOrOutdoors}</span></li>
          <li className={info.travel?'':'hidden'}><span className='bold'>...travel every day or never leave home?</span><span>{info.travel}</span></li>
          <li className={info.food?'':'hidden'}><span className='bold'>...eat at Top's or Subway?</span><span>{info.food}</span></li>
          <li className={info.dogOrCat? '':'hidden'}><span className='bold'>...have a dog or a cat?</span><span>{info.dogOrCat}</span></li>
        </ul>
      </body>
    )
  }
}

export default Textbox;
import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props){
        super(props);

        this.state={
            name:null,
            country:null,
        };

     }


    //***************data pick on when element change*******************/
    //  nameChangeHandler=(event)=>{
    //       console.log("Name:",event.target.value);
    //  }

    //  nameChangeHandler=(event)=>{
    //       console.log("Select:",event.target.value);
    //  }

     //***************data pick on when form submitted*******************/
    submitHandler=(event)=>{
        //it prevent the by default property of browser(event happen stopped when the data is submitted by showing console)
        event.preventDefault();

        console.log(this.state);
        const name=event.target.name.value;
        const country=event.target.country.value;
        this.setState({name,country},()=>{
            console.log(this.state);

            //after submitting the forms then show the forms empty
            event.target.name.value="";
            event.target.country.value="";
        });
    }
  render() {
    return (
      <div>
      <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            {/* <input type="text" name="name" onKeyUp={this.nameChangeHandler}></input> */}
            <input type="text" name="name"></input>
          </div>
          <div>
             <label htmlFor='country'>Country:</label>
             <select onChange={this.nameChangeHandler} name="country">
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
             </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Forms
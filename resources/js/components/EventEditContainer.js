import React, { Component } from 'react';

//import components
import EventEdit from './views/EventEdit';
import { getOneEvent, editEvent } from './Api';

export default class EventEditContainer extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      event:[],
      name: "",
      date: "",
      description: ""
    }
  }

  onChangeName(input){
    this.setState({
     name: input.target.value
   });
  }

  onChangeDate(input){
    this.setState({
     date: input.target.value
   });
  }

  onChangeDescription(input){
    this.setState({
     description: input.target.value
   });
  }

  onSubmit(data){
    data.preventDefault();
    const obj = {
      "name": this.state.name,
      "date": this.state.date,
      "description": this.state.description
    }
    editEvent(this.props.match.params.id, obj)
    this.props.history.push('/')
  }

  async componentDidMount() {
    const event= await getOneEvent(this.props.match.params.id);
    this.setState({
      event:event,
      name: event.name,
      date: event.date,
      description: event.description
    })
  }

  render() {
    return(
      <EventEdit
        package={this.state.event}
        onChangeName={this.onChangeName}
        onChangeDate={this.onChangeDate}
        onChangeDescription={this.onChangeDescription}
        onClick={this.onSubmit}
      />
    )
  }
}

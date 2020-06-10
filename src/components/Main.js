import React, {Component} from 'react';

import Tarefas from './Tarefas';
import Form from './Form';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas , index} = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) !== -1) return;

    if(index == -1){
      this.setState({
        tarefas: [...tarefas, novaTarefa],
        novaTarefa: ''
      }); //
    } else {
  
      tarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...tarefas],
        index: -1
      });
    }


  }

  handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value
    });
  }

  handleEdit = (e, index) =>{
    const { tarefas } = this.state;
    this.setState({
      index: index,
      novaTarefa: tarefas[index],

    })
  }

  handleDelete = (e, index) =>{
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  render() {
    const {novaTarefa, tarefas} = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}

        />

      </div>
    );
  }
}
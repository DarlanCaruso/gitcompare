import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    const { repositories } = this.state;
    const { repositoryInput } = this.state;

    e.preventDefault();
    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const { repositories } = this.state;
    const { repositoryInput } = this.state;
    const { repositoryError } = this.state;

    return (
      <Container>
        {/* Logo */}
        <img src={logo} alt="Github Compare" />
        {/* Form */}
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">+</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

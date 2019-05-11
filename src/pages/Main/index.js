import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    const { repositories } = this.state;
    const { repositoryInput } = this.state;

    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { repositories } = this.state;
    const { repositoryInput } = this.state;
    const { repositoryError } = this.state;
    const { loading } = this.state;

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
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : '+'}</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

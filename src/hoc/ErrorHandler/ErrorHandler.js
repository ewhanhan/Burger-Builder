import React, { Component } from 'react';
import Modal from '../../component/UI/Modal/Modal.js';

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        (resp) => resp,
        (err) => {
          this.setState({ error: err });
        }
      );
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal show={this.state.error} isClicked={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </>
      );
    }
  };
};

export default ErrorHandler;

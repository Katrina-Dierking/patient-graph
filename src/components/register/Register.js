import React, {Component} from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { withRouter } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {RegisterWrap } from '../../styles/SignUpStyles'

class Register extends Component {
    state = {
        credentials: {
            name:'', 
            password: ''
        }
    };

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/register', this.state.credentials)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                this.setState({ credentials: { 
                    name: '', 
                    password: ''
                }});
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <RegisterWrap>
            <Form onSubmit={this.login}>
                <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                    required
                    id="username" 
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    />
                </FormGroup>

                <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    required
                    id="password" 
                    type="text"
                    name="password"
                    placeholder="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    />
                </FormGroup>

                <FormGroup>
                    <Button className = "logBtn" type="submit">Register</Button>
                </FormGroup>
            </Form>
            </RegisterWrap>
        )
    }
}

export default withRouter (Register);

import React, {Component} from "react";
import { connect } from 'react-redux'
import { Form, Button, FormGroup, Label, Input} from 'reactstrap'
import { LoginWrap } from '../../styles/SignUpStyles'

import { loginUserAction } from '../../redux/actions/actions-users'


class Login extends Component {
    state = {
        data: {
            username: '', 
            password: ''
        }, 
        errors: {}
    }

    validate = () => {
        const {data} = this.state
        const errors = {}

        if (data.username === '') errors.username = 'Username required'
        if (data.password === '') errors.password = 'Password required'

        return errors
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { data } = this.state
        const errors = this.validate()
        
        if (Object.keys(errors).length === 0) {
            this.props.login(data)

            this.setState({
                data: {
                    username: '', 
                    password: ''
                }, 
                errors: {}
            })
        } else {
            this.setState({
                errors
            })
        }
    }

    handleChanges = (e) => {
        this.setState({ 
            data: {
                ...this.state.data, 
                [e.target.id] : e.target.value
            }, 
            errors: {
                ...this.state.errors,
                [e.target.id] : ''
            }
        })
    }

    render () {
        const { data, errors } = this.state

        return (
            <LoginWrap>
            {/* <Row> */}
                {/* <Col md={8}> */}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input
                                required
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={data.username}
                                onChange={this.handleChanges}
                                error={errors.username}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                required
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={this.handleChanges}
                                error={errors.password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button className="logBtn" color="primary">Login</Button>
                        </FormGroup>
                    </Form>
            {/* </Row> */}
            </LoginWrap>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (credentials) => {
            dispatch(loginUserAction(credentials))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
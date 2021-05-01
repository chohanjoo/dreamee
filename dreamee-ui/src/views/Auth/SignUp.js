import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { Component } from "react";

import {signUp} from "../../api/Api";
import { login } from "../../api/Storage";

import Inko from 'inko';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  formControl: {
    marginTop : '40px',
    minWidth: '100%',
  }
};

export class SignIn extends Component {

  state = {
    name: '',
    pw: '',
    level: 'LEDER'
  };

  handleChange = (e) => {

    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value
    })

    console.log(value)
  }

  handleDropBoxChange = (e) => {

    const {name, value} = e.target;
    this.setState({
      [name]: value
    })

    console.log(value)
  }

  onKeyPress = (e) => {
    if(e.key == 'Enter') {
      this.signIn()
    }
  }

  signUp() {    
    // 한글 to 영어
    var inko = new Inko();
    const password = inko.ko2en(this.state.pw)

    signUp(this.state.name, password, this.state.level)
      .then(res => {
        const result = res.status;
        if( result === 200) {
          this.props.history.push("/auth/signin")
        }
      })
  }

  render() {

    const {classes} = this.props;

    
    return (
      <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>회원가입</h4>
            </CardHeader>
            <CardBody>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="이름"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (e) => this.handleChange(e),
                      name: "name",
                      type: "text"
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <FormControl className={classes.formControl}>
        <Select
          value={this.state.level}
          name="level"
          onChange={(e) => this.handleDropBoxChange(e)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          defaultValue={'LEDER'}
        >
          <MenuItem value={'LEDER'}>리더</MenuItem>
          <MenuItem value={'VIGER'}>마을장</MenuItem>
          <MenuItem value={'ASTER'}>간사</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="비밀번호"
                    id="pw"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (e) => this.handleChange(e),
                      name: "pw",
                      type: "password",
                      onKeyPress: (e) => this.onKeyPress(e)
                    }}
                  />
                </GridItem>
              </GridContainer>

            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => this.signUp()}>로그인</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    );
  }
}


export default withStyles(styles)(SignIn);
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
import { Component } from "react";

import {signIn} from "../../api/Api";
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
  }
};

const useStyles = makeStyles(styles);

export class SignIn extends Component {

  state = {
    name: '',
    pw: ''
  };

  handleChange = (e) => {

    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value
    })

    console.log(value)
  }

  signIn() {   
    // 한글 to 영어
    var inko = new Inko();
    const password = inko.ko2en(this.state.pw)

    signIn(this.state.name, password)
      .then(res => {
        const result = res.status;
        if( result === 200) {
          console.log("res : " + JSON.stringify(res.data.data))
          login(res.data.data, this.state.name)
          this.props.history.push("/")
          window.location.reload()
        }
      })
  }

  signUp() {
    this.props.history.push("/admin/auth/signup")
  }

  render() {

    const {classes} = this.props;

    
    return (
      <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>로그인</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>

              </GridContainer>
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
                  <CustomInput
                    labelText="비밀번호"
                    id="pw"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (e) => this.handleChange(e),
                      name: "pw",
                      type: "password"
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => this.signIn()}>로그인</Button>
              <Button color="primary" onClick={() => this.signUp()}>회원가입</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    );
  }
}


export default withStyles(styles)(SignIn);
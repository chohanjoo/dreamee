import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ExpandTable from "components/Table/ExpandTable"

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  getSaintInfoList, getDeptTypeList, getVillageTypeList, registerSaint
} from "../../api/Api";

import Breadcrumbs from '@material-ui/core/Breadcrumbs';


class Saint extends Component {

  state = {
    saintName: null,
    villageName: null,
    saintList: [],
    attDialogOpen: false,
    newSaintInfo: {registerBaptism: "N", registerDiscipleTraining: "N", registerGender: "M"},
    deptList: [],
    villageList: []
  }

  componentDidMount() {
    this.retrieveDeptTypeList();
    this.retrieveVillageTypeList();
  }

  getDate() {
    var today = new Date();

    var mm = Number(today.getMonth() + 1) < 10 ? '0' + Number(today.getMonth() + 1) : Number(today.getMonth() + 1)
    return String(today.getFullYear() + "-" + mm + "-" + today.getDate())
  }

  handleChangeSaintName(event) {
    console.log(event.target.value)
    this.setState({
      saintName: event.target.value
    })
  }

  handleChangeVillageName(event) {
    console.log(event.target.value)
    this.setState({
      villageName: event.target.value
    })
  }

  handleChange = (event) => {
    const id = event.target.id === "" ? event.target.name : event.target.id;
    var saintInfo = this.state.newSaintInfo;

    saintInfo[id] = event.target.value;

    this.setState({
      newSaintInfo: saintInfo
      // [name]: event.target.value
    });
  };

  retrieveDeptTypeList() {
    getDeptTypeList()
    .then(res => {
      const result = res.status;

        if (result === 200) {
          let toMap = new Map(Object.entries(res.data.data));
          this.setState({
            deptList: toMap
          })
        }
      })
  }

  retrieveVillageTypeList() {
    getVillageTypeList()
    .then(res => {
      const result = res.status;

        if (result === 200) {
          let toMap = new Map(Object.entries(res.data.data));
          this.setState({
            villageList: toMap
          })
        }
      })
  }

  retrieveSaintList() {
    getSaintInfoList(this.state.saintName, this.state.villageName)
    .then(res => {
      const result = res.status;

      console.log(res.data.list)
        if (result === 200) {
          this.setState({
            saintList: res.data.list
          })
        }
      })
  }

  handleClickAttDialogOpen() {
    this.setState({
      attDialogOpen: !this.state.attDialogOpen,
    })
  }

  pushSaintInfo() {
    this.handleClickAttDialogOpen();

    var villageElement = document.getElementById("registerVillage");
    var deptElement = document.getElementById("registerDept");

    var villageValue = villageElement.value;
    var deptValue = deptElement.value;

    var saintInfo = this.state.newSaintInfo;

    saintInfo["registerVillage"] = this.state.villageList.get(villageValue);
    saintInfo["registerDept"] = this.state.deptList.get(deptValue);

    this.setState({
      newSaintInfo: saintInfo
    });

    console.log("saintInfo : ", saintInfo)

    registerSaint(saintInfo);
  }

  makeTableData() {
    var data = [];

    this.state.saintList.map(saint => {
      const saintName = saint.name;
      const villageName = saint.villageName;
      const gender = saint.gender;
      const age = saint.age;
      const birthday = saint.birthday


      const saintInfo = {
        saintName: saintName,
        villageName: villageName,
        gender: gender,
        age: age,
        birthday, birthday,
        address: saint.address,
        baptism: saint.baptism,
        preChurch: saint.preChurch,
        major: saint.major,
        discipleTraining: saint.discipleTraining,
        deptName: saint.deptName,
        id: saint.saintId
      };

      var att = {saintName, villageName, gender, saintInfo, age, birthday}
      data.push(att) 
    })

    return data;
  }

  render() {
    const { classes } = this.props;


    return (
      <div>
                <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h3 className={classes.cardTitleWhite}>드리미 검색</h3>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>

                <Card>
                  <Grid container spacing={3}>
                  <Grid item xs={6}>

                  <div className={classes.searchOption}>

                    <FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="age-native-simple">마을</InputLabel>
        <Select
          native
          onChange={(e) => this.handleChangeVillageName(e)}
          defaultValue={null}
          inputProps={{
            name: 'villageName',
            id: 'villageName'
          }}
        >
          {Array.from(this.state.villageList.keys()).map(key => {
            return <option value={this.state.villageList[key]}>{key}</option>  
          })}

        <option value={null}>ALL</option>  
        </Select>
      </FormControl>
                  </div>

                  <div className={classes.searchOption}>
                  <TextField 
                    id="saintName" 
                    label="이름"
                    onChange={(e) => this.handleChangeSaintName(e)}
                     />
                  </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div className={classes.searchButton}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => this.retrieveSaintList()}
                    >
        조회
      </Button>
      </div>
      </Grid>
      </Grid>
                </Card>

              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>

          <div className={classes.pushButton}>
          <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => this.handleClickAttDialogOpen()}
                    >
        등록
      </Button>

      <Dialog
        fullScreen
        open={this.state.attDialogOpen}
        onClose={() => this.handleClickAttDialogOpen()}
        aria-labelledby="responsive-dialog-title"
      >


          <DialogContent>
          <DialogContentText>
          <Breadcrumbs aria-label="breadcrumb">
          <Typography>
        드림이
        </Typography>
      <Typography color="textPrimary">
        드림이 등록
        </Typography>
    </Breadcrumbs>
          </DialogContentText>

          <GridContainer justify={"center"}>
          <GridItem xs={8} sm={8} md={8}>
          <Card>
              <CardHeader color="primary">
                <h3 className={classes.cardTitleWhite}>드리미 등록</h3>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardBody>
                  <div className={classes.searchOption}>
        <TextField
          required
          id="registerSaintName"
          label="이름"
          variant="outlined"
          onChange={this.handleChange}
        />
        </div>
        <div className={classes.searchOption}>
                <TextField
          required
          id="registerAge"
          label="나이"
          variant="outlined"
          onChange={this.handleChange}
        />
        </div>
        <div className={classes.searchOption}>

<FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="age-native-simple">마을</InputLabel>
        <Select
          native
          // value={this.state.age}
          onChange={this.handleChange}
          defaultValue={this.state.villageList.keys()[0]}
          inputProps={{
            name: 'registerVillage',
            id: 'registerVillage',
          }}
        >
          {Array.from(this.state.villageList.keys()).map(key => {
            return <option value={this.state.villageList[key]}>{key}</option>  
          })}

        </Select>
      </FormControl>
      </div>
                  </CardBody>
                </Card>

<Card>
  <CardBody>
  <div className={classes.searchOption}>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="age-native-simple">성별</InputLabel>
        <Select
          native
          // value={this.state.age}
          onChange={this.handleChange}
          inputProps={{
            name: 'gender',
            id: 'registerGender',
          }}
        >
          <option value={'M'}>남</option>
          <option value={'W'}>여</option>
        </Select>
      </FormControl>
      </div>

      <div className={classes.searchOption}>
                <TextField
          required
          id="registerMajor"
          onChange={this.handleChange}
          label="전공"
          variant="outlined"
        />
      </div>
      <div className={classes.searchOption}>
                <TextField
          required
          id="registerAddress"
          label="주소"
          variant="outlined"
          onChange={this.handleChange}
        />
      </div>
  </CardBody>
</Card>

<Card>
  <CardBody>
<div className={classes.searchOption}>

      <TextField
        id="registerBirthday"
        label="Birthday"
        type="date"
        defaultValue={this.getDate()}
        onChange={this.handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />


      </div>
      <div className={classes.searchOption}>
                <TextField
          required
          id="registerPreChurch"
          label="이전 교회"
          variant="outlined"
          onChange={this.handleChange}
        />
      </div>

      <div className={classes.searchOption}>

<FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="age-native-simple">부서</InputLabel>
        <Select
          native
          // value={this.state.age}
          onChange={this.handleChange}
          defaultValue={this.state.villageList.keys()[0]}
          inputProps={{
            name: 'registerDept',
            id: 'registerDept',
          }}
        >
          {Array.from(this.state.deptList.keys()).map(key => {
            return <option value={this.state.deptList[key]}>{key}</option>  
          })}

        </Select>
      </FormControl>
      </div>
  </CardBody>
</Card>

      
<Card>
  <CardBody>
  <div className={classes.searchOption}>
      <FormControl component="fieldset" >
      <FormLabel component="legend">세례 여부</FormLabel>
      <RadioGroup defaultValue="N" aria-label="gender" name="registerBaptism" id="registerBaptism" onChange={this.handleChange}>
        <FormControlLabel value="Y" control={<Radio />} label="Y"/>
        <FormControlLabel value="N" control={<Radio />} label="N"/>
      </RadioGroup>
    </FormControl>
      </div>

      <div className={classes.searchOption}>
      <FormControl component="fieldset" >
      <FormLabel component="legend">제자훈련 여부</FormLabel>
      <RadioGroup defaultValue="N" aria-label="gender" name="registerDiscipleTraining" id="registerDiscipleTraining" onChange={this.handleChange}>
        <FormControlLabel value="Y" control={<Radio />} label="Y"/>
        <FormControlLabel value="N" control={<Radio />} label="N"/>
      </RadioGroup>
    </FormControl>
      </div>
  </CardBody>
</Card>


      </CardBody>
      </Card>
      </GridItem>
      </GridContainer>

<div className={classes.searchButton}>

          <Button autoFocus onClick={() => this.handleClickAttDialogOpen()} color="secondary">
            취소
          </Button>

          <Button autoFocus onClick={() => this.pushSaintInfo()} color="primary">
            등록
          </Button>
</div>
        </DialogContent>
      </Dialog>


      </div>

      </GridItem>

          <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <ExpandTable rowData={this.makeTableData()} villageList={this.state.villageList} deptList={this.state.deptList}/>
          </CardBody>
        </Card>
      </GridItem>

        </GridContainer>

      </div>
    );
  }
}

export default withStyles(styles)(Saint);

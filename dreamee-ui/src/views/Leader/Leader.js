import React, {Component} from "react";
// react plugin for creating charts
// @material-ui/core
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTable from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import ScrollableTabs from "components/Tabs/ScrollableTabs"

import Chip from '@material-ui/core/Chip';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import MenuItem from '@material-ui/core/MenuItem';

import SearchForLeader from "../../components/Search/SearchForLeader";

import {
  getDept,
  getLeader, getSaint, getGbs, getGbsMemberList, postGbsAtt, getAttListByGbs, getVillageById
} from "../../api/Api";

import { getUser, getToken } from "../../api/Storage"

class Leader extends Component {

  state = {
    attDict: {},
    date: "",
    attDialogOpen: false,
    leaderInfo: {},
    saintInfo: {},
    deptInfo: {},
    gbsMemberList: [],
    attList: [],
    villageInfo: {}
  }

  getLeaderInfo() {
    getLeader(getUser())
    .then(res => {
      const result = res.status;

      if(result === 200) {
        console.log(res.data)
        this.setState({
          leaderInfo: res.data.data
        })
        this.getSaintInfo();
      }
    })
  }

  getSaintInfo() {
    getSaint(this.state.leaderInfo.saintId)
    .then(res => {
      const result = res.status;

      if(result === 200) {
        console.log(res.data)
        this.setState({
          saintInfo: res.data.data
        })
        this.getDeptInfo();
        this.getGbsInfo();
        this.getAttListByGbs();
        this.getVillageInfo();
      }
    })
  }

  getDeptInfo() {
    getDept(this.state.saintInfo.deptId)
    .then(res => {
      const result = res.status;

      if(result === 200) {
        console.log(res.data)
        this.setState({
          deptInfo: res.data.data
        })
      }
    })
  }

  getVillageInfo() {
    getVillageById(this.state.saintInfo.villageId)
    .then(res => {
      const result = res.status;

      if(result === 200) {
        console.log("village : {}", res.data)
        this.setState({
          villageInfo: res.data.data
        })
      }
    })
  }

  getGbsInfo() {
    getGbsMemberList(this.state.saintInfo.name)
    .then(res => {
      const result = res.status;

      if(result === 200) {
        console.log("hello : ",res.data)

        var dict = {};

        res.data.list.map( (member, index) => {
          dict[String(member.saint.saintId)] = {'worship': '', 'att': '', 'qt': 0};
        })
        this.setState({
          gbsMemberList: res.data.list,
          attDict: dict
        })
      }
      console.log(this.state.gbsMemberList)
    })
  }

  getAttListByGbs() {
    getAttListByGbs(this.state.leaderInfo.leaderId, "2021-1")
    .then(res => {
      const result = res.status;

      // console.log("result : {}", res)
      if(result === 200) {
        console.log(res.data)
        this.setState({
          attList: res.data.list
        })
      }
    })
  }

  getDate() {
    var today = new Date();
    this.setState({
      date: today.getFullYear() + "/" + today.getMonth() + 1 + "/" + today.getDate()
    })
  }

  isAttAbled() {
    var today = new Date();
    if(today.getDay() === 0 && today.getHours() >= 18 && today.getHours() <= 20) {
      return true;
    } 
    return false;
  }

  makeGbsTableBody() {
    var columns = [];

      this.state.gbsMemberList.map( (member, index) => {
        const gender = member.saint.gender === 'W' ? "여" : "남";
        columns.push([member.saint.name, gender, String(member.saint.age), member.saint.birthday])
      })

    return columns;
  }

  handleChange = (event, index) => {

    var temp = this.state.attDict;
    this.state.attDict[index]['qt'] = event.target.value; 
    this.setState({
      attDict: temp
    })
  }

  handleWorshipChange = (event, index) => {

    var temp = this.state.attDict;
    this.state.attDict[index]['worship'] = event.target.value; 
    this.setState({
      attDict: temp
    })
  }
  
  handleAttChange = (event, index) => {

    var temp = this.state.attDict;
    this.state.attDict[index]['att'] = event.target.value; 
    this.setState({
      attDict: temp
    })
  }

  handleClickAttDialogOpen() {
    this.setState({
      attDialogOpen: !this.state.attDialogOpen,
    })
  }

  getChipLabel() {
    return this.state.date + " GBS 출석체크";
  }

  getQtSelect(index){
    return(
      <FormControl>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={Object.values(this.state.attDict[String(index)])[2]}
          onChange={(event) => this.handleChange(event, index)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
    </FormControl>
    )
  }

  getWorshipStateRadio(label) {
    return (
      <FormControl component="fieldset">
      <RadioGroup aria-label="att" name={label} value={this.state.attDict[label]['worship']} onChange={(event) => this.handleWorshipChange(event, label)}>
        <FormControlLabel value="O" control={<Radio />} label="O" />
        <FormControlLabel value="X" control={<Radio />} label="X" />
      </RadioGroup>
    </FormControl>
    )
  }

  getAttStateRadio(label) {
    return (
      <FormControl component="fieldset">
      <RadioGroup aria-label="att" name={label} value={this.state.attDict[label]['att']} onChange={(event) => this.handleAttChange(event, label)}>
        <FormControlLabel value="A" control={<Radio />} label="A" />
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="C" control={<Radio />} label="C" />
      </RadioGroup>
    </FormControl>
    )
  }

  pushAttData() {
    this.setState({
      attDialogOpen: false
    })

    this.state.gbsMemberList.map( member => {
      var data = {};

      data['gbsId'] = member.gbs.gbsId;
      data['worshipState'] = this.state.attDict[String(member.saint.saintId)]['worship'];
      data['attState'] = this.state.attDict[String(member.saint.saintId)]['att'];
      data['qtNumber'] = this.state.attDict[String(member.saint.saintId)]['qt'];

      console.log("name :", member.saint.name);
      console.log("data : ", data);
      postGbsAtt(member.saint.name, data);
    })

    console.log("push att data : ", this.state.attDict)
  }

  componentDidMount() {
    var token = getToken();

    console.log("token : " + token)

    if( token != null) {
      this.getDate()
      this.getLeaderInfo()
    } else {
      this.props.history.push("/normal/auth/signin")
    }
  }

  render() {
    const {classes, fullScreen} = this.props;


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
                  <GridItem xs={12} sm={12} md={12}>

                    <div className={classes.search}>
                        <SearchForLeader/>

                    </div>
                  </GridItem>
                </Card>

              </CardBody>
            </Card>
          </GridItem>

        </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>대학부</p>
    <h4 className={classes.cardTitle}>{this.state.deptInfo.deptName}</h4>

              <p className={classes.cardCategory}>이름</p>
              <h3 className={classes.cardTitle}>{this.state.saintInfo.name}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Active</p>
              <h3 className={classes.cardTitle}>{this.state.leaderInfo.active ? "현 리더" : "쉬는 리더"}</h3>

              <p className={classes.cardCategory}>시작일 ~ 종료일</p>
    <h4 className={classes.cardTitle}>{this.state.leaderInfo.dateCreated} ~ {this.state.leaderInfo.endDate}</h4>
              {/* <h3 className={classes.cardTitle}>20.03.01 ~ 21.08.31</h3> */}
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>이번 텀 조원 리스트</h3>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
            <Button disabled={false} variant="contained" color="info" onClick={() => this.handleClickAttDialogOpen()}>출석체크</Button>
              <CustomTable
                tableHeaderColor="info"
                tableHead={["이름", "성별", "학년", "생년월일"]}
                tableData={this.makeGbsTableBody()}
              /> 
            </CardBody>
          </Card>
          <Dialog
        fullScreen
        open={this.state.attDialogOpen}
        onClose={() => this.handleClickAttDialogOpen()}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        <Chip label={this.getChipLabel()} variant="outlined" color="primary"/><br/><br/>
    {this.state.villageInfo.villageName} {this.state.saintInfo.name} 리더</DialogTitle>
        <DialogContent>
          <DialogContentText>
            오후 8시까지 출석체크를 완료해주세요.
            이후 시간에는 간사님께 문의주세요 ~^^
          </DialogContentText>
          <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center"></TableCell>
            <TableCell align="center">대예배</TableCell>
            <TableCell align="center">대학부 집회</TableCell>
            <TableCell align="center">QT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.gbsMemberList.map((member) => (
            <TableRow key={member.saint.saintId}>
              <TableCell align="center">{member.saint.name}</TableCell>
              <TableCell align="center" component="th" scope="row">
                {this.getWorshipStateRadio(member.saint.saintId)}
              </TableCell>
          <TableCell align="center">{this.getAttStateRadio(member.saint.saintId)}</TableCell>
              <TableCell align="center">{this.getQtSelect(member.saint.saintId)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => this.handleClickAttDialogOpen()} color="secondary">
            취소
          </Button>
          <Button onClick={() => this.pushAttData()} color="primary" autoFocus>
            저장
          </Button>
        </DialogActions>
      </Dialog>
        </GridItem>

{/* 조원별 출석 현황 */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h3 className={classes.cardTitleWhite}>조원별 출석 현황</h3>
            </CardHeader>
            <ScrollableTabs gbsMemberList={this.state.gbsMemberList} attList={this.state.attList}/>
          </Card>
        </GridItem>


      </GridContainer>
    </div>
    )
  }
}

export default withStyles(styles)(Leader);
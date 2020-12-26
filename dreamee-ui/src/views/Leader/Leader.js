import React, {Component} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTable from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Button from "components/CustomButtons/Button.js";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import ScrollableTabs from "components/Tabs/ScrollableTabs"

import Chip from '@material-ui/core/Chip';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
// import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import MenuItem from '@material-ui/core/MenuItem';

import {
  getDept,
  getLeader, getSaint, getGbs, getGbsMemberList, postGbsAtt
} from "../../api/Api";

const useStyles = makeStyles(styles);

class Leader extends Component {

  state = {
    attDict: {},
    date: "",
    attDialogOpen: false,
    leaderInfo: {},
    saintInfo: {},
    deptInfo: {},
    gbsMemberList: []
  }

  getLeaderInfo() {
    getLeader(17)
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

  getDate() {
    var today = new Date();
    this.setState({
      date: today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()
    })
    console.log(today.getFullYear() + "/" + today.getMonth())
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

    // var dict = {};
    // this.state.gbsMemberList.map( (member, index) => {
    //   dict[String(member.saint.saintId)] = {'worship': '', 'att': '', 'qt': 0};
    // })
    this.setState({
      attDialogOpen: !this.state.attDialogOpen,
      // attDict: dict
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

  // getAttendanceColumns() {
  //   var columns = [];
  //   columns.push([this.getQtSelect(), this.getQtSelect(), this.getQtSelect()])

  //   return columns;
  // }

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

  // getSaintInfoInGbs(saintId) {
  //   getSaint(saintId)
  //   .then(res => {
  //     const result = res.status;

  //     if(result === 200) {
  //       return res.data.data;
  //     }
  //   })
  // }

  componentDidMount() {
    this.getDate()
    this.getLeaderInfo()
  }

  render() {
    const {classes, fullScreen} = this.props;


    return (
      <div>
      <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
    <h6 className={classes.cardCategory}>{this.state.deptInfo.deptName}</h6>
    <h4 className={classes.cardTitle}>{this.state.saintInfo.name}</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
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
            <Button variant="contained" color="primary" onClick={() => this.handleClickAttDialogOpen()}>출석체크</Button>
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
    {this.state.deptInfo.deptName}마을 {this.state.saintInfo.name} 리더</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
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
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>분기별 조원 리스트</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <ScrollableTabs/>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    )
  }
}

// const withMediaQuery = () => Component => props => {
//   const theme = useTheme();
//   console.log(theme.breakpoints.down('sm'))
//   const mediaQuery = useMediaQuery('fullScren', theme.breakpoints.down('sm'));
//   return <Component mediaQuery={mediaQuery} {...props} />;
// }
// export default withStyles(styles,{withTheme: true})(Leader);
// export default withStyles(styles)(withMediaQuery()(Leader));
export default withStyles(styles)(Leader);
import React, { Component } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import Table from "components/Table/Table.js";
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

import { bugs, website, server } from "variables/general.js";

import Asynchronous from "../../components/Search/Asynchronous";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import Calendar from "components/Calendar/CalendarChart"
import CalendarHeatmap from "components/Calendar/CalendarHeatmap"
import { DataGrid } from '@material-ui/data-grid';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import jwt_decode from "jwt-decode";

import {
  getDept,
  getLeader, getSaint, getGbs, getGbsMemberList, postGbsAtt, getAttListByGbs, getVillageById, getGbsLeaderList,
  getSaintAttList
} from "../../api/Api";

import { getToken, getUser, getSaintNameInStorage, logout } from "../../api/Storage"

class Saint extends Component {

  state = {
    attDict: {},
    date: "",
    attDialogOpen: false,
    leaderInfo: {},
    saintInfo: {},
    deptInfo: {},
    gbsMemberList: [],
    attList: [],
    villageInfo: {},
    gbsLeaderList: [],
    saintAttList: [],
    saintCurrentYearAttList: []
  }

  componentDidMount() {
    var token = getToken();

    console.log("token : " + token)
    console.log("mount >> saintId : " + getSaintNameInStorage())
    
    if( token !== null) {
      this.autoLogout()
      this.getSaintInfo();
    } else {
      this.props.history.push("/normal/auth/signin")
    }
  }

  autoLogout() {
    var token = getToken();

    var expTokenTime = jwt_decode(token)
    var nowTime = Math.floor(+ new Date() / 1000)

    if ( Number(nowTime) > Number(expTokenTime) ) {
      logout()
    }
  }

  getSaintInfo() {
    getSaint(null, getSaintNameInStorage())
    .then(res => {
      const result = res.status;

        if (result === 200) {
          console.log(res.data)
          this.setState({
            saintInfo: res.data.data
          })
          this.getDeptInfo();
          // this.getGbsInfo();
          // this.getAttListByGbs();
          this.getVillageInfo();
          this.getGbsLeaderList(res.data.data.saintId);
          this.getSaintAttList(res.data.data.saintId);
          this.getSaintCurrentYearAttList(res.data.data.saintId);
        }
      })
  }

  getGbsLeaderList(saintId) {
    var gbsMember = {}
    gbsMember['saintId'] = saintId;

    getGbsLeaderList(gbsMember)
      .then(res => {
        const result = res.status;

        if (result === 200) {
          console.log("getGbsLeaderList : ", res.data)
          this.setState({
            gbsLeaderList: res.data.list
          })
        }
      })
  }


  getSaintAttList(saintId) {
    var RetrieveAttendanceRequest = {}
    RetrieveAttendanceRequest['saintId'] = saintId;

    getSaintAttList(RetrieveAttendanceRequest)
      .then(res => {
        const result = res.status;

        if (result === 200) {
          console.log("saintAttList : ", res.data)
          this.setState({
            saintAttList: res.data.list
          })
        }
      })
  }

  getSaintCurrentYearAttList(saintId) {
    var RetrieveAttendanceRequest = {}
    RetrieveAttendanceRequest['saintId'] = saintId;
    RetrieveAttendanceRequest['thisYear'] = "true";

    getSaintAttList(RetrieveAttendanceRequest)
      .then(res => {
        const result = res.status;

        if (result === 200) {
          console.log("saintCurrentYearAttList : ", res.data)
          this.setState({
            saintCurrentYearAttList: res.data.list
          })
        }
      })
  }

  getDeptInfo() {
    getDept(this.state.saintInfo.deptId)
      .then(res => {
        const result = res.status;

        if (result === 200) {
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

        if (result === 200) {
          console.log("village : {}", res.data)
          this.setState({
            villageInfo: res.data.data
          })
        }
      })
  }

  tableData = () => {

    var data = [];
    this.state.gbsLeaderList.map((row, index) => {
      console.log(index + " : " + JSON.stringify(row['gbs']))
      data.push({ id: index, '마을': row.gbs.villageId, '이름': row.saint.name, '분기': row.gbs.activeTerm })
    })

    return data;
  }

  attTableData = () => {

    var data = [];
    this.state.saintAttList.map((att, index) => {
      console.log(index + " : " + att)
      data.push({ id: index, '시간': att.dateCreated, '대예배': att.worshipState, '대학부': att.attState, '큐티': att.qtNumber, '리더': att.leaderName, '마을': att.villageName })
    })

    return data;
  }

  render() {
    const { classes } = this.props;

    const columns = [
      { field: '마을' },
      { field: '이름' },
      { field: '분기' }
    ]

    const attColumns = [
      { field: '시간', width: 200 },
      { field: '대예배' },
      { field: '대학부' },
      { field: '큐티' },
      { field: '리더' },
      { field: '마을' }
    ]

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
                        <Asynchronous/>

                    </div>
                  </GridItem>
                </Card>

              </CardBody>
            </Card>
          </GridItem>

        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>대학부</p>
                <h3 className={classes.cardTitle}>{this.state.deptInfo.deptName}</h3>

                <p className={classes.cardCategory}>마을</p>
                <h3 className={classes.cardTitle}>{this.state.villageInfo.villageName}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                Just Updated
              </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>이름</p>
                <h3 className={classes.cardTitle}>{this.state.saintInfo.name}</h3>

                <p className={classes.cardCategory}>학년</p>
                <h3 className={classes.cardTitle}>{this.state.saintInfo.age}</h3>
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
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>출석률 Graph</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
              </div>
              </CardFooter>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="warning">
                <h4 className={classes.cardTitle}>출석률 Graph</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>

              </CardHeader>
              <CardBody>
                <div style={{ height: '100%', width: '80%' }}>
                  {/* <Calendar/> */}
                  <CalendarHeatmap attList={this.state.saintCurrentYearAttList}/>
                </div>

              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
              </div>
              </CardFooter>
            </Card>
          </GridItem>


        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>리더 리스트</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
              </p>
              </CardHeader>
              <CardBody>
                <div style={{ height: 300, width: '100%' }}>
                  <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} columns={columns} rows={this.tableData()} />
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>출석부</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
              </p>
              </CardHeader>
              <CardBody>
                <div style={{ height: 300, width: '100%' }}>
                  <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} columns={attColumns} rows={this.attTableData()} />
                </div>
                {/* <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              /> */}
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>리더가 리더에게</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
              </p>
              </CardHeader>
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
    );
  }
}

export default withStyles(styles)(Saint);

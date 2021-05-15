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

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import BasicTree from "components/Tree/BasicTree"
import ScrollableTabs from "components/Tabs/ScrollableTabs"
import WordTree from "components/Graph/EplicitWordTree"
import Collapsibletable from "components/Table/Collapsibletable"

import jwt_decode from "jwt-decode";

import {
  getLeaderGroupOnVillageList,
  getLeader
} from "../../api/Api";


import { getToken, getUser, getVillagerNameInStorage, logout } from "../../api/Storage"


class Village extends Component {

  state = {
    leaderInfo: {},
    gbsGroupAtt: [],
    activeTerm: ""
  }

  getActiveTerm() {
    var today = new Date();
    var term = ""

    term  = parseInt( Number(today.getMonth() + 1) / 6 ) + 1

    this.setState({
      activeTerm: today.getFullYear() + "-" + term
    })
  }

  getLeaderGbsAttList(leaderId) {
    getLeaderGroupOnVillageList(leaderId, this.state.activeTerm)
      .then(res => {
        const result = res.status;

        if (result === 200) {
          console.log("getLeaderGbsAttList : ", res.data.list)
          this.setState({
            gbsGroupAtt: res.data.list
          })
        }
      })
  }

  getLeaderInfo() {
    getLeader(getVillagerNameInStorage())
    .then(res => {
      const result = res.status;

      if(result === 200) {
        console.log(res.data)
        this.setState({
          leaderInfo: res.data.data
        })

        const leaderId = res.data.data.leaderId;
        this.getLeaderGbsAttList(leaderId);
      }
    })
  }

  makeTableData() {
    var data = [];

    this.state.gbsGroupAtt.map(rowData => {
      const leader = rowData.leaderDetail;
      const leaderName = leader.name;
      const active = leader.active;
      const gender = leader.gender;
      const age = leader.age;
      const birthday = leader.birthday

      var attendance = []

      const attList = rowData.saintAttList;
  
      if (attList != null) {
        attList.map(att => {
          const saintName = att.saintName;
          const univAtt = att.attState;
          const worshipState = att.worshipState;
          const qtNumber = att.qtNumber;
          const dateUpdated = att.dateUpdated;
          attendance.push({saintName:saintName, univAtt:univAtt, worshipState:worshipState, qtNumber:qtNumber, dateUpdated:dateUpdated})
        })
  
      }

      var att = {leaderName, active, gender, age, birthday, attendance}
      data.push(att) 
    })

    console.log(data)
    return data;
  }

  autoLogout() {
    var token = getToken();

    var expTokenTime = jwt_decode(token).exp
    var nowTime = Math.floor(+ new Date() / 1000)

    if ( Number(nowTime) > Number(expTokenTime) ) {
      logout()
    }
  }

  componentDidMount() {
    this.getActiveTerm();

    var token = getToken();

    console.log("token : " + token)

    if (token !== null) {
      this.autoLogout()
      this.getLeaderInfo();
    } else {
      this.props.history.push("/dreamee/auth/signin")
    }
    
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>리더 찾기</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
          <WordTree/>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>이번주 목장 출석부</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Collapsibletable rowData={this.makeTableData()}/>
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
      {/* <GridContainer>
      <GridItem xs={12} sm={12} md={1}>
      <BasicTree/>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={5}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer> */}
    </div>
    );
  }
}

export default withStyles(styles)(Village);

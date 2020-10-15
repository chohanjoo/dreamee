import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
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

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import Calendar from "components/Calendar/CalendarChart"

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
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
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
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
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>마을</p>
              <h3 className={classes.cardTitle}>!마을</h3>

              <p className={classes.cardCategory}>리더</p>
              <h3 className={classes.cardTitle}>만주</h3>
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
              <p className={classes.cardCategory}>제자반</p>
              <h3 className={classes.cardTitle}>Lily</h3>

              <p className={classes.cardCategory}>사역팀</p>
              <h3 className={classes.cardTitle}>LETS</h3>
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
            <Calendar/>
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
              <h4 className={classes.cardTitleWhite}>역대 리더 리스트</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country","ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger","1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao","1", "Dakota Rice", "$36,738", "Niger"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands","1", "Dakota Rice", "$36,738", "Niger"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South","1", "Dakota Rice", "$36,738", "Niger"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>분기별 조원 리스트</h4>
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

const data= [
  {
    "day": "2015-05-30",
    "value": 296
  },
  {
    "day": "2015-05-08",
    "value": 113
  },
  {
    "day": "2017-05-11",
    "value": 248
  },
  {
    "day": "2016-12-12",
    "value": 359
  },
  {
    "day": "2016-06-11",
    "value": 211
  },
  {
    "day": "2016-02-03",
    "value": 196
  },
  {
    "day": "2015-08-26",
    "value": 250
  },
  {
    "day": "2018-06-05",
    "value": 172
  },
  {
    "day": "2016-08-29",
    "value": 352
  },
  {
    "day": "2016-12-03",
    "value": 329
  },
  {
    "day": "2016-03-25",
    "value": 151
  },
  {
    "day": "2016-01-29",
    "value": 37
  },
  {
    "day": "2016-01-01",
    "value": 161
  },
  {
    "day": "2018-05-08",
    "value": 258
  },
  {
    "day": "2017-08-01",
    "value": 349
  },
  {
    "day": "2017-09-04",
    "value": 381
  },
  {
    "day": "2018-02-22",
    "value": 345
  },
  {
    "day": "2018-03-10",
    "value": 302
  },
  {
    "day": "2016-01-28",
    "value": 71
  },
  {
    "day": "2017-04-01",
    "value": 257
  },
  {
    "day": "2016-05-14",
    "value": 12
  },
  {
    "day": "2018-05-26",
    "value": 253
  },
  {
    "day": "2016-05-12",
    "value": 221
  },
  {
    "day": "2015-08-21",
    "value": 387
  },
  {
    "day": "2018-05-18",
    "value": 311
  },
  {
    "day": "2016-01-22",
    "value": 195
  },
  {
    "day": "2015-10-24",
    "value": 108
  },
  {
    "day": "2015-10-01",
    "value": 18
  },
  {
    "day": "2015-08-08",
    "value": 135
  },
  {
    "day": "2017-12-17",
    "value": 108
  },
  {
    "day": "2016-05-13",
    "value": 161
  },
  {
    "day": "2016-09-07",
    "value": 154
  },
  {
    "day": "2018-04-07",
    "value": 146
  },
  {
    "day": "2017-05-31",
    "value": 283
  },
  {
    "day": "2015-11-21",
    "value": 242
  },
  {
    "day": "2018-07-30",
    "value": 397
  },
  {
    "day": "2015-10-22",
    "value": 156
  },
  {
    "day": "2016-06-05",
    "value": 135
  },
  {
    "day": "2016-09-03",
    "value": 333
  },
  {
    "day": "2016-09-22",
    "value": 241
  },
  {
    "day": "2017-01-14",
    "value": 8
  },
  {
    "day": "2018-06-29",
    "value": 377
  },
  {
    "day": "2015-05-25",
    "value": 166
  },
  {
    "day": "2016-05-29",
    "value": 295
  },
  {
    "day": "2017-09-18",
    "value": 72
  },
  {
    "day": "2017-12-15",
    "value": 73
  },
  {
    "day": "2016-02-11",
    "value": 30
  },
  {
    "day": "2017-04-10",
    "value": 396
  },
  {
    "day": "2018-01-01",
    "value": 108
  },
  {
    "day": "2017-11-07",
    "value": 226
  },
  {
    "day": "2017-10-25",
    "value": 340
  },
  {
    "day": "2017-02-22",
    "value": 135
  },
  {
    "day": "2016-09-21",
    "value": 205
  },
  {
    "day": "2018-06-20",
    "value": 128
  },
  {
    "day": "2017-08-27",
    "value": 8
  },
  {
    "day": "2017-01-16",
    "value": 131
  },
  {
    "day": "2016-06-06",
    "value": 200
  },
  {
    "day": "2017-03-27",
    "value": 120
  },
  {
    "day": "2018-05-10",
    "value": 299
  },
  {
    "day": "2015-08-14",
    "value": 238
  },
  {
    "day": "2015-04-09",
    "value": 139
  },
  {
    "day": "2015-11-02",
    "value": 328
  },
  {
    "day": "2015-04-04",
    "value": 282
  },
  {
    "day": "2016-02-18",
    "value": 36
  },
  {
    "day": "2017-04-27",
    "value": 47
  },
  {
    "day": "2016-11-25",
    "value": 277
  },
  {
    "day": "2017-06-03",
    "value": 285
  },
  {
    "day": "2017-12-19",
    "value": 399
  },
  {
    "day": "2017-05-17",
    "value": 36
  },
  {
    "day": "2016-01-11",
    "value": 307
  },
  {
    "day": "2015-12-15",
    "value": 43
  },
  {
    "day": "2018-03-30",
    "value": 314
  },
  {
    "day": "2015-06-07",
    "value": 146
  },
  {
    "day": "2015-08-20",
    "value": 147
  },
  {
    "day": "2017-10-12",
    "value": 206
  },
  {
    "day": "2015-12-09",
    "value": 77
  },
  {
    "day": "2018-01-17",
    "value": 97
  },
  {
    "day": "2017-02-05",
    "value": 260
  },
  {
    "day": "2016-07-15",
    "value": 138
  },
  {
    "day": "2015-10-17",
    "value": 268
  },
  {
    "day": "2016-11-09",
    "value": 374
  },
  {
    "day": "2018-04-12",
    "value": 235
  },
  {
    "day": "2016-07-12",
    "value": 61
  },
  {
    "day": "2015-08-03",
    "value": 138
  },
  {
    "day": "2015-09-15",
    "value": 373
  },
  {
    "day": "2017-11-04",
    "value": 70
  },
  {
    "day": "2015-07-07",
    "value": 206
  },
  {
    "day": "2016-08-24",
    "value": 3
  },
  {
    "day": "2017-06-18",
    "value": 271
  },
  {
    "day": "2018-02-16",
    "value": 396
  },
  {
    "day": "2016-11-07",
    "value": 211
  },
  {
    "day": "2017-05-13",
    "value": 95
  },
  {
    "day": "2018-02-13",
    "value": 40
  },
  {
    "day": "2016-01-13",
    "value": 260
  },
  {
    "day": "2015-12-07",
    "value": 38
  },
  {
    "day": "2017-06-06",
    "value": 299
  },
  {
    "day": "2017-07-29",
    "value": 86
  },
  {
    "day": "2017-08-29",
    "value": 335
  },
  {
    "day": "2015-12-23",
    "value": 26
  },
  {
    "day": "2015-06-12",
    "value": 168
  },
  {
    "day": "2015-04-18",
    "value": 161
  },
  {
    "day": "2015-04-19",
    "value": 237
  },
  {
    "day": "2016-12-02",
    "value": 375
  },
  {
    "day": "2016-12-30",
    "value": 301
  },
  {
    "day": "2015-06-30",
    "value": 275
  },
  {
    "day": "2018-07-15",
    "value": 181
  },
  {
    "day": "2017-11-23",
    "value": 379
  },
  {
    "day": "2015-11-11",
    "value": 394
  },
  {
    "day": "2015-07-10",
    "value": 62
  },
  {
    "day": "2017-05-01",
    "value": 352
  },
  {
    "day": "2015-08-22",
    "value": 82
  },
  {
    "day": "2018-06-16",
    "value": 2
  },
  {
    "day": "2016-04-22",
    "value": 173
  },
  {
    "day": "2015-08-01",
    "value": 84
  },
  {
    "day": "2016-08-04",
    "value": 49
  },
  {
    "day": "2017-10-07",
    "value": 304
  },
  {
    "day": "2017-03-04",
    "value": 369
  },
  {
    "day": "2016-09-16",
    "value": 164
  },
  {
    "day": "2016-07-08",
    "value": 134
  },
  {
    "day": "2015-05-26",
    "value": 272
  },
  {
    "day": "2015-08-30",
    "value": 115
  },
  {
    "day": "2017-08-14",
    "value": 45
  },
  {
    "day": "2015-10-23",
    "value": 157
  },
  {
    "day": "2015-06-11",
    "value": 113
  },
  {
    "day": "2016-04-01",
    "value": 94
  },
  {
    "day": "2018-04-03",
    "value": 272
  },
  {
    "day": "2015-07-13",
    "value": 376
  },
  {
    "day": "2016-07-09",
    "value": 276
  },
  {
    "day": "2016-01-19",
    "value": 365
  },
  {
    "day": "2017-03-09",
    "value": 67
  },
  {
    "day": "2015-11-18",
    "value": 352
  },
  {
    "day": "2015-04-24",
    "value": 251
  },
  {
    "day": "2015-08-27",
    "value": 140
  },
  {
    "day": "2016-06-12",
    "value": 188
  },
  {
    "day": "2017-09-16",
    "value": 336
  },
  {
    "day": "2018-03-19",
    "value": 121
  },
  {
    "day": "2017-04-26",
    "value": 174
  },
  {
    "day": "2015-10-07",
    "value": 64
  },
  {
    "day": "2016-10-16",
    "value": 87
  },
  {
    "day": "2018-06-11",
    "value": 111
  },
  {
    "day": "2015-06-10",
    "value": 186
  },
  {
    "day": "2016-02-23",
    "value": 352
  },
  {
    "day": "2018-05-05",
    "value": 17
  },
  {
    "day": "2015-10-13",
    "value": 365
  },
  {
    "day": "2017-07-09",
    "value": 170
  },
  {
    "day": "2016-12-21",
    "value": 134
  },
  {
    "day": "2015-11-26",
    "value": 337
  },
  {
    "day": "2016-03-19",
    "value": 19
  },
  {
    "day": "2015-07-29",
    "value": 136
  },
  {
    "day": "2017-10-10",
    "value": 386
  },
  {
    "day": "2017-06-26",
    "value": 59
  },
  {
    "day": "2016-06-28",
    "value": 75
  },
  {
    "day": "2016-01-05",
    "value": 140
  },
  {
    "day": "2016-10-28",
    "value": 39
  },
  {
    "day": "2017-03-23",
    "value": 351
  },
  {
    "day": "2017-03-25",
    "value": 100
  },
  {
    "day": "2017-03-11",
    "value": 154
  },
  {
    "day": "2017-05-20",
    "value": 286
  },
  {
    "day": "2016-08-03",
    "value": 15
  },
  {
    "day": "2015-10-12",
    "value": 197
  },
  {
    "day": "2016-02-26",
    "value": 74
  },
  {
    "day": "2016-11-08",
    "value": 1
  },
  {
    "day": "2017-10-04",
    "value": 242
  },
  {
    "day": "2018-07-06",
    "value": 308
  },
  {
    "day": "2017-09-24",
    "value": 152
  },
  {
    "day": "2018-01-21",
    "value": 232
  },
  {
    "day": "2018-01-20",
    "value": 119
  },
  {
    "day": "2017-11-12",
    "value": 320
  },
  {
    "day": "2017-04-06",
    "value": 91
  },
  {
    "day": "2017-04-07",
    "value": 2
  },
  {
    "day": "2018-05-21",
    "value": 217
  },
  {
    "day": "2017-01-07",
    "value": 141
  },
  {
    "day": "2017-12-06",
    "value": 206
  },
  {
    "day": "2017-12-07",
    "value": 367
  },
  {
    "day": "2016-09-17",
    "value": 265
  },
  {
    "day": "2015-12-31",
    "value": 346
  },
  {
    "day": "2016-02-08",
    "value": 394
  },
  {
    "day": "2015-05-13",
    "value": 81
  },
  {
    "day": "2017-12-28",
    "value": 66
  },
  {
    "day": "2015-08-07",
    "value": 135
  },
  {
    "day": "2017-08-07",
    "value": 378
  },
  {
    "day": "2018-05-06",
    "value": 1
  },
  {
    "day": "2015-10-14",
    "value": 73
  },
  {
    "day": "2018-02-25",
    "value": 57
  },
  {
    "day": "2016-07-02",
    "value": 178
  },
  {
    "day": "2017-08-20",
    "value": 124
  },
  {
    "day": "2015-12-02",
    "value": 177
  },
  {
    "day": "2017-03-20",
    "value": 89
  },
  {
    "day": "2015-12-16",
    "value": 50
  },
  {
    "day": "2016-10-12",
    "value": 142
  },
  {
    "day": "2018-08-01",
    "value": 215
  },
  {
    "day": "2017-05-24",
    "value": 66
  },
  {
    "day": "2016-09-19",
    "value": 35
  },
  {
    "day": "2016-10-31",
    "value": 320
  },
  {
    "day": "2016-05-05",
    "value": 77
  },
  {
    "day": "2016-04-09",
    "value": 29
  },
  {
    "day": "2016-01-08",
    "value": 74
  },
  {
    "day": "2018-07-29",
    "value": 110
  },
  {
    "day": "2015-12-08",
    "value": 65
  },
  {
    "day": "2017-11-01",
    "value": 138
  },
  {
    "day": "2016-12-17",
    "value": 357
  },
  {
    "day": "2017-09-10",
    "value": 332
  },
  {
    "day": "2016-05-22",
    "value": 185
  },
  {
    "day": "2016-01-25",
    "value": 72
  },
  {
    "day": "2015-11-15",
    "value": 188
  },
  {
    "day": "2016-12-15",
    "value": 54
  },
  {
    "day": "2016-01-16",
    "value": 320
  },
  {
    "day": "2017-03-14",
    "value": 15
  },
  {
    "day": "2016-05-03",
    "value": 228
  },
  {
    "day": "2016-02-19",
    "value": 230
  },
  {
    "day": "2016-04-04",
    "value": 219
  },
  {
    "day": "2018-03-04",
    "value": 228
  },
  {
    "day": "2015-06-03",
    "value": 121
  },
  {
    "day": "2016-02-17",
    "value": 123
  },
  {
    "day": "2017-02-03",
    "value": 283
  },
  {
    "day": "2017-03-13",
    "value": 362
  },
  {
    "day": "2015-08-13",
    "value": 370
  },
  {
    "day": "2015-09-04",
    "value": 281
  },
  {
    "day": "2015-09-06",
    "value": 106
  },
  {
    "day": "2016-08-07",
    "value": 258
  },
  {
    "day": "2016-06-01",
    "value": 238
  },
  {
    "day": "2016-12-26",
    "value": 382
  },
  {
    "day": "2018-07-08",
    "value": 285
  },
  {
    "day": "2015-05-01",
    "value": 197
  },
  {
    "day": "2018-08-04",
    "value": 26
  },
  {
    "day": "2017-07-10",
    "value": 48
  },
  {
    "day": "2015-09-18",
    "value": 395
  },
  {
    "day": "2017-09-17",
    "value": 384
  },
  {
    "day": "2017-10-31",
    "value": 124
  },
  {
    "day": "2017-07-16",
    "value": 192
  },
  {
    "day": "2015-06-22",
    "value": 95
  },
  {
    "day": "2015-06-16",
    "value": 281
  },
  {
    "day": "2018-05-25",
    "value": 383
  },
  {
    "day": "2016-06-20",
    "value": 98
  },
  {
    "day": "2017-09-21",
    "value": 45
  },
  {
    "day": "2017-06-27",
    "value": 113
  },
  {
    "day": "2016-09-01",
    "value": 330
  },
  {
    "day": "2016-06-26",
    "value": 274
  },
  {
    "day": "2016-11-15",
    "value": 385
  },
  {
    "day": "2015-07-17",
    "value": 127
  },
  {
    "day": "2018-03-05",
    "value": 192
  },
  {
    "day": "2018-04-21",
    "value": 201
  },
  {
    "day": "2016-05-11",
    "value": 151
  },
  {
    "day": "2018-07-23",
    "value": 238
  },
  {
    "day": "2016-04-30",
    "value": 136
  },
  {
    "day": "2016-10-01",
    "value": 234
  },
  {
    "day": "2018-05-15",
    "value": 35
  },
  {
    "day": "2018-04-30",
    "value": 387
  },
  {
    "day": "2016-03-13",
    "value": 63
  },
  {
    "day": "2017-02-15",
    "value": 106
  },
  {
    "day": "2016-07-31",
    "value": 378
  },
  {
    "day": "2016-04-21",
    "value": 222
  },
  {
    "day": "2018-03-12",
    "value": 327
  },
  {
    "day": "2017-06-22",
    "value": 171
  },
  {
    "day": "2016-09-11",
    "value": 384
  },
  {
    "day": "2017-03-29",
    "value": 231
  },
  {
    "day": "2016-03-04",
    "value": 134
  },
  {
    "day": "2016-05-30",
    "value": 356
  },
  {
    "day": "2017-08-22",
    "value": 295
  },
  {
    "day": "2017-01-04",
    "value": 353
  },
  {
    "day": "2016-10-15",
    "value": 263
  },
  {
    "day": "2015-11-05",
    "value": 325
  },
  {
    "day": "2017-12-09",
    "value": 225
  },
  {
    "day": "2018-05-27",
    "value": 110
  },
  {
    "day": "2015-07-30",
    "value": 46
  },
  {
    "day": "2017-07-17",
    "value": 245
  },
  {
    "day": "2015-08-10",
    "value": 261
  },
  {
    "day": "2017-11-24",
    "value": 186
  },
  {
    "day": "2018-06-24",
    "value": 322
  },
  {
    "day": "2017-07-28",
    "value": 50
  },
  {
    "day": "2015-10-02",
    "value": 356
  },
  {
    "day": "2017-05-29",
    "value": 30
  },
  {
    "day": "2017-07-20",
    "value": 303
  },
  {
    "day": "2015-05-23",
    "value": 127
  },
  {
    "day": "2017-04-20",
    "value": 267
  },
  {
    "day": "2015-06-24",
    "value": 327
  },
  {
    "day": "2016-07-25",
    "value": 230
  },
  {
    "day": "2015-05-02",
    "value": 48
  },
  {
    "day": "2018-01-30",
    "value": 236
  },
  {
    "day": "2017-11-03",
    "value": 295
  },
  {
    "day": "2018-07-11",
    "value": 133
  },
  {
    "day": "2018-05-19",
    "value": 178
  },
  {
    "day": "2018-05-29",
    "value": 60
  },
  {
    "day": "2016-04-10",
    "value": 260
  },
  {
    "day": "2018-04-15",
    "value": 204
  },
  {
    "day": "2015-07-11",
    "value": 247
  },
  {
    "day": "2016-10-21",
    "value": 117
  },
  {
    "day": "2016-05-27",
    "value": 308
  },
  {
    "day": "2018-05-07",
    "value": 365
  },
  {
    "day": "2016-01-24",
    "value": 94
  },
  {
    "day": "2015-08-23",
    "value": 126
  },
  {
    "day": "2015-05-07",
    "value": 371
  },
  {
    "day": "2016-11-20",
    "value": 4
  },
  {
    "day": "2018-05-20",
    "value": 395
  },
  {
    "day": "2018-03-28",
    "value": 374
  },
  {
    "day": "2017-10-09",
    "value": 369
  },
  {
    "day": "2015-12-04",
    "value": 324
  },
  {
    "day": "2016-11-10",
    "value": 373
  },
  {
    "day": "2016-09-09",
    "value": 160
  },
  {
    "day": "2016-12-22",
    "value": 208
  },
  {
    "day": "2017-07-14",
    "value": 374
  },
  {
    "day": "2016-05-28",
    "value": 127
  },
  {
    "day": "2015-08-11",
    "value": 66
  },
  {
    "day": "2017-05-14",
    "value": 106
  },
  {
    "day": "2015-09-13",
    "value": 396
  },
  {
    "day": "2016-10-30",
    "value": 73
  },
  {
    "day": "2015-05-12",
    "value": 302
  },
  {
    "day": "2015-12-30",
    "value": 220
  },
  {
    "day": "2015-11-19",
    "value": 17
  },
  {
    "day": "2017-03-22",
    "value": 359
  },
  {
    "day": "2017-11-18",
    "value": 78
  },
  {
    "day": "2015-08-18",
    "value": 67
  },
  {
    "day": "2016-01-17",
    "value": 279
  },
  {
    "day": "2015-11-22",
    "value": 380
  },
  {
    "day": "2015-09-27",
    "value": 114
  },
  {
    "day": "2016-06-30",
    "value": 5
  },
  {
    "day": "2016-08-23",
    "value": 122
  },
  {
    "day": "2015-06-21",
    "value": 266
  },
  {
    "day": "2018-05-24",
    "value": 163
  },
  {
    "day": "2015-12-17",
    "value": 112
  },
  {
    "day": "2017-02-17",
    "value": 243
  },
  {
    "day": "2015-09-29",
    "value": 338
  },
  {
    "day": "2017-10-22",
    "value": 371
  },
  {
    "day": "2018-03-06",
    "value": 263
  },
  {
    "day": "2017-01-10",
    "value": 332
  },
  {
    "day": "2017-10-20",
    "value": 128
  },
  {
    "day": "2017-10-15",
    "value": 159
  },
  {
    "day": "2016-09-24",
    "value": 157
  },
  {
    "day": "2015-06-28",
    "value": 345
  },
  {
    "day": "2017-02-10",
    "value": 140
  },
  {
    "day": "2016-07-10",
    "value": 302
  },
  {
    "day": "2017-03-12",
    "value": 226
  },
  {
    "day": "2018-03-25",
    "value": 205
  },
  {
    "day": "2018-07-04",
    "value": 297
  },
  {
    "day": "2015-05-20",
    "value": 207
  },
  {
    "day": "2017-09-11",
    "value": 268
  },
  {
    "day": "2016-10-20",
    "value": 144
  },
  {
    "day": "2018-06-27",
    "value": 367
  },
  {
    "day": "2017-08-05",
    "value": 298
  },
  {
    "day": "2018-07-03",
    "value": 9
  },
  {
    "day": "2016-12-25",
    "value": 332
  },
  {
    "day": "2016-02-21",
    "value": 300
  },
  {
    "day": "2018-07-18",
    "value": 115
  },
  {
    "day": "2015-04-29",
    "value": 139
  },
  {
    "day": "2018-01-10",
    "value": 294
  },
  {
    "day": "2016-02-13",
    "value": 364
  },
  {
    "day": "2016-08-18",
    "value": 271
  },
  {
    "day": "2016-01-02",
    "value": 283
  },
  {
    "day": "2016-05-15",
    "value": 128
  },
  {
    "day": "2016-02-07",
    "value": 340
  },
  {
    "day": "2017-12-26",
    "value": 91
  },
  {
    "day": "2016-06-27",
    "value": 242
  },
  {
    "day": "2015-12-28",
    "value": 390
  },
  {
    "day": "2017-04-14",
    "value": 268
  },
  {
    "day": "2017-01-20",
    "value": 69
  },
  {
    "day": "2017-07-18",
    "value": 151
  },
  {
    "day": "2015-11-06",
    "value": 327
  },
  {
    "day": "2016-07-27",
    "value": 124
  },
  {
    "day": "2015-07-09",
    "value": 29
  },
  {
    "day": "2016-07-14",
    "value": 219
  },
  {
    "day": "2018-04-09",
    "value": 340
  },
  {
    "day": "2018-06-07",
    "value": 212
  },
  {
    "day": "2018-01-26",
    "value": 48
  },
  {
    "day": "2018-03-11",
    "value": 160
  },
  {
    "day": "2018-02-06",
    "value": 182
  },
  {
    "day": "2015-11-20",
    "value": 287
  },
  {
    "day": "2017-08-15",
    "value": 41
  },
  {
    "day": "2015-09-21",
    "value": 114
  },
  {
    "day": "2016-02-05",
    "value": 82
  },
  {
    "day": "2016-02-09",
    "value": 227
  },
  {
    "day": "2016-09-29",
    "value": 3
  },
  {
    "day": "2017-11-17",
    "value": 312
  },
  {
    "day": "2017-09-12",
    "value": 164
  },
  {
    "day": "2016-02-02",
    "value": 230
  },
  {
    "day": "2017-04-03",
    "value": 314
  },
  {
    "day": "2017-10-06",
    "value": 142
  },
  {
    "day": "2017-04-11",
    "value": 327
  },
  {
    "day": "2018-01-25",
    "value": 291
  },
  {
    "day": "2017-09-13",
    "value": 200
  },
  {
    "day": "2017-02-24",
    "value": 116
  },
  {
    "day": "2016-08-17",
    "value": 334
  },
  {
    "day": "2017-09-19",
    "value": 39
  },
  {
    "day": "2016-07-07",
    "value": 79
  },
  {
    "day": "2016-08-06",
    "value": 372
  },
  {
    "day": "2015-07-06",
    "value": 377
  },
  {
    "day": "2017-02-02",
    "value": 138
  },
  {
    "day": "2017-11-26",
    "value": 73
  },
  {
    "day": "2017-11-25",
    "value": 223
  },
  {
    "day": "2017-05-30",
    "value": 13
  },
  {
    "day": "2016-10-19",
    "value": 374
  },
  {
    "day": "2017-03-26",
    "value": 108
  },
  {
    "day": "2015-10-28",
    "value": 75
  },
  {
    "day": "2015-04-07",
    "value": 393
  },
  {
    "day": "2017-12-12",
    "value": 326
  },
  {
    "day": "2016-02-01",
    "value": 151
  },
  {
    "day": "2017-12-05",
    "value": 13
  },
  {
    "day": "2016-06-18",
    "value": 195
  },
  {
    "day": "2018-03-20",
    "value": 4
  },
  {
    "day": "2018-06-15",
    "value": 57
  },
  {
    "day": "2018-03-26",
    "value": 229
  },
  {
    "day": "2017-03-21",
    "value": 314
  },
  {
    "day": "2016-01-04",
    "value": 120
  },
  {
    "day": "2017-09-09",
    "value": 376
  },
  {
    "day": "2015-05-09",
    "value": 178
  },
  {
    "day": "2018-01-07",
    "value": 152
  },
  {
    "day": "2017-03-16",
    "value": 328
  },
  {
    "day": "2015-04-26",
    "value": 289
  },
  {
    "day": "2017-03-19",
    "value": 369
  },
  {
    "day": "2015-04-21",
    "value": 129
  },
  {
    "day": "2015-06-14",
    "value": 20
  },
  {
    "day": "2016-02-22",
    "value": 129
  },
  {
    "day": "2018-05-30",
    "value": 300
  },
  {
    "day": "2017-06-17",
    "value": 244
  },
  {
    "day": "2018-05-31",
    "value": 182
  },
  {
    "day": "2016-04-29",
    "value": 89
  },
  {
    "day": "2016-11-23",
    "value": 214
  },
  {
    "day": "2016-04-24",
    "value": 398
  },
  {
    "day": "2016-09-28",
    "value": 13
  },
  {
    "day": "2018-03-22",
    "value": 132
  },
  {
    "day": "2016-03-01",
    "value": 358
  },
  {
    "day": "2017-07-23",
    "value": 143
  },
  {
    "day": "2018-02-04",
    "value": 312
  },
  {
    "day": "2017-02-16",
    "value": 205
  },
  {
    "day": "2018-04-05",
    "value": 304
  },
  {
    "day": "2018-07-21",
    "value": 309
  },
  {
    "day": "2017-03-01",
    "value": 342
  },
  {
    "day": "2017-04-17",
    "value": 106
  },
  {
    "day": "2016-02-27",
    "value": 199
  },
  {
    "day": "2016-11-24",
    "value": 395
  },
  {
    "day": "2018-02-11",
    "value": 384
  },
  {
    "day": "2018-02-21",
    "value": 335
  },
  {
    "day": "2016-01-12",
    "value": 282
  },
  {
    "day": "2017-01-22",
    "value": 40
  },
  {
    "day": "2017-06-25",
    "value": 173
  },
  {
    "day": "2017-10-27",
    "value": 38
  },
  {
    "day": "2016-11-16",
    "value": 97
  },
  {
    "day": "2017-12-02",
    "value": 16
  },
  {
    "day": "2016-07-06",
    "value": 8
  },
  {
    "day": "2015-05-06",
    "value": 336
  },
  {
    "day": "2018-03-24",
    "value": 357
  },
  {
    "day": "2015-04-13",
    "value": 143
  },
  {
    "day": "2017-03-05",
    "value": 272
  },
  {
    "day": "2017-07-22",
    "value": 352
  },
  {
    "day": "2016-09-20",
    "value": 148
  },
  {
    "day": "2015-12-29",
    "value": 304
  },
  {
    "day": "2016-10-18",
    "value": 211
  },
  {
    "day": "2018-06-30",
    "value": 148
  },
  {
    "day": "2017-02-12",
    "value": 280
  },
  {
    "day": "2016-01-14",
    "value": 228
  },
  {
    "day": "2017-04-13",
    "value": 126
  },
  {
    "day": "2018-05-14",
    "value": 134
  },
  {
    "day": "2017-07-15",
    "value": 184
  },
  {
    "day": "2018-06-22",
    "value": 263
  },
  {
    "day": "2015-10-26",
    "value": 127
  },
  {
    "day": "2016-10-04",
    "value": 84
  },
  {
    "day": "2018-02-26",
    "value": 186
  },
  {
    "day": "2016-07-24",
    "value": 61
  },
  {
    "day": "2016-03-02",
    "value": 105
  },
  {
    "day": "2016-07-11",
    "value": 224
  },
  {
    "day": "2016-02-25",
    "value": 132
  },
  {
    "day": "2015-06-02",
    "value": 342
  },
  {
    "day": "2017-09-23",
    "value": 197
  },
  {
    "day": "2017-11-19",
    "value": 270
  },
  {
    "day": "2016-04-02",
    "value": 77
  },
  {
    "day": "2017-08-02",
    "value": 141
  },
  {
    "day": "2015-05-22",
    "value": 197
  },
  {
    "day": "2016-01-21",
    "value": 78
  },
  {
    "day": "2018-04-22",
    "value": 247
  },
  {
    "day": "2017-12-30",
    "value": 207
  },
  {
    "day": "2017-07-07",
    "value": 14
  },
  {
    "day": "2018-07-28",
    "value": 8
  },
  {
    "day": "2015-09-10",
    "value": 231
  },
  {
    "day": "2016-06-14",
    "value": 275
  },
  {
    "day": "2016-11-26",
    "value": 1
  },
  {
    "day": "2016-10-05",
    "value": 288
  },
  {
    "day": "2015-07-21",
    "value": 51
  },
  {
    "day": "2015-12-18",
    "value": 336
  },
  {
    "day": "2017-08-21",
    "value": 389
  },
  {
    "day": "2015-07-05",
    "value": 212
  },
  {
    "day": "2017-08-24",
    "value": 115
  },
  {
    "day": "2016-04-11",
    "value": 70
  },
  {
    "day": "2016-11-05",
    "value": 386
  },
  {
    "day": "2016-04-27",
    "value": 332
  },
  {
    "day": "2017-04-12",
    "value": 376
  },
  {
    "day": "2015-08-24",
    "value": 314
  },
  {
    "day": "2018-05-22",
    "value": 294
  },
  {
    "day": "2015-05-21",
    "value": 70
  }
]
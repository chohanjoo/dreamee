import React, { Component } from "react";
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

import Table from "components/Table/Table.js";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import { DataGrid } from '@material-ui/data-grid';

import {
  getDept,
  getLeader, getSaint, getGbs, getGbsMemberList, postGbsAtt, getAttListByGbs, getVillageById
} from "../../api/Api";

import { getUser, getToken } from "../../api/Storage"

class Leader extends Component {

  state = {
    saintName: {}
  }


  handleChangeSaintName(event) {
    console.log(event.target.value)
    this.setState({
      saintName: event.target.value
    })
  }

  attTableData = () => {

    var data = [];
    this.state.saintAttList.map((att, index) => {
      console.log(index + " : " + att)
      data.push({ id: index, '시간': att.dateCreated, '대예배': att.worshipState, '대학부': att.attState, '큐티': att.qtNumber, '리더': att.leaderName, '마을': att.villageName })
    })

    return data;
  }

  componentDidMount() {

  }

  render() {
    const { classes, fullScreen } = this.props;

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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h3 className={classes.cardTitleWhite}>이번 텀 조원 리스트</h3>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>

                <Card>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.typo}>
                      <div className={classes.note}>
                        <Typography variant="subtitle1" gutterBottom>
                          이름
                        </Typography>
                      </div>
                      <TextField
                        id="search-saint-id"
                        variant="outlined"
                        type="text"
                        onChange={(e) => this.handleChangeSaintName(e)}
                      />
                    </div>
                    <Button disabled={false} variant="contained" color="info" onClick={() => this.handleClickAttDialogOpen()}>조회</Button>
                  </GridItem>
                </Card>
                

                {/* <div style={{ height: 300, width: '100%' }}>
                  <DataGrid pageSize={20} rowsPerPageOptions={[5, 10, 20]} columns={attColumns} rows={this.attTableData()} />
                </div> */}
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

export default withStyles(styles)(Leader);
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TablePagination from '@material-ui/core/TablePagination';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import CustomButton from "components/CustomButtons/Button.js";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

import { updateSaint } from "../../api/Api";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#000000",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  typo: {
    paddingLeft: "10%",
    marginBottom: "40px",
    position: "relative"
  },
  search: {
    paddingLeft: "35%",
    marginBottom: "40px",
    position: "relative"
  },
  searchOption: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    float: "left"
  },
  searchButton: {
    float: "right",
    paddingRight: "10%",
    paddingTop: "3%",
    paddingBottom: "3%"
  },
  pushButton: {
    paddingLeft: "3%",
    float: "left"
  },
  formControl: {
    margin: "1%",
    minWidth: 120,
  }
});


function Row(props) {
  const { row, attDialogOpen, setAttDialogOpen, setSaint } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const handleClickAttDialogOpen = () => {
    props.setAttDialogOpen(!attDialogOpen)
    props.setSaint(row.saintInfo)
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.saintName}
        </TableCell>
        <TableCell align="right">{row.villageName}</TableCell>
        <TableCell align="right">{row.gender}</TableCell>
        <TableCell align="right">{row.age} ({row.age - 20 + 1}학년)</TableCell>
        <TableCell align="right">{row.birthday}</TableCell>
        <TableCell align="right">
        <Button onClick={handleClickAttDialogOpen}>
        <EditIcon color="primary"/>
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                성도 정보
              </Typography>
              <Typography variant="body1" gutterBottom>
        부서 -- {row.saintInfo.deptName}
      </Typography>
              <Typography variant="body1" gutterBottom>
        성도 이름 -- {row.saintInfo.saintName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        마을 -- {row.saintInfo.villageName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        성별 -- {row.saintInfo.gender}
      </Typography>
      <Typography variant="body1" gutterBottom>
        나이 -- {row.saintInfo.age} ({row.saintInfo.age - 20 + 1}학년)
      </Typography>
      <Typography variant="body1" gutterBottom>
        생일 -- {row.saintInfo.birthday}
      </Typography>
      <Typography variant="body1" gutterBottom>
        주소 -- {row.saintInfo.address}
      </Typography>
      <Typography variant="body1" gutterBottom>
        세례 여부 -- {row.saintInfo.baptism}
      </Typography>
      <Typography variant="body1" gutterBottom>
        이전 교회 -- {row.saintInfo.preChurch}
      </Typography>
      <Typography variant="body1" gutterBottom>
        전공 -- {row.saintInfo.major}
      </Typography>
      <Typography variant="body1" gutterBottom>
        제자훈련 여부 -- {row.saintInfo.discipleTraining}
      </Typography>
      <Typography variant="body1" gutterBottom>
        id -- {row.saintInfo.id}
      </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    saintName: PropTypes.string.isRequired,
    villageName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    saint: PropTypes.arrayOf(
      PropTypes.shape({
        saintName: PropTypes.string.isRequired,
        villageName: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        birthday: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        baptism: PropTypes.string.isRequired,
        preChurch: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        discipleTraining: PropTypes.string.isRequired,
        deptName: PropTypes.string.isRequired,
        saintId: PropTypes.number.isRequired,
      }),
    ).isRequired,
    age: PropTypes.number.isRequired,
    birthday: PropTypes.string.isRequired
  }).isRequired,
};


export default function ExpandTable(props) {
  const {rowData, villageList, deptList } = props;

  const [saint, setSaint] = React.useState({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [attDialogOpen, setAttDialogOpen] = React.useState(false)

  const [newSaintInfo, setNewSaintInfo] = React.useState({registerBaptism: "N", registerDiscipleTraining: "N", registerGender: "M"})

  const classes = useRowStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickAttDialogOpen = () => {
    setAttDialogOpen(!attDialogOpen);
    console.log("HHH => ", saint)
  }

  const handleChange = (event) => {
    const id = event.target.id === "" ? event.target.name : event.target.id;
    var saintInfo = saint;

    saintInfo[id] = event.target.value;

    console.log("change -> ", saintInfo)
    setSaint(saintInfo);
  };

  const updateSaintInfo = () => {
    var saintInfo = saint;
    saintInfo['dept'] = deptList.get(saint.deptName);
    saintInfo['village'] = villageList.get(saint.villageName);

    console.log("updateSaint : ", saintInfo);
    updateSaint(saintInfo);
    setAttDialogOpen(!attDialogOpen);
  }

  const getDate = () => {
    var today = new Date();

    var mm = Number(today.getMonth() + 1) < 10 ? '0' + Number(today.getMonth() + 1) : Number(today.getMonth() + 1)
    return String(today.getFullYear() + "-" + mm + "-" + today.getDate())
  }


  return (
    <div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>이름</TableCell>
            <TableCell align="right">마을</TableCell>
            <TableCell align="right">성별</TableCell>
            <TableCell align="right">나이</TableCell>
            <TableCell align="right">생일</TableCell>
            <TableCell align="right">수정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rowData != [] ? rowData.slice(page * rowsPerPage , (page+1) * rowsPerPage).map((row) => (
            <Row key={row.saintName} row={row} attDialogOpen={attDialogOpen} setAttDialogOpen={setAttDialogOpen} setSaint={setSaint}/>
          )) : <div></div>}
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={100}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
    </TableContainer>
    <Dialog
        fullScreen
        open={attDialogOpen}
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
        드림이 정보 변경
        </Typography>
    </Breadcrumbs>
          </DialogContentText>

          <GridContainer justify={"center"}>
          <GridItem xs={8} sm={8} md={8}>
          <Card>
              <CardHeader color="primary">
                <h3 className={classes.cardTitleWhite}>드림이 정보 변경</h3>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardBody>
                  <div className={classes.searchOption}>
        <TextField
          required
          id="saintName"
          label="이름"
          defaultValue={saint.saintName}
          variant="outlined"
          onChange={handleChange}
        />
        </div>
        <div className={classes.searchOption}>
                <TextField
          required
          id="age"
          defaultValue={saint.age}
          label="나이"
          variant="outlined"
          onChange={handleChange}
        />
        </div>
        <div className={classes.searchOption}>

<FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="age-native-simple">마을</InputLabel>
        <Select
          native
          defaultValue={saint.villageName}
          onChange={handleChange}
          // defaultValue={villageList.keys()[0]}
          inputProps={{
            name: 'village',
            id: 'village',
          }}
        >
          {Array.from(villageList.keys()).map(key => {
            return <option value={villageList[key]}>{key}</option>  
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
          defaultValue={saint.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'gender',
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
          id="major"
          defaultValue={saint.major}
          onChange={handleChange}
          label="전공"
          variant="outlined"
        />
      </div>
      <div className={classes.searchOption}>
                <TextField
          required
          id="address"
          label="주소"
          defaultValue={saint.address}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
  </CardBody>
</Card>

<Card>
  <CardBody>
<div className={classes.searchOption}>

      <TextField
        id="birthday"
        label="생일"
        type="date"
        defaultValue={saint.birthday}
        onChange={handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />


      </div>
      <div className={classes.searchOption}>
                <TextField
          required
          id="preChurch"
          label="이전 교회"
          defaultValue={saint.preChurch}
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <div className={classes.searchOption}>

<FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="age-native-simple">부서</InputLabel>
        <Select
          native
          defaultValue={saint.deptName}
          onChange={handleChange}
          inputProps={{
            name: 'deptName',
            id: 'deptName',
          }}
        >
          {Array.from(deptList.keys()).map(key => {
            return <option value={deptList[key]}>{key}</option>  
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
      <RadioGroup defaultValue={saint.baptism} aria-label="gender" name="baptism" id="registerBaptism" onChange={handleChange}>
        <FormControlLabel value="Y" control={<Radio />} label="Y"/>
        <FormControlLabel value="N" control={<Radio />} label="N"/>
      </RadioGroup>
    </FormControl>
      </div>

      <div className={classes.searchOption}>
      <FormControl component="fieldset" >
      <FormLabel component="legend">제자훈련 여부</FormLabel>
      <RadioGroup defaultValue={saint.discipleTraining} aria-label="gender" name="discipleTraining" id="registerDiscipleTraining" onChange={handleChange}>
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

          <CustomButton autoFocus onClick={handleClickAttDialogOpen} color="secondary">
            취소
          </CustomButton>

          <CustomButton autoFocus onClick={updateSaintInfo} color="primary">
            수정
          </CustomButton>
</div>
        </DialogContent>

        </Dialog>
    </div>
  );
}

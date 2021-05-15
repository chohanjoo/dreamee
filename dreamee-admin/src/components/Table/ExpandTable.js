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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.birthday}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Typography variant="h6" gutterBottom component="div">
                출석부
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>이름</TableCell>
                    <TableCell>대학부</TableCell>
                    <TableCell align="right">대예배</TableCell>
                    <TableCell align="right">QT</TableCell>
                    <TableCell align="right">업데이트 시간</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.attendance.map((historyRow) => (
                    <TableRow key={historyRow.saintName}>
                      <TableCell component="th" scope="row">
                        {historyRow.saintName}
                      </TableCell>
                      <TableCell>{historyRow.univAtt}</TableCell>
                      <TableCell align="right">{historyRow.worshipState}</TableCell>
                      <TableCell align="right">
                        {historyRow.qtNumber}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.dateUpdated}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
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
    // attendance: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     saintName: PropTypes.string.isRequired,
    //     univAtt: PropTypes.string.isRequired,
    //     worshipState: PropTypes.string.isRequired,
    //     qtNumber: PropTypes.number.isRequired,
    //     dateUpdated: PropTypes.string.isRequired
    //   }),
    // ).isRequired,
    age: PropTypes.number.isRequired,
    birthday: PropTypes.string.isRequired
  }).isRequired,
};


export default function ExpandTable(props) {
  const {rowData} = props;

  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
          
          { rowData != [] ? rowData.map((row) => (
            <Row key={row.saintName} row={row} />
          )) : <div></div>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

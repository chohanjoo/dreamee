import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';
import Table from "components/Table/Table.js";
import { useDemoData } from '@material-ui/x-grid-data-generator';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { gbsMemberList, attList } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tableData = (saintId) => {

    var data = [];
    attList.map( (att, index) => {
      if(att.saintId === saintId) {
        data.push({id : index, '시간': att.dateCreated, '대예배': att.worshipState, '대학부' : att.attState, '큐티' : att.qtNumber})
      }
    })

    return data;
  }

  // const { data } = useDemoData({
  //   rowLength: 300,
  //   maxColumns: 6,
  // });

  const columns = [
    {field: '시간', width: 200},
    {field: '대예배'},
    {field: '대학부'},
    {field: '큐티'}
  ]

  

  return (
    <div className={classes.root}>
          <div className={classes.demo1}>
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

          {gbsMemberList!=undefined ? gbsMemberList.map( (member, index) => {
            return (
              <AntTab label={member.saint.name} {...a11yProps(index)} />
            )
          }) : <div></div>}
        </AntTabs>

      {gbsMemberList!=undefined ? gbsMemberList.map( (member, index) => {
        return (
    //       <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination {...data} />
    // </div>
          <TabPanel value={value} index={index}>
                  <div style={{ height: 400, width: '100%' }}>
      <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} columns={columns} rows={tableData(member.saint.saintId)}/>
    </div>
            {/* <Table
              tableHeaderColor="primary"
              tableHead={["시간", "대예배", "대학부", "큐티"]}
              tableData={tableData(member.saint.saintId)}
            /> */}
        </TabPanel>
        )
      }) : <div></div>}
      </div>
    </div>
  );
}

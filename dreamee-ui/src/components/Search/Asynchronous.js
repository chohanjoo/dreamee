// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getSaintSearchData } from "../../api/Api"
import { setSaint } from "../../api/Storage"
import { Redirect } from "react-router-dom";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [redirect, setRedirect] = React.useState(false);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await getSaintSearchData();
      // fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      // console.log("res : " + JSON.stringify(response['data'].list))
      // const countries = await response['data'].list;

      const countries = await response.data.list;
      // console.log("res : " + JSON.stringify(countries) )
      if (active) {
        setOptions(
          countries.map( (data, index) => data )
        );
        // setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  return (
    <div>
      { redirect ? (<Redirect push to="/admin/saint"/>) : null }
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 200 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      groupBy={(option) => option.villageName}
      getOptionSelected={(option, value) => {

        if (option.name === value.name ) {
          console.log("hello : {}", value)
          setSaint(value.name);
          setRedirect(true);
          window.location.reload()
          
          return true;
        }
      }}
      getOptionLabel={(option) => option.name + " [" + option.age + "]"}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="성도 검색"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    </div>
  );
}

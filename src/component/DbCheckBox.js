import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


export default function DbCheckBox() {
    const [isTry,setTry] = React.useState(true);
    const [dbConnect, setdbConnect] = React.useState(false);

    return isTry === false ? (
      <FormControlLabel
        disabled
        control={<Checkbox value={false} />}
        label="Disabled"
      />
    ) : dbConnect === true ? (
      <FormControlLabel
        disabled
        control={<GreenCheckbox checked={true} />}
        label="Sucess"
      />
    ) : (
      <FormControlLabel control={<Checkbox checked={true} />} label="Fail" />
    );
}
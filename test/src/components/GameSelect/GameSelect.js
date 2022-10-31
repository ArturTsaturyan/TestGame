import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './GameSelect.module.css';

export default function Selects({value,handleChange,providers,selectTitel}) {

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small">{selectTitel}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        className={styles.select}
        value={value}
        label={selectTitel}
        onChange={handleChange}
      >
       {providers?.map((elem) => (
         <MenuItem className={styles.selectItem} key={elem} value={elem}>{elem}</MenuItem>
       ))
       }
      </Select>
    </FormControl>
  );
}
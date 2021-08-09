import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import "./customTable.css";

const useStyles = makeStyles({
  tableHead: {
    backgroundColor: "#003984",
    color: "white",
    fontWeight: "600",
    fontSize: "18px",
    cursor: "default",
  },
  tableCell: {
    cursor: "default",
  },
});

const CustomTable = (props) => {
  const classes = useStyles();

  const renderHead = () => {
    return (
      <TableRow>
        {props.colDefs.map((col, index) => (
          <TableCell key={index} className={classes.tableHead} align="center">
            {col.label}
          </TableCell>
        ))}
      </TableRow>
    );
  };

  const renderBody = () => {
    return props.colFields?.map((row, index) => (
      <TableRow
        key={index}
        hover
        className={classes.tableRow}
        onClick={() => props.onTableRowClick(row)}
      >
        {props.colDefs.map((col, index) => (
          <TableCell key={index} align="center" className={classes.tableCell}>
            {row[col.name]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <>
      {props.colFields.length > 0 ? (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>{renderHead()}</TableHead>
            <TableBody>{renderBody()}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="spinnerWrapper">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default CustomTable;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  tableHead: {
    backgroundColor: "#003984",
    color: "white",
    fontWeight: "600",
    fontSize: "18px",
  },
});

const CustomizedTables = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.colFields.length > 0 ? (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {props.colDefs.map((col, index) => (
                  <TableCell
                    key={index}
                    className={classes.tableHead}
                    align="center"
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.colFields?.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  className={classes.tableRow}
                  onClick={() => props.onTableRowClick(row)}
                >
                  {props.colDefs.map((col, index) => (
                    <TableCell key={index} align="center">
                      {row[col.name]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default CustomizedTables;

import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Stack,Typography,colors,TextField,Button,} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const CustomTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box>
      
      <TableContainer component={Paper}>
        <Stack sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:"15px",
        marginTop:"15px"

      }}>
        <Stack sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingRight:"15px",
            marginTop:"10px",
            gap:'22px',
      }}>
        <Typography
          sx={{
            paddingLeft:"15px",
            paddingRight:'20px',
            borderRight: "2px #ccc solid",
          }}
        >
          Active Students
        </Typography>
        <Typography sx={{
            color:colors.grey['600']
        }}>
            274 Users
        </Typography>
        <TextField
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon fontSize="19px"/>,
              sx: {
                borderRadius: '20px',
                border:"secondary",
                opacity:"0.7",
                height: "34px"
              },
            }}
            placeholder="Search by name"
          />
        </Stack>


        <Box spacing={3}
          sx={{
            display:"flex",
            flexDirection:"row",
            gap:"12px",
            justifyContent:"center",
            width:"300px",
            alignItems:"center",
            paddingLeft:"22px"
          }}
        >
            <Button variant="outlined" startIcon={<FilterAltOutlinedIcon
              />}>
                Filtering
            </Button>
            <Button variant="contained" startIcon={<AddIcon />}>
                Add user
            </Button>
        </Box>
      </Stack>

      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </Box>
   
  );
};

export default CustomTable;

 {/* <Stack sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:"15px",
        marginTop:"15px"

      }}>
        <Stack sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingRight:"15px",
            marginTop:"10px",
            gap:'22px',
      }}>
        <Typography
          sx={{
            paddingLeft:"15px",
            paddingRight:'20px',
            borderRight: "2px #ccc solid",
          }}
        >
          Active Students
        </Typography>
        <Typography sx={{
            color:colors.grey['600']
        }}>
            274 Users
        </Typography>
        <TextField
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon fontSize="19px"/>,
              sx: {
                borderRadius: '20px',
                border:"secondary",
                opacity:"0.7",
                height: "34px"
              },
            }}
            placeholder="Search by name"
          />
        </Stack>


        <Box spacing={3}
          sx={{
            display:"flex",
            flexDirection:"row",
            gap:"12px",
            justifyContent:"center",
            width:"300px",
            alignItems:"center",
            paddingLeft:"22px"
          }}
        >
            <Button variant="outlined" startIcon={<FilterAltOutlinedIcon
              />}>
                Filtering
            </Button>
            <Button variant="contained" startIcon={<AddIcon />}>
                Add user
            </Button>
        </Box>
      </Stack> */}

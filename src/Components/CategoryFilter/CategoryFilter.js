// import { useDispatch } from "react-redux";

import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../Redux/FilterSlice";

const CategoryFilter = ({ categories }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    dispatch(filterByCategory(selectedCategory));
  };

  return (
    <Box className="category-select">
      <FormControl fullWidth>
        <InputLabel id="category-select">Filter by Category:</InputLabel>
        <Select
          labelId="category-select"
          id="demo-simple-select"
          label="Filter by Category:"
          onChange={handleFilterChange}
        >
          {categories?.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CategoryFilter;
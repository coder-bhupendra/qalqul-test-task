import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterByTag } from "../../Redux/FilterSlice";

const TagFilter = ({ tags }) => {

  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const selectedTag = e.target.value;
    dispatch(filterByTag(selectedTag));
  };

  return (
    <Box className="tag-select">
      <FormControl fullWidth>
        <InputLabel id="tag-select">Filter by Tags:</InputLabel>
        <Select
          labelId="tag-select"
          id="demo-simple-select"
          label="Filter by tag:"
          onChange={handleFilterChange}
        >
          {tags?.map((tags) => (
            <MenuItem key={tags} value={tags}>{tags}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default TagFilter;
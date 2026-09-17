import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({
    title,handler,icon
}) {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button onClick={handler} startIcon={icon} variant="contained">{title}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}

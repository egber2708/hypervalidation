import Box from "@cloudscape-design/components/box";
import Spinner from "@cloudscape-design/components/spinner";

export default function Loader() {
  return (
    <Box variant='div' data-style='alert_container'>
      <Spinner size='large' />
    </Box>
  );
}

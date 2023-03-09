import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import { API_DOCUMENTATION } from "../services/utility";

export default function NavHeader() {
  return (
    <SpaceBetween size='l'>
      <Header variant='h1' info={<Link href={API_DOCUMENTATION} target="_blank">Info</Link>}>
        Hyper Product
      </Header>
    </SpaceBetween>
  );
}

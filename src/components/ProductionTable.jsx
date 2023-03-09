import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";

import Loader from "./Loader";

import useProductRequest from "../hooks/useProductRequest";
import DisplayAlert from "./DisplayAlert";
import {SERVER_ERROR, ERROR_MESSAGE} from "../services/utility";

export default function ProductionTable(props) {
  const {state, setState, dataFormat, products, error, isLoading} = useProductRequest(props);

  if (isLoading) return <Loader />;

  if (error) return <DisplayAlert description={SERVER_ERROR} title={ERROR_MESSAGE} />;

  return (
    <Table
      columnDefinitions={dataFormat}
      items={products.content || []}
      loadingText='Loading resources'
      trackBy='name'
      visibleColumns={["date", "productName", "productKeyName", "callCount", "charge"]}
      empty={
        <Box textAlign='center' color='inherit'>
          <b>No resources</b>
          <Box padding={{bottom: "s"}} variant='p' color='inherit'>
            No resources to display.
          </Box>
        </Box>
      }
      header={<Header counter={products.totalElements ? `(${products.numberOfElements + products.pageable.offset}/${products.totalElements})` : `${products.totalElements || ""}`}>Products</Header>}
      pagination={<Pagination currentPageIndex={state.page + 1 || 1} pagesCount={products.totalPages || 1} onChange={({detail}) => setState({...state, page: detail.currentPageIndex - 1})} />}
    />
  );
}

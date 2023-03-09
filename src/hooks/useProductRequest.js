import {useState} from "react";
import {format} from "date-fns";
import {useQuery} from "react-query";
import {fetchProducts} from "../services/fetchRequest";
import {DEFAULT_DATA} from "../services/utility";

export default function useProductRequest({organization_id}) {

  const [state, setState] = useState({...DEFAULT_DATA});

  const {data: products, error, isLoading} = useQuery(["products", organization_id, state], () => fetchProducts(organization_id, state), {keepPreviousData: true, retry:1});

  const dataFormat = [
    {
      id: "date",
      header: "Date",
      cell: (e) => format(new Date(e.timestamp), "yyyy-MM-dd hh:mm:ss a")
    },
    {
      id: "productName",
      header: "Product Name",
      cell: (e) => e.productName
    },
    {
      id: "productKeyName",
      header: "Product Key Name",
      cell: (e) => e.productKeyName
    },
    {
      id: "callCount",
      header: "Call Count",
      cell: (e) => e.callCount
    },
    {
      id: "charge",
      header: "Charge",
      cell: (e) => e.charge
    }
  ];


    
  return {state, setState, dataFormat, products, error, isLoading}
}

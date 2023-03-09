import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import NavHeader from "../components/NavHeader";
import ProductionTable from "../components/ProductionTable";
import {ORGANITZATION_ID} from "../services/utility";

export default function Home() {
  return (
    <ContentLayout header={<NavHeader />}>
      <Container
        data-style='body_container'
        header={
          <Header variant='h2' description='Retrieve Transactions for an Organization'>
            Product Transactions
          </Header>
        }
      >
        <ProductionTable organization_id={ORGANITZATION_ID} />
      </Container>
    </ContentLayout>
  );
}

import Alert from "@cloudscape-design/components/alert";

export default function DisplayAlert({title, description}) {
  return (
    <Alert statusIconAriaLabel='Error' type='error' header={title}>
      {description}
    </Alert>
  );
}

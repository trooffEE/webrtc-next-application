export default function Home() {
  return (
    <ComponentTest
      name="dasdasd"
      surname="dasda"
    />
  )
}

const ComponentTest = (props: { name: string; surname: string }) => {
  return <div>{props.name}</div>
}

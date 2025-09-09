import DataTable from "../stories/components/DataTable";
import InputBox from "../stories/components/InputBox";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <InputBox label="Email" size="sm" variant="filled" />
      <InputBox label="Email" size="sm" variant="outlined" />
      <InputBox label="Email" size="sm" variant="outlined" />
      <DataTable
        data={[
          { id: 1, name: "Subrata", email: "sub@example.com" },
          { id: 2, name: "Sayan", email: "say@example.com" },
          { id: 3, name: "Rakesh", email: "ra@example.com" },
        ]}
        columns={[
          { key: "id", title: "ID", dataIndex: "id" },
          { key: "name", title: "Name", dataIndex: "name" },
          { key: "email", title: "Email", dataIndex: "email" },
        ]}
        loading={true}
        selectable={true}
      />
    </div>
  );
}

import DataTable from "../stories/components/DataTable";
import InputBox from "../stories/components/InputBox";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
      <InputBox label="Email" size="sm" variant="filled" />
      <DataTable
        data={[
          { id: 1, name: "Alice", email: "alice@example.com" },
          { id: 2, name: "Bob", email: "bob@example.com" },
          { id: 3, name: "Charlie", email: "charlie@example.com" },
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

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import DataTable from './DataTable';

const meta = {
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  args: {
    onRowSelect: (selectedRows) => {
      console.log("Selected Rows:", selectedRows);
    }
  }
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const DATA = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
]
const COLUMNS = [
  { key: "id", title: "ID", dataIndex: "id" },
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
]

const SORTABLE_COLUMNS = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
]

export const Table: Story = {
  args: {
    data: DATA,
    columns: COLUMNS
  }
};

export const Sortable: Story = {
  args: {
    data: DATA,
    columns: SORTABLE_COLUMNS,
    loading: false,
  }
};

export const Selectable: Story = {
  args: {
    data: DATA,
    columns: COLUMNS,
    selectable: true,
    loading: false,
  }
};


export const Selectable_Sortable: Story = {
  name: "Selectable & Sortable",
  args: {
    data: DATA,
    columns: SORTABLE_COLUMNS,
    selectable: true,
    loading: false,
  }
};


export const Empty: Story = {
  args: {
    data: [],
    columns: SORTABLE_COLUMNS,
    loading: false,
  }
};


export const Loading: Story = {
  args: {
    data: [],
    columns: SORTABLE_COLUMNS,
    loading: true,
  }
};
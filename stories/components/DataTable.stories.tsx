import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DataTable from './DataTable';

const meta = {
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onRowSelect: { action: "selected" }, // 👈 shows event in Actions tab
  },
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const DATA = [
  { id: 1, name: "Subrata", email: "sub@example.com" },
  { id: 2, name: "Sayan", email: "say@example.com" },
  { id: 3, name: "Rakesh", email: "ra@example.com" },
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
    columns: COLUMNS,
    loading: false,
  }
};


export const Loading: Story = {
  args: {
    data: [],
    columns: COLUMNS,
    loading: true,
  }
};
'use client'
import React, { useEffect, useState } from 'react'

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T | string;
    sortable?: boolean;
}

const DataTable = <T,>({
    data,
    columns,
    loading = false,
    selectable = false,
    onRowSelect
}: DataTableProps<T>) => {
    const [tableData, setTableData] = useState<T[]>(data);
    const [selectedRows, setSelectedRows] = useState<boolean[]>(Array(data.length).fill(false));
    const [allSelected, setAllSelected] = useState(false);

    useEffect(() => {
        setTableData(data);
        setSelectedRows(Array(data.length).fill(false));
        setAllSelected(false);
    }, [data]);

    return (
        <div className="overflow-x-auto w-full rounded-md border border-gray-300">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        {selectable && <th className="p-2 px-4 border-b border-gray-300 dark:bg-gray-700">
                            <input
                                type="checkbox"
                                className='cursor-pointer'
                                checked={allSelected}
                                aria-label="Select all rows"
                                onChange={e => {
                                    if (onRowSelect) {
                                        if (e.target.checked) {
                                            onRowSelect(data);
                                            setSelectedRows([...data].map((_) => true));
                                        } else {
                                            onRowSelect([]);
                                            setSelectedRows([...data].map((_) => false));
                                        }
                                    }
                                    setAllSelected(e.target.checked);
                                }}
                            />
                        </th>}
                        {columns.map((col) => (
                            <th key={col.key} className="p-2 px-4 text-left border-b border-gray-300 dark:bg-gray-700">
                                {col.title}
                                {col.sortable && <span className="ml-1 cursor-pointer" onClick={() => {
                                    setSelectedRows(Array(data.length).fill(false));
                                    setAllSelected(false);
                                    onRowSelect && onRowSelect([]);
                                    const isSortedAsc = tableData.every((_, i, arr) => {
                                        if (i === 0) return true;
                                        return arr[i - 1][col.dataIndex as keyof T] <= arr[i][col.dataIndex as keyof T];
                                    });
                                    const sortedData = [...tableData].sort((a, b) => {
                                        if (a[col.dataIndex as keyof T] < b[col.dataIndex as keyof T]) return isSortedAsc ? 1 : -1;
                                        if (a[col.dataIndex as keyof T] > b[col.dataIndex as keyof T]) return isSortedAsc ? -1 : 1;
                                        return 0;
                                    });
                                    setTableData(sortedData);
                                }}>⇅</span>}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-2 px-4 text-center dark:bg-gray-950">
                                <span className="inline-block w-6 h-6 border-2 border-t-transparent border-blue-700 rounded-full animate-spin"></span>
                            </td>
                        </tr>
                    ) : tableData.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-4 text-center">
                                No data available.
                            </td>
                        </tr>
                    ) : (
                        tableData.map((item, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50 has-[:checked]:bg-blue-200/40 ">
                                {selectable && <td className="p-2 px-4 border-b border-gray-300 text-center">
                                    <input
                                        type="checkbox"
                                        className='cursor-pointer outline-0 border-2 border-gray-100 p-0.5'
                                        checked={selectedRows[rowIndex] || false}
                                        aria-label={`Select row ${rowIndex + 1}`}
                                        onChange={e => {
                                            const newSelectedRows = [...selectedRows];
                                            newSelectedRows[rowIndex] = e.target.checked;
                                            setSelectedRows(newSelectedRows);
                                            if (onRowSelect) {
                                                const selectedData = tableData.filter((_, idx) => newSelectedRows[idx]);
                                                onRowSelect(selectedData);
                                            }
                                            const allChecked = newSelectedRows.every(Boolean);
                                            setAllSelected(allChecked)
                                        }}
                                    />
                                </td>}
                                {columns.map((col) => (
                                    <td key={col.key} className="p-2 px-4 border-b border-gray-300">
                                        {String(item[col.dataIndex as keyof T])}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
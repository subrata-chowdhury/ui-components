'use client'
import React, { useState } from 'react'

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
    dataIndex: keyof T;
    sortable?: boolean;
}

const DataTable = <T,>({
    data,
    columns,
    loading = false,
    selectable = false,
    onRowSelect
}: DataTableProps<T>) => {
    const [selectedRows, setSelectedRows] = useState<boolean[]>([]);
    return (
        <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        {selectable && <th className="p-2 border-b border-gray-300">
                            <input type="checkbox" onChange={e => {
                                if (onRowSelect) {
                                    if (e.target.checked) {
                                        onRowSelect(data);
                                        setSelectedRows([...data].map((_) => true));
                                    } else {
                                        onRowSelect([]);
                                    }
                                }
                            }} />
                        </th>}
                        {columns.map((col) => (
                            <th key={col.key} className="p-2 text-left border-b border-gray-300">
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-4 text-center">
                                <span className="inline-block w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></span>
                            </td>
                        </tr>
                    ) : data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-4 text-center">
                                No data available.
                            </td>
                        </tr>
                    ) : (
                        data.map((item, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                                {selectable && <td className="p-2 border-b border-gray-300">
                                    <input type="checkbox" checked={selectedRows[rowIndex] || false} onChange={e => {
                                        const newSelectedRows = [...selectedRows];
                                        newSelectedRows[rowIndex] = e.target.checked;
                                        setSelectedRows(newSelectedRows);
                                    }}/>
                                </td>}
                                {columns.map((col) => (
                                    <td key={col.key} className="p-2 border-b border-gray-300">
                                        {String(item[col.dataIndex])}
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
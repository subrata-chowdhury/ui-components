
'use client';
import DataTable from '@/stories/components/DataTable'
import { Pencil, Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const Page = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Subrata", email: "sub@example.com" },
        { id: 2, name: "Sayan", email: "say@example.com" },
        { id: 3, name: "Rakesh", email: "ra@example.com" },
    ])
    const [selectedUsers, setSelectedUsers] = useState<{
        id: number;
        name: string;
        email: string;
    }[]>([])
    const [isInSelectMode, setIsInSelectMode] = useState(false);

    return (
        <div className='p-4 h-screen overflow-auto'>
            <h2 className='text-2xl font-bold'>Demo Dashboard</h2>
            <div className='h-full flex flex-col mt-4 gap-2 items-center'>
                <div className='w-full flex items-center mb-2'>
                    <h3 className='text-lg font-semibold'>
                        {isInSelectMode ? 'Select and Delete' : 'Users'}
                    </h3>
                    <div
                        className='flex items-center justify-center gap-1.5 text-sm py-1.5 px-3 pt-2 ms-auto rounded font-medium cursor-pointer'
                        onClick={() => {
                            setIsInSelectMode(prev => !prev);
                        }}>
                        <span className="ms-3 flex items-center mr-2">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isInSelectMode}
                                    onChange={() => setIsInSelectMode(prev => !prev)}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-4"></div>
                            </label>
                        </span>
                        <Pencil size={14} />{isInSelectMode ? "Disable" : "Enable"} Edit Mode
                    </div>
                </div>
                <DataTable
                    data={users}
                    columns={[
                        { key: "id", title: "ID", dataIndex: "id" },
                        { key: "name", title: "Name", dataIndex: "name" },
                        { key: "email", title: "Email", dataIndex: "email" },
                    ]}
                    loading={false}
                    selectable={isInSelectMode}
                    onRowSelect={(selectedRows) => setSelectedUsers(selectedRows)}
                />
                {selectedUsers.length > 0 && <button
                    className='bg-red-500 text-sm text-white px-3 py-1.5 pt-2 rounded hover:bg-red-600 transition mt-2 ms-auto flex gap-1'
                    onClick={() => {
                        if (window.confirm("Are you sure? This action cannot be undone. " + selectedUsers.length + " users will be deleted.")) {
                            const selectedIds = new Set(selectedUsers.map(user => user.id));
                            setUsers(prev => prev.filter(user => !selectedIds.has(user.id)));
                            setSelectedUsers([]);
                        }
                    }}><Trash2 size={18} />Delete Users</button>}
            </div>
        </div>
    )
}

export default Page
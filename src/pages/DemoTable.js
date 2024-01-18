import React, { useState } from "react";
import { Divider, Table, Checkbox } from "antd";
const columns = [
    {
        title: "Column 1",
        dataIndex: "address",
        key: "1",
    },
    {
        title: "Column 2",
        dataIndex: "address",
        key: "2",
    },
    {
        title: "Column 3",
        dataIndex: "address",
        key: "3",
    },
    {
        title: "Column 4",
        dataIndex: "address",
        key: "4",
    },
    {
        title: "Column 5",
        dataIndex: "address",
        key: "5",
    },
    {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
    },
    {
        title: "Column 7",
        dataIndex: "address",
        key: "7",
    },
    {
        title: "Column 8",
        dataIndex: "address",
        key: "8",
    },
];
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York Park",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 40,
        address: "London Park",
    },
];
const defaultCheckedList = columns.map((item) => item.key);
const App = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const options = columns.map(({ key, title }) => ({
        label: title,
        value: key,
    }));
    const newColumns = columns.map((item) => ({
        ...item,
        hidden: !checkedList.includes(item.key),
    }));
    return (
        <>
            <Divider>Columns displayed</Divider>
            <Checkbox.Group
                value={checkedList}
                options={options}
                onChange={(value) => {
                    setCheckedList(value);
                }}
            />

            <Table
                columns={newColumns}
                dataSource={data}
                style={{
                    marginTop: 24,
                }}
            />
        </>
    );
};
export default App;

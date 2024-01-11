import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const test = () => (
    <Space wrap>
        <Select
            defaultValue="lucy"
            style={{
                width: 150,
            }}
            onChange={handleChange}
            options={[
                {
                    value: "Admin",
                    label: "Admin(Can invite & manage new users)",
                },
                {
                    value: "Member",
                    label: "Member (Can add and edit content)",
                },
            ]}
        />
    </Space>
);
export default test;

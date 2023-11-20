import {
  Menu,
  Table,
  Tabs,
  Dropdown,
  Button,
  message,
  Modal,
  Radio,
  Form,
  Checkbox,
} from "antd";
import React, { useState } from "react";
import Icon from "@ant-design/icons";

import { Input } from "antd";

const { Search } = Input;

const RiskColors = { Low: "green", Medium: "orange", High: "red" };

const { TextArea } = Input;

const items = [
  {
    key: "1",
    label: "Pending",
    children: "",
  },
  {
    key: "2",
    label: "Completed",
    children: "",
  },
];

const columns = [
  {
    title: "User",
    dataIndex: "user",
    render: (_, record) => (
      <div
        style={{
          display: "flex",
          padding: "var(--spacing-space-00, 0px)",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "flex-start",
          gap: "1px",
          "border-radius": "var(--spacing-space-00, 0px)",
        }}
      >
        {record.user} <br />{" "}
        <p
          style={{
            color: "var(--content-secondary, #777676)",
            "text-align": "center",
            "font-family": "Lettera Text LL",
            "font-size": "12px",
            "font-style": "normal",
            "font-weight": "500",
            "line-height": "16px" /* 133.333% */,
          }}
        >
          {record.useremail}
        </p>
      </div>
    ),
  },
  {
    title: "Risk level",
    dataIndex: "risk",
    render: (text) => (
      <div
        style={{
          color: RiskColors[text],
          display: "flex",
          padding:
            "var(--spacing-space-200, 16px) 18px var(--spacing-space-200, 16px) 24px",
          "align-items": "center",
          gap: "6px",
          "align-self": "stretch",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <circle cx="5" cy="5" r="5" fill="#88670F" />
        </svg>
        {text}
      </div>
    ),
  },
  {
    title: "Tigger reason",
    dataIndex: "Tigger",
  },
  {
    title: "In Queue for",
    dataIndex: "Inqueue",
  },
  {
    title: "Data added on",
    dataIndex: "dataon",
  },
  {
    title: "Previously reviewed",
    dataIndex: "reviewed",
    render: (_, record) => (
      <div>
        {record.reviewed} <br />{" "}
        {record.reviewed === "Yes" ? record.reviewdate : <></>}
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    user: "Sam Altman",
    risk: "Medium",
    Tigger: "IP Change",
    Inqueue: "4 days",
    dataon: "12 Oct,2023",
    reviewed: "Yes",
    useremail: "samaltman123@gmail.com",
    reviewdate: "23 Aug, 2023",
  },
  {
    key: "2",
    user: "Sameer Chaubey",
    risk: "High",
    Tigger: "FIFO",
    Inqueue: "4 days",
    dataon: "12 Oct,2023",
    reviewed: "No",
    useremail: "sameerchoubey123@gmail.com",
  },
  {
    key: "3",
    user: "Adarsh Panikkar",
    risk: "Low",
    Tigger: "IP Change",
    Inqueue: "5 days",
    dataon: "12 Oct,2023",
    reviewed: "No",
    useremail: "adarsh@onjuno.com",
    reviewdate: "23 Aug, 2023",
  },
  {
    key: "4",
    user: "Pratik",
    risk: "High",
    Tigger: "FIFO",
    Inqueue: "5 days",
    dataon: "12 Oct,2023",
    reviewed: "Yes",
    useremail: "pratik3@gmail.com",
    reviewdate: "12 Sep, 2023",
  },
];
const onChangetab = (key) => {
  console.log(key);
};

const onSearch = (value, _e, info) => console.log(info?.source, value);

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

// handing buttons:

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Hard Flag</Menu.Item>
    <Menu.Item key="2">Temp Flag</Menu.Item>
    <Menu.Item key="3">Resetricted Flag</Menu.Item>
    <Menu.Item key="4">Un Flag</Menu.Item>
    <Menu.Item key="5">Reviewed</Menu.Item>
  </Menu>
);

export default function Dashboard() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="Tabs">
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChangetab} />
        <Button className="Closebutton" onClick={showModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_18_220)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z"
                fill="#D13B3B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
                fill="#D13B3B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                fill="#D13B3B"
              />
            </g>
            <defs>
              <clipPath id="clip0_18_220">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Close Account
        </Button>
        <Modal
          title="Close Account"
          centered
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical" initialValues={{}}>
            <Form.Item label="Email">
              <Input placeholder="Enter your emilid" />
            </Form.Item>
            <Form.Item label="Radio">
              <Radio.Group>
                <Radio value="Yes"> Yes </Radio>
                <Radio value="No"> Yes </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Reason">
              <Input placeholder="" />
            </Form.Item>

            <Form.Item label="Note">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Charge closure fee</Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>
          </Form>
        </Modal>
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          "border-radius": "var(--spacing-space-00, 0px)",
          background: "var(--background-disabled, #E4E4E4)",
        }}
      />
      {/* Search bar */}

      <div>
        <div>
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: 370,
            }}
          />

          <Dropdown overlay={menu}>
            <Button style={{ marginLeft: 8 }}>
              Trigger reason <Icon type="up" />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu}>
            <Button style={{ marginLeft: 8 }}>
              Completed <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={false}
          style={{
            display: "flex",
            width: "100%",
            padding: "var(--spacing-space-00, 0px)",
            "align-items": "flex-start",
            gap: "var(--spacing-space-00, 0px)",
            "border-radius": "var(--spacing-space-00, 0px)",
          }}
        />
      </div>
    </div>
  );
}

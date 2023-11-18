import { Table, Tabs,Button } from 'antd';
import React, { useState, useEffect } from 'react';


const LOGO_HERE = '/logo-here.png';

const RiskLevels = { Low: 'low', Medium: 'medium', High: 'high', };

const RiskColors = { Low: 'green', Medium: 'orange', High: 'red', };

const UserStatus = { Completed: 'completed', Pending: 'pending', };

const TriggerReasons = { IPChange: 'IP Change', FIFO: 'FIFO', };

const UserList = () => { const [users, setUsers] = useState([])};

const onChangetab = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Pending',
      children: '',
    },
    {
      key: '2',
      label: 'Completed',
      children: '',
    },
  ];



const columns = [
    {
    title: 'User',
    dataIndex: 'user',
    },
    {
        title:'Risk level',
        dataIndex:'risk',
        render: (text)=>
            <div style={{'color':RiskColors[text], 'display': 'flex',
            'padding': 'var(--spacing-space-200, 16px) 18px var(--spacing-space-200, 16px) 24px',
            'align-items': 'center',
            'gap': '6px',
            'align-self': 'stretch' }}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="5" fill="#88670F"/>
            </svg>
            {text}
            </div>
    },
    {
        title:'Tigger reason',
        dataIndex:'Tigger',
        
    },
    {
        title:'In Queue for',
        dataIndex:'Inqueue',
        
    },
    {
        title:'Data added on',
        dataIndex:'dataon',
        
    },{
        title:'Previously reviewed',
        dataIndex:'reviewed',

        
    }

]

const data=[
    {key:'1',
    user:'Sam Altman',
    risk:'Medium',
    Tigger:'IP Change',
    Inqueue: "4 days",
    dataon: "12 Oct,2023",
    reviewed:'Yes',
    useremail:'samaltman123@gmail.com',
    reviewdate:'23 Aug, 2023',
},
{key:'2',
user:'Sameer Chaubey',
risk:'High',
Tigger:'FIFO',
Inqueue: "4 days",
dataon: "12 Oct,2023",
reviewed:'No',
useremail:'sameerchoubey123@gmail.com',
},
{key:'3',
    user:'Adarsh Panikkar',
    risk:'Low',
    Tigger:'IP Change',
    Inqueue: "5 days",
    dataon: "12 Oct,2023",
    reviewed:'No',
    useremail:'adarsh@onjuno.com',
    reviewdate:'23 Aug, 2023',
},
{key:'4',
    user:'Pratik',
    risk:'High',
    Tigger:'FIFO',
    Inqueue: "5 days",
    dataon: "12 Oct,2023",
    reviewed:'Yes',
    useremail:'pratik3@gmail.com',
    reviewdate:'12 Sep, 2023',
},
    
];



const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };




  
  export default function Dashboard (){
  return (
    <div className='Tabs'>
        <div style={{'display': 'flex','flex-direction':'row', 'width':'100%','justifyContent':'space-between'}}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChangetab}/>
        <Button className='Closebutton' styles={{
            ' display': 'inline-flex',
            'height': '40px',
            'padding': '8px var(--spacing-space-200, 16px)',
            'align-items': 'center',
            'gap': '6px',
            'flex-shrink': '0',}}>
        Close Account
        </Button>
        </div>
        
        
      <Table columns={columns} dataSource={data} onChange={onChange} 
      style={{'display': 'flex',
        'width': '1086px',
        'paddin': 'var(--spacing-space-00, 0px',
        'align-items': 'flex-start',
        'gap': 'var(--spacing-space-00, 0px)',
        'border-radius': 'var(--spacing-space-00, 0px)'}} />
    </div>
  )
}



import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            background:'skyblue',color:'black'
        }}>
           <p style={{ fontSize:'30px',justifyContent:'centre',marginTop:'5px'}}> Videofy Makes Life Easy  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer

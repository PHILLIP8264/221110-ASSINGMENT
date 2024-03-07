import React from 'react'

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
  


export default function SidebarMenu(){
    return(
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              StatWheel
            </a>

          </CDBSidebarHeader>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit', textAlign: 'center' }}>
                Home
            </a>
            
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
                
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Chat
            </a>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    )
}
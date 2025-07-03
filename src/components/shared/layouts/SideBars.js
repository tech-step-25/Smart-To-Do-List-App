import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from "./RightSideBar";
import { Outlet } from 'react-router-dom';

export default function SideBars() {
  return (
    <>
    <LeftSideBar />
    <Outlet />
    <RightSideBar />
    </>
  )
}

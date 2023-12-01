import React, { Suspense, useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import styled from "styled-components"
import AdminAnnouncement from "./AdminAnnouncement"
import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"
import AddAdminAnnouncement from "./AdminAnnouncement/AddAdminAnnouncement"
import AdminQna from "./AdminQna"
import AdminPress from "./AdminPress"
import AddAdminQna from "./AdminQna/AddAdminQna"
import AddAdminPress from "./AdminPress/AddAdminPress"
import ModifyAdminQna from "./AdminQna/ModifyAdminQna/index"

export default function Dashboard() {
    const current = useLocation().pathname
    const isMainPage = current.includes("/admin")

    return (
        <SWrapper>
            {isMainPage && <AdminHeader />}
            <SMainWrapper>
                {isMainPage && <AdminSidebar />}
                <Routes>
                    <Route
                        path={"/"}
                        element={<Navigate to={"/admin/dashboard/announcement"} replace />}
                    />
                    <Route path={"/announcement"} element={<AdminAnnouncement />} />
                    <Route path={"/announcement/add"} element={<AddAdminAnnouncement />} />
                    <Route path={"/qna"} element={<AdminQna />} />
                    <Route path={"/qna/add"} element={<AddAdminQna />} />
                    <Route path={"/qna/modify"} element={<ModifyAdminQna />} />
                    <Route path={"/press"} element={<AdminPress />} />
                    <Route path={"/press/add"} element={<AddAdminPress />} />
                </Routes>
            </SMainWrapper>
        </SWrapper>
    )
}

const SWrapper = styled.div`
    max-width: 1920px;
`

const SMainWrapper = styled.div`
    // position: absolute;
    display: flex;
    width: 100%;
    max-width: 1920px;
    overflow-x: hidden;
    overflow-y: scroll;
`

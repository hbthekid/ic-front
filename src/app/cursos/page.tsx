"use client"
import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    codigo: number;
    nombre: string;
    año: string;
    semestre: string;
    sede: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Codigo',
        dataIndex: 'codigo',
        key: 'codigo',
        render:(text) => <a href={`/cursos/${text}`}>{text}</a>
    },
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
    },
    {
        title: 'Año',
        dataIndex: 'año',
        key: 'año',
    },
    {
        title: 'Semestre',
        dataIndex: 'semestre',
        key: 'semestre',
    },
    {
        title: 'Sede',
        dataIndex: 'sede',
        key: 'sede',
    },
];

function Page() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3003/cursos');
            setData(await response.json())
        }
        getData()
    },[])
    return (
        <>
            <h1>IACC</h1>
            <Table columns={columns} dataSource={data}>
            </Table>
        </>
    )
}

export default Page


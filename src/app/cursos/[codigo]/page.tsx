import React from 'react'
import type { ColumnsType } from 'antd/es/table';
import { Space, Table, Tag } from 'antd';

interface AlumnosType {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  direccion: string;
  edad: string;
}

const columns: ColumnsType<AlumnosType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Direccion',
    dataIndex: 'direccion',
    key: 'direccion',
  },
  {
    title: 'Edad',
    dataIndex: 'edad',
    key: 'edad',
  },
];

async function getData(codigo: string) {
  const res = await fetch(`http://localhost:3003/cursos/${codigo}/alumnos`)
  if (!res.ok) {
    throw new Error('Fetching error')
  }

  return res.json()
}

export const revalidate = 0
async function Page({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const data = await getData(codigo)
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default Page
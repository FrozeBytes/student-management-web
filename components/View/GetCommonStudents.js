import React, { useState } from 'react';
import Form from '../Form';
import Table from '../Table';

import services from '../../utils/api/services';

const { backend } = services;

const GetCommonStudents = () => {
  const [students, setStudents] = useState([]);
  const getCommonStudents = async (email) => {
    try {
      const res = await backend.get('/getcommonstudents', {
        params: {
          tutor: email
        },
      });
      setStudents(res.data.students);
    } catch (error) {
      setStudents([]);
    }
  }

  return (
    <main className="w-full">
      <div className="sm:w-5/6 md:w-full md:grid md:grid-cols-2">
        <Form
          data-testid='view-form'
          onSubmitCB={getCommonStudents}
        />
        <Table
          data-testid='view-table'
          columns={['Students']}
          rows={students}
        />
      </div>
    </main>
  )
}

export default GetCommonStudents;
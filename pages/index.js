import Head from 'next/head'
import GetCommonStudents from '../components/View/GetCommonStudents';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <Head>
        <title>Student Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetCommonStudents />
    </div>
  )
}

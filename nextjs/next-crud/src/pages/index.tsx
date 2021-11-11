import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-purple-500 to-blue-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {Component} from 'react'
import { Image } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export default function Home() {
  return (
<div style = {{backgroundColor: 'darkorange'}}>
    <div className={styles.container}>

    <Box>
    <Image src="https://media.bizj.us/view/img/10297921/ut-dallas-naveen-jindal-school-of-management-aerial*1200xx2224-1251-145-0.jpg"/>
    </Box>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={styles.main}>
        <h1 style = {{color: 'green'}} className={styles.title}>
          Schedule Generated:
        </h1>
        <div className={styles.grid}>
          <a style = {{color: 'green', backgroundColor: 'white'}} className={styles.card}>
    
            <h2>CLASS1</h2>
            <p>PROFESSOR: Professor A</p>
            <p>Professor's RateMyProfessor Ranking: A</p>
            <p>Professor's Average Grade: A</p>
            <p>Timings:</p>
            <p>Monday: 3:00 PM - 4:15 PM</p>
            <p>Wednesday: 3:00 PM - 4:15 PM</p>
          </a>        
        </div>

        <div className={styles.grid}>
          <a style = {{color: 'green', backgroundColor: 'white'}} className={styles.card}>
            <h2>CLASS2</h2>
            <p>PROFESSOR: Professor B</p>
            <p>Professor's RateMyProfessor Ranking: B</p>
            <p>Professor's Average Grade: B</p>
            <p>Timings:</p>
            <p>Tuesday: 3:00 PM - 4:15 PM</p>
            <p>Thursday: 3:00 PM - 4:15 PM</p>
          </a>        
        </div>

        <div className={styles.grid}>
          <a style = {{color: 'green', backgroundColor: 'white'}} className={styles.card}>
            <h2>CLASS3</h2>
            <p>PROFESSOR: Professor C</p>
            <p>Professor's RateMyProfessor Ranking: C</p>
            <p>Professor's Average Grade: C</p>
            <p>Timings:</p>
            <p>Friday: 3:00 PM - 4:15 PM</p>
          </a>        
        </div>

        <div className={styles.grid}>
          <a style = {{color: 'green', backgroundColor: 'white'}} className={styles.card}>
            <h2>CLASS4</h2>
            <p>PROFESSOR: Professor B</p>
            <p>Professor's RateMyProfessor Ranking: B</p>
            <p>Professor's Average Grade: B</p>
            <p>Timings:</p>
            <p>Tuesday: 3:00 PM - 4:15 PM</p>
            <p>Thursday: 3:00 PM - 4:15 PM</p>
          </a>        
        </div>

        <div className={styles.grid}>
          <a style = {{color: 'green', backgroundColor: 'white'}} className={styles.card}>
            <h2>CLASS5</h2>
            <p>PROFESSOR: Professor B</p>
            <p>Professor's RateMyProfessor Ranking: B</p>
            <p>Professor's Average Grade: B</p>
            <p>Timings:</p>
            <p>Tuesday: 3:00 PM - 4:15 PM</p>
            <p>Thursday: 3:00 PM - 4:15 PM</p>
          </a>        
        </div>

        <div className={styles.grid}>
          <a style = {{color: 'green', backgroundColor: 'white'}} className={styles.card}>
            <h2>CLASS6</h2>
            <p>PROFESSOR: Professor B</p>
            <p>Professor's RateMyProfessor Ranking: B</p>
            <p>Professor's Average Grade: B</p>
            <p>Timings:</p>
            <p>Tuesday: 3:00 PM - 4:15 PM</p>
            <p>Thursday: 3:00 PM - 4:15 PM</p>
          </a>        
        </div>
      </main>
    </div>
    </div>
    )
}
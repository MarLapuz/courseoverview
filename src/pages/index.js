import React, { useState } from "react"
import { Helmet } from 'react-helmet'

import Header from "../components/Header"
import CourseList from "../components/CourseList"

const courses = [
  {
    title: 'RÜCKEN-FIT (KK)',
    text: 'Ein rumpfstabilisierencies Training mit dem Flexibar, dessen Schwingungen tiefgehende, reflectorische Muskelarbeit...',
    color: '3A52BB'
  }, {
    title: 'Course Name 2',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: '90C544'
  }, {
    title: 'Course Name 3',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: '00C199'
  }, {
    title: 'Course Name 4',
    text: 'Body Pump is the original barbell program for strengthening the entire body. For 65 minutes, you train all major muscle groups...',
    color: 'D31D21'
  }, {
    title: 'Course Name 5',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: '046F9D'
  }, {
    title: 'Course Name 6',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: 'FAC100'
  }, {
    title: 'Course Name 7',
    text: 'Body Pump is the original barbell program for strengthening the entire body. For 65 minutes, you train all major muscle groups...',
    color: '5362C9'
  }, {
    title: 'Course Name 8',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: 'A652BA'
  }, {
    title: 'Course Name 9',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: '27ACC6'
  }, {
    title: 'Course Name 10',
    text: 'Body Pump is the original barbell program for strengthening the entire body. For 65 minutes, you train all major muscle groups...',
    color: 'FA6200'
  }, {
    title: 'Course Name 11',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: 'EA0066'
  }, {
    title: 'Course Name 12',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: '2D4A60'
  }, {
    title: 'Course Name 13',
    text: 'Body Pump is the original barbell program for strengthening the entire body. For 65 minutes, you train all major muscle groups...',
    color: '91A6A5'
  }, {
    title: 'Course Name 14',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: '00B259'
  }, {
    title: 'Course Name 15',
    text: 'Intensive endurance training in which the cardiovascular system is strengthened through the alternation if stress and relief.',
    color: 'D31D21'
  },
]


const Index = () => {
  const [searched, setSearched] = useState([])
  const [searchedValue, setSearchedValue] = useState('')

  const onSearch = e => {
    let value = e.target.value.toLowerCase()
    let filtered = courses.filter(course => {
      return Object.keys(course).some(key =>
        course[key].toLowerCase().includes(value)
      )
    })

    setSearchedValue(value)
    setSearched(filtered)
  }

  return (
    <div className="home">
      <div className="container">
        <Helmet title="Course Overview" />
        <Header title="KURS" subtitle="ÜBERSICHT" onSearch={onSearch} />
        <CourseList list={searched && searchedValue !== '' ? searched : courses } />
      </div>
    </div>
  )
}

export default Index

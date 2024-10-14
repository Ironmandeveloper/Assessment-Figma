'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Footer from "./footer"
import { ProfileType } from "../page"
import Header from "./header"
import ProfileAvatar from "@/app/public/assessts/avatar.png";




const gridItems = ["해외 마케팅", "퍼블리셔", "캐드원(제도사)", "해외 세일즈", "전화상담"]


type ProfilesProp={
    profiles:ProfileType[]
}

export default function Component({profiles}:ProfilesProp) {
  const [currentProfile, setCurrentProfile] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [gridIndex, setGridIndex] = useState(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setGridIndex((prevIndex) => (prevIndex + 1) % gridItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length)
  }

  const prevProfile = () => {
    setCurrentProfile((prev) => (prev - 1 + profiles.length) % profiles.length)
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-teal-500 to-blue-600 text-white p-4 md:p-8">
    <Header />

      <main className="space-y-8">
        <div className="space-y-2">
          <span className="inline-block bg-white bg-opacity-20 text-sm px-3 py-1 rounded-full">플러딩, 파트타임</span>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            최고의 실력을 가진<br />외국인 인재를 찾고 계신가요?
          </h1>
          <p className="text-base md:text-xl mt-4">
            법률 및 인사관리 부담없이<br />1주일 이내에 원격으로 채용해보세요.
          </p>
          <button className="text-teal-500 underline mt-2">개발자가 필요하신가요?</button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-4 w-full md:w-1/2 mb-8 md:mb-0">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">평균 월 120만원</h3>
              <p className="text-sm">임금을 해외 국가를 기준으로 계산합니다.</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">최대 3회 인력교체</h3>
              <p className="text-sm">먼저 채용해보시니 맞지 않아도 걱정하지 마세요.</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">평균 3일, 최대 10일</h3>
              <p className="text-sm">급하게 사람이 필요한 경우 무에도 빠른 채용이 가능합니다.</p>
            </div>
          </div>

          <div className="relative w-full md:w-1/2">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProfile * 100}%)` }}>
                {profiles.map((profile, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <div className="bg-white rounded-lg p-4 mx-auto max-w-xs flex flex-col items-center space-y-2">
                      <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                        <Image src={ProfileAvatar} alt="Profile" width={80} height={80} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{profile.name}</h3>
                      <p className="text-teal-500 text-sm">{profile.role} • {profile.experience}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {profile.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-gray-100 text-teal-500 text-xs px-2 py-1 rounded">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={prevProfile}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-teal-500 shadow-md"
              aria-label="Previous profile"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextProfile}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-teal-500 shadow-md"
              aria-label="Next profile"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 overflow-hidden">
          {gridItems.map((item, index) => (
            <button
              key={item}
              className={`bg-teal-400 bg-opacity-30 rounded-lg p-4 text-center text-sm md:text-base transition-all duration-500 ease-in-out ${
                index === gridIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </main>
      
    </div>
        <Footer />
</>
  )
}
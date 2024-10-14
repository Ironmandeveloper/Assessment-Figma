import Image from "next/image"
import { Code, User, Globe, Settings } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src="https://hyperhire.in/logo-dark.png" alt="Hyperhire logo" width={150} height={40} className="mb-4" />
            <p className="mb-2">우리는 국가의 경계를 넘어 최고의 인재를 매칭해드립니다.</p>
            <p className="mb-2">010-0000-0000</p>
            <p className="mb-4">aaaaa@naver.com</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">상호명</p>
                <p>하이퍼하이어</p>
                <p>Hyperhire India Private Limited</p>
              </div>
              <div>
                <p className="font-semibold">대표 CEO</p>
                <p>김주현</p>
                <p>Juhyun Kim</p>
              </div>
            </div>
          </div>
          
          {[
            { icon: <Code className="w-5 h-5" />, title: "해외 개발자 원격 채용", desc: "바로가기" },
            { icon: <User className="w-5 h-5" />, title: "외국인 원격 채용 (비개발)", desc: "바로가기" },
            { icon: <Globe className="w-5 h-5" />, title: "한국어 가능 외국인 채용", desc: "바로가기" },
            { icon: <Settings className="w-5 h-5" />, title: "해외 개발자 활용 서비스", desc: "바로가기" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-2">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </div>
              <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm inline-flex items-center">
                {item.desc}
                <span className="ml-1 text-xs">{">"}</span>
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">사업자등록번호 CIN</p>
              <p>427-86-01187</p>
              <p>U74110DL2018PTC290812</p>
            </div>
            <div>
              <p className="font-semibold">주소 ADDRESS</p>
              <p>서울특별시 강남구로 478, 지하 1층 238호</p>
              <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          © 2023 Hyperhire
        </div>
      </div>
    </footer>
  )
}
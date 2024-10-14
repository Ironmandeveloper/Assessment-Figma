
export async function GET(request) {
 const data=   [
        {
          name: "Abhishek Gupta",
          role: "마케팅",
          experience: "2y+",
          skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리"],
        },
        {
          name: "Sarah Johnson",
          role: "디자인",
          experience: "3y+",
          skills: ["UI/UX 디자인", "그래픽 디자인", "프로토타이핑"],
        },
        {
          name: "Carlos Rodriguez",
          role: "개발",
          experience: "4y+",
          skills: ["프론트엔드 개발", "React", "Node.js"],
        },
      ]
  
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
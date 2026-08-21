const questions = [
  {
    text: "팀 프로젝트 첫 회의에서 먼저 아이디어를 이야기하는 편이다.",
    dimension: "EI",
    direction: 1
  },

  {
    text: "프로젝트를 시작할 때 기능 목록과 일정을 먼저 정리해두는 편이다.",
    dimension: "JP",
    direction: 1
  },

  {
    text: "새로운 이야기를 들으면 실제 사례보다 그 안에 숨은 의미나 가능성에 더 관심이 간다.",
    dimension: "SN",
    direction: 1
  },

  {
    text: "팀원이 개발 문제로 막혔다고 하면 공감보다 해결 방법부터 생각하는 편이다.",
    dimension: "TF",
    direction: 1
  },

  {
    text: "사람들과 오랜 시간 함께 있으면 혼자 조용히 있는 시간이 필요하다.",
    dimension: "EI",
    direction: -1
  },

  {
    text: "새로운 기술을 배울 때 개념 설명보다 예제 코드를 먼저 보는 편이다.",
    dimension: "SN",
    direction: -1
  },

  {
    text: "마감 기한이 가까워져야 본격적으로 일을 시작하는 경우가 많다.",
    dimension: "JP",
    direction: -1
  },

  {
    text: "의견이 다를 때 상대의 기분보다 무엇이 더 논리적인지를 중요하게 생각하는 편이다.",
    dimension: "TF",
    direction: 1
  },

  {
    text: "여러 사람이 있는 자리에서는 다른 사람의 이야기를 듣기보다 내가 이야기하는 시간이 많은 편이다.",
    dimension: "EI",
    direction: 1
  },

  {
    text: "평소에 '만약 이렇게 된다면?' 같은 상상을 자주 하는 편이다.",
    dimension: "SN",
    direction: 1
  },

  {
    text: "해야 할 일을 미리 끝내두기보다 상황에 맞춰 그때그때 처리하는 것이 편하다.",
    dimension: "JP",
    direction: -1
  },

  {
    text: "중요한 결정을 할 때 주변 사람들에게 어떤 영향을 줄지도 많이 고려하는 편이다.",
    dimension: "TF",
    direction: -1
  },

  {
    text: "새로운 장소에 가면 분위기나 느낌보다 눈에 보이는 구체적인 것들이 먼저 들어오는 편이다.",
    dimension: "SN",
    direction: -1
  },

  {
    text: "별다른 목적 없이 사람들과 만나 시간을 보내는 것도 즐거운 편이다.",
    dimension: "EI",
    direction: 1
  },

  {
    text: "계획에 없던 일이 갑자기 생기면 스트레스를 받는 편이다.",
    dimension: "JP",
    direction: 1
  },

  {
    text: "코드 리뷰에서는 상대가 기분 나쁠 수 있어도 문제점을 정확히 말하는 것이 중요하다고 생각한다.",
    dimension: "TF",
    direction: 1
  },

  {
    text: "이미 잘 알려진 기술보다 새로운 기술이나 도구를 써보는 것이 더 흥미롭다.",
    dimension: "SN",
    direction: 1
  },

  {
    text: "모임이나 단체 채팅방에서 굳이 내가 먼저 말을 꺼내지 않아도 괜찮은 편이다.",
    dimension: "EI",
    direction: -1
  },

  {
    text: "여행을 갈 때 시간표를 자세히 정하기보다 현장에서 결정하는 것을 선호한다.",
    dimension: "JP",
    direction: -1
  },

  {
    text: "다른 사람의 말투나 표정이 평소와 다르면 이유가 무엇인지 신경 쓰이는 편이다.",
    dimension: "TF",
    direction: -1
  }
];

const loadingMessages = [
  "응답 패턴을 수집하고 있습니다...",
  "개발자 성향을 분석하고 있습니다...",
  "밤샘 코딩 가능성을 계산하고 있습니다...",
  "팀플 생존력을 측정하고 있습니다...",
  "디버깅 인내심을 확인하고 있습니다...",
  "마감 직전 집중력을 분석하고 있습니다...",
  "새로운 기술에 대한 호기심을 측정하고 있습니다...",
  "당신에게 어울리는 개발 분야를 찾고 있습니다...",
  "코드보다 설계를 먼저 하는지 확인하고 있습니다...",
  "Stack Overflow 검색 횟수를 예측하고 있습니다...",
  "버그를 만났을 때의 반응을 분석하고 있습니다...",
  "개발자 캐릭터를 생성하고 있습니다..."
];

const resultData = {
  INTJ: {
    title: "아키텍처 설계자",
    emoji: "🧠",
    image: "images/INTJ.png",
    description:
      "코드를 작성하기 전에 전체 구조부터 머릿속에 그리는 타입. 당장 돌아가는 코드보다 확장성과 효율을 중요하게 생각합니다.",
    fields: ["백엔드", "시스템", "AI"],
    stats: {
      "원리 탐구": 95,
      "창의성": 82,
      "실행력": 72,
      "협업 성향": 55,
      "계획성": 92
    }
  },

  INTP: {
    title: "원리 탐구형 개발자",
    emoji: "🔬",
    image: "images/INTP.png",
    description:
      "\"이게 왜 이렇게 동작하지?\"가 궁금해서 끝까지 파고드는 타입. 새로운 알고리즘이나 기술의 원리를 이해하는 과정 자체를 즐깁니다.",
    fields: ["AI", "알고리즘", "백엔드", "연구개발"],
    stats: {
      "원리 탐구": 100,
      "창의성": 92,
      "실행력": 62,
      "협업 성향": 48,
      "계획성": 58
    }
  },

  ENTJ: {
    title: "프로젝트 리더",
    emoji: "👑",
    image: "images/ENTJ.png",
    description:
      "프로젝트가 시작되면 목표와 역할부터 정리하고 싶은 타입. 개발뿐 아니라 일정과 팀 전체의 진행 상황까지 신경 씁니다.",
    fields: ["백엔드", "PM", "시스템 설계"],
    stats: {
      "원리 탐구": 78,
      "창의성": 75,
      "실행력": 98,
      "협업 성향": 83,
      "계획성": 95
    }
  },

  ENTP: {
    title: "프로토타입 장인",
    emoji: "💡",
    image: "images/ENTP.png",
    description:
      "새로운 기술을 보면 \"이걸로 뭐 만들 수 있지?\"부터 생각하는 타입.<br>아이디어를 빠르게 실제 결과물로 만드는 데 강합니다.",
    fields: ["풀스택", "AI 서비스", "스타트업"],
    stats: {
      "원리 탐구": 85,
      "창의성": 100,
      "실행력": 88,
      "협업 성향": 70,
      "계획성": 45
    }
  },

  INFJ: {
    title: "사용자 중심 설계자",
    emoji: "🌌",
    image: "images/INFJ.png",
    description:
      "기능 자체보다 사람들이 이 서비스를 어떻게 사용할지를 고민하는 타입. 복잡한 요구사항을 정리하고 의미 있는 서비스를 만드는 데 강합니다.",
    fields: ["UX", "프론트엔드", "서비스 개발"],
    stats: {
      "원리 탐구": 82,
      "창의성": 87,
      "실행력": 68,
      "협업 성향": 80,
      "계획성": 82
    }
  },

  INFP: {
    title: "감성 몰입형 개발자",
    emoji: "🌱",
    image: "images/INFP.png",
    description:
      "단순히 동작하는 프로그램보다 내가 의미 있다고 느끼는 것을 만들고 싶은 타입. 좋아하는 프로젝트에서는 엄청난 몰입력을 보여줍니다.",
    fields: ["앱", "게임", "프론트엔드"],
    stats: {
      "원리 탐구": 75,
      "창의성": 96,
      "실행력": 60,
      "협업 성향": 67,
      "계획성": 50
    }
  },

  ENFJ: {
    title: "팀플 버프형 개발자",
    emoji: "🤝",
    image: "images/ENFJ.png",
    description:
      "혼자 잘하는 것만큼 팀원들이 잘 협업하는 것도 중요하게 생각하는 타입. 프로젝트에서 자연스럽게 소통의 중심이 됩니다.",
    fields: ["PM", "프론트엔드", "서비스 개발"],
    stats: {
      "원리 탐구": 70,
      "창의성": 82,
      "실행력": 84,
      "협업 성향": 100,
      "계획성": 80
    }
  },

  ENFP: {
    title: "아이디어 폭주 개발자",
    emoji: "🚀",
    image: "images/ENFP.png",
    description:
      "만들고 싶은 것이 계속 생기는 타입. 새로운 기술을 발견하면 일단 써보고 싶고 프로젝트 시작 속도가 매우 빠릅니다.",
    fields: ["프론트엔드", "앱", "서비스 기획"],
    stats: {
      "원리 탐구": 72,
      "창의성": 100,
      "실행력": 90,
      "협업 성향": 88,
      "계획성": 38
    }
  },

  ISTJ: {
    title: "신뢰도 99.9% 개발자",
    emoji: "📋",
    image: "images/ISTJ.png",
    description:
      "요구사항을 하나씩 확인하면서 안정적으로 구현하는 타입. 테스트와 예외 처리를 꼼꼼하게 챙겨 서비스의 안정성을 높여줍니다.",
    fields: ["백엔드", "데이터베이스", "인프라"],
    stats: {
      "원리 탐구": 80,
      "창의성": 58,
      "실행력": 85,
      "협업 성향": 65,
      "계획성": 100
    }
  },

  ISFJ: {
    title: "서비스 수호자",
    emoji: "🛡️",
    image: "images/ISFJ.png",
    description:
      "사용자가 불편해할 작은 부분까지 발견하고 고치려는 타입. 팀에서 누락된 작업이나 버그를 조용히 해결하고 있을 가능성이 높습니다.",
    fields: ["프론트엔드", "QA", "서비스 개발"],
    stats: {
      "원리 탐구": 68,
      "창의성": 65,
      "실행력": 78,
      "협업 성향": 88,
      "계획성": 92
    }
  },

  ESTJ: {
    title: "개발 추진 머신",
    emoji: "⚙️",
    image: "images/ESTJ.png",
    description:
      "회의만 계속하는 것보다 해야 할 일을 정하고 바로 진행하는 것을 좋아하는 타입. 일정 관리와 실제 구현을 빠르게 밀어붙이는 데 강합니다.",
    fields: ["백엔드", "DevOps", "프로젝트 관리"],
    stats: {
      "원리 탐구": 70,
      "창의성": 60,
      "실행력": 100,
      "협업 성향": 78,
      "계획성": 98
    }
  },

  ESFJ: {
    title: "사용자 친화형 개발자",
    emoji: "🌐",
    image: "images/ESFJ.png",
    description:
      "기술적으로 멋진 것만큼 사람들이 편하게 사용할 수 있는지도 중요하게 보는 타입. 팀원과 사용자 피드백을 적극적으로 반영합니다.",
    fields: ["프론트엔드", "UX/UI", "서비스 개발"],
    stats: {
      "원리 탐구": 58,
      "창의성": 72,
      "실행력": 82,
      "협업 성향": 96,
      "계획성": 84
    }
  },

  ISTP: {
    title: "디버깅 해결사",
    emoji: "🛠️",
    image: "images/ISTP.png",
    description:
      "에러가 발생하면 설명서를 읽기보다 직접 이것저것 만져보며 해결하는 타입. 예상치 못한 기술적 문제를 해결할 때 특히 강합니다.",
    fields: ["임베디드", "시스템", "보안"],
    stats: {
      "원리 탐구": 88,
      "창의성": 72,
      "실행력": 96,
      "협업 성향": 50,
      "계획성": 42
    }
  },

  ISFP: {
    title: "디테일 장인 개발자",
    emoji: "🎨",
    image: "images/ISFP.png",
    description:
      "기능뿐 아니라 화면의 느낌과 사용 경험에도 신경을 많이 쓰는 타입. 자신만의 감각을 실제 결과물로 표현하는 데 강합니다.",
    fields: ["프론트엔드", "UI/UX", "게임"],
    stats: {
      "원리 탐구": 60,
      "창의성": 95,
      "실행력": 72,
      "협업 성향": 67,
      "계획성": 48
    }
  },

  ESTP: {
    title: "일단 실행 개발자",
    emoji: "🔥",
    image: "images/ESTP.png",
    description:
      "완벽한 계획을 만드는 것보다 직접 만들어보면서 배우는 타입. 해커톤처럼 짧은 시간 안에 결과물을 만들어야 할 때 강합니다.",
    fields: ["풀스택", "앱", "임베디드"],
    stats: {
      "원리 탐구": 67,
      "창의성": 78,
      "실행력": 100,
      "협업 성향": 73,
      "계획성": 30
    }
  },

  ESFP: {
    title: "경험 중심 개발자",
    emoji: "🎮",
    image: "images/ESFP.png",
    description:
      "사람들이 직접 사용하면서 재미를 느낄 수 있는 결과물을 좋아하는 타입. 눈에 보이는 변화가 빠른 프로젝트에서 특히 동기부여를 받습니다.",
    fields: ["프론트엔드", "게임", "앱"],
    stats: {
      "원리 탐구": 52,
      "창의성": 90,
      "실행력": 92,
      "협업 성향": 92,
      "계획성": 38
    }
  }
};


let current = 0;

let scores = {
  EI: 0,
  SN: 0,
  TF: 0,
  JP: 0
};


function startTest() {
  document
    .getElementById("start")
    .classList.add("hidden");

  document
    .getElementById("quiz")
    .classList.remove("hidden");

  showQuestion();
}


function showQuestion() {
  const question = questions[current];

  document.getElementById("question").innerText =
    question.text;

  document.getElementById("questionNumber").innerText =
    `${current + 1} / ${questions.length}`;

  const progress =
    (current / questions.length) * 100;

  document.getElementById("progress").style.width =
    progress + "%";
}


function answer(value) {
  const question = questions[current];

  scores[question.dimension] +=
    value * question.direction;

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("progress").style.width =
      "100%";

    analyze();
  }
}


function analyze() {
  document
    .getElementById("quiz")
    .classList.add("hidden");

  document
    .getElementById("loading")
    .classList.remove("hidden");

  const messageElement =
    document.getElementById("loadingMessage");

  const shuffledMessages =
    [...loadingMessages].sort(() => Math.random() - 0.5);

  let messageIndex = 0;

  messageElement.innerText =
    shuffledMessages[messageIndex];

  const messageInterval = setInterval(() => {
    messageIndex++;

    // 랜덤 멘트 3개까지만 보여주기
    if (messageIndex < 3) {
      messageElement.innerText =
        shuffledMessages[messageIndex];
    }
  }, 900);

  // 2.7초 후 분석 완료 문구
  setTimeout(() => {
    clearInterval(messageInterval);

    messageElement.innerText =
      "✅ 분석 완료! 당신의 개발자 유형은...";
  }, 2700);

  // 완료 문구를 잠깐 보여준 뒤 결과 화면
  setTimeout(() => {
    showResult();
  }, 3700);
}


function showResult() {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const EorI = scores.EI >= 0 ? "E" : "I";
  const NorS = scores.SN >= 0 ? "N" : "S";
  const TorF = scores.TF >= 0 ? "T" : "F";
  const JorP = scores.JP >= 0 ? "J" : "P";

  const mbti = EorI + NorS + TorF + JorP;
  const data = resultData[mbti];

  document.getElementById("mbtiResult").innerText = mbti;

  document.getElementById("description").innerHTML = `

    <div class="character-wrap">
      <img
        class="character-image"
        src="${data.image}"
        alt="${mbti} 캐릭터"
      >
    </div>

    <div class="developer-title">
      ${data.emoji} ${data.title}
    </div>

    <p class="developer-description">
      ${data.description}
    </p>

    <div class="section-title">💻 개발 능력치</div>

    <div class="stat-container">
      ${Object.entries(data.stats)
        .map(
          ([name, value]) => `
            <div class="stat">
              <div class="stat-header">
                <span>${name}</span>
                <span>${value}</span>
              </div>

              <div class="stat-bar">
                <div
                  class="stat-fill"
                  style="width: ${value}%">
                </div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>

    <div class="section-title">🎯 추천 개발 분야</div>

    <div class="field-tags">
      ${data.fields
        .map(field => `<span class="field-tag">${field}</span>`)
        .join("")}
    </div>

    <p class="result-notice">
      성향을 기반으로 한 재미용 추천입니다 :)
    </p>
  `;

  showPercentages();
}


function scoreToPercent(score) {
  return Math.round(
    ((score + 10) / 20) * 100
  );
}


function showPercentages() {
  const ei = scoreToPercent(scores.EI);
  const sn = scoreToPercent(scores.SN);
  const tf = scoreToPercent(scores.TF);
  const jp = scoreToPercent(scores.JP);

  const dimensions = [
    {
      left: "I",
      right: "E",
      leftPercent: 100 - ei,
      rightPercent: ei
    },

    {
      left: "S",
      right: "N",
      leftPercent: 100 - sn,
      rightPercent: sn
    },

    {
      left: "F",
      right: "T",
      leftPercent: 100 - tf,
      rightPercent: tf
    },

    {
      left: "P",
      right: "J",
      leftPercent: 100 - jp,
      rightPercent: jp
    }
  ];

  const html = dimensions.map(dimension => {
    return `
      <div class="dimension">

        <div class="dimension-label">
          <span>${dimension.left}</span>
          <span>${dimension.right}</span>
        </div>

        <div class="bar">
          <div
            class="bar-fill"
            style="width: ${dimension.leftPercent}%">
          </div>
        </div>

        <div class="percentage">
          <span>${dimension.leftPercent}%</span>
          <span>${dimension.rightPercent}%</span>
        </div>

      </div>
    `;
  }).join("");

  document.getElementById("dimensions").innerHTML = html;
}


function restart() {
  current = 0;

  scores = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  };


  document
    .getElementById("result")
    .classList.add("hidden");

  document
    .getElementById("start")
    .classList.remove("hidden");
}
import { prepare, layout } from 'https://esm.sh/@chenglou/pretext';

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function updateNavbar(index) {
  navLinks.forEach((link, idx) => {
    if (idx === index) {
      link.style.color = "#8a2be2";
      link.style.fontWeight = "700";
    } else {
      link.style.color = "";
      link.style.fontWeight = "";
    }
  });
}

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 30%",
    end: "bottom 30%",
    onEnter: () => updateNavbar(index),
    onEnterBack: () => updateNavbar(index)
  });
});

updateNavbar(0);

navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});

const exploreBtn = document.querySelector(".hero-buttons button:not(.outline)");
const projectsBtn = document.querySelector(".hero-buttons button.outline");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    sections[1].scrollIntoView({ behavior: "smooth" });
  });
}
if (projectsBtn) {
  projectsBtn.addEventListener("click", () => {
    sections[2].scrollIntoView({ behavior: "smooth" });
  });
}

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  const xTo = gsap.quickTo(cursorGlow, "x", { duration: 0.8, ease: "power3.out" });
  const yTo = gsap.quickTo(cursorGlow, "y", { duration: 0.8, ease: "power3.out" });

  let hasMoved = false;

  window.addEventListener("mousemove", (e) => {
    const glowRadius = 300;
    xTo(e.clientX - glowRadius);
    yTo(e.clientY - glowRadius);

    if (!hasMoved) {
      hasMoved = true;
      gsap.to(cursorGlow, { opacity: 1, duration: 0.6 });
    }
  });

  document.addEventListener("mouseleave", () => {
    gsap.to(cursorGlow, { opacity: 0, duration: 0.6 });
    hasMoved = false;
  });
}

const detailData = {
  // About Me
  motivation: {
    section: "About Me",
    title: "WHO",
    body: "세계보건기구(WHO)에 따르면 2030년에는 전 세계 60세 이상 인구가 약 14억 명에 이를 것으로 전망되며," +
      "2050년에는 21억 명까지 증가할 것으로 예상된다고 발표하고있습니다."
  },
  growth: {
    section: "About Me",
    title: "의료 인력 난",
    body: "실제로 OECD는 고령화로 인해 의료 수요가 빠르게 증가하는 반면 의료진 부족 문제가 심화되고 있다고 발표하였으며," +
      " 특히 간호 인력의 업무 과중과 번아웃이 주요 문제로 지적되고 있습니다." +
      " 실제로 한국은 OECD 평균 대비 간호사 수가 낮은 수준으로 보고되고있습니다."
  },
  influence: {
    section: "About Me",
    title: "프로젝트",
    body: "저는 과거에도 이러한 사회적 문제를 인지하고 있었습니다.\n" +
      "의료진이 모든 환자를 직접 수시로 확인해야 하는 한계를 기술로 보완하고자\n" +
      "IoT를 기반한 원격 모니터링 시스템과 AI를 융합해서 위험도를 예측하는 프로젝트를 진행하였습니다."
  },

  challenge: {
    section: "Problem Solving",
    title: "사라진 팀원들",
    body: "팀 프로젝트 진행 중 5명이던 팀원이 조기 취업, 학업 문제 등의 이유로 2명만 남게 되는 예상치 못한 상황을 맞이했습니다. " +
      "프로젝트 마감은 정해져 있었고, 각 분야를 담당하던 인원이 모두 빠지면서 기존 계획을 전면 재검토해야 했습니다. " +
      "이후 중간 점검인 MVP 발표를 망쳐버리는 상황이 왔고, " +
      "팀장으로써 이 위기 상황을 어떻게 헤쳐나갈지 결단이 필요했습니다."
  },
  solution: {
    section: "Problem Solving",
    title: "책임감",
    body: "팀장을 맡은 책임감으로 부족한 인력을 극복하기 위해 네트워크, 전기 회로, 백엔드, 클라우드 기술을 추가 학습했습니다. 한 사람이 여러 역할을 소화해야 하는 만큼 각 분야의 핵심을 빠르게 파악하는 것이 중요했습니다. 매주마다 프로젝트 완성 범위를 정하고 원격이 아닌 팀원과 직접적인 대면 개발로 프로젝트 집중도를 끌어올렸습니다."
  },
  result: {
    section: "Problem Solving",
    title: "결과",
    body: "이후 프로젝트를 성공적으로 마무리하였고 팀원과 교수님의 도움을 받아 해당 프로젝트로 특허 출원까지 진행할 수 있었습니다. 불가능해 보였던 상황에서 포기하지 않고 체계적으로 진행 한 결과, 오히려 프로젝트의 완성도가 높아졌습니다. 특허 출원은 기술적 완성도와 독창성을 공식적으로 인정받은 경험이었으며, 이 성취는 앞으로의 개발 활동에 큰 자신감을 심어주었습니다."
  },
  failure: {
    section: "Failure & Learning",
    title: "Failure",
    body: "프로젝트 초기에 일정 관리와 자기 관리가 부족해 어려움을 겪었습니다. 처음 개발 프로젝트를 맡았을 때 해야 할 일이 많다는 것은 알았지만, 어디서부터 시작해야 할지 몰라 우선순위 없이 흘러가는 시간이 많았습니다. 이로 인해 초반에 진행 속도가 느려지고 팀 전체에 부담이 생기는 경험을 했습니다."
  },
  learning: {
    section: "Failure & Learning",
    title: "Learning",
    body: "책임감을 가지고 프로젝트를 수행하면서 꾸준함의 중요성을 깨닫게 되었습니다. 매일 조금씩 꾸준히 진행하는 것이 한 번에 몰아서 하는 것보다 훨씬 효율적이라는 것을 몸소 체험했습니다. 이후로는 작은 할 일 목록을 매일 작성하고 완료 여부를 스스로 점검하는 습관을 들이기 시작했습니다."
  },
  growth2: {
    section: "Failure & Learning",
    title: "Growth",
    body: "지금은 새로운 기술을 배우는 것을 두려워하지 않고 도전하고 있습니다. 실패 경험이 오히려 단단한 밑바탕이 되었고, 낯선 기술 앞에서도 '일단 해보자'는 마인드로 접근할 수 있게 되었습니다. 두려움보다 성장에 집중하는 지금의 태도가 앞으로도 지속적인 발전의 원동력이 될 것이라고 믿습니다."
  },

  frontend: {
    section: "Tech Stack",
    title: "Frontend",
    body: "HTML, CSS, JavaScript를 활용하여 반응형 웹 인터페이스를 구현합니다. 현재 이 포트폴리오처럼 GSAP를 활용한 애니메이션과 스크롤 인터랙션을 직접 구현할 수 있으며, 사용자 경험을 고려한 UI/UX 설계에도 관심을 갖고 있습니다."
  },
  backend: {
    section: "Tech Stack",
    title: "Backend",
    body: "Java와 REST API를 기반으로 서버 사이드 로직을 구현합니다. 클라이언트와 서버 간의 효율적인 데이터 통신 설계에 집중하며, Spring 프레임워크를 활용한 RESTful API 개발 경험을 쌓고 있습니다. 확장 가능하고 유지보수하기 쉬운 백엔드 아키텍처를 목표로 합니다."
  },
  cloud: {
    section: "Tech Stack",
    title: "Cloud",
    body: "AWS 서비스(EC2, S3, Lambda 등)를 활용하여 클라우드 기반 인프라를 구성하고 운영합니다. AWS 부트캠프 최우수상 수상 경험을 바탕으로 클라우드 아키텍처 설계 역량을 키우고 있으며, Linux 환경에서의 서버 운영 및 배포 자동화에도 능숙합니다."
  },
  embedded: {
    section: "Tech Stack",
    title: "Embedded",
    body: "Raspberry Pi와 다양한 센서를 활용하여 IoT 기기와 웹 서비스를 연동하는 시스템을 구축했습니다. 임베디드 환경에서의 실시간 데이터 수집·처리와 클라우드 연동 파이프라인 구현 경험이 있으며, AI와 융합하는 AIoT 서비스도 구현한 경험이 있습니다."
  },
  ai: {
    section: "Tech Stack",
    title: "AI",
    body: "Python을 기반으로 머신러닝 모델을 구현하고 실제 프로젝트에 적용해왔습니다. 데이터 전처리부터 모델 학습, 평가, 배포까지 전 과정을 경험했으며, AI 기술을 클라우드 인프라와 결합하여 실용적인 서비스로 발전시키는 것을 목표로 지속적으로 학습하고 있습니다."
  },

  samsung: {
    section: "Interested Company",
    title: "Samsung SDS",
    body: "AI, 클라우드, 디지털 전환 기술을 통해 기업 혁신을 지원하는 삼성SDS의 방향성에 깊이 공감합니다. 대규모 엔터프라이즈 시스템을 다루며 실질적인 비즈니스 가치를 창출하는 경험을 쌓고 싶습니다. 제가 관심을 갖고 있는 클라우드·AI 기술을 가장 큰 스케일에서 적용해볼 수 있는 환경이라고 생각합니다."
  },
  aws: {
    section: "Interested Company",
    title: "AWS",
    body: "작년 AWS 부트캠프에서 최우수상을 수상하며 클라우드 기술에 대한 깊은 관심이 생겼습니다. 전 세계 수백만 고객의 인프라를 지원하는 AWS에서 클라우드 서비스를 직접 개발하고 운영해보고 싶습니다. AWS의 혁신적인 기술 문화와 글로벌 영향력은 제가 지향하는 소프트웨어 엔지니어의 성장 환경과 일치합니다."
  },

  short: {
    section: "Future Plan",
    title: "Middle Term",
    body: "정보처리 기사는 물론이고, AWS Solutions Architect, 네트워크 관리사 등 실무와 직결된 자격증을 단계적으로 취득할 계획입니다. 자격증 준비 과정에서 쌓이는 이론적 깊이가 실제 개발에도 큰 도움이 될 것으로 기대하며, 학습 내용을 개인 프로젝트에 즉시 적용하여 이론과 실습을 병행하는 방식으로 진행하겠습니다."
  }
};

const DETAIL_FONT = '15px Pretendard';
const DETAIL_LINE_HEIGHT = 28;
const LABEL_FONT = '11px Pretendard';
const TITLE_FONT = '700 28px Pretendard';
const PADDING_VERTICAL = 80;
const LABEL_HEIGHT = 20;
const TITLE_HEIGHT = 44;
const GAP = 24;

function calcPanelHeight(bodyText, panelWidth) {
  const prepared = prepare(bodyText, DETAIL_FONT);
  const { height: bodyHeight } = layout(prepared, panelWidth, DETAIL_LINE_HEIGHT);
  return PADDING_VERTICAL + LABEL_HEIGHT + TITLE_HEIGHT + GAP + bodyHeight;
}

const activeState = {};

const panelMap = {
  about: "about-detail",
  problem: "problem-detail",
  collaboration: "collaboration-detail",
  failure: "failure-detail",
  tech: "tech-detail",
  company: "company-detail",
  future: "future-detail"
};

function showDetail(panelId, data) {
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const existing = panel.querySelector(".detail-content");
  const hint = panel.querySelector(".detail-hint");

  const panelWidth = panel.offsetWidth - 80; // padding 좌우 40px 제외
  const targetHeight = calcPanelHeight(data.body, panelWidth);

  panel.classList.add("has-content");
  if (hint) hint.style.display = "none";

  const doInject = () => {
    const div = document.createElement("div");
    div.className = "detail-content";
    div.innerHTML = `
      <div class="detail-label">${data.section}</div>
      <div class="detail-title">${data.title}</div>
      <div class="detail-body">${data.body}</div>
    `;
    panel.appendChild(div);

    gsap.fromTo(panel,
      { minHeight: 80 },
      { minHeight: targetHeight, duration: 0.4, ease: "power2.out" }
    );

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        div.classList.add("visible");
      });
    });
  };

  if (existing) {
    existing.classList.remove("visible");
    setTimeout(() => {
      if (existing.parentNode) existing.parentNode.removeChild(existing);
      doInject();
    }, 200);
  } else {
    doInject();
  }
}

function hideDetail(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const existing = panel.querySelector(".detail-content");
  const hint = panel.querySelector(".detail-hint");

  if (existing) {
    existing.classList.remove("visible");
    gsap.to(panel, { minHeight: 80, duration: 0.3, ease: "power2.in" });
    setTimeout(() => {
      if (existing.parentNode) existing.parentNode.removeChild(existing);
      panel.classList.remove("has-content");
      if (hint) hint.style.display = "";
    }, 300);
  }
}

document.querySelectorAll(".block-item").forEach((el) => {
  el.addEventListener("click", () => {
    const sectionId = el.dataset.section;
    const key = el.dataset.key;
    const panelId = panelMap[sectionId];

    if (!key || !panelId || !detailData[key]) return;

    if (activeState[sectionId] === key) {
      activeState[sectionId] = null;
      el.classList.remove("active");
      hideDetail(panelId);
      return;
    }

    const prevActive = document.querySelector(
      `.block-item[data-section="${sectionId}"].active`
    );
    if (prevActive) prevActive.classList.remove("active");

    activeState[sectionId] = key;
    el.classList.add("active");
    showDetail(panelId, detailData[key]);
  });
});

ScrollTrigger.refresh();

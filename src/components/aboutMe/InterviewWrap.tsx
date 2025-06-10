import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import BoldText from "../atoms/text/BoldText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. 이 프로젝트를 시작하게 된 계기는 무엇인가요?</SubTit>
          컴퓨터공학을 전공하며 GPT를 자주 사용하다가, AI에게 맞춰 프롬프트를 수정하는 비효율적인 상황을 경험했습니다. <br />
          원래는 AI가 사람을 도와야 하는데, 오히려 사람이 AI를 돕는 구조에 의문을 가지게 되었습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 기존 LLM 서비스의 어떤 점이 불편했나요?</SubTit>
          대화가 길어질수록 GPT의 속도가 느려지고, 이전 대화를 기억하지 못해 결과 품질이 저하되는 문제점을 체감했습니다. <br />
          이러한 불편함이 사용자의 주도성을 저해한다고 판단했습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 그래서 어떤 프로젝트를 만들고 싶었나요?</SubTit>
          사용자가 주도하고, 시간이 지날수록 작업이 더욱 구체화되는 도구의 필요성을 느꼈습니다. <br />
          <PointText>LLM 사용에서 느낀 불편함과 노하우를 졸업 작품으로 해결</PointText>하고자 했으며, <PointText>프롬프트 엔지니어링의 중요성을 인지</PointText>하고 더 밀접하게 <PointText>상호작용 가능한 프로젝트</PointText>를 개발하고자 풀스택 및 LLM 서비스 개발자로 나아가고 있습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</SubTit>
          항상 <PointText>역지사지 마인드로 사용자 중심 개발을 추구합니다.</PointText> 직관적이고 친숙한 UI 제공과 Chrome Lighthouse를 활용한 성능 최적화에 신경 쓰면서,<br />
          다양한 사용자들이 편리하게 서비스를 이용할 수 있도록 기여하고자 합니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
          지속적인 학습을 위해 스터디와 온라인 강의에 적극 참여하고, <PointText>낯선 기술에도 포기하지 않고 메타인지 방식을 활용</PointText>해 문제 해결 능력을 쌓고 있습니다.<br />
          <BoldText>열린 마음으로 피드백을 소중히 여기고,</BoldText> 개발 과정에서 항상 개선할 점을 찾기 위해 노력하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;




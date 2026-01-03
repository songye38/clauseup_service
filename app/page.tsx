
import ContractsItemClient from "@/components/ContractsItemClient";
import MainBtn from "@/components/Button/MainBtn";
import RenegoBtnClient from "@/components/Button/RenegoBtnClient";
import UploadActionBtn from "@/components/Button/UploadActionBtn";
import RecentContractsItem from "@/components/RecentContractsItem";





export default function Home() {
  const remainCount = 3; // 서버에서 가져온 값이라고 가정
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 20 }}>
      <ContractsItemClient title="첫협상 20251109" />
      <MainBtn />
      <RenegoBtnClient remainCount={remainCount} />
      <UploadActionBtn label="카메라로 촬영하기" type="camera" />
      <UploadActionBtn label="사진 선택하기" type="photo" />
      <UploadActionBtn label="pdf 업로드하기" type="pdf" />

      <RecentContractsItem
        date="251222"
        title="노트폴리오 UXUI 강의 계약서 내용이 길어지면.."
        remainingCount={3}
      />
    </div>
  );
}

import { CircleCheckBig, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

function SurveySuccess({ name, email, selectedMovie, comment, onReset }) {
  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-col p-6 bg-green-50 border border-green-200 rounded-md">
      <div className="flex items-center gap-2 mb-6">
        <CircleCheckBig className="h-5 w-5 text-green-600" />
        <h2 className="text-xl font-bold text-green-800">ส่งแบบสำรวจสำเร็จ!</h2>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex">
          <span className="text-gray-500 w-24 font-bold">ชื่อ:</span>
          <span className="text-black">{name}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-24 font-bold">อีเมล:</span>
          <span className="text-black">{email}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-24 font-bold">หนังที่เลือก:</span>
          <span className="text-purple-700">{selectedMovie}</span>
        </div>
      </div>

      {comment && (
        <div className="mt-4 text-sm border-t border-gray-200 pt-4">
          <p className="text-gray-500 mb-2 font-bold">ความคิดเห็น:</p>
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-black">{comment}</p>
          </div>
        </div>
      )}
      </div>

      <Button
        onClick={onReset}
        className="mt-6 h-10 w-full bg-black text-white hover:brightness-75 cursor-pointer"
      >
        <RefreshCw />
        <span className="text-white">ทำแบบสำรวจใหม่</span>
      </Button>
    </div>
  );
}

export default SurveySuccess;

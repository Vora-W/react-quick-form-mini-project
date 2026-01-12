function SurveySuccess({ name, email, selectedMovie, comment, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-2xl text-center font-bold text-green-500 p-4">
          ส่งแบบสำรวจสำเร็จ
        </h2>
        <div className="flex flex-col items-center justify-between">
          <p className="text-center text-gray-500 p-4">ชื่อ: {name}</p>
          <p className="text-center text-gray-500 p-4">อีเมล: {email}</p>
          <p className="text-center text-gray-500 p-4">เลือกหนัง: {selectedMovie}</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="text-center text-gray-500 p-4">ความคิดเห็น:</p>
          <p className="text-center text-gray-500 p-4">{comment}</p>
        </div>
      </div>
      <button
        onClick={onReset}
        className="bg-black text-white px-4 py-2 rounded-md hover:brightness-75"
      >
        ส่งแบบสำรวจใหม่
      </button>
    </div>
  );
}

export default SurveySuccess;

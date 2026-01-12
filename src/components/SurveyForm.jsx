import MovieList from "./MovieList";
import { movies } from "../data/movies";
import SurveySuccess from "./SurveySuccess";
import { useSurveyForm } from "../hooks/useSurveyForm";
import { Film, Send, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function SurveyForm() {
  const {
    name,
    email,
    selectedMovie,
    comment,
    isSubmitted,
    errors,
    setName,
    setEmail,
    setSelectedMovie,
    setComment,
    handleSubmit,
    resetForm,
  } = useSurveyForm();

  return (
    <>
      <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg">
        <div className="w-full flex items-center gap-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white px-2 py-3">
          <h1 className="text-2xl text-center font-bold text-white p-4 flex items-center gap-2">
            <Film className="h-6 w-6" /> Movie Survey
          </h1>
        </div>

        {!isSubmitted ? (
          <form
            className="flex flex-col items-start justify-start px-6 py-7 text-sm font-bold gap-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid w-full items-center gap-3">
              <Label htmlFor="name">ชื่อ {errors.name && (<span className="text-red-500 font-normal">*</span>)}</Label>
<Input
                  className={`font-normal py-5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black ${errors.name ? "border-red-500 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2" : ""}`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="กรุณากรอกชื่อของคุณ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              {errors.name && (
                <p className="text-red-500 p-1 font-normal">{errors.name}</p>
              )}
            </div>

            <div className="grid w-full items-center gap-3">
              <Label htmlFor="email">อีเมล {errors.email && (<span className="text-red-500 font-normal">*</span>)}</Label>
              <Input
                className={`font-normal py-5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black ${errors.email ? "border-red-500 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2" : ""}`}
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 p-1 font-normal">{errors.email}</p>
              )}
            </div>

            <div className="w-full flex flex-col items-start justify-evenly">
              <p>เลือกหนังที่คุณชอบ {errors.movie && (<span className="text-red-500 font-normal">*</span>)}</p>
              <MovieList
                movies={movies}
                selectedMovie={selectedMovie}
                onChange={(e) => setSelectedMovie(e.target.value)}
                error={errors.movie}
              />
              {errors.movie && (
                <p className="text-red-500 p-1 font-normal">{errors.movie}</p>
              )}
            </div>

            <div className="grid w-full items-center gap-3">
              <Label htmlFor="comment">ความคิดเห็นเกี่ยวกับหนัง</Label>
              <Textarea
                className="font-normal py-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-2 h-24"
                id="comment"
                name="comment"
                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <div className="flex flex-row items-center justify-between border-t border-gray-300 pt-4 -mx-6 px-6 w-[calc(100%+3rem)]">
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                className="bg-white text-black border-gray-300 h-10 cursor-pointer"
              >
                <RefreshCw/>
                รีเซ็ต
              </Button>
              <Button
                type="submit"
                className="bg-linear-to-r from-purple-600 to-indigo-600 text-white hover:brightness-75 h-10 cursor-pointer"
              >
                <Send/>
                ส่งแบบสำรวจ
              </Button>
            </div>
          </form>
        ) : (
          <SurveySuccess
            name={name}
            email={email}
            selectedMovie={selectedMovie}
            comment={comment}
            onReset={resetForm}
          />
        )}
      </div>
    </>
  );
}

export default SurveyForm;

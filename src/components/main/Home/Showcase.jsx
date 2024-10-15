import Button from "../../common/Button";
import Title from "../../common/Title";
import showcase from "/src/assets/girl-showing-sign-speech-bubble-banner-pink.jpg"
export default function Showcase() {
  return (
    <div className="h-screen container mx-auto py-16">
      <div className="flex ">
      <div className="flex  basis-1/2 flex-col gap-10">
        <Title text="Smarter Solutions for Cleaner World" fontSize="text-4xl text-balance text-left font-bold"/>
        <p className="text-gray-700 text-balance">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quisquam eius neque temporibus minima quos quidem quo illo fuga. Soluta?</p>
        <div className="flex gap-10">
          <Button text="Learn more" style="rounded-3xl bg-green-400 inline-flex py-2.5 px-3 "/>
          <Button text="Watch Live" style="rounded-3xl border bg-transparent inline-flex py-2.5 px-3"/>
        </div>
      </div>
      <div className="basis-1/2">
    <img src={showcase} alt="" />
      </div>

      </div>
    </div>
  )
}

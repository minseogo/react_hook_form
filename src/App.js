import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("sample")) 

  return (
    <form onSubmit={handleSubmit(onSubmit)}> {/* a, form submit -> imput, button */}
      <ul>
          <li>
            <label>성함</label>
            <input defaultValue="성함" {...register("wr_name")} />
          </li>

          <li>
            <label>이메일</label>
            <input placeholder="이메일 아이디" {...register("email_part1", { required: "이메일 아이디를 입력해주세요" })} />
            <span>@</span>
            <select {...register("email_part2", { required: "이메일 도메인을 선택해주세요" })}>
              <option value="naver.com">naver.com</option>
              <option value="google.com">google.com</option>
              <option value="daum.net">daum.net</option>
            </select>
            {errors.email_part1 && <span>{errors.email_part1.message}</span>}
            {errors.email_part2 && <span>{errors.email_part2.message}</span>}
          </li>
        

          <li>
          {errors.wr_email && <span>이메일을 입력해주세요</span>}
          <input type="submit" value='send'/>
          </li>
        </ul>
    </form>
  )
}
import { Typography } from "@mui/material"
import Avatar1 from "../../../assets/avatar-1.jpg"

const Comments = (props) => {
  return (
    <div className="p-10 rounded-xl shadow bg-slate-100 z-10 drop-shadow-md m-8">
      <Typography>
        {props.text}
      </Typography>
      <div className="flex flex-row pt-8">
        <img src={Avatar1} alt="bg" className="h-20 w-20 rounded-full mr-4 "/>
        <div className="flex flex-col">
          <Typography sx={{color: "#000000", fontSize: 20, fontWeight: 700}}>
            {props.fullname}
          </Typography>
          <Typography sx={{fontStyle: "italic"}}>
            {props.profession}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Comments

import { Typography } from "@mui/material"

const Comments = (props) => {
  return (
    <div className="flex flex-col justify-between p-10 rounded-xl shadow bg-slate-100 z-10 drop-shadow-md m-8 w-1/3">
      <Typography sx={{fontStyle: "italic"}}>
        {props.text}
      </Typography>
      <div className="flex flex-row pt-8">
        <img src={props.face} alt="bg" className="h-20 w-20 rounded-full mr-4 "/>
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

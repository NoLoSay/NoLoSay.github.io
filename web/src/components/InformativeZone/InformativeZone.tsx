import { Paper, Typography } from "@mui/material"
import Placeholder1 from "../../../assets/placeholder1.png"
import SelfFilm from "../../../assets/selfvideo.png"
import Idea from "../../../assets/idea.png"
import Community from "../../../assets/community.jpg"
import BubbleLeft from "../../../assets/walking.png"
import BubbleRight from "../../../assets/signing.png"


const InformativeZone = (props) => {
  return (
    <div className="flex flex-row place-items-center py-10">
      {props.altDir && <img src={Placeholder1} alt="bg" className="flex h-2/6 w-2/6 m-10" />}
      {props.altImg && <img src={Idea} alt="bg" className="flex h-2/6 w-2/6  m-10"/>}
      {props.bubbleLeft && <img src={BubbleLeft} alt="bg" className="flex h-2/6 w-2/6  m-10"/>}
      <div>
        <Typography sx={{color: "#f5dd42", fontSize: 25, marginX: 15, fontWeight: 700, marginRight: 15}}>
          {props.category}
        </Typography>
        <Typography sx={{color: props.color, fontSize:60, marginX: 15, fontWeight: 700, marginRight: 15}}>
          {props.title}
        </Typography>
        <Typography sx={{color: props.color, fontSize: 25, marginX: 15, fontWeight: 700, marginRight: 15}}>
          {props.text}
        </Typography>

        <Typography sx={{color: "#f5dd42", fontSize: 25, marginX: 15, marginTop: 2, fontWeight: 700, marginRight: 15}}>
          {props.subtext}
        </Typography>
      </div>
      <Paper className="flex" elevation={4}>{props.selffilm && <img src={SelfFilm} alt="bg" className="flex"/>}</Paper>
      {props.community && <img src={Community} alt="bg" className="flex h-2/6 w-2/6 m-10" />}
      {props.bubbleRight && <img src={BubbleRight} alt="bg" className="flex h-2/6 w-2/6  m-10"/>}
    </div>
  )
}

export default InformativeZone

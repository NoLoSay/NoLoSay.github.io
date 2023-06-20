import Comments from "../Comments/Comments"
import Typography from "@mui/material/Typography/Typography"

const CommentsCard = () => {
  return (
    <div className=" p-3 rounded bg-gradient-to-r from-gray-900 to-yellow-400 flex flex-col space-x-2 drop-shadow-md shadow z-20">
      <Typography sx={{color: "#FFFFFF", fontSize: 75, fontWeight: 700, marginY: 6}} className="self-center">
        Ils nous ont fait confiance
      </Typography>
      <div className="flex flex-row space-x-2">
        <Comments type={1} fullname="Maxime Brunet" profession="Aide à la personne" text="Nostrud commodo sunt sit qui duis sint exercitation dolore dolor laborum eiusmod. Non ad dolore excepteur ex irure irure in sint laboris sit. Incididunt minim ad anim consequat proident. Occaecat tempor deserunt mollit id. Consequat sint consectetur velit sunt proident irure irure adipisicing. Laborum consequat Lorem sit et ullamco ex ad exercitation aliquip ut magna incididunt. Nisi Lorem esse eiusmod eu aliqua anim ullamco non."/>
        <Comments type={2} fullname="Fanny Maray" profession="Secretaire" text="Nostrud commodo sunt sit qui duis sint exercitation dolore dolor laborum eiusmod. Non ad dolore excepteur ex irure irure in sint laboris sit. Incididunt minim ad anim consequat proident. Occaecat tempor deserunt mollit id. Consequat sint consectetur velit sunt proident irure irure adipisicing. Laborum consequat Lorem sit et ullamco ex ad exercitation aliquip ut magna incididunt. Nisi Lorem esse eiusmod eu aliqua anim ullamco non."/>
        <Comments type={3} fullname="Austin Kentucky" profession="Membre d'association LSF" text="Nostrud commodo sunt sit qui duis sint exercitation dolore dolor laborum eiusmod. Non ad dolore excepteur ex irure irure in sint laboris sit. Incididunt minim ad anim consequat proident. Occaecat tempor deserunt mollit id. Consequat sint consectetur velit sunt proident irure irure adipisicing. Laborum consequat Lorem sit et ullamco ex ad exercitation aliquip ut magna incididunt. Nisi Lorem esse eiusmod eu aliqua anim ullamco non."/>
      </div>
    </div>
  )
}

export default CommentsCard

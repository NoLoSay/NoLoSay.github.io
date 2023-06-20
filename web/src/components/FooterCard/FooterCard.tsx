import { Button, Typography } from "@mui/material"
import Avatar1 from "../../../assets/avatar-1.jpg"

const FooterCard = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col">
        <Typography >
          N'attendez plus,propagez l'information avec NOLOSAY
        </Typography>
        <Typography >
          Obtenez gratuitement l'application mobile Nolosaydès maintenant !
        </Typography>
        <Button >
          TÉLÉCHARGER
        </Button>
      </div>
      <img src={Avatar1} alt="bg" className="h-20 w-20 rounded-full mr-4 "/>
    </div>
  )
}

export default FooterCard

import { Button, ButtonBase, Typography } from "@mui/material"
import Idea from "../../../assets/nolosay_coeur.png"
import InformativeZone from "../InformativeZone/InformativeZone"

const FooterCard = () => {
  return (
    <div className="flex flex-col place-items-center">
      <div className="flex flex-row place-items-center">
        <div>
          <Typography sx={{fontSize:60, marginX: 15, fontWeight: 700, marginRight: 15}}>
            N'attendez plus,propagez l'information avec NOLOSAY
          </Typography>
          <Typography sx={{fontSize: 25, marginX: 15, fontWeight: 700, marginRight: 15}}>
            Obtenez gratuitement l'application mobile Nolosaydès maintenant !
          </Typography>
          <ButtonBase  sx={{height: '60px', backgroundColor: "#f5dd42", borderRadius: 3, paddingX: 10, paddingY:3, margin: 5, marginLeft: 15, boxShadow: 5}}>
            <Typography sx={{fontSize: 30, fontWeight: 700}}>
              TÉLÉCHARGER
            </Typography>
          </ButtonBase>
        </div>
        <img src={Idea} alt="bg" className="flex h-96 w-96  m-10 mr-52 "/>
      </div>
      <Typography sx={{margin: 3}}>
        NOLOSAY - 2022 - 2023
      </Typography>
    </div>
  )
}

export default FooterCard

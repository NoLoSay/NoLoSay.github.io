import React from "react"
import Background from "../../../assets/flare-bg.png"
import nolosayLogo from "../../../assets/nolosay_white_font.png"
import nolosayHandsLogo from "../../../assets/nolosay_coeur.png"
import loireLogo from "../../../assets/loire-logo.png"
import epiLogo from "../../../assets/epi_blanc.png"
import museeLogo from "../../../assets/logo_chateau_duc.png"
import { Button, Typography, ButtonBase } from "@mui/material"

const HeaderCard = () => {
  return (
    <div className="bg-[url('/assets/flare-bg.png')] -z-20">
      <div className="flex flex-rox justify-between z-30">
        <img src={nolosayLogo} alt="bg" className="w-72 m-16"/>
        <div className="place-items-center">
          <ButtonBase  sx={{height: '30px', backgroundColor: "#f5dd42", borderRadius: 3, paddingX: 2, paddingY: 2, margin: 5 }}>
            CONTACT
          </ButtonBase>
        </div>
      </div>
      <Typography sx={{color: "#ffffff", fontSize: 120, marginLeft: 15, fontWeight: 700, marginRight: 60}} className="z-30">
        Rendre l'accès à l'information à ceux qui en sont privé
      </Typography>
      <Typography sx={{color: "#ffffff", fontSize: 45, marginX: 15, marginRight: 15}}  className="z-30">
        En France, plusieurs millions de personnes sourdes et malentandantes ont des difficultés d'accès à l'information. Soyez déclancheur de ce changement maintenant !
      </Typography>
      <ButtonBase sx={{height: '30px', backgroundColor: "#ffffff", borderRadius: 4, paddingX: 3, paddingY: 3, marginX: 15, marginY:5, fontSize: 20 }}  className="z-30">
        TÉLÉCHARGEZ MAINTENANT
      </ButtonBase>
      <div className="flex flex-row space-x-10 mx-32 z-30">
        <img src={loireLogo} alt="bg" className="h-24 mb-10 z-30"/>
        <img src={epiLogo} alt="bg" className="h-24 mb-10 z-30"/>
        <img src={museeLogo} alt="bg" className="h-24 mb-10 z-30"/>
        {/* <img src={nolosayHandsLogo} alt="bg" className="h-24 flex flex-row blur-lg -bottom-44 self-end"/> */}
      </div>

    </div>
  )
}

export default HeaderCard

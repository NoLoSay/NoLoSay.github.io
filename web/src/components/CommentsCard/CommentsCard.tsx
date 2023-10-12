import Comments from "../Comments/Comments"
import Typography from "@mui/material/Typography/Typography"
import Avatar1 from "../../../assets/avatar-1.jpg"
import Avatar2 from "../../../assets/face2.jpeg"
import Avatar3 from "../../../assets/face3.jpeg"

const CommentsCard = () => {
  return (
    <div className=" p-3 rounded bg-[url('/assets/flare-bg.png')] flex flex-col space-x-2 drop-shadow-md shadow z-20 bg-cover">
      <Typography sx={{color: "#FFFFFF", fontSize: 75, fontWeight: 700, marginY: 6}} className="self-center">
        Ils nous font confiance
      </Typography>
      <div className="flex flex-row ">
        <Comments type={1} face={Avatar1} fullname="Hugo Verges" profession="Directeur du musée des Beaux-arts de Nantes" text={'"En tant que professionnel du milieu culturel, je suis ravi de voir une application qui rend la culture plus accessible. Nous avons collaboré avec cette application pour partager nos expositions en LSF, et cela a ouvert nos portes à un public encore plus diversifié. C\'est une révolution dans la manière dont nous communiquons avec notre public, et je suis impatient de voir comment cela évoluera dans le futur."'}/>
        <Comments type={2} face={Avatar2} fullname="Maria Maray" profession="Proche d'une personne sourde" text={'"Mon fils est sourd, et grâce à cette application, je peux mieux comprendre son monde. Je peux trouver des ressources en LSF pour communiquer avec lui, et je suis constamment émue par les vidéos inspirantes partagées par la communauté. C\'est un moyen fantastique de renforcer nos liens."'}/>
        <Comments type={3} face={Avatar3} fullname="Austin Kentucky" profession="Membre d'association LSF" text={'"Je suis membre actif d\'une association de pratiquants de la LSF depuis des années, et cette application est une véritable révolution pour notre communauté ! Elle nous permet de partager notre passion pour la LSF, de créer du contenu en langue des signes, et de rencontrer d\'autres passionnés. Enfin, une plateforme qui nous comprend et nous rassemble !"'}/>
      </div>
    </div>
  )
}

export default CommentsCard

import InformativeZone from "../InformativeZone/InformativeZone"

const TwoInfos = () => {
  return (
    <div>
      <InformativeZone bubbleRight category="Professionnel" title="Un réseau de collaborateur" text={"Nous collaborons avec un réseau de professionnels, principalement dans le domaine culturel, comme les musées et autres institutions culturelles. Ils intègrent \"Nolosay\", notre application de traduction en langue des signes, offrant ainsi des avantages spéciaux et une nouvelle visibilité à un public élargi, qu'ils n'avaient pas atteint auparavant."} subtext="Ensemble, nous élargissons les horizons de l'accessibilité et de l'inclusion."/>
      <InformativeZone bubbleLeft category="Amélioration" title="A l'écoute des utilisateurs" text={"Nolosay est une toute nouvelle application en constante évolution. Notre engagement envers la communauté des sourds et malentendants, ainsi que nos utilisateurs, est au cœur de notre démarche. Nous grandissons main dans la main, en écoutant attentivement leurs besoins et en adaptant notre application en conséquence."} subtext=" Notre évolution se construit grâce à cette collaboration mutuelle, et ensemble, nous façonnons un monde plus accessible."/>
    </div>
  )
}

export default TwoInfos

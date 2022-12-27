import CardComponent from "../components/CardComponent";
import NavbarComponent from "../components/NavbarComponent";

function OwnerTrackMain() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <CardComponent carNo="DL01AB2903" threat={true} location="MG Road"/>
        <CardComponent carNo="HR03BT3967" threat={true} location="Grand Trunk Road"/>
        <CardComponent carNo="WB32AP1234" threat={false} location="Kali Asthan"/>
        <CardComponent carNo="BR22TP5434" threat={false} location="Dak bunlow"/>
        <CardComponent carNo="UP13AD1784" threat={false} location="Kashi Vishwanath Road"/>
        <CardComponent carNo="WB05YL6234" threat={false} location="Victoria Palace"/>
      </div>
    </>
  );
}

export default OwnerTrackMain;

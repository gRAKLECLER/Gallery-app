import AuthCheck from "@/components/molecules/AuthCheck/AuthCheck";
import Gallerie from "@/components/organism/Gallerie/Gallerie";

export default function GallerieId() {
    return (
    <AuthCheck>
        <Gallerie/>
    </AuthCheck>
    )
  }
  
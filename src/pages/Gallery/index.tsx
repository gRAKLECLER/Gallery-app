import AuthCheck from "@/components/molecules/AuthCheck/AuthCheck";
import Gallerie from "@/components/organism/Gallerie/Gallerie";

export default function Gallery() {
    return (
    <AuthCheck>
        <Gallerie/>
    </AuthCheck>
    )
  }
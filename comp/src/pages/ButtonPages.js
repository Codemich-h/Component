import Button from "../components/ButtonPage";
import { GoBell, GoCloudUpload, GoDatabase, GoFlame, GoBookmark } from "react-icons/go";

function ButtonPage() {
  return <div>
    <div>
    <Button success rounded outline className="mb-5 mt-5 mx-5">
      <GoBell />
      Success
    </Button>
    </div>
    <div>
    <Button warning rounded outline className="mb-5 mt-5 mx-5">
      <GoCloudUpload />
      Warning
    </Button>
    </div>
    <div>
    <Button secondary rounded outline className="mb-5 mt-5 mx-5">
      <GoDatabase />
      Secondary
    </Button>
    </div>
    <div>
    <Button danger rounded outline className="mb-5 mt-5 mx-5">
      <GoFlame />
      Danger
    </Button>
    </div>
    <div>
    <Button primary rounded outline className="mb-5 mt-5 mx-5">
      <GoBookmark />
      Primary
    </Button>
    </div>
  </div>
}

export default ButtonPage;

import { postData } from "./js/postFunc";
import Litepicker from "litepicker";
import { handleSubmit } from "./js/formHandler";
// import { handleSubmit } from "./js/mainFunc.js";
// import { TotalDays } from "./js/formHandler.js"
document.getElementById("subB").addEventListener("click", handleSubmit);

import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"

export {
    handleSubmit,
    postData,
    Litepicker,
    // TotalDays
}




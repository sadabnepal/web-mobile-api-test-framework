import { MAILER_PATH } from "../static/pathConstants";
import { env_receiver_list, env_sender_gmail, env_sender_name } from "../utils/envReader";
import { parseJsonFile } from "../utils/fileSystem";
import { mailSender } from "../utils/mailer";
import { emailBodyTemplate } from "./emailBody";

const bddJsonData = parseJsonFile(MAILER_PATH.WDIO_JSON_MOCHA_FILE);
let state = bddJsonData.stats

let mochaEMailOptions = {
    from: `"${env_sender_name}" <${env_sender_gmail}>`,
    to: env_receiver_list,
    subject: "Automation Execution Report",
    html: emailBodyTemplate(state.tests, state.passes, state.failures, state.pending),
};

mailSender(mochaEMailOptions)
import { MAILER_PATH } from "../static/pathConstants";
import { env_receiver_list, env_sender_gmail, env_sender_name } from "../utils/envReader";
import { parseJsonFile, zipFolder } from "../utils/fileSystem";
import { mailSender } from "../utils/mailer";
import { emailBodyTemplate } from "./emailBody";


const bddJsonData = parseJsonFile(MAILER_PATH.WDIO_JSON_CUCUMBER_FILE);
let result_state = bddJsonData.state

let bdd_test_passed = result_state.passed;
let bdd_test_failed = result_state.failed;
let bdd_test_skipped = result_state.skipped;
let bdd_test_total = bdd_test_passed + bdd_test_failed + bdd_test_skipped;

zipFolder(MAILER_PATH.SOURCE_CUCUMBER_HTML, MAILER_PATH.DESTINATION_CUCUMBER_COMPRESS)

let bddEMailOptions = {
    from: `"${env_sender_name}" <${env_sender_gmail}>`,
    to: env_receiver_list,
    subject: "Automation Execution Report",
    html: emailBodyTemplate(bdd_test_total, bdd_test_passed, bdd_test_failed, bdd_test_skipped),
    attachments: [
        {
            filename: 'cucumber-report.zip',
            path: MAILER_PATH.DESTINATION_CUCUMBER_COMPRESS
        }
    ]
};

mailSender(bddEMailOptions)
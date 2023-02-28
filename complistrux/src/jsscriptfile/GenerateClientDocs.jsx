import React, { Component } from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

    const generateClientDocs = () => {

        loadFile(
            '../testprocedures.docx',
            function (error, content) {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render({
                    COMPANY_NAME : "Matt's Company",
                    SIEM_Solution: "Microsoft Sentinel",
                    End_Point_Manager: "Microsoft Endpoint Manager",
                    Firewall_Solution: "Azure Firewall",
                    Access_Control_Solution: "Azure Active Directory",
                });
                const blob = doc.getZip().generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                }); //Output the document using Data-URI
                saveAs(blob, "output.docx");
            }
            );
        };

export default generateClientDocs;
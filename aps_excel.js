(function () {

    let tmpl = document.createElement("template");

    tmpl.innerHTML = `

    <style>

        * {
            box-sizing: border-box;
        }

        :host {
            display: block;
            width: 100%;
            height: 100%;
            font-family: "72", Arial, Helvetica, sans-serif;
            color: #32363a;
        }

        .container {
            width: 100%;
            height: 100%;
            padding: 20px;
            background: #ffffff;
        }

        .card {
            width: 100%;
            min-height: 100%;
            border: 1px solid #d9d9d9;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            padding: 20px;
        }

        /* HEADER */

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 18px;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .header-icon {
            width: 42px;
            height: 42px;
            border-radius: 8px;
            background: #eaf3ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 21px;
        }

        .title {
            font-size: 18px;
            font-weight: 600;
            color: #1d2d3e;
            margin-bottom: 3px;
        }

        .subtitle {
            font-size: 13px;
            color: #6a6d70;
        }

        .status {
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 6px 10px;
            border-radius: 20px;
            background: #f5f6f7;
            font-size: 12px;
            color: #5b6065;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #6a6d70;
        }

        /* UPLOAD AREA */

        .upload-area {
            border: 2px dashed #b8c7d9;
            border-radius: 9px;
            background: #f8fbff;
            min-height: 145px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            transition: all 0.2s ease;
        }

        .upload-area:hover {
            border-color: #0070f2;
            background: #f2f8ff;
        }

        .upload-area.dragover {
            border-color: #0070f2;
            background: #eaf4ff;
        }

        .upload-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
        }

        .upload-icon {
            font-size: 28px;
            margin-bottom: 3px;
        }

        .upload-main {
            font-size: 14px;
            font-weight: 600;
            color: #32363a;
        }

        .upload-help {
            font-size: 12px;
            color: #6a6d70;
        }

        .browse-button {
            margin-top: 7px;
        }

        #fileInput {
            display: none;
        }

        /* FILE */

        .file-section {
            margin-top: 18px;
        }

        .section-label {
            font-size: 12px;
            font-weight: 600;
            color: #5b6065;
            margin-bottom: 7px;
        }

        .file-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border: 1px solid #d9d9d9;
            border-radius: 7px;
            background: #fafafa;
        }

        .file-info {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .file-icon {
            width: 34px;
            height: 34px;
            border-radius: 6px;
            background: #eaf7ed;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
        }

        .file-name {
            font-size: 13px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .file-size {
            font-size: 11px;
            color: #6a6d70;
            margin-top: 2px;
        }

        /* BUTTONS */

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 18px;
        }

        button {
            height: 34px;
            padding: 0 15px;
            border-radius: 6px;
            font-family: "72", Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
            white-space: nowrap;
        }

        button:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }

        .primary {
            border: 1px solid #0070f2;
            background: #0070f2;
            color: #ffffff;
        }

        .primary:hover:not(:disabled) {
            background: #005cbf;
        }

        .secondary {
            border: 1px solid #0070f2;
            background: #ffffff;
            color: #0070f2;
        }

        .secondary:hover:not(:disabled) {
            background: #f2f8ff;
        }

        .neutral {
            border: 1px solid #c8c8c8;
            background: #ffffff;
            color: #32363a;
        }

        .neutral:hover:not(:disabled) {
            background: #f5f6f7;
        }

        .danger {
            border: 1px solid #d9363e;
            background: #ffffff;
            color: #bb0000;
        }

        .danger:hover:not(:disabled) {
            background: #fff1f1;
        }

        /* SECONDARY ACTIONS */

        .secondary-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }

        /* STATISTICS */

        .statistics {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-top: 20px;
        }

        .stat {
            border: 1px solid #e0e0e0;
            border-radius: 7px;
            padding: 12px;
            background: #ffffff;
        }

        .stat-label {
            font-size: 11px;
            color: #6a6d70;
            margin-bottom: 5px;
        }

        .stat-value {
            font-size: 20px;
            font-weight: 600;
            color: #32363a;
        }

        /* MESSAGE */

        .message {
            margin-top: 14px;
            padding: 10px 12px;
            border-radius: 6px;
            font-size: 12px;
            display: none;
        }

        .message.success {
            display: block;
            background: #f1f9f3;
            border: 1px solid #b7dfbf;
            color: #256f3a;
        }

        .message.error {
            display: block;
            background: #fff3f3;
            border: 1px solid #f0b8b8;
            color: #bb0000;
        }

        .message.info {
            display: block;
            background: #f2f8ff;
            border: 1px solid #b8d7f5;
            color: #005cb9;
        }

    </style>


    <div class="container">

        <div class="card">

            <!-- HEADER -->

            <div class="header">

                <div class="header-left">

                    <div class="header-icon">
                        📊
                    </div>

                    <div>
                        <div class="title">
                            Data Upload
                        </div>

                        <div class="subtitle">
                            Upload and validate your Excel data
                        </div>
                    </div>

                </div>

                <div class="status" id="status">

                    <span class="status-dot" id="statusDot"></span>

                    <span id="statusText">
                        Ready
                    </span>

                </div>

            </div>


            <!-- UPLOAD AREA -->

            <div class="upload-area" id="uploadArea">

                <div class="upload-content">

                    <div class="upload-icon">
                        📁
                    </div>

                    <div class="upload-main">
                        Drop your Excel file here
                    </div>

                    <div class="upload-help">
                        or select a file from your computer
                    </div>

                    <button
                        type="button"
                        class="secondary browse-button"
                        id="browseButton">

                        Browse File

                    </button>

                    <input
                        type="file"
                        id="fileInput"
                        accept=".xlsx,.xls,.csv">

                </div>

            </div>


            <!-- SELECTED FILE -->

            <div class="file-section">

                <div class="section-label">
                    Selected File
                </div>

                <div class="file-card">

                    <div class="file-info">

                        <div class="file-icon">
                            📄
                        </div>

                        <div>

                            <div
                                class="file-name"
                                id="fileName">

                                No file selected

                            </div>

                            <div
                                class="file-size"
                                id="fileSize">

                                —

                            </div>

                        </div>

                    </div>

                    <button
                        type="button"
                        class="danger"
                        id="removeButton"
                        disabled>

                        ✕ Remove

                    </button>

                </div>

            </div>


            <!-- MAIN ACTIONS -->

            <div class="actions">

                <button
                    type="button"
                    class="primary"
                    id="uploadButton"
                    disabled>

                    ↑ Upload

                </button>

                <button
                    type="button"
                    class="secondary"
                    id="validateButton"
                    disabled>

                    ✓ Validate

                </button>

                <button
                    type="button"
                    class="neutral"
                    id="rejectedButton"
                    disabled>

                    ↓ Download Rejected Rows

                </button>

            </div>


            <!-- SECONDARY ACTIONS -->

            <div class="secondary-actions">

                <button
                    type="button"
                    class="neutral"
                    id="templateButton">

                    ↓ Download Template

                </button>

                <button
                    type="button"
                    class="neutral"
                    id="clearButton">

                    Clear

                </button>

            </div>


            <!-- STATISTICS -->

            <div class="statistics">

                <div class="stat">

                    <div class="stat-label">
                        Total Records
                    </div>

                    <div
                        class="stat-value"
                        id="totalRecords">

                        0

                    </div>

                </div>


                <div class="stat">

                    <div class="stat-label">
                        Accepted
                    </div>

                    <div
                        class="stat-value"
                        id="acceptedRecords">

                        0

                    </div>

                </div>


                <div class="stat">

                    <div class="stat-label">
                        Rejected
                    </div>

                    <div
                        class="stat-value"
                        id="rejectedRecords">

                        0

                    </div>

                </div>

            </div>


            <!-- MESSAGE -->

            <div
                class="message"
                id="message">

            </div>

        </div>

    </div>
    `;


    class ExcelAps extends HTMLElement {

        constructor() {

            super();

            this._shadowRoot =
                this.attachShadow({ mode: "open" });

            this._shadowRoot.appendChild(
                tmpl.content.cloneNode(true)
            );


            /* ELEMENTS */

            this.fileInput =
                this._shadowRoot.getElementById("fileInput");

            this.uploadArea =
                this._shadowRoot.getElementById("uploadArea");

            this.browseButton =
                this._shadowRoot.getElementById("browseButton");

            this.uploadButton =
                this._shadowRoot.getElementById("uploadButton");

            this.validateButton =
                this._shadowRoot.getElementById("validateButton");

            this.removeButton =
                this._shadowRoot.getElementById("removeButton");

            this.rejectedButton =
                this._shadowRoot.getElementById("rejectedButton");

            this.templateButton =
                this._shadowRoot.getElementById("templateButton");

            this.clearButton =
                this._shadowRoot.getElementById("clearButton");


            /* FILE INPUT */

            this.browseButton.addEventListener(
                "click",
                () => {

                    this.fileInput.click();

                }
            );


            this.fileInput.addEventListener(
                "change",
                (e) => {

                    if (e.target.files.length > 0) {

                        this.setFile(
                            e.target.files[0]
                        );

                    }

                }
            );


            /* DRAG & DROP */

            this.uploadArea.addEventListener(
                "dragover",
                (e) => {

                    e.preventDefault();

                    this.uploadArea.classList.add(
                        "dragover"
                    );

                }
            );


            this.uploadArea.addEventListener(
                "dragleave",
                () => {

                    this.uploadArea.classList.remove(
                        "dragover"
                    );

                }
            );


            this.uploadArea.addEventListener(
                "drop",
                (e) => {

                    e.preventDefault();

                    this.uploadArea.classList.remove(
                        "dragover"
                    );

                    if (
                        e.dataTransfer.files &&
                        e.dataTransfer.files.length > 0
                    ) {

                        this.setFile(
                            e.dataTransfer.files[0]
                        );

                    }

                }
            );


            /* BUTTON EVENTS */

            this.uploadButton.addEventListener(
                "click",
                () => {

                    this.fireAction("upload");

                }
            );


            this.validateButton.addEventListener(
                "click",
                () => {

                    this.fireAction("validate");

                }
            );


            this.removeButton.addEventListener(
                "click",
                () => {

                    this.fireAction("remove");

                }
            );


            this.rejectedButton.addEventListener(
                "click",
                () => {

                    this.fireAction("downloadRejected");

                }
            );


            this.templateButton.addEventListener(
                "click",
                () => {

                    this.fireAction("downloadTemplate");

                }
            );


            this.clearButton.addEventListener(
                "click",
                () => {

                    this.fireAction("clear");

                }
            );

        }


        /* ============================
           FILE HANDLING
           ============================ */

        setFile(file) {

            this.selectedFile = file;

            let fileName =
                this._shadowRoot.getElementById(
                    "fileName"
                );

            let fileSize =
                this._shadowRoot.getElementById(
                    "fileSize"
                );


            fileName.textContent =
                file.name;

            fileSize.textContent =
                this.formatFileSize(file.size);


            this.uploadButton.disabled = false;
            this.validateButton.disabled = false;
            this.removeButton.disabled = false;


            this.setStatus(
                "File Selected",
                "info"
            );


            this.showMessage(
                "File selected successfully.",
                "info"
            );


            this._firePropertiesChanged({
                fileName: file.name
            });

        }


        clearFile() {

            this.selectedFile = null;

            this.fileInput.value = "";

            this._shadowRoot.getElementById(
                "fileName"
            ).textContent =
                "No file selected";

            this._shadowRoot.getElementById(
                "fileSize"
            ).textContent =
                "—";


            this.uploadButton.disabled = true;
            this.validateButton.disabled = true;
            this.removeButton.disabled = true;
            this.rejectedButton.disabled = true;


            this.setStatus(
                "Ready",
                "default"
            );


            this.showMessage(
                "",
                ""
            );


            this._firePropertiesChanged({
                fileName: ""
            });

        }


        formatFileSize(bytes) {

            if (bytes === 0) {
                return "0 Bytes";
            }

            const units = [
                "Bytes",
                "KB",
                "MB",
                "GB"
            ];

            const i =
                Math.floor(
                    Math.log(bytes) /
                    Math.log(1024)
                );

            return (
                parseFloat(
                    (bytes / Math.pow(1024, i))
                    .toFixed(2)
                ) +
                " " +
                units[i]
            );

        }


        /* ============================
           STATUS
           ============================ */

        setStatus(
            text,
            type
        ) {

            const statusText =
                this._shadowRoot.getElementById(
                    "statusText"
                );

            const statusDot =
                this._shadowRoot.getElementById(
                    "statusDot"
                );


            statusText.textContent =
                text;


            if (type === "success") {

                statusDot.style.background =
                    "#107e3e";

            }
            else if (type === "error") {

                statusDot.style.background =
                    "#bb0000";

            }
            else if (type === "info") {

                statusDot.style.background =
                    "#0070f2";

            }
            else {

                statusDot.style.background =
                    "#6a6d70";

            }

        }


        showMessage(
            text,
            type
        ) {

            const message =
                this._shadowRoot.getElementById(
                    "message"
                );


            message.textContent =
                text;

            message.className =
                "message";


            if (type) {

                message.classList.add(
                    type
                );

            }

        }


        /* ============================
           ACTION EVENTS
           ============================ */

        fireAction(action) {

            this.dispatchEvent(
                new CustomEvent(
                    "action",
                    {
                        detail: {
                            action: action,
                            file: this.selectedFile || null
                        }
                    }
                )
            );


            /*
             * Also expose action as a property
             * so SAC scripting can react to it.
             */

            this._firePropertiesChanged({
                action: action
            });


            /* Default UI behaviour */

            if (action === "remove") {

                this.clearFile();

            }


            if (action === "clear") {

                this.clearFile();

            }

        }


        /* ============================
           SAC PROPERTIES
           ============================ */

        _firePropertiesChanged(
            properties
        ) {

            this.dispatchEvent(
                new CustomEvent(
                    "propertiesChanged",
                    {
                        detail: {
                            properties:
                                properties
                        }
                    }
                )
            );

        }


        get title() {

            return this.getValue("title");

        }

        set title(value) {

            this.setValue(
                "title",
                value
            );

        }


        get subtitle() {

            return this.getValue("subtitle");

        }

        set subtitle(value) {

            this.setValue(
                "subtitle",
                value
            );

        }


        get icon() {

            return this.getValue("icon");

        }

        set icon(value) {

            this.setValue(
                "icon",
                value
            );

        }


        get unit() {

            return this.getValue("unit");

        }

        set unit(value) {

            this.setValue(
                "unit",
                value
            );

        }


        get footer() {

            return this.getValue("footer");

        }

        set footer(value) {

            this.setValue(
                "footer",
                value
            );

        }


        getValue(id) {

            return this._shadowRoot
                .getElementById(id)
                ?.value || "";

        }


        setValue(
            id,
            value
        ) {

            const element =
                this._shadowRoot
                    .getElementById(id);

            if (element) {

                element.value =
                    value;

            }

        }


        static get observedAttributes() {

            return [

                "title",
                "subtitle",
                "icon",
                "unit",
                "footer"

            ];

        }


        attributeChangedCallback(
            name,
            oldValue,
            newValue
        ) {

            if (
                oldValue !== newValue
            ) {

                this[name] =
                    newValue;

            }

        }

    }


    customElements.define(
        "com-fd-djaja-sap-sac-excel-aps",
        ExcelAps
    );

})();

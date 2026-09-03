(function () {

    let _shadowRoot;
    let _id;
    let _result;

    let div;
    let widgetName;
    var Ar = [];

    /* =========================================================
       GLOBAL CSS
       IMPORTANT:
       SAPUI5 XMLView is rendered in the LIGHT DOM.
       Therefore this CSS is intentionally installed in
       document.head instead of relying only on Shadow DOM.
       ========================================================= */

    const ASSET_EXCEL_CSS = `
    
    com-fd-djaja-sap-sac-excel {
        display: block;
        width: 100%;
        height: 100%;
        min-width: 300px;
        font-family: "72", Arial, Helvetica, sans-serif;
    }

    com-fd-djaja-sap-sac-excel * {
        box-sizing: border-box;
    }

    /* =====================================================
       MAIN CARD
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetUploadCard {
        width: 100% !important;
        min-height: 100% !important;
        padding: 18px !important;
        margin: 0 !important;

        background: #ffffff !important;
        border: 1px solid #d9e2ec !important;
        border-radius: 14px !important;

        box-shadow:
            0 2px 5px rgba(0,0,0,0.04),
            0 8px 24px rgba(32,72,104,0.08) !important;

        overflow: auto !important;
    }

    /* =====================================================
       HEADER
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetHeader {
        width: 100% !important;
        min-height: 52px !important;
        margin-bottom: 14px !important;

        display: flex !important;
        align-items: center !important;
    }

    com-fd-djaja-sap-sac-excel .assetHeaderText {
        min-width: 0 !important;
        margin-left: 10px !important;
    }

    com-fd-djaja-sap-sac-excel .assetIcon {
        width: 42px !important;
        height: 42px !important;
        line-height: 42px !important;

        margin-right: 0 !important;

        border-radius: 10px !important;

        background: #eaf3fc !important;
        color: #0a6ed1 !important;

        text-align: center !important;
    }

    com-fd-djaja-sap-sac-excel .assetTitle {
        color: #1d2d3e !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        line-height: 23px !important;
    }

    com-fd-djaja-sap-sac-excel .assetSubtitle {
        color: #6a7885 !important;
        font-size: 11px !important;
        line-height: 17px !important;
    }

    com-fd-djaja-sap-sac-excel .assetHeaderButtons {
        margin-left: auto !important;
        gap: 6px !important;
        display: flex !important;
        align-items: center !important;
    }

    /* =====================================================
       HEADER BUTTONS
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetHeaderButton .sapMBtnInner {
        height: 34px !important;
        min-height: 34px !important;

        padding: 0 12px !important;

        border-radius: 7px !important;

        background: #0a6ed1 !important;
        border-color: #0a6ed1 !important;

        color: #ffffff !important;

        font-size: 11px !important;
        font-weight: 600 !important;
    }

    com-fd-djaja-sap-sac-excel .assetHeaderButton .sapMBtnIcon {
        color: #ffffff !important;
    }

    com-fd-djaja-sap-sac-excel .assetSecondaryButton .sapMBtnInner {
        height: 34px !important;
        min-height: 34px !important;

        padding: 0 11px !important;

        border: 1px solid #d7dde3 !important;
        border-radius: 7px !important;

        background: #f7f8f9 !important;
        color: #334e68 !important;

        font-size: 11px !important;
        font-weight: 600 !important;
    }

    com-fd-djaja-sap-sac-excel .assetSecondaryButton .sapMBtnIcon {
        color: #526777 !important;
    }

    com-fd-djaja-sap-sac-excel .assetSecondaryButton:hover .sapMBtnInner {
        background: #eef2f5 !important;
    }

    /* =====================================================
       STATUS PILL
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetStatus {
        min-height: 30px !important;

        margin-left: 2px !important;
        padding: 5px 10px !important;

        border: 1px solid #d8dee5 !important;
        border-radius: 999px !important;

        background: #f7f8f9 !important;
    }

    com-fd-djaja-sap-sac-excel .assetStatus .sapMObjStatusText {
        font-size: 10px !important;
        font-weight: 700 !important;
    }

    /* =====================================================
       TOOLBAR
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetToolbar {
        width: 100% !important;

        padding: 7px !important;
        margin-bottom: 10px !important;

        border: 1px solid #e0e5ea !important;
        border-radius: 8px !important;

        background: #f8fafb !important;

        display: flex !important;
        align-items: center !important;
    }

    /* =====================================================
       FILE UPLOADER
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetUploader {
        width: auto !important;
        min-width: 245px !important;
    }

    com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupInputMask {
        height: 34px !important;
        min-height: 34px !important;

        border: 1px solid #ccd6df !important;
        border-radius: 7px !important;

        background: #ffffff !important;

        color: #334e68 !important;

        font-size: 11px !important;
    }

    com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupInputMask:hover {
        border-color: #0a6ed1 !important;
    }

    com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupButton {
        height: 34px !important;
        min-height: 34px !important;

        margin-left: 6px !important;

        border-radius: 7px !important;
    }

    com-fd-djaja-sap-sac-excel .assetUploader .sapMBtnInner {
        height: 34px !important;
        min-height: 34px !important;

        border-radius: 7px !important;

        font-size: 11px !important;
        font-weight: 600 !important;
    }

    /* =====================================================
       TOOLBAR BUTTONS
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetToolbarButton .sapMBtnInner {
        height: 34px !important;
        min-height: 34px !important;

        margin-left: 5px !important;
        padding: 0 12px !important;

        border-radius: 7px !important;

        font-size: 11px !important;
        font-weight: 600 !important;
    }

    com-fd-djaja-sap-sac-excel .assetToolbarUpload .sapMBtnInner {
        background: #0a6ed1 !important;
        border-color: #0a6ed1 !important;
        color: #ffffff !important;
    }

    com-fd-djaja-sap-sac-excel .assetToolbarUpload .sapMBtnIcon {
        color: #ffffff !important;
    }

    com-fd-djaja-sap-sac-excel .assetClearButton .sapMBtnInner {
        background: #eef0f2 !important;
        border-color: #d9dde2 !important;
        color: #44546a !important;
    }

    /* =====================================================
       SEARCH
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetToolbarSearch {
        width: 215px !important;
        margin-left: auto !important;
    }

    com-fd-djaja-sap-sac-excel .assetToolbarSearch .sapMInputBaseContentWrapper {
        height: 34px !important;
        border-radius: 7px !important;
        background: #ffffff !important;
    }

    com-fd-djaja-sap-sac-excel .assetToolbarSearch .sapMInputBaseInner {
        height: 34px !important;

        border-radius: 7px !important;

        font-size: 11px !important;
        color: #334e68 !important;
    }

    /* =====================================================
       DRAG & DROP AREA
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetDropZone {
        width: 100% !important;

        min-height: 82px !important;

        padding: 15px 18px !important;

        margin-top: 2px !important;

        border: 1.5px dashed #aebfce !important;
        border-radius: 10px !important;

        background: #f9fbfd !important;

        transition:
            border-color 150ms ease,
            background 150ms ease,
            box-shadow 150ms ease !important;
    }

    com-fd-djaja-sap-sac-excel .assetDropZone:hover {
        border-color: #0a6ed1 !important;
        background: #f5faff !important;

        box-shadow:
            inset 0 0 0 1px rgba(10,110,209,0.08) !important;
    }

    com-fd-djaja-sap-sac-excel .assetDropIcon {
        color: #0a6ed1 !important;
        margin-right: 10px !important;
    }

    com-fd-djaja-sap-sac-excel .assetSelectText {
        color: #334e68 !important;

        font-size: 12px !important;
        font-weight: 600 !important;
    }

    com-fd-djaja-sap-sac-excel .assetHelper {
        color: #788896 !important;

        margin-top: 4px !important;

        font-size: 10px !important;
    }

    /* =====================================================
       REQUIRED COLUMNS
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetRequired {
        width: 100% !important;

        margin-top: 9px !important;

        color: #687887 !important;

        font-size: 10px !important;
        line-height: 16px !important;
    }

    /* =====================================================
       STATISTICS
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetStats {
        width: 100% !important;

        margin-top: 10px !important;

        display: flex !important;
        gap: 7px !important;
    }

    com-fd-djaja-sap-sac-excel .assetMetric {
        flex: 1 1 0 !important;

        min-width: 95px !important;

        padding: 10px 11px !important;

        border: 1px solid #e0e5ea !important;
        border-radius: 9px !important;

        background: #ffffff !important;

        transition:
            box-shadow 150ms ease,
            transform 150ms ease !important;
    }

    com-fd-djaja-sap-sac-excel .assetMetric:hover {
        transform: translateY(-1px) !important;

        box-shadow:
            0 4px 12px rgba(30,70,100,0.08) !important;
    }

    com-fd-djaja-sap-sac-excel .assetMetricLabel {
        color: #718096 !important;

        font-size: 9px !important;
        line-height: 12px !important;
        font-weight: 500 !important;
    }

    com-fd-djaja-sap-sac-excel .assetMetricValue {
        margin-top: 3px !important;

        color: #1d2d3e !important;

        font-size: 15px !important;
        line-height: 19px !important;

        font-weight: 700 !important;
    }

    /* =====================================================
       PREVIEW
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetPreviewBox {
        width: 100% !important;

        margin-top: 12px !important;

        border: 1px solid #e0e5ea !important;
        border-radius: 10px !important;

        background: #ffffff !important;

        overflow: hidden !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewHeader {
        width: 100% !important;

        min-height: 38px !important;

        padding: 8px 12px !important;

        border-bottom: 1px solid #e7ebef !important;

        background: #fafbfc !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTitle {
        color: #1d2d3e !important;

        font-size: 12px !important;
        font-weight: 700 !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewCount {
        margin-left: 8px !important;

        padding: 2px 7px !important;

        border-radius: 999px !important;

        background: #edf4fb !important;

        color: #0a6ed1 !important;

        font-size: 9px !important;
        font-weight: 600 !important;
    }

    /* =====================================================
       PREVIEW TABLE
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetPreviewTable {
        width: 100% !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTable .sapMListTblHeaderCell {
        padding: 7px 8px !important;

        background: #f3f6f8 !important;

        border-bottom: 1px solid #dce3e8 !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTable .sapMListTblHeaderCell .sapMText {
        color: #4b5d6d !important;

        font-size: 9px !important;
        font-weight: 700 !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTable .sapMListTblCell {
        padding: 6px 8px !important;

        border-bottom: 1px solid #edf0f2 !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTable .sapMListTblCell .sapMText {
        color: #334e68 !important;

        font-size: 9px !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTable .sapMLIB:hover {
        background: #f7fbff !important;
    }

    /* =====================================================
       EMPTY PREVIEW
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetPreviewEmpty {
        width: 100% !important;

        min-height: 145px !important;

        padding: 30px 10px !important;

        color: #7a8a9a !important;

        text-align: center !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewEmpty .sapMText {
        color: #7a8a9a !important;

        font-size: 10px !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewEmptyIcon {
        color: #aab7c3 !important;

        margin-bottom: 8px !important;
    }

    /* =====================================================
       FOOTER
       ===================================================== */

    com-fd-djaja-sap-sac-excel .assetFooter {
        width: 100% !important;

        margin-top: 9px !important;

        color: #8a98a5 !important;

        font-size: 9px !important;

        text-align: center !important;
    }

    /* =====================================================
       RESPONSIVE
       ===================================================== */

    @media (max-width: 850px) {

        com-fd-djaja-sap-sac-excel .assetHeader {
            flex-wrap: wrap !important;
            height: auto !important;
        }

        com-fd-djaja-sap-sac-excel .assetHeaderButtons {
            width: 100% !important;

            margin-left: 0 !important;
            margin-top: 9px !important;
        }

        com-fd-djaja-sap-sac-excel .assetToolbar {
            flex-wrap: wrap !important;
        }

        com-fd-djaja-sap-sac-excel .assetToolbarSearch {
            width: 100% !important;

            margin-left: 0 !important;
            margin-top: 7px !important;
        }

        com-fd-djaja-sap-sac-excel .assetStats {
            flex-wrap: wrap !important;
        }

        com-fd-djaja-sap-sac-excel .assetMetric {
            min-width: 30% !important;
        }
    }

    @media (max-width: 520px) {

        com-fd-djaja-sap-sac-excel .assetUploadCard {
            padding: 12px !important;
        }

        com-fd-djaja-sap-sac-excel .assetHeaderButtons {
            gap: 4px !important;
        }

        com-fd-djaja-sap-sac-excel .assetHeaderButton .sapMBtnInner,
        com-fd-djaja-sap-sac-excel .assetSecondaryButton .sapMBtnInner {
            padding: 0 8px !important;
        }

        com-fd-djaja-sap-sac-excel .assetUploader {
            width: 100% !important;
            min-width: 100% !important;
        }

        com-fd-djaja-sap-sac-excel .assetToolbarButton {
            margin-top: 5px !important;
        }

        com-fd-djaja-sap-sac-excel .assetMetric {
            min-width: 46% !important;
        }
    }
    `;

    function installGlobalStyle() {

        if (document.getElementById("assetExcelUploadGlobalStyle")) {
            return;
        }

        var style = document.createElement("style");

        style.id = "assetExcelUploadGlobalStyle";

        style.textContent = ASSET_EXCEL_CSS;

        document.head.appendChild(style);
    }

    installGlobalStyle();


    /* =========================================================
       SHADOW TEMPLATE
       Only used for the SheetJS script.
       UI5 itself is intentionally rendered into LIGHT DOM.
       ========================================================= */

    let tmpl = document.createElement("template");

    tmpl.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
        </style>
    `;


    /* =========================================================
       EXCEL CUSTOM WIDGET
       ========================================================= */

    class Excel extends HTMLElement {

        constructor() {

            super();

            _shadowRoot = this.attachShadow({
                mode: "open"
            });

            _shadowRoot.appendChild(
                tmpl.content.cloneNode(true)
            );

            _id = createGuid();

            this._export_settings = {};

            this._export_settings.title = "";
            this._export_settings.subtitle = "";
            this._export_settings.icon = "";
            this._export_settings.unit = "";
            this._export_settings.footer = "";

            this._firstConnection = 0;

        }


        /* =====================================================
           CONNECTED
           ===================================================== */

        connectedCallback() {

            try {

                if (window.commonApp) {

                    let outlineContainer =
                        commonApp
                            .getShell()
                            .findElements(
                                true,
                                ele =>
                                    ele.hasStyleClass &&
                                    ele.hasStyleClass(
                                        "sapAppBuildingOutline"
                                    )
                            )[0];

                    if (
                        outlineContainer &&
                        outlineContainer.getReactProps
                    ) {

                        let parseReactState = state => {

                            let components = {};

                            let globalState =
                                state.globalState;

                            let instances =
                                globalState.instances;

                            let app =
                                instances.app[
                                    '[{"app":"MAIN_APPLICATION"}]'
                                ];

                            let names = app.names;

                            for (let key in names) {

                                let name = names[key];

                                let obj =
                                    JSON.parse(key).pop();

                                let type =
                                    Object.keys(obj)[0];

                                let id =
                                    obj[type];

                                components[id] = {
                                    type: type,
                                    name: name
                                };

                            }

                            let metadata =
                                JSON.stringify({
                                    components: components,
                                    vars: app.globalVars
                                });

                            if (metadata != this.metadata) {

                                this.metadata = metadata;

                                this.dispatchEvent(
                                    new CustomEvent(
                                        "propertiesChanged",
                                        {
                                            detail: {
                                                properties: {
                                                    metadata:
                                                        metadata
                                                }
                                            }
                                        }
                                    )
                                );

                            }

                        };


                        let subscribeReactStore = store => {

                            this._subscription =
                                store.subscribe({

                                    effect: state => {

                                        parseReactState(state);

                                        return {
                                            result: 1
                                        };

                                    }

                                });

                        };


                        let props =
                            outlineContainer.getReactProps();

                        if (props) {

                            subscribeReactStore(
                                props.store
                            );

                        } else {

                            let oldRenderReactComponent =
                                outlineContainer.renderReactComponent;

                            outlineContainer.renderReactComponent =
                                e => {

                                    let props =
                                        outlineContainer
                                            .getReactProps();

                                    subscribeReactStore(
                                        props.store
                                    );

                                    oldRenderReactComponent.call(
                                        outlineContainer,
                                        e
                                    );

                                };

                        }

                    }

                }

            } catch (e) {

                console.log(
                    "SAC metadata subscription skipped."
                );

            }

        }


        /* =====================================================
           DISCONNECTED
           ===================================================== */

        disconnectedCallback() {

            if (this._subscription) {

                this._subscription();

                this._subscription = null;

            }

        }


        /* =====================================================
           BEFORE UPDATE
           ===================================================== */

        onCustomWidgetBeforeUpdate(
            changedProperties
        ) {

            if (
                "designMode" in
                changedProperties
            ) {

                this._designMode =
                    changedProperties[
                        "designMode"
                    ];

            }

        }


        /* =====================================================
           AFTER UPDATE
           ===================================================== */

        onCustomWidgetAfterUpdate(
            changedProperties
        ) {

            var that = this;

            installGlobalStyle();

            let xlsxjs =
                "https://madhavpandey1478-sys.github.io/vigilant-octo-fiesta/xlsx (1) 1.js";


            async function LoadLibs() {

                try {

                    await loadScript(
                        xlsxjs,
                        _shadowRoot
                    );

                } catch (e) {

                    console.log(e);

                } finally {

                    loadthis(
                        that,
                        changedProperties
                    );

                }

            }

            LoadLibs();

        }


        /* =====================================================
           EXPORT BUTTON
           ===================================================== */

        _renderExportButton() {

            let components =
                this.metadata
                    ? JSON.parse(
                        this.metadata
                    )["components"]
                    : {};

        }


        /* =====================================================
           PROPERTIES CHANGED
           ===================================================== */

        _firePropertiesChanged() {

            this.unit = "";

            this.dispatchEvent(
                new CustomEvent(
                    "propertiesChanged",
                    {
                        detail: {
                            properties: {
                                unit: this.unit
                            }
                        }
                    }
                )
            );

        }


        /* =====================================================
           SETTINGS
           ===================================================== */

        get title() {
            return this._export_settings.title;
        }

        set title(value) {
            this._export_settings.title = value;
        }


        get subtitle() {
            return this._export_settings.subtitle;
        }

        set subtitle(value) {
            this._export_settings.subtitle = value;
        }


        get icon() {
            return this._export_settings.icon;
        }

        set icon(value) {
            this._export_settings.icon = value;
        }


        get unit() {
            return this._export_settings.unit;
        }

        set unit(value) {

            value = _result;

            this._export_settings.unit =
                value;

        }


        get footer() {
            return this._export_settings.footer;
        }

        set footer(value) {
            this._export_settings.footer = value;
        }


        static get observedAttributes() {

            return [
                "title",
                "subtitle",
                "icon",
                "unit",
                "footer",
                "link"
            ];

        }


        attributeChangedCallback(
            name,
            oldValue,
            newValue
        ) {

            if (oldValue != newValue) {

                this[name] = newValue;

            }

        }

    }


    customElements.define(
        "com-fd-djaja-sap-sac-excel",
        Excel
    );


    /* =========================================================
       CREATE UI5 VIEW
       ========================================================= */

    function loadthis(
        that,
        changedProperties
    ) {

        var that_ = that;

        widgetName =
            changedProperties.widgetName;

        if (
            typeof widgetName === "undefined"
        ) {

            widgetName =
                that._export_settings
                    .title
                    .split("|")[0];

        }


        div =
            document.createElement("div");

        div.slot =
            "content_" + widgetName;


        /* =====================================================
           FIRST CONNECTION
           ===================================================== */

        if (that_._firstConnection === 0) {

            let div0 =
                document.createElement("div");


            div0.innerHTML = `
                <?xml version="1.0"?>

                <script
                    id="oView_${widgetName}"
                    name="oView_${widgetName}"
                    type="sapui5/xmlview">

                    <mvc:View
                        height="100%"
                        xmlns="sap.m"
                        xmlns:u="sap.ui.unified"
                        xmlns:f="sap.ui.layout.form"
                        xmlns:core="sap.ui.core"
                        xmlns:mvc="sap.ui.core.mvc"
                        controllerName="myView.Template">

                        <VBox
                            class="assetUploadCard">


                            <!-- =================================
                                 HEADER
                                 ================================= -->

                            <HBox
                                class="assetHeader"
                                alignItems="Center"
                                wrap="Wrap">

                                <HBox
                                    alignItems="Center">

                                    <core:Icon
                                        src="sap-icon://excel-attachment"
                                        size="1.35rem"
                                        class="assetIcon"/>

                                    <VBox
                                        class="assetHeaderText">

                                        <Text
                                            text="Excel Upload"
                                            class="assetTitle"/>

                                        <Text
                                            text="Upload and validate Excel file"
                                            class="assetSubtitle"/>

                                    </VBox>

                                </HBox>


                                <HBox
                                    class="assetHeaderButtons"
                                    alignItems="Center"
                                    wrap="Wrap">

                                    <Button
                                        text="Download Template"
                                        press="onDownloadTemplate"
                                        icon="sap-icon://download"
                                        type="Emphasized"
                                        class="assetHeaderButton"/>


                                    <ObjectStatus
                                        id="statusPill"
                                        text="Ready"
                                        state="None"
                                        class="assetStatus"/>


                                    <Button
                                        text="Download Error Log"
                                        press="onDownloadErrorLog"
                                        icon="sap-icon://document-text"
                                        type="Transparent"
                                        class="assetSecondaryButton"/>


                                    <Button
                                        id="togglePreviewButton"
                                        text="Hide Preview"
                                        press="onTogglePreview"
                                        icon="sap-icon://hide"
                                        type="Transparent"
                                        class="assetSecondaryButton"/>

                                </HBox>

                            </HBox>


                            <!-- =================================
                                 TOOLBAR
                                 ================================= -->

                            <HBox
                                class="assetToolbar"
                                alignItems="Center"
                                wrap="Wrap">


                                <u:FileUploader
                                    id="idfileUploader"
                                    class="assetUploader"
                                    width="auto"
                                    useMultipart="false"
                                    sendXHR="true"
                                    sameFilenameAllowed="false"
                                    buttonText="Choose File"
                                    fileType="XLSM"
                                    placeholder="No file selected"
                                    style="Emphasized"
                                    change="onFileChange"/>


                                <Button
                                    id="__uploadButton"
                                    text="Upload"
                                    press="onValidate"
                                    icon="sap-icon://upload"
                                    type="Emphasized"
                                    class="assetToolbarButton assetToolbarUpload"/>


                                <Button
                                    text="Clear"
                                    press="onClear"
                                    icon="sap-icon://decline"
                                    type="Transparent"
                                    class="assetToolbarButton assetClearButton"/>


                                <Input
                                    id="previewSearch"
                                    class="assetToolbarSearch"
                                    placeholder="Search in preview"
                                    liveChange="onSearchPreview"/>

                            </HBox>


                            <!-- =================================
                                 DROP AREA
                                 ================================= -->

                            <VBox
                                class="assetDropZone">

                                <HBox
                                    alignItems="Center">

                                    <core:Icon
                                        src="sap-icon://upload-to-cloud"
                                        size="1.25rem"
                                        class="assetDropIcon"/>

                                    <VBox>

                                        <Text
                                            text="Drag &amp; drop your XLSM file here"
                                            class="assetSelectText"/>

                                        <Text
                                            text="or click to browse  •  Sheet: Sheet1  •  Maximum 2,000 records"
                                            class="assetHelper"/>

                                    </VBox>

                                </HBox>

                            </VBox>


                            <!-- =================================
                                 REQUIRED COLUMNS
                                 ================================= -->

                            <Text
                                text="Required columns: ID, DESCRIPTION, ASSET_TYPE, COMPANY_CODE, ASSET_CLASS, COST_CENTER, CWIP"
                                class="assetRequired"/>


                            <!-- =================================
                                 STATISTICS
                                 ================================= -->

                            <HBox
                                class="assetStats"
                                wrap="Wrap">


                                <VBox
                                    class="assetMetric">

                                    <Text
                                        text="Rows Read"
                                        class="assetMetricLabel"/>

                                    <Text
                                        id="rowsRead"
                                        text="0"
                                        class="assetMetricValue"/>

                                </VBox>


                                <VBox
                                    class="assetMetric">

                                    <Text
                                        text="Valid Rows"
                                        class="assetMetricLabel"/>

                                    <Text
                                        id="validRows"
                                        text="0"
                                        class="assetMetricValue"/>

                                </VBox>


                                <VBox
                                    class="assetMetric">

                                    <Text
                                        text="Invalid Rows"
                                        class="assetMetricLabel"/>

                                    <Text
                                        id="invalidRows"
                                        text="0"
                                        class="assetMetricValue"/>

                                </VBox>


                                <VBox
                                    class="assetMetric">

                                    <Text
                                        text="Sheet"
                                        class="assetMetricLabel"/>

                                    <Text
                                        id="sheetName"
                                        text="-"
                                        class="assetMetricValue"/>

                                </VBox>


                                <VBox
                                    class="assetMetric">

                                    <Text
                                        text="Columns"
                                        class="assetMetricLabel"/>

                                    <Text
                                        id="columnCount"
                                        text="0"
                                        class="assetMetricValue"/>

                                </VBox>


                                <VBox
                                    class="assetMetric">

                                    <Text
                                        text="Validation"
                                        class="assetMetricLabel"/>

                                    <Text
                                        id="validationStatus"
                                        text="Ready"
                                        class="assetMetricValue"/>

                                </VBox>

                            </HBox>


                            <!-- =================================
                                 PREVIEW
                                 ================================= -->

                            <VBox
                                id="previewBox"
                                class="assetPreviewBox">


                                <HBox
                                    class="assetPreviewHeader"
                                    alignItems="Center">

                                    <Text
                                        text="Preview"
                                        class="assetPreviewTitle"/>

                                    <Text
                                        id="previewCount"
                                        text="0 rows"
                                        class="assetPreviewCount"/>

                                </HBox>


                                <Table
                                    id="previewTable"
                                    class="assetPreviewTable"
                                    visible="false"
                                    items="{/rows}"
                                    growing="true"
                                    growingThreshold="100"
                                    fixedLayout="false">


                                    <columns>

                                        <Column>
                                            <Text text="ID"/>
                                        </Column>

                                        <Column>
                                            <Text text="DESCRIPTION"/>
                                        </Column>

                                        <Column>
                                            <Text text="ASSET_TYPE"/>
                                        </Column>

                                        <Column>
                                            <Text text="COMPANY_CODE"/>
                                        </Column>

                                        <Column>
                                            <Text text="ASSET_CLASS"/>
                                        </Column>

                                        <Column>
                                            <Text text="COST_CENTER"/>
                                        </Column>

                                        <Column>
                                            <Text text="CWIP"/>
                                        </Column>

                                    </columns>


                                    <items>

                                        <ColumnListItem>

                                            <cells>

                                                <Text text="{ID}"/>

                                                <Text text="{DESCRIPTION}"/>

                                                <Text text="{ASSET_TYPE}"/>

                                                <Text text="{COMPANY_CODE}"/>

                                                <Text text="{ASSET_CLASS}"/>

                                                <Text text="{COST_CENTER}"/>

                                                <Text text="{CWIP}"/>

                                            </cells>

                                        </ColumnListItem>

                                    </items>

                                </Table>


                                <VBox
                                    id="previewEmpty"
                                    class="assetPreviewEmpty"
                                    alignItems="Center">

                                    <core:Icon
                                        src="sap-icon://table-view"
                                        size="1.6rem"
                                        class="assetPreviewEmptyIcon"/>

                                    <Text
                                        text="No preview available. Upload a file to view validated rows."/>

                                </VBox>


                            </VBox>


                            <Text
                                text="The file will be validated before the data is sent to SAC."
                                class="assetFooter"/>

                        </VBox>

                    </mvc:View>

                </script>
            `;


            _shadowRoot.appendChild(div0);


            /* =================================================
               EXISTING FRAGMENT
               ================================================= */

            let div1 =
                document.createElement("div");


            div1.innerHTML = `
                <script
                    id="myXMLFragment_${widgetName}"
                    type="sapui5/fragment">

                    <core:FragmentDefinition
                        xmlns="sap.m"
                        xmlns:core="sap.ui.core">

                        <SelectDialog
                            title="Partner Number"
                            class="sapUiPopupWithPadding"
                            items="{${widgetName}>/}"
                            search="_handleValueHelpSearch"
                            confirm="_handleValueHelpClose"
                            cancel="_handleValueHelpClose"
                            multiSelect="true"
                            showClearButton="true"
                            rememberSelections="true">

                            <StandardListItem
                                icon="{${widgetName}>ProductPicUrl}"
                                iconDensityAware="false"
                                iconInset="false"
                                title="{${widgetName}>partner}"
                                description="{${widgetName}>partner}"/>

                        </SelectDialog>

                    </core:FragmentDefinition>

                </script>
            `;


            _shadowRoot.appendChild(div1);


            let div2 =
                document.createElement("div");


            div2.innerHTML =
                '<div id="ui5_content_' +
                widgetName +
                '" name="ui5_content_' +
                widgetName +
                '">' +
                '<slot name="content_' +
                widgetName +
                '"></slot>' +
                '</div>';


            _shadowRoot.appendChild(div2);


            /*
             * IMPORTANT:
             * UI5 view is placed in LIGHT DOM.
             * Global CSS above targets this DOM.
             */

            that_.appendChild(div);


            var mapcanvas_divstr =
                _shadowRoot.getElementById(
                    "oView_" + widgetName
                );


            var mapcanvas_fragment_divstr =
                _shadowRoot.getElementById(
                    "myXMLFragment_" + widgetName
                );


            Ar.push({
                id: widgetName,
                div: mapcanvas_divstr,
                divf: mapcanvas_fragment_divstr
            });

        }


        that_._renderExportButton();


        /* =====================================================
           UI5 INIT
           ===================================================== */

        sap.ui.getCore().attachInit(
            function () {

                "use strict";


                /* =============================================
                   CONTROLLER DEPENDENCIES
                   ============================================= */

                sap.ui.define(
                    [
                        "jquery.sap.global",
                        "sap/ui/core/mvc/Controller",
                        "sap/ui/model/json/JSONModel",
                        "sap/m/MessageToast",
                        "sap/ui/core/library",
                        "sap/ui/core/Core",
                        "sap/ui/model/Filter",
                        "sap/m/library",
                        "sap/m/MessageBox",
                        "sap/ui/unified/DateRange",
                        "sap/ui/core/format/DateFormat",
                        "sap/ui/model/BindingMode",
                        "sap/ui/core/Fragment",
                        "sap/m/Token",
                        "sap/ui/model/FilterOperator",
                        "sap/ui/model/odata/ODataModel",
                        "sap/m/BusyDialog"
                    ],

                    function (
                        jQuery,
                        Controller,
                        JSONModel,
                        MessageToast,
                        coreLibrary,
                        Core,
                        Filter,
                        mobileLibrary,
                        MessageBox,
                        DateRange,
                        DateFormat,
                        BindingMode,
                        Fragment,
                        Token,
                        FilterOperator,
                        ODataModel,
                        BusyDialog
                    ) {

                        "use strict";


                        var busyDialog =
                            new BusyDialog({});


                        /* =========================================
                           CONTROLLER
                           ========================================= */

                        return Controller.extend(
                            "myView.Template",
                            {


                                /* =================================
                                   INIT
                                   ================================= */

                                onInit: function () {

                                    that._previewData = [];

                                    that._errorLog = [];

                                    that._fileName = "";

                                    that._previewVisible = true;

                                    that._setUploadStats(
                                        0,
                                        0,
                                        0,
                                        "-",
                                        0,
                                        "Ready"
                                    );


                                    if (
                                        that._firstConnection === 0
                                    ) {

                                        that._firstConnection = 1;

                                    }

                                },


                                /* =================================
                                   FILE CHANGE
                                   ================================= */

                                onFileChange: function (e) {

                                    var file =
                                        e.getParameter(
                                            "files"
                                        ) &&
                                        e.getParameter(
                                            "files"
                                        )[0];


                                    that._fileName =
                                        file
                                            ? file.name
                                            : "";


                                    if (file) {

                                        that._setStatus(
                                            "File Selected",
                                            "Information"
                                        );

                                        MessageToast.show(
                                            "Selected: " +
                                            file.name
                                        );

                                    }

                                },


                                /* =================================
                                   VALIDATE / UPLOAD
                                   ================================= */

                                onValidate: function (e) {

                                    var fU =
                                        this
                                            .getView()
                                            .byId(
                                                "idfileUploader"
                                            );


                                    /*
                                     * KEEPING THE ORIGINAL
                                     * WORKING SELECTOR
                                     */

                                    var input =
                                        document.querySelector(
                                            "#__xmlview1--idfileUploader-fu"
                                        );


                                    var file =
                                        input &&
                                        input.files
                                            ? input.files[0]
                                            : null;


                                    var this_ = this;


                                    if (!file) {

                                        this._setStatus(
                                            "No File",
                                            "Warning"
                                        );

                                        MessageToast.show(
                                            "Please choose an XLSM file first."
                                        );

                                        return;

                                    }


                                    this_._errorLog = [];

                                    this_._fileName =
                                        file.name || "";


                                    this_.wasteTime();


                                    this_._setStatus(
                                        "Validating",
                                        "Information"
                                    );


                                    var reader =
                                        new FileReader();


                                    reader.onload =
                                        async function (e) {

                                            try {

                                                var strCSV =
                                                    e.target.result;


                                                /*
                                                 * READ EXCEL
                                                 */

                                                var workbook =
                                                    XLSX.read(
                                                        strCSV,
                                                        {
                                                            type: "binary"
                                                        }
                                                    );


                                                var result_final =
                                                    [];

                                                var result =
                                                    [];

                                                var correctsheet =
                                                    false;

                                                var sheetColumnCount =
                                                    0;


                                                /*
                                                 * FIND Sheet1
                                                 */

                                                workbook.SheetNames
                                                    .forEach(
                                                        function (
                                                            sheetName
                                                        ) {

                                                            if (
                                                                sheetName ===
                                                                "Sheet1"
                                                            ) {

                                                                correctsheet =
                                                                    true;


                                                                var csv =
                                                                    XLSX
                                                                        .utils
                                                                        .sheet_to_csv(
                                                                            workbook
                                                                                .Sheets[
                                                                                    sheetName
                                                                                ]
                                                                        );


                                                                if (
                                                                    csv.length
                                                                ) {

                                                                    result.push(
                                                                        csv
                                                                    );

                                                                }


                                                                sheetColumnCount =
                                                                    csv.length
                                                                        ? csv
                                                                            .split(
                                                                                "[$@~!~@$]"
                                                                            )[0]
                                                                            .split(
                                                                                "[#@~!~@#]"
                                                                            )
                                                                            .length
                                                                        : 0;


                                                                result =
                                                                    result.join(
                                                                        "[$@~!~@$]"
                                                                    );

                                                            }

                                                        }
                                                    );


                                                this_._setUploadStats(
                                                    0,
                                                    0,
                                                    0,
                                                    correctsheet
                                                        ? "Sheet1"
                                                        : "-",
                                                    sheetColumnCount,
                                                    "Validating"
                                                );


                                                /*
                                                 * SHEET CHECK
                                                 */

                                                if (
                                                    !correctsheet
                                                ) {

                                                    this_._addError(
                                                        "Template",
                                                        "Required sheet 'Sheet1' was not found."
                                                    );


                                                    this_._setUploadStats(
                                                        0,
                                                        0,
                                                        0,
                                                        "-",
                                                        0,
                                                        "Invalid"
                                                    );


                                                    MessageToast.show(
                                                        "Please upload the correct file. Sheet1 is required."
                                                    );


                                                    return;

                                                }


                                                /*
                                                 * SPLIT ROWS
                                                 */

                                                var chunks =
                                                    result.split(
                                                        "[$@~!~@$]"
                                                    );


                                                var lengthfield =
                                                    chunks[0]
                                                        .split(
                                                            "[#@~!~@#]"
                                                        )
                                                        .length;


                                                var rowsRead =
                                                    Math.max(
                                                        chunks.length -
                                                        1,
                                                        0
                                                    );


                                                this_._setUploadStats(
                                                    rowsRead,
                                                    0,
                                                    0,
                                                    "Sheet1",
                                                    lengthfield,
                                                    "Validating"
                                                );


                                                /*
                                                 * COLUMN CHECK
                                                 */

                                                if (
                                                    lengthfield !== 7
                                                ) {

                                                    this_._addError(
                                                        "Columns",
                                                        "Expected 7 columns, but found " +
                                                        lengthfield +
                                                        "."
                                                    );


                                                    this_._setUploadStats(
                                                        rowsRead,
                                                        0,
                                                        rowsRead,
                                                        "Sheet1",
                                                        lengthfield,
                                                        "Invalid"
                                                    );


                                                    MessageToast.show(
                                                        "Please upload the correct file. Expected 7 columns."
                                                    );


                                                    return;

                                                }


                                                /*
                                                 * PROCESS RECORDS
                                                 */

                                                for (
                                                    var i = 1;
                                                    i < chunks.length;
                                                    i++
                                                ) {

                                                    if (
                                                        chunks[i].length >
                                                        0
                                                    ) {

                                                        var rec =
                                                            chunks[i]
                                                                .split(
                                                                    "[#@~!~@#]"
                                                                );


                                                        if (
                                                            rec.length ===
                                                            7
                                                        ) {

                                                            var vals =
                                                                rec.map(
                                                                    function (
                                                                        v
                                                                    ) {

                                                                        return (
                                                                            v ==
                                                                            null
                                                                        )
                                                                            ? ""
                                                                            : String(
                                                                                v
                                                                            ).trim();

                                                                    }
                                                                );


                                                            var len =
                                                                vals
                                                                    .join(
                                                                        ""
                                                                    )
                                                                    .length;


                                                            if (
                                                                len > 0
                                                            ) {

                                                                result_final.push(
                                                                    {
                                                                        ID:
                                                                            vals[0],

                                                                        DESCRIPTION:
                                                                            vals[1],

                                                                        ASSET_TYPE:
                                                                            vals[2],

                                                                        COMPANY_CODE:
                                                                            vals[3],

                                                                        ASSET_CLASS:
                                                                            vals[4],

                                                                        COST_CENTER:
                                                                            vals[5],

                                                                        CWIP:
                                                                            vals[6]
                                                                    }
                                                                );

                                                            }

                                                        }

                                                    }

                                                }


                                                /*
                                                 * EMPTY RECORD CHECK
                                                 */

                                                if (
                                                    result_final.length ===
                                                    0
                                                ) {

                                                    this_._addError(
                                                        "Records",
                                                        "There is no record to be uploaded."
                                                    );


                                                    this_._setUploadStats(
                                                        rowsRead,
                                                        0,
                                                        rowsRead,
                                                        "Sheet1",
                                                        7,
                                                        "Invalid"
                                                    );


                                                    fU.setValue("");


                                                    MessageToast.show(
                                                        "There is no record to be uploaded"
                                                    );


                                                    return;

                                                }


                                                /*
                                                 * MAXIMUM 2000
                                                 */

                                                if (
                                                    result_final.length >=
                                                    2001
                                                ) {

                                                    this_._addError(
                                                        "Limit",
                                                        "Maximum records are 2000. Found " +
                                                        result_final.length +
                                                        "."
                                                    );


                                                    this_._setUploadStats(
                                                        rowsRead,
                                                        0,
                                                        result_final.length,
                                                        "Sheet1",
                                                        7,
                                                        "Invalid"
                                                    );


                                                    fU.setValue("");


                                                    MessageToast.show(
                                                        "Maximum records are 2000."
                                                    );


                                                    return;

                                                }


                                                /*
                                                 * PREVIEW
                                                 */

                                                this_._previewData =
                                                    result_final.slice();


                                                this_._errorLog = [];


                                                this_._bindPreview(
                                                    this_._previewData
                                                );


                                                this_._setUploadStats(
                                                    rowsRead,
                                                    result_final.length,
                                                    Math.max(
                                                        rowsRead -
                                                        result_final.length,
                                                        0
                                                    ),
                                                    "Sheet1",
                                                    7,
                                                    "Valid"
                                                );


                                                /*
                                                 * SAC RESULT
                                                 */

                                                _result =
                                                    JSON.stringify(
                                                        result_final
                                                    );


                                                that._firePropertiesChanged();


                                                this.settings = {};

                                                this.settings.result =
                                                    "";


                                                that.dispatchEvent(
                                                    new CustomEvent(
                                                        "onStart",
                                                        {
                                                            detail: {
                                                                settings:
                                                                    this.settings
                                                            }
                                                        }
                                                    )
                                                );


                                                fU.setValue("");


                                                MessageToast.show(
                                                    result_final.length +
                                                    " row(s) validated successfully."
                                                );


                                            } catch (err) {

                                                console.error(err);


                                                this_._addError(
                                                    "Read Error",
                                                    err.message ||
                                                    "Unable to read the Excel file."
                                                );


                                                this_._setUploadStats(
                                                    0,
                                                    0,
                                                    0,
                                                    "-",
                                                    0,
                                                    "Invalid"
                                                );


                                                MessageToast.show(
                                                    "Unable to read the Excel file."
                                                );


                                            } finally {

                                                this_.runNext();

                                            }

                                        };


                                    reader.onerror =
                                        function () {

                                            this_._addError(
                                                "File Error",
                                                "The selected file could not be read."
                                            );


                                            this_._setStatus(
                                                "Invalid",
                                                "Error"
                                            );


                                            this_.runNext();


                                            MessageToast.show(
                                                "The selected file could not be read."
                                            );

                                        };


                                    reader.readAsBinaryString(
                                        file
                                    );

                                },


                                /* =================================
                                   DOWNLOAD TEMPLATE
                                   ================================= */

                                onDownloadTemplate:
                                    function () {

                                        if (
                                            typeof XLSX ===
                                            "undefined"
                                        ) {

                                            MessageToast.show(
                                                "Excel library is still loading. Please try again."
                                            );

                                            return;

                                        }


                                        var headers = [
                                            [
                                                "ID",
                                                "DESCRIPTION",
                                                "ASSET_TYPE",
                                                "COMPANY_CODE",
                                                "ASSET_CLASS",
                                                "COST_CENTER",
                                                "CWIP"
                                            ]
                                        ];


                                        var ws =
                                            XLSX.utils.aoa_to_sheet(
                                                headers
                                            );


                                        ws["!cols"] = [
                                            { wch: 18 },
                                            { wch: 28 },
                                            { wch: 18 },
                                            { wch: 18 },
                                            { wch: 18 },
                                            { wch: 18 },
                                            { wch: 14 }
                                        ];


                                        var wb =
                                            XLSX.utils.book_new();


                                        XLSX.utils.book_append_sheet(
                                            wb,
                                            ws,
                                            "Sheet1"
                                        );


                                        XLSX.writeFile(
                                            wb,
                                            "Asset_Upload_Template.xlsx"
                                        );


                                        MessageToast.show(
                                            "Template downloaded."
                                        );

                                    },


                                /* =================================
                                   ERROR LOG
                                   ================================= */

                                onDownloadErrorLog:
                                    function () {

                                        if (
                                            !this._errorLog ||
                                            !this._errorLog.length
                                        ) {

                                            MessageToast.show(
                                                "No validation errors to download."
                                            );

                                            return;

                                        }


                                        if (
                                            typeof XLSX ===
                                            "undefined"
                                        ) {

                                            MessageToast.show(
                                                "Excel library is still loading. Please try again."
                                            );

                                            return;

                                        }


                                        var wb =
                                            XLSX.utils.book_new();


                                        var ws =
                                            XLSX.utils.json_to_sheet(
                                                this._errorLog
                                            );


                                        XLSX.utils.book_append_sheet(
                                            wb,
                                            ws,
                                            "Errors"
                                        );


                                        XLSX.writeFile(
                                            wb,
                                            "Asset_Upload_Error_Log.xlsx"
                                        );


                                        MessageToast.show(
                                            "Error log downloaded."
                                        );

                                    },


                                /* =================================
                                   TOGGLE PREVIEW
                                   ================================= */

                                onTogglePreview:
                                    function () {

                                        var box =
                                            this.getView()
                                                .byId(
                                                    "previewBox"
                                                );


                                        var btn =
                                            this.getView()
                                                .byId(
                                                    "togglePreviewButton"
                                                );


                                        this._previewVisible =
                                            !this._previewVisible;


                                        box.setVisible(
                                            this._previewVisible
                                        );


                                        btn.setText(
                                            this._previewVisible
                                                ? "Hide Preview"
                                                : "Show Preview"
                                        );


                                        btn.setIcon(
                                            this._previewVisible
                                                ? "sap-icon://hide"
                                                : "sap-icon://show"
                                        );

                                    },


                                /* =================================
                                   CLEAR
                                   ================================= */

                                onClear: function () {

                                    var fU =
                                        this.getView()
                                            .byId(
                                                "idfileUploader"
                                            );


                                    var search =
                                        this.getView()
                                            .byId(
                                                "previewSearch"
                                            );


                                    fU.setValue("");

                                    search.setValue("");


                                    this._previewData =
                                        [];

                                    this._errorLog =
                                        [];

                                    this._fileName =
                                        "";


                                    this._bindPreview(
                                        []
                                    );


                                    this._setUploadStats(
                                        0,
                                        0,
                                        0,
                                        "-",
                                        0,
                                        "Ready"
                                    );


                                    MessageToast.show(
                                        "Upload form cleared."
                                    );

                                },


                                /* =================================
                                   SEARCH PREVIEW
                                   ================================= */

                                onSearchPreview:
                                    function (e) {

                                        var q =
                                            (
                                                e.getParameter(
                                                    "newValue"
                                                ) ||
                                                ""
                                            )
                                                .trim()
                                                .toLowerCase();


                                        if (!q) {

                                            this._bindPreview(
                                                this._previewData ||
                                                []
                                            );

                                            return;

                                        }


                                        var filtered =
                                            (
                                                this._previewData ||
                                                []
                                            )
                                                .filter(
                                                    function (
                                                        row
                                                    ) {

                                                        return Object
                                                            .keys(
                                                                row
                                                            )
                                                            .some(
                                                                function (
                                                                    k
                                                                ) {

                                                                    return String(
                                                                        row[k]
                                                                    )
                                                                        .toLowerCase()
                                                                        .indexOf(
                                                                            q
                                                                        ) !==
                                                                        -1;

                                                                }
                                                            );

                                                    }
                                                );


                                        this._bindPreview(
                                            filtered
                                        );

                                    },


                                /* =================================
                                   BIND PREVIEW
                                   ================================= */

                                _bindPreview:
                                    function (rows) {

                                        var table =
                                            this.getView()
                                                .byId(
                                                    "previewTable"
                                                );


                                        var empty =
                                            this.getView()
                                                .byId(
                                                    "previewEmpty"
                                                );


                                        var count =
                                            this.getView()
                                                .byId(
                                                    "previewCount"
                                                );


                                        var model =
                                            new JSONModel({
                                                rows:
                                                    rows ||
                                                    []
                                            });


                                        model.setSizeLimit(
                                            5000
                                        );


                                        table.setModel(
                                            model
                                        );


                                        table.setVisible(
                                            (
                                                rows ||
                                                []
                                            ).length >
                                            0
                                        );


                                        empty.setVisible(
                                            (
                                                rows ||
                                                []
                                            ).length ===
                                            0
                                        );


                                        count.setText(
                                            (
                                                rows ||
                                                []
                                            ).length +
                                            " rows"
                                        );

                                    },


                                /* =================================
                                   ADD ERROR
                                   ================================= */

                                _addError:
                                    function (
                                        type,
                                        message
                                    ) {

                                        this._errorLog =
                                            this._errorLog ||
                                            [];


                                        this._errorLog.push(
                                            {
                                                Type:
                                                    type,

                                                Message:
                                                    message,

                                                File:
                                                    this._fileName ||
                                                    ""
                                            }
                                        );

                                    },


                                /* =================================
                                   STATUS
                                   ================================= */

                                _setStatus:
                                    function (
                                        text,
                                        state
                                    ) {

                                        var status =
                                            this.getView()
                                                .byId(
                                                    "statusPill"
                                                );


                                        var value =
                                            this.getView()
                                                .byId(
                                                    "validationStatus"
                                                );


                                        if (status) {

                                            status.setText(
                                                text
                                            );

                                            status.setState(
                                                state ||
                                                "None"
                                            );

                                        }


                                        if (value) {

                                            value.setText(
                                                text
                                            );

                                        }

                                    },


                                /* =================================
                                   STATISTICS
                                   ================================= */

                                _setUploadStats:
                                    function (
                                        rows,
                                        valid,
                                        invalid,
                                        sheet,
                                        cols,
                                        validation
                                    ) {

                                        var view =
                                            this.getView();


                                        if (
                                            view.byId(
                                                "rowsRead"
                                            )
                                        ) {

                                            view.byId(
                                                "rowsRead"
                                            ).setText(
                                                String(rows)
                                            );

                                        }


                                        if (
                                            view.byId(
                                                "validRows"
                                            )
                                        ) {

                                            view.byId(
                                                "validRows"
                                            ).setText(
                                                String(valid)
                                            );

                                        }


                                        if (
                                            view.byId(
                                                "invalidRows"
                                            )
                                        ) {

                                            view.byId(
                                                "invalidRows"
                                            ).setText(
                                                String(invalid)
                                            );

                                        }


                                        if (
                                            view.byId(
                                                "sheetName"
                                            )
                                        ) {

                                            view.byId(
                                                "sheetName"
                                            ).setText(
                                                String(sheet)
                                            );

                                        }


                                        if (
                                            view.byId(
                                                "columnCount"
                                            )
                                        ) {

                                            view.byId(
                                                "columnCount"
                                            ).setText(
                                                String(cols)
                                            );

                                        }


                                        this._setStatus(
                                            validation,

                                            validation ===
                                            "Valid"
                                                ? "Success"

                                                : validation ===
                                                  "Invalid"
                                                    ? "Error"

                                                    : validation ===
                                                      "Ready"
                                                        ? "None"

                                                        : "Information"
                                        );

                                    },


                                /* =================================
                                   BUSY
                                   ================================= */

                                wasteTime:
                                    function () {

                                        busyDialog.open();

                                    },


                                runNext:
                                    function () {

                                        busyDialog.close();

                                    }

                            }
                        );

                    }
                );


                /* =============================================
                   CREATE XML VIEW
                   ============================================= */

                console.log(
                    "widgetName Final:" +
                    widgetName
                );


                var foundIndex =
                    Ar.findIndex(
                        x =>
                            x.id ==
                            widgetName
                    );


                var divfinal =
                    Ar[foundIndex].div;


                console.log(
                    divfinal
                );


                var oView =
                    sap.ui.xmlview({

                        viewContent:
                            jQuery(
                                divfinal
                            ).html()

                    });


                oView.placeAt(
                    div
                );


                if (
                    that_._designMode
                ) {

                    oView
                        .byId(
                            "idfileUploader"
                        )
                        .setEnabled(
                            false
                        );

                }


            }
        );

    }


    /* =========================================================
       GUID
       ========================================================= */

    function createGuid() {

        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(
                /[xy]/g,
                function (c) {

                    let r =
                        Math.random() *
                        16 |
                        0;

                    let v =
                        c === "x"
                            ? r
                            : (r & 0x3 | 0x8);

                    return v.toString(
                        16
                    );

                }
            );

    }


    /* =========================================================
       LOAD SCRIPT
       ========================================================= */

    function loadScript(
        src,
        shadowRoot
    ) {

        return new Promise(
            function (
                resolve,
                reject
            ) {

                let script =
                    document.createElement(
                        "script"
                    );


                script.src =
                    src;


                script.onload =
                    function () {

                        console.log(
                            "Load: " +
                            src
                        );

                        resolve(
                            script
                        );

                    };


                script.onerror =
                    function () {

                        reject(
                            new Error(
                                "Script load error for " +
                                src
                            )
                        );

                    };


                shadowRoot.appendChild(
                    script
                );

            }
        );

    }

})();

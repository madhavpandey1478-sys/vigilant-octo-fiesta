(function() {
    let _shadowRoot;
    let _id;
    let _result;

    let div;
    let widgetName;
    var Ar = [];

    let tmpl = document.createElement("template");
    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          min-width: 260px;
          font-family: "72", Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .assetUploadCard {
          width: 100%;
          min-height: 210px;
          padding: 20px;
          border: 1px solid #d9e2ec;
          border-radius: 16px;
          background: linear-gradient(145deg, #ffffff 0%, #f7fbff 100%);
          box-shadow: 0 8px 24px rgba(28, 63, 91, 0.10);
          overflow: hidden;
          transition: box-shadow 180ms ease, transform 180ms ease;
        }

        .assetUploadCard:hover {
          box-shadow: 0 12px 30px rgba(28, 63, 91, 0.14);
        }

        .assetHeader {
          width: 100%;
          margin-bottom: 16px;
        }

        .assetIcon {
          width: 42px;
          height: 42px;
          line-height: 42px;
          margin-right: 12px;
          border-radius: 12px;
          background: linear-gradient(135deg, #107c41, #21a366);
          color: #ffffff;
          text-align: center;
          box-shadow: 0 6px 14px rgba(16, 124, 65, 0.24);
        }

        .assetTitle {
          color: #172b4d;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
        }

        .assetSubtitle {
          color: #6a7b8f;
          font-size: 12px;
          line-height: 18px;
        }

        .assetDropZone {
          width: 100%;
          min-height: 88px;
          padding: 14px 16px;
          border: 1.5px dashed #9fb5c8;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.82);
          transition: border-color 180ms ease,
                      background 180ms ease,
                      box-shadow 180ms ease;
        }

        .assetDropZone:hover {
          border-color: #107c41;
          background: #f8fffb;
          box-shadow: inset 0 0 0 1px rgba(16, 124, 65, 0.08);
        }

        .assetDropIcon {
          color: #107c41;
          margin-right: 9px;
        }

        .assetHelper {
          color: #6b7c93;
          font-size: 11px;
          margin-top: 4px;
        }

        .assetFileUploader {
          width: 100% !important;
        }

        .assetFileUploader .sapUiFupInputMask {
          border-radius: 9px !important;
          border: 1px solid #c7d3df !important;
          background: #ffffff !important;
          color: #243b53 !important;
          min-height: 38px !important;
          box-shadow: none !important;
        }

        .assetFileUploader .sapUiFupInputMask:hover {
          border-color: #107c41 !important;
        }

        .assetFileUploader .sapUiFupButton {
          border-radius: 9px !important;
          min-height: 38px !important;
          margin-left: 8px !important;
        }

        .assetUploadButton {
          margin-top: 14px;
          min-width: 118px;
          height: 40px;
          border-radius: 10px !important;
          box-shadow: 0 5px 12px rgba(16, 124, 65, 0.20);
          transition: transform 160ms ease, box-shadow 160ms ease;
        }

        .assetUploadButton:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 16px rgba(16, 124, 65, 0.25);
        }

        .assetUploadButton .sapMBtnInner {
          border-radius: 10px !important;
          font-weight: 700 !important;
        }

        .assetFooter {
          width: 100%;
          margin-top: 10px;
          color: #7a8a9a;
          font-size: 10px;
          text-align: center;
        }

        @media (max-width: 420px) {
          .assetUploadCard {
            padding: 14px;
            border-radius: 13px;
          }

          .assetTitle {
            font-size: 16px;
          }

          .assetFileUploader .sapUiFupInputMask {
            min-height: 36px !important;
          }

          .assetUploadButton {
            width: 100%;
          }
        }


        /* =====================================================
           FULL UPLOAD WORKSPACE
           ===================================================== */

        .assetUploadCard {
          min-height: 100%;
          padding: 16px;
          background: #ffffff;
          border: 1px solid #d9e2ec;
          border-radius: 12px;
          box-shadow: 0 4px 18px rgba(35,65,90,.08);
        }

        .assetHeader {
          width: 100% !important;
          min-height: 48px !important;
          margin-bottom: 12px !important;
        }

        .assetHeaderText {
          min-width: 0 !important;
        }

        .assetHeaderButtons {
          margin-left: auto !important;
          gap: 6px !important;
        }

        .assetHeaderButton .sapMBtnInner {
          border-radius: 7px !important;
          height: 34px !important;
          font-size: 11px !important;
          font-weight: 600 !important;
        }

        .assetSecondaryButton .sapMBtnInner {
          border: 1px solid #d6dce2 !important;
          background: #f7f8f9 !important;
          color: #334e68 !important;
          border-radius: 7px !important;
          height: 34px !important;
          font-size: 11px !important;
        }

        .assetSecondaryButton:hover .sapMBtnInner {
          background: #eef2f5 !important;
        }

        .assetStatus {
          margin-left: 4px !important;
          padding: 6px 10px !important;
          border: 1px solid #d8dee5 !important;
          border-radius: 999px !important;
          background: #f7f8f9 !important;
        }

        .assetStatus .sapMObjStatusText {
          font-size: 11px !important;
          font-weight: 700 !important;
        }

        .assetToolbar {
          width: 100% !important;
          padding: 8px !important;
          margin-bottom: 10px !important;
          border: 1px solid #e1e6eb !important;
          border-radius: 9px !important;
          background: #f8fafb !important;
        }

        .assetToolbarSearch {
          margin-left: auto !important;
          width: 210px !important;
        }

        .assetToolbarSearch .sapMInputBaseInner {
          height: 34px !important;
          border-radius: 7px !important;
          font-size: 11px !important;
        }

        .assetToolbarButton .sapMBtnInner {
          height: 34px !important;
          border-radius: 7px !important;
          font-size: 11px !important;
          font-weight: 600 !important;
        }

        .assetToolbarUpload .sapMBtnInner {
          background: #0a6ed1 !important;
          border-color: #0a6ed1 !important;
        }

        .assetClearButton .sapMBtnInner {
          background: #eef0f2 !important;
          border-color: #d9dde2 !important;
          color: #44546a !important;
        }

        .assetDropZone {
          padding: 14px !important;
          border: 1.5px dashed #b7c8d8 !important;
          border-radius: 10px !important;
          background: #f9fbfd !important;
        }

        .assetDropZone .sapUiFup {
          margin-top: 5px !important;
        }

        .assetRequired {
          margin-top: 8px !important;
          color: #687887 !important;
          font-size: 10px !important;
        }

        .assetStats {
          width: 100% !important;
          margin-top: 10px !important;
          gap: 7px !important;
        }

        .assetMetric {
          flex: 1 1 0 !important;
          min-width: 90px !important;
          padding: 9px 10px !important;
          border: 1px solid #e0e5ea !important;
          border-radius: 9px !important;
          background: #ffffff !important;
        }

        .assetMetricLabel {
          color: #718096 !important;
          font-size: 9px !important;
          line-height: 12px !important;
        }

        .assetMetricValue {
          margin-top: 3px !important;
          color: #1d2d3e !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          line-height: 18px !important;
        }

        .assetPreviewBox {
          width: 100% !important;
          margin-top: 12px !important;
          border: 1px solid #e1e6eb !important;
          border-radius: 10px !important;
          overflow: hidden !important;
          background: #ffffff !important;
        }

        .assetPreviewHeader {
          width: 100% !important;
          padding: 9px 12px !important;
          border-bottom: 1px solid #e7ebef !important;
          background: #fafbfc !important;
        }

        .assetPreviewTitle {
          color: #1d2d3e !important;
          font-size: 12px !important;
          font-weight: 700 !important;
        }

        .assetPreviewCount {
          margin-left: 7px !important;
          color: #718096 !important;
          font-size: 10px !important;
        }

        .assetPreviewTable .sapMListTblHeaderCell {
          background: #f5f7f9 !important;
        }

        .assetPreviewTable .sapMListTblHeaderCell .sapMText {
          color: #4b5d6d !important;
          font-size: 9px !important;
          font-weight: 700 !important;
        }

        .assetPreviewTable .sapMListTblCell .sapMText {
          color: #334e68 !important;
          font-size: 9px !important;
        }

        .assetPreviewEmpty {
          width: 100% !important;
          padding: 26px 10px !important;
          text-align: center !important;
          color: #7a8a9a !important;
        }

        .assetPreviewEmptyIcon {
          color: #a9b6c2 !important;
          margin-bottom: 7px !important;
        }

        .assetFooter {
          margin-top: 8px !important;
        }

        @media (max-width: 700px) {

          .assetHeaderButtons {
            margin-left: 0 !important;
            margin-top: 8px !important;
            flex-wrap: wrap !important;
          }

          .assetHeader {
            flex-wrap: wrap !important;
            height: auto !important;
          }

          .assetToolbarSearch {
            width: 100% !important;
            margin-left: 0 !important;
            margin-top: 6px !important;
          }

          .assetStats {
            flex-wrap: wrap !important;
          }

          .assetMetric {
            min-width: 30% !important;
          }
        }

      </style>
    `;


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

            this.addEventListener("click", event => {
                console.log("click");
            });

            this._firstConnection = 0;
        }


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
                                    "[{\"app\":\"MAIN_APPLICATION\"}]"
                                ];

                            let names =
                                app.names;

                            for (let key in names) {

                                let name =
                                    names[key];

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
                                    components:
                                        components,
                                    vars:
                                        app.globalVars
                                });

                            if (
                                metadata !=
                                this.metadata
                            ) {

                                this.metadata =
                                    metadata;

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


                        let subscribeReactStore =
                            store => {

                                this._subscription =
                                    store.subscribe({
                                        effect: state => {

                                            parseReactState(
                                                state
                                            );

                                            return {
                                                result: 1
                                            };
                                        }
                                    });
                            };


                        let props =
                            outlineContainer
                            .getReactProps();


                        if (props) {

                            subscribeReactStore(
                                props.store
                            );

                        } else {

                            let oldRenderReactComponent =
                                outlineContainer
                                .renderReactComponent;

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

            } catch (e) {}

        }


        disconnectedCallback() {

            if (this._subscription) {

                this._subscription();

                this._subscription =
                    null;
            }
        }


        onCustomWidgetBeforeUpdate(
            changedProperties
        ) {

            if ("designMode" in changedProperties) {

                this._designMode =
                    changedProperties[
                        "designMode"
                    ];
            }
        }


        onCustomWidgetAfterUpdate(
            changedProperties
        ) {

            var that = this;

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


        _renderExportButton() {

            let components =
                this.metadata
                    ? JSON.parse(
                        this.metadata
                    )["components"]
                    : {};
        }


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

            return this
                ._export_settings
                .title;
        }


        set title(value) {

            console.log(
                "setTitle:" + value
            );

            this
                ._export_settings
                .title = value;
        }


        get subtitle() {

            return this
                ._export_settings
                .subtitle;
        }


        set subtitle(value) {

            this
                ._export_settings
                .subtitle = value;
        }


        get icon() {

            return this
                ._export_settings
                .icon;
        }


        set icon(value) {

            this
                ._export_settings
                .icon = value;
        }


        get unit() {

            return this
                ._export_settings
                .unit;
        }


        set unit(value) {

            value = _result;

            console.log(
                "value: " + value
            );

            this
                ._export_settings
                .unit = value;
        }


        get footer() {

            return this
                ._export_settings
                .footer;
        }


        set footer(value) {

            this
                ._export_settings
                .footer = value;
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

                this[name] =
                    newValue;
            }
        }

    }


    customElements.define(
        "com-fd-djaja-sap-sac-excel",
        Excel
    );


    // =========================================================
    // LOAD XML VIEW
    // =========================================================

    function loadthis(
        that,
        changedProperties
    ) {

        var that_ = that;

        widgetName =
            changedProperties.widgetName;

        if (
            typeof widgetName ===
            "undefined"
        ) {

            widgetName =
                that
                    ._export_settings
                    .title
                    .split("|")[0];
        }


        div =
            document.createElement(
                "div"
            );

        div.slot =
            "content_" +
            widgetName;


        if (
            that._firstConnection === 0
        ) {

            let div0 =
                document.createElement(
                    "div"
                );


            div0.innerHTML =
                '<?xml version="1.0"?>' +

                '<script id="oView_' +
                widgetName +
                '" ' +
                'name="oView_' +
                widgetName +
                '" ' +
                'type="sapui5/xmlview">' +

                '<mvc:View ' +
                'height="100%" ' +
                'xmlns="sap.m" ' +
                'xmlns:u="sap.ui.unified" ' +
                'xmlns:f="sap.ui.layout.form" ' +
                'xmlns:core="sap.ui.core" ' +
                'xmlns:mvc="sap.ui.core.mvc" ' +
                'controllerName="myView.Template">' +


                /* =================================================
                   MAIN CARD
                   ================================================= */

                '<VBox class="assetUploadCard">' +


                /* =================================================
                   HEADER
                   ================================================= */

                '<HBox ' +
                'class="assetHeader" ' +
                'alignItems="Center" ' +
                'wrap="Wrap">' +


                '<HBox ' +
                'alignItems="Center">' +

                '<core:Icon ' +
                'src="sap-icon://excel-attachment" ' +
                'size="1.35rem" ' +
                'class="assetIcon"/>' +

                '<VBox ' +
                'class="assetHeaderText">' +

                '<Text ' +
                'text="Excel Upload" ' +
                'class="assetTitle"/>' +

                '<Text ' +
                'text="Upload and validate Excel file" ' +
                'class="assetSubtitle"/>' +

                '</VBox>' +

                '</HBox>' +


                /* =================================================
                   HEADER BUTTONS
                   ================================================= */

                '<HBox ' +
                'class="assetHeaderButtons" ' +
                'alignItems="Center" ' +
                'wrap="Wrap">' +


                '<Button ' +
                'text="Download Template" ' +
                'press="onDownloadTemplate" ' +
                'icon="sap-icon://download" ' +
                'type="Emphasized" ' +
                'class="assetHeaderButton"/>' +


                '<ObjectStatus ' +
                'id="statusPill" ' +
                'text="Ready" ' +
                'state="None" ' +
                'class="assetStatus"/>' +


                '<Button ' +
                'text="Download Error Log" ' +
                'press="onDownloadErrorLog" ' +
                'icon="sap-icon://document-text" ' +
                'type="Transparent" ' +
                'class="assetSecondaryButton"/>' +


                '<Button ' +
                'id="togglePreviewButton" ' +
                'text="Hide Preview" ' +
                'press="onTogglePreview" ' +
                'icon="sap-icon://hide" ' +
                'type="Transparent" ' +
                'class="assetSecondaryButton"/>' +


                '</HBox>' +

                '</HBox>' +


                /* =================================================
                   TOOLBAR
                   ================================================= */

                '<HBox ' +
                'class="assetToolbar" ' +
                'alignItems="Center" ' +
                'wrap="Wrap">' +


                '<u:FileUploader ' +
                'id="idfileUploader" ' +
                'class="assetUploader" ' +
                'width="auto" ' +
                'useMultipart="false" ' +
                'sendXHR="true" ' +
                'sameFilenameAllowed="false" ' +
                'buttonText="Choose File" ' +
                'fileType="XLSM" ' +
                'placeholder="No file selected" ' +
                'style="Emphasized" ' +
                'change="onFileChange"/>' +


                '<Button ' +
                'text="Upload" ' +
                'press="onValidate" ' +
                'id="__uploadButton" ' +
                'icon="sap-icon://upload" ' +
                'type="Emphasized" ' +
                'class="assetToolbarButton assetToolbarUpload"/>' +


                '<Button ' +
                'text="Clear" ' +
                'press="onClear" ' +
                'icon="sap-icon://decline" ' +
                'type="Transparent" ' +
                'class="assetToolbarButton assetClearButton"/>' +


                '<Input ' +
                'id="previewSearch" ' +
                'class="assetToolbarSearch" ' +
                'placeholder="Search in preview" ' +
                'liveChange="onSearchPreview"/>' +


                '</HBox>' +


                /* =================================================
                   FILE DROP / INFO AREA
                   ================================================= */

                '<VBox ' +
                'class="assetDropZone">' +


                '<HBox ' +
                'alignItems="Center">' +


                '<core:Icon ' +
                'src="sap-icon://upload-to-cloud" ' +
                'size="1.25rem" ' +
                'class="assetDropIcon"/>' +


                '<VBox>' +

                '<Text ' +
                'text="Select your XLSM file" ' +
                'class="assetSelectText"/>' +

                '<Text ' +
                'text="Supported format: XLSM  •  Sheet: Sheet1  •  Maximum 2,000 records" ' +
                'class="assetHelper"/>' +

                '</VBox>' +

                '</HBox>' +

                '</VBox>' +


                /* =================================================
                   REQUIRED COLUMNS
                   ================================================= */

                '<Text ' +
                'text="Required columns: ID, DESCRIPTION, ASSET_TYPE, COMPANY_CODE, ASSET_CLASS, COST_CENTER, CWIP" ' +
                'class="assetRequired"/>' +


                /* =================================================
                   STATISTICS
                   ================================================= */

                '<HBox ' +
                'class="assetStats" ' +
                'wrap="Wrap">' +


                '<VBox class="assetMetric">' +

                '<Text ' +
                'text="Rows Read" ' +
                'class="assetMetricLabel"/>' +

                '<Text ' +
                'id="rowsRead" ' +
                'text="0" ' +
                'class="assetMetricValue"/>' +

                '</VBox>' +


                '<VBox class="assetMetric">' +

                '<Text ' +
                'text="Valid Rows" ' +
                'class="assetMetricLabel"/>' +

                '<Text ' +
                'id="validRows" ' +
                'text="0" ' +
                'class="assetMetricValue"/>' +

                '</VBox>' +


                '<VBox class="assetMetric">' +

                '<Text ' +
                'text="Invalid Rows" ' +
                'class="assetMetricLabel"/>' +

                '<Text ' +
                'id="invalidRows" ' +
                'text="0" ' +
                'class="assetMetricValue"/>' +

                '</VBox>' +


                '<VBox class="assetMetric">' +

                '<Text ' +
                'text="Sheet" ' +
                'class="assetMetricLabel"/>' +

                '<Text ' +
                'id="sheetName" ' +
                'text="-" ' +
                'class="assetMetricValue"/>' +

                '</VBox>' +


                '<VBox class="assetMetric">' +

                '<Text ' +
                'text="Columns" ' +
                'class="assetMetricLabel"/>' +

                '<Text ' +
                'id="columnCount" ' +
                'text="0" ' +
                'class="assetMetricValue"/>' +

                '</VBox>' +


                '<VBox class="assetMetric">' +

                '<Text ' +
                'text="Validation" ' +
                'class="assetMetricLabel"/>' +

                '<Text ' +
                'id="validationStatus" ' +
                'text="Ready" ' +
                'class="assetMetricValue"/>' +

                '</VBox>' +


                '</HBox>' +


                /* =================================================
                   PREVIEW
                   ================================================= */

                '<VBox ' +
                'id="previewBox" ' +
                'class="assetPreviewBox">' +


                '<HBox ' +
                'class="assetPreviewHeader" ' +
                'alignItems="Center">' +

                '<Text ' +
                'text="Preview" ' +
                'class="assetPreviewTitle"/>' +

                '<Text ' +
                'id="previewCount" ' +
                'text="0 rows" ' +
                'class="assetPreviewCount"/>' +

                '</HBox>' +


                '<Table ' +
                'id="previewTable" ' +
                'class="assetPreviewTable" ' +
                'visible="false" ' +
                'items="{/rows}" ' +
                'growing="true" ' +
                'growingThreshold="100" ' +
                'fixedLayout="false">' +


                '<columns>' +

                '<Column>' +
                '<Text text="ID"/>' +
                '</Column>' +

                '<Column>' +
                '<Text text="DESCRIPTION"/>' +
                '</Column>' +

                '<Column>' +
                '<Text text="ASSET_TYPE"/>' +
                '</Column>' +

                '<Column>' +
                '<Text text="COMPANY_CODE"/>' +
                '</Column>' +

                '<Column>' +
                '<Text text="ASSET_CLASS"/>' +
                '</Column>' +

                '<Column>' +
                '<Text text="COST_CENTER"/>' +
                '</Column>' +

                '<Column>' +
                '<Text text="CWIP"/>' +
                '</Column>' +

                '</columns>' +


                '<items>' +

                '<ColumnListItem>' +

                '<cells>' +

                '<Text text="{ID}"/>' +

                '<Text text="{DESCRIPTION}"/>' +

                '<Text text="{ASSET_TYPE}"/>' +

                '<Text text="{COMPANY_CODE}"/>' +

                '<Text text="{ASSET_CLASS}"/>' +

                '<Text text="{COST_CENTER}"/>' +

                '<Text text="{CWIP}"/>' +

                '</cells>' +

                '</ColumnListItem>' +

                '</items>' +

                '</Table>' +


                /* =================================================
                   EMPTY PREVIEW
                   ================================================= */

                '<VBox ' +
                'id="previewEmpty" ' +
                'class="assetPreviewEmpty" ' +
                'alignItems="Center">' +

                '<core:Icon ' +
                'src="sap-icon://table-view" ' +
                'size="1.6rem" ' +
                'class="assetPreviewEmptyIcon"/>' +

                '<Text ' +
                'text="No preview available. Upload a file to view validated rows."/>' +

                '</VBox>' +


                '</VBox>' +


                /* =================================================
                   FOOTER
                   ================================================= */

                '<Text ' +
                'text="The file will be validated before the data is sent to SAC." ' +
                'class="assetFooter"/>' +


                '</VBox>' +


                '</mvc:View>' +

                '</script>';


            _shadowRoot.appendChild(
                div0
            );


            /* =====================================================
               EXISTING FRAGMENT
               ===================================================== */

            let div1 =
                document.createElement(
                    "div"
                );


            div1.innerHTML =
                '<?xml version="1.0"?>' +

                '<script id="myXMLFragment_' +
                widgetName +
                '" ' +
                'type="sapui5/fragment">' +

                '<core:FragmentDefinition ' +
                'xmlns="sap.m" ' +
                'xmlns:core="sap.ui.core">' +

                '<SelectDialog ' +
                'title="Partner Number" ' +
                'class="sapUiPopupWithPadding" ' +
                'items="{' +
                widgetName +
                '>/' +
                '}" ' +
                'search="_handleValueHelpSearch" ' +
                'confirm="_handleValueHelpClose" ' +
                'cancel="_handleValueHelpClose" ' +
                'multiSelect="true" ' +
                'showClearButton="true" ' +
                'rememberSelections="true">' +

                '<StandardListItem ' +
                'icon="{' +
                widgetName +
                '>ProductPicUrl}" ' +
                'iconDensityAware="false" ' +
                'iconInset="false" ' +
                'title="{' +
                widgetName +
                '>partner}" ' +
                'description="{' +
                widgetName +
                '>partner}" />' +

                '</SelectDialog>' +

                '</core:FragmentDefinition>' +

                '</script>';


            _shadowRoot.appendChild(
                div1
            );


            let div2 =
                document.createElement(
                    "div"
                );


            div2.innerHTML =
                '<div id="ui5_content_' +
                widgetName +
                '" ' +
                'name="ui5_content_' +
                widgetName +
                '">' +

                '<slot name="content_' +
                widgetName +
                '"></slot>' +

                '</div>';


            _shadowRoot.appendChild(
                div2
            );


            that_.appendChild(
                div
            );


            var mapcanvas_divstr =
                _shadowRoot.getElementById(
                    'oView_' +
                    widgetName
                );


            var mapcanvas_fragment_divstr =
                _shadowRoot.getElementById(
                    'myXMLFragment_' +
                    widgetName
                );


            Ar.push({
                id: widgetName,
                div: mapcanvas_divstr,
                divf: mapcanvas_fragment_divstr
            });
        }


        that_._renderExportButton();


        sap.ui.getCore().attachInit(
            function() {

                "use strict";


                /* =================================================
                   CONTROLLER DEPENDENCIES
                   ================================================= */

                sap.ui.define([

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

                ], function(
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
                        (busyDialog)
                            ? busyDialog
                            : new BusyDialog({});


                    return Controller.extend(
                        "myView.Template",
                        {


                            /* =================================================
                               INITIALIZATION
                               ================================================= */

                            onInit: function() {

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

                                console.log(
                                    that._export_settings.title
                                );

                                console.log(
                                    "widgetName:" +
                                    that.widgetName
                                );


                                if (
                                    that._firstConnection ===
                                    0
                                ) {

                                    that._firstConnection =
                                        1;
                                }
                            },


                            /* =================================================
                               FILE CHANGE
                               ================================================= */

                            onFileChange: function(e) {

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


                            /* =================================================
                               VALIDATE / UPLOAD
                               ================================================= */

                            onValidate: function(e) {

                                var fU =
                                    this.getView()
                                        .byId(
                                            "idfileUploader"
                                        );


                                var input =
                                    document.querySelector(
                                        "#__xmlview1--idfileUploader-fu"
                                    );


                                var file =
                                    input &&
                                    input.files
                                        ? input.files[0]
                                        : null;


                                var this_ =
                                    this;


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
                                    async function(e) {

                                        try {

                                            var strCSV =
                                                e.target.result;


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


                                            /* =================================================
                                               FIND REQUIRED SHEET
                                               ================================================= */

                                            workbook.SheetNames.forEach(
                                                function(sheetName) {

                                                    if (
                                                        sheetName ===
                                                        "Sheet1"
                                                    ) {

                                                        correctsheet =
                                                            true;


                                                        var csv =
                                                            XLSX.utils
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


                                            /* =================================================
                                               SHEET VALIDATION
                                               ================================================= */

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
                                                    chunks.length - 1,
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


                                            /* =================================================
                                               COLUMN VALIDATION
                                               ================================================= */

                                            if (
                                                lengthfield !==
                                                7
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


                                            /* =================================================
                                               READ RECORDS
                                               ================================================= */

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
                                                                function(v) {

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
                                                            .join("")
                                                            .length;


                                                        if (
                                                            len > 0
                                                        ) {

                                                            result_final.push({

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

                                                            });
                                                        }
                                                    }
                                                }
                                            }


                                            /* =================================================
                                               EMPTY RECORD VALIDATION
                                               ================================================= */

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


                                                fU.setValue(
                                                    ""
                                                );


                                                MessageToast.show(
                                                    "There is no record to be uploaded"
                                                );


                                                return;
                                            }


                                            /* =================================================
                                               MAX RECORD VALIDATION
                                               ================================================= */

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


                                                fU.setValue(
                                                    ""
                                                );


                                                MessageToast.show(
                                                    "Maximum records are 2000."
                                                );


                                                return;
                                            }


                                            /* =================================================
                                               SUCCESS
                                               ================================================= */

                                            this_._previewData =
                                                result_final.slice();


                                            this_._errorLog =
                                                [];


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


                                            _result =
                                                JSON.stringify(
                                                    result_final
                                                );


                                            that._firePropertiesChanged();


                                            this.settings =
                                                {};

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


                                            fU.setValue(
                                                ""
                                            );


                                            MessageToast.show(
                                                result_final.length +
                                                " row(s) validated successfully."
                                            );


                                        } catch (err) {

                                            console.error(
                                                err
                                            );


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
                                    function() {

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


                            /* =================================================
                               DOWNLOAD TEMPLATE
                               ================================================= */

                            onDownloadTemplate: function() {

                                if (
                                    typeof XLSX ===
                                    "undefined"
                                ) {

                                    MessageToast.show(
                                        "Excel library is still loading. Please try again."
                                    );

                                    return;
                                }


                                var headers = [[

                                    "ID",

                                    "DESCRIPTION",

                                    "ASSET_TYPE",

                                    "COMPANY_CODE",

                                    "ASSET_CLASS",

                                    "COST_CENTER",

                                    "CWIP"

                                ]];


                                var ws =
                                    XLSX.utils.aoa_to_sheet(
                                        headers
                                    );


                                ws["!cols"] = [

                                    {
                                        wch: 18
                                    },

                                    {
                                        wch: 28
                                    },

                                    {
                                        wch: 18
                                    },

                                    {
                                        wch: 18
                                    },

                                    {
                                        wch: 18
                                    },

                                    {
                                        wch: 18
                                    },

                                    {
                                        wch: 14
                                    }

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


                            /* =================================================
                               DOWNLOAD ERROR LOG
                               ================================================= */

                            onDownloadErrorLog: function() {

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


                            /* =================================================
                               TOGGLE PREVIEW
                               ================================================= */

                            onTogglePreview: function() {

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


                            /* =================================================
                               CLEAR
                               ================================================= */

                            onClear: function() {

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


                                fU.setValue(
                                    ""
                                );


                                search.setValue(
                                    ""
                                );


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


                            /* =================================================
                               SEARCH PREVIEW
                               ================================================= */

                            onSearchPreview: function(e) {

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
                                        function(row) {

                                            return Object
                                                .keys(row)
                                                .some(
                                                    function(k) {

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


                            /* =================================================
                               BIND PREVIEW
                               ================================================= */

                            _bindPreview: function(rows) {

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


                            /* =================================================
                               ADD ERROR
                               ================================================= */

                            _addError: function(
                                type,
                                message
                            ) {

                                this._errorLog =
                                    this._errorLog ||
                                    [];


                                this._errorLog.push({

                                    Type:
                                        type,

                                    Message:
                                        message,

                                    File:
                                        this._fileName ||
                                        ""

                                });
                            },


                            /* =================================================
                               STATUS
                               ================================================= */

                            _setStatus: function(
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


                            /* =================================================
                               UPLOAD STATISTICS
                               ================================================= */

                            _setUploadStats: function(
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


                            /* =================================================
                               BUSY DIALOG
                               ================================================= */

                            wasteTime: function() {

                                busyDialog.open();
                            },


                            runNext: function() {

                                busyDialog.close();
                            }

                        }
                    );
                }
            );


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
                Ar[
                    foundIndex
                ].div;


            console.log(
                divfinal
            );


            /* =================================================
               CREATE XML VIEW
               ================================================= */

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

        });
    }


    /* =========================================================
       GUID
       ========================================================= */

    function createGuid() {

        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(
                /[xy]/g,
                c => {

                    let r =
                        Math.random() *
                        16 |
                        0;

                    let v =
                        c === "x"
                            ? r
                            : (
                                r &
                                0x3
                            ) |
                            0x8;

                    return v.toString(
                        16
                    );
                }
            );
    }


    /* =========================================================
       LOAD EXTERNAL SCRIPT
       ========================================================= */

    function loadScript(
        src,
        shadowRoot
    ) {

        return new Promise(
            function(
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
                    () => {

                        console.log(
                            "Load: " +
                            src
                        );

                        resolve(
                            script
                        );
                    };


                script.onerror =
                    () =>
                        reject(
                            new Error(
                                `Script load error for ${src}`
                            )
                        );


                shadowRoot.appendChild(
                    script
                );
            }
        );
    }

})();

(function() {

    let _shadowRoot;
    let _id;
    let _result;

    let div;
    let widgetName;
    var Ar = [];


    /* =========================================================
       CSS
       ========================================================= */

    const ASSET_EXCEL_CSS = `
    com-fd-djaja-sap-sac-excel {
        display:block;
        width:100%;
        height:100%;
        font-family:"72",Arial,sans-serif;
    }

    com-fd-djaja-sap-sac-excel .assetCard {
        width:100%;
        min-height:100%;
        padding:18px;
        background:#fff;
        border:1px solid #d9e2ec;
        border-radius:14px;
        box-shadow:0 6px 22px rgba(0,0,0,.08);
        box-sizing:border-box;
    }

    com-fd-djaja-sap-sac-excel .assetHeader {
        width:100%;
        margin-bottom:14px;
        padding:0 2px;
        box-sizing:border-box;
    }

    com-fd-djaja-sap-sac-excel .assetIcon {
        color:#0a6ed1 !important;
        background:#eaf3fc;
        border-radius:10px;
        padding:10px;
        margin-right:10px;
    }

    com-fd-djaja-sap-sac-excel .assetTitle {
        color:#1d2d3e !important;
        font-size:18px !important;
        font-weight:700 !important;
    }

    com-fd-djaja-sap-sac-excel .assetSubtitle {
        color:#6a7885 !important;
        font-size:11px !important;
    }

    com-fd-djaja-sap-sac-excel .assetBtn .sapMBtnInner {
        border-radius:7px !important;
        font-size:11px !important;
        font-weight:600 !important;
        height:34px !important;
        min-width:82px !important;
    }

    com-fd-djaja-sap-sac-excel .assetDownloadBtn {
        margin-left:12px;
    }

    com-fd-djaja-sap-sac-excel .assetDownloadBtn .sapMBtnInner {
        min-width:150px !important;
    }

    com-fd-djaja-sap-sac-excel .assetBlue .sapMBtnInner {
        background:#0a6ed1 !important;
        border-color:#0a6ed1 !important;
        color:#fff !important;
    }

    com-fd-djaja-sap-sac-excel .assetToolbar {
        width:100%;
        padding:7px 9px !important;
        margin-bottom:10px;
        background:#f7f9fb;
        border:1px solid #e0e5ea;
        border-radius:8px;
        box-sizing:border-box;
    }

    com-fd-djaja-sap-sac-excel .assetToolbar .sapMTB {
        border:none !important;
    }

    com-fd-djaja-sap-sac-excel .assetUploader {
        min-width:270px;
    }

    com-fd-djaja-sap-sac-excel .assetUploadItem {
        margin-left:7px;
    }

    com-fd-djaja-sap-sac-excel .assetClearItem {
        margin-left:3px;
    }

    com-fd-djaja-sap-sac-excel .assetSearch {
        width:230px !important;
        margin-left:10px;
    }

    com-fd-djaja-sap-sac-excel .assetDrop {
        margin-top:8px;
        padding:18px;
        border:1.5px dashed #aebfce;
        border-radius:10px;
        background:#f9fbfd;
        box-sizing:border-box;
    }

    com-fd-djaja-sap-sac-excel .assetDropIcon {
        color:#0a6ed1 !important;
        margin-right:10px;
    }

    com-fd-djaja-sap-sac-excel .assetDropText {
        color:#334e68 !important;
        font-size:12px !important;
        font-weight:600 !important;
    }

    com-fd-djaja-sap-sac-excel .assetHelp {
        color:#788896 !important;
        font-size:10px !important;
    }

    com-fd-djaja-sap-sac-excel .assetRequired {
        margin-top:9px;
        color:#687887 !important;
        font-size:10px !important;
    }

    com-fd-djaja-sap-sac-excel .assetStats {
        margin-top:10px;
    }

    com-fd-djaja-sap-sac-excel .assetMetric {
        margin-right:7px;
        padding:10px;
        border:1px solid #e0e5ea;
        border-radius:9px;
        background:#fff;
        min-width:95px;
    }

    com-fd-djaja-sap-sac-excel .assetMetricLabel {
        color:#718096 !important;
        font-size:9px !important;
    }

    com-fd-djaja-sap-sac-excel .assetMetricValue {
        color:#1d2d3e !important;
        font-size:15px !important;
        font-weight:700 !important;
    }

    com-fd-djaja-sap-sac-excel .assetPreview {
        margin-top:12px;
        border:1px solid #e0e5ea;
        border-radius:10px;
        overflow:hidden;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewHead {
        padding:9px 12px;
        background:#fafbfc;
        border-bottom:1px solid #e7ebef;
    }

    com-fd-djaja-sap-sac-excel .assetPreviewTitle {
        font-size:12px !important;
        font-weight:700 !important;
        color:#1d2d3e !important;
    }

    com-fd-djaja-sap-sac-excel .assetFooter {
        margin-top:9px;
        color:#8a98a5 !important;
        font-size:9px !important;
    }
    `;


    function installGlobalStyle() {

        if (!document.getElementById("assetExcelUploadGlobalStyle")) {

            var s = document.createElement("style");

            s.id = "assetExcelUploadGlobalStyle";

            s.textContent = ASSET_EXCEL_CSS;

            document.head.appendChild(s);
        }
    }

    installGlobalStyle();


    let tmpl = document.createElement("template");

    tmpl.innerHTML = `
        <style></style>
    `;


    /* =========================================================
       WEB COMPONENT
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

            this.addEventListener(
                "click",
                event => {
                    console.log("click");
                }
            );

            this._firstConnection = 0;
        }


        connectedCallback() {

            try {

                if (window.commonApp) {

                    let outlineContainer =
                        commonApp.getShell().findElements(
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


                            for (
                                let key in names
                            ) {

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
                                    components: components,
                                    vars: app.globalVars
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


                            outlineContainer
                                .renderReactComponent =
                                e => {

                                    let props =
                                        outlineContainer
                                            .getReactProps();

                                    subscribeReactStore(
                                        props.store
                                    );

                                    oldRenderReactComponent
                                        .call(
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

                this._subscription = null;
            }
        }


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
                    ? JSON.parse(this.metadata)
                        ["components"]
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

            return this._export_settings.title;
        }


        set title(value) {

            console.log(
                "setTitle:" + value
            );

            this._export_settings.title =
                value;
        }


        get subtitle() {

            return this._export_settings.subtitle;
        }


        set subtitle(value) {

            this._export_settings.subtitle =
                value;
        }


        get icon() {

            return this._export_settings.icon;
        }


        set icon(value) {

            this._export_settings.icon =
                value;
        }


        get unit() {

            return this._export_settings.unit;
        }


        set unit(value) {

            value = _result;

            console.log(
                "value: " + value
            );

            this._export_settings.unit =
                value;
        }


        get footer() {

            return this._export_settings.footer;
        }


        set footer(value) {

            this._export_settings.footer =
                value;
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

            if (
                oldValue != newValue
            ) {

                this[name] =
                    newValue;
            }
        }

    }


    customElements.define(
        "com-fd-djaja-sap-sac-excel",
        Excel
    );


    /* =========================================================
       LOAD UI5 VIEW
       ========================================================= */

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
                that._export_settings
                    .title
                    .split("|")[0];
        }


        div =
            document.createElement("div");


        div.slot =
            "content_" +
            widgetName;


        if (
            that._firstConnection === 0
        ) {

            let div0 =
                document.createElement("div");


            div0.innerHTML =
                '<?xml version="1.0"?>' +

                '<script id="oView_' +
                widgetName +
                '" name="oView_' +
                widgetName +
                '" type="sapui5/xmlview">' +

                '<mvc:View ' +

                'height="100%" ' +

                'xmlns="sap.m" ' +
                'xmlns:u="sap.ui.unified" ' +
                'xmlns:core="sap.ui.core" ' +
                'xmlns:mvc="sap.ui.core.mvc" ' +

                'controllerName="myView.Template">' +


                '<VBox class="assetCard">' +


                /* HEADER */

                '<HBox ' +
                'class="assetHeader" ' +
                'alignItems="Center" ' +
                'justifyContent="SpaceBetween">' +

                    '<HBox alignItems="Center">' +

                        '<core:Icon ' +
                        'src="sap-icon://excel-attachment" ' +
                        'size="1.4rem" ' +
                        'class="assetIcon"/>' +

                        '<VBox>' +

                            '<Text ' +
                            'text="Excel Upload" ' +
                            'class="assetTitle"/>' +

                            '<Text ' +
                            'text="Upload and validate Excel file" ' +
                            'class="assetSubtitle"/>' +

                        '</VBox>' +

                    '</HBox>' +


                    '<Button ' +
                    'text="Download Template" ' +
                    'press="onDownloadTemplate" ' +
                    'icon="sap-icon://download" ' +
                    'type="Emphasized" ' +
                    'class="assetBtn assetBlue assetDownloadBtn"/>' +

                '</HBox>' +


                /* TOOLBAR */

                '<Toolbar class="assetToolbar">' +

                    '<u:FileUploader ' +
                    'id="idfileUploader" ' +
                    'width="270px" ' +
                    'useMultipart="false" ' +
                    'sendXHR="true" ' +
                    'sameFilenameAllowed="false" ' +
                    'buttonText="Choose File" ' +
                    'fileType="XLSM" ' +
                    'placeholder="No file selected" ' +
                    'style="Emphasized" ' +
                    'class="assetUploader"/>' +


                    '<Button ' +
                    'text="Upload" ' +
                    'press="onValidate" ' +
                    'id="__uploadButton" ' +
                    'icon="sap-icon://upload" ' +
                    'type="Emphasized" ' +
                    'class="assetBtn assetBlue assetUploadItem"/>' +


                    '<Button ' +
                    'text="Clear" ' +
                    'press="onClear" ' +
                    'icon="sap-icon://decline" ' +
                    'type="Transparent" ' +
                    'class="assetBtn assetClearItem"/>' +


                    '<ToolbarSpacer/>' +


                    '<Input ' +
                    'id="previewSearch" ' +
                    'width="230px" ' +
                    'placeholder="Search in preview" ' +
                    'liveChange="onSearchPreview" ' +
                    'class="assetSearch"/>' +

                '</Toolbar>' +


                /* DROP ZONE */

                '<VBox class="assetDrop">' +

                    '<HBox alignItems="Center">' +

                        '<core:Icon ' +
                        'src="sap-icon://upload-to-cloud" ' +
                        'size="1.3rem" ' +
                        'class="assetDropIcon"/>' +

                        '<VBox>' +

                            '<Text ' +
                            'text="Drag &amp; drop your XLSM file here" ' +
                            'class="assetDropText"/>' +

                            '<Text ' +
                            'text="or click to browse  •  Sheet: Sheet1  •  Maximum 2,000 records" ' +
                            'class="assetHelp"/>' +

                        '</VBox>' +

                    '</HBox>' +

                '</VBox>' +


                /* REQUIRED COLUMNS */

                '<Text ' +
                'text="Required columns: ID, DESCRIPTION, ASSET_TYPE, COMPANY_CODE, ASSET_CLASS, COST_CENTER, CWIP" ' +
                'class="assetRequired"/>' +


                /* STATISTICS */

                '<HBox class="assetStats">' +

                    '<VBox class="assetMetric">' +
                        '<Text text="Rows Read" class="assetMetricLabel"/>' +
                        '<Text id="rowsRead" text="0" class="assetMetricValue"/>' +
                    '</VBox>' +

                    '<VBox class="assetMetric">' +
                        '<Text text="Valid Rows" class="assetMetricLabel"/>' +
                        '<Text id="validRows" text="0" class="assetMetricValue"/>' +
                    '</VBox>' +

                    '<VBox class="assetMetric">' +
                        '<Text text="Invalid Rows" class="assetMetricLabel"/>' +
                        '<Text id="invalidRows" text="0" class="assetMetricValue"/>' +
                    '</VBox>' +

                    '<VBox class="assetMetric">' +
                        '<Text text="Sheet" class="assetMetricLabel"/>' +
                        '<Text id="sheetName" text="-" class="assetMetricValue"/>' +
                    '</VBox>' +

                    '<VBox class="assetMetric">' +
                        '<Text text="Columns" class="assetMetricLabel"/>' +
                        '<Text id="columnCount" text="0" class="assetMetricValue"/>' +
                    '</VBox>' +

                    '<VBox class="assetMetric">' +
                        '<Text text="Validation" class="assetMetricLabel"/>' +
                        '<Text id="validationStatus" text="Ready" class="assetMetricValue"/>' +
                    '</VBox>' +

                '</HBox>' +


                /* PREVIEW */

                '<VBox id="previewBox" class="assetPreview">' +

                    '<HBox ' +
                    'class="assetPreviewHead" ' +
                    'alignItems="Center">' +

                        '<Text ' +
                        'text="Preview" ' +
                        'class="assetPreviewTitle"/>' +

                        '<Text ' +
                        'id="previewCount" ' +
                        'text="0 rows"/>' +

                    '</HBox>' +


                    '<Table ' +
                    'id="previewTable" ' +
                    'visible="false" ' +
                    'items="{/rows}" ' +
                    'growing="true" ' +
                    'growingThreshold="100">' +


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


                    '<VBox ' +
                    'id="previewEmpty" ' +
                    'alignItems="Center">' +

                        '<core:Icon ' +
                        'src="sap-icon://table-view" ' +
                        'size="1.6rem"/>' +

                        '<Text ' +
                        'text="No preview available. Upload a file to view validated rows."/>' +

                    '</VBox>' +

                '</VBox>' +


                /* FOOTER */

                '<Text ' +
                'text="The file will be validated before the data is sent to SAC." ' +
                'class="assetFooter"/>' +


                '</VBox>' +

                '</mvc:View>' +

                '</script>';


            _shadowRoot.appendChild(
                div0
            );


            /* FRAGMENT */

            let div1 =
                document.createElement("div");


            div1.innerHTML =
                '<?xml version="1.0"?>' +

                '<script id="myXMLFragment_' +
                widgetName +
                '" type="sapui5/fragment">' +

                '<core:FragmentDefinition ' +
                'xmlns="sap.m" ' +
                'xmlns:core="sap.ui.core">' +

                '<SelectDialog ' +
                'title="Partner Number" ' +
                'class="sapUiPopupWithPadding" ' +
                'items="{' +
                widgetName +
                '> /}" ' +
                'search="_handleValueHelpSearch" ' +
                'confirm="_handleValueHelpClose" ' +
                'cancel="_handleValueHelpClose" ' +
                'multiSelect="true" ' +
                'showClearButton="true" ' +
                'rememberSelections="true">' +

                '<StandardListItem ' +
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


            /* UI5 CONTENT */

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


            _shadowRoot.appendChild(
                div2
            );


            that_.appendChild(
                div
            );


            var mapcanvas_divstr =
                _shadowRoot.getElementById(
                    "oView_" +
                    widgetName
                );


            var mapcanvas_fragment_divstr =
                _shadowRoot.getElementById(
                    "myXMLFragment_" +
                    widgetName
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
            function() {

                "use strict";


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


                    function(
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
                                   INIT
                                   ================================================= */

                                onInit: function() {

                                    console.log(
                                        that._export_settings.title
                                    );

                                    console.log(
                                        "widgetName:" +
                                        that.widgetName
                                    );


                                    if (
                                        that._firstConnection === 0
                                    ) {

                                        that._firstConnection = 1;
                                    }
                                },


                                /* =================================================
                                   VALIDATE / UPLOAD
                                   ================================================= */

                                onValidate: function(e) {

                                    var fU =
                                        this.getView().byId(
                                            "idfileUploader"
                                        );


                                    var fileInput =
                                        document.getElementById(
                                            fU.getId() + "-fu"
                                        );


                                    var file =
                                        fileInput &&
                                        fileInput.files
                                            ? fileInput.files[0]
                                            : undefined;


                                    var this_ = this;


                                    if (
                                        typeof file ===
                                        "undefined"
                                    ) {

                                        MessageToast.show(
                                            "Please choose an Excel file first"
                                        );

                                        return;
                                    }


                                    this_.wasteTime();


                                    var oModel =
                                        new JSONModel();


                                    oModel.setData({
                                        result_final: null
                                    });


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


                                                var result_final = [];

                                                var result = [];

                                                var correctsheet =
                                                    false;


                                                workbook.SheetNames
                                                    .forEach(
                                                        function(
                                                            sheetName
                                                        ) {

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


                                                                result =
                                                                    result.join(
                                                                        "[$@~!~@$]"
                                                                    );
                                                            }
                                                        }
                                                    );


                                                if (
                                                    correctsheet
                                                ) {

                                                    var firstBlock =
                                                        result
                                                            .split(
                                                                "[$@~!~@$]"
                                                            )[0];


                                                    var lengthfield =
                                                        firstBlock
                                                            .split(
                                                                ","
                                                            )
                                                            .length;


                                                    console.log(
                                                        "lengthfield: " +
                                                        lengthfield
                                                    );


                                                    var rec_count = 0;

                                                    var len = 0;


                                                    if (
                                                        lengthfield ===
                                                        7
                                                    ) {


                                                        var rows =
                                                            result.split(
                                                                "[$@~!~@$]"
                                                            );


                                                        for (
                                                            var i = 1;
                                                            i < rows.length;
                                                            i++
                                                        ) {

                                                            if (
                                                                rows[i]
                                                                    .length > 0
                                                            ) {

                                                                var rec =
                                                                    rows[i]
                                                                        .split(
                                                                            ","
                                                                        );


                                                                if (
                                                                    rec.length >
                                                                    0
                                                                ) {

                                                                    len =
                                                                        rec[0]
                                                                            .trim()
                                                                            .length +

                                                                        rec[1]
                                                                            .trim()
                                                                            .length +

                                                                        rec[2]
                                                                            .trim()
                                                                            .length +

                                                                        rec[3]
                                                                            .trim()
                                                                            .length +

                                                                        rec[4]
                                                                            .trim()
                                                                            .length +

                                                                        rec[5]
                                                                            .trim()
                                                                            .length +

                                                                        rec[6]
                                                                            .trim()
                                                                            .length;


                                                                    if (
                                                                        len >
                                                                        0
                                                                    ) {

                                                                        rec_count =
                                                                            rec_count +
                                                                            1;


                                                                        result_final.push({

                                                                            ID:
                                                                                rec[0]
                                                                                    .trim(),

                                                                            DESCRIPTION:
                                                                                rec[1]
                                                                                    .trim(),

                                                                            ASSET_TYPE:
                                                                                rec[2]
                                                                                    .trim(),

                                                                            COMPANY_CODE:
                                                                                rec[3]
                                                                                    .trim(),

                                                                            ASSET_CLASS:
                                                                                rec[4]
                                                                                    .trim(),

                                                                            COST_CENTER:
                                                                                rec[5]
                                                                                    .trim(),

                                                                            CWIP:
                                                                                rec[6]
                                                                                    .trim()

                                                                        });
                                                                    }
                                                                }
                                                            }
                                                        }


                                                        /* =========================================
                                                           NO RECORD
                                                           ========================================= */

                                                        if (
                                                            result_final
                                                                .length ===
                                                            0
                                                        ) {

                                                            fU.setValue(
                                                                ""
                                                            );

                                                            MessageToast.show(
                                                                "There is no record to be uploaded"
                                                            );

                                                            this_.updateStats(
                                                                0,
                                                                0,
                                                                0,
                                                                "Sheet1",
                                                                lengthfield,
                                                                "Invalid"
                                                            );

                                                            this_.runNext();


                                                        }


                                                        /* =========================================
                                                           MORE THAN 2000
                                                           ========================================= */

                                                        else if (
                                                            result_final
                                                                .length >=
                                                            2001
                                                        ) {

                                                            fU.setValue(
                                                                ""
                                                            );

                                                            MessageToast.show(
                                                                "Maximum records are 2000."
                                                            );

                                                            this_.updateStats(
                                                                result_final.length,
                                                                0,
                                                                result_final.length,
                                                                "Sheet1",
                                                                lengthfield,
                                                                "Invalid"
                                                            );

                                                            this_.runNext();


                                                        }


                                                        /* =========================================
                                                           SUCCESS
                                                           ========================================= */

                                                        else {

                                                            oModel =
                                                                new JSONModel();


                                                            oModel.setSizeLimit(
                                                                5000
                                                            );


                                                            oModel.setData({

                                                                result_final:
                                                                    result_final,

                                                                rows:
                                                                    result_final

                                                            });


                                                            this_
                                                                .getView()
                                                                .setModel(
                                                                    oModel
                                                                );


                                                            this_
                                                                .setPreview(
                                                                    result_final
                                                                );


                                                            this_
                                                                .updateStats(

                                                                    result_final
                                                                        .length,

                                                                    result_final
                                                                        .length,

                                                                    0,

                                                                    "Sheet1",

                                                                    7,

                                                                    "Valid"
                                                                );


                                                            var oModel1 =
                                                                new sap.ui
                                                                    .model
                                                                    .json
                                                                    .JSONModel();


                                                            oModel1.setData({
                                                                fname:
                                                                    file.name
                                                            });


                                                            console.log(
                                                                oModel
                                                            );


                                                            _result =
                                                                JSON.stringify(
                                                                    result_final
                                                                );


                                                            that
                                                                ._firePropertiesChanged();


                                                            this.settings =
                                                                {};

                                                            this.settings
                                                                .result =
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


                                                            this_
                                                                .runNext();


                                                            fU.setValue(
                                                                ""
                                                            );
                                                        }


                                                    }

                                                    else {

                                                        this_
                                                            .runNext();


                                                        fU.setValue(
                                                            ""
                                                        );


                                                        MessageToast.show(
                                                            "Please upload the correct file"
                                                        );
                                                    }


                                                }

                                                else {

                                                    this_
                                                        .runNext();


                                                    console.log(
                                                        "Error: wrong Excel File template"
                                                    );


                                                    MessageToast.show(
                                                        "Please upload the correct file"
                                                    );
                                                }


                                            } catch (error) {

                                                console.error(
                                                    "Excel validation error:",
                                                    error
                                                );


                                                this_
                                                    .runNext();


                                                fU.setValue(
                                                    ""
                                                );


                                                MessageToast.show(
                                                    "Unable to read the Excel file"
                                                );
                                            }

                                        };


                                    reader.readAsBinaryString(
                                        file
                                    );
                                },


                                /* =================================================
                                   DOWNLOAD TEMPLATE
                                   ================================================= */

                                onDownloadTemplate:
                                    function() {

                                        try {

                                            var data = [

                                                {

                                                    ID: "",
                                                    DESCRIPTION: "",
                                                    ASSET_TYPE: "",
                                                    COMPANY_CODE: "",
                                                    ASSET_CLASS: "",
                                                    COST_CENTER: "",
                                                    CWIP: ""

                                                }

                                            ];


                                            var worksheet =
                                                XLSX.utils
                                                    .json_to_sheet(

                                                        data,

                                                        {
                                                            header: [

                                                                "ID",
                                                                "DESCRIPTION",
                                                                "ASSET_TYPE",
                                                                "COMPANY_CODE",
                                                                "ASSET_CLASS",
                                                                "COST_CENTER",
                                                                "CWIP"

                                                            ]
                                                        }
                                                    );


                                            var workbook =
                                                XLSX.utils
                                                    .book_new();


                                            XLSX.utils
                                                .book_append_sheet(

                                                    workbook,

                                                    worksheet,

                                                    "Sheet1"
                                                );


                                            XLSX.writeFile(

                                                workbook,

                                                "Asset_Upload_Template.xlsx"

                                            );


                                            MessageToast.show(
                                                "Template downloaded successfully"
                                            );


                                        } catch (error) {

                                            console.error(
                                                "Template download error:",
                                                error
                                            );


                                            MessageToast.show(
                                                "Unable to download template"
                                            );
                                        }
                                    },


                                /* =================================================
                                   CLEAR
                                   ================================================= */

                                onClear:
                                    function() {

                                        try {

                                            var view =
                                                this.getView();


                                            var fU =
                                                view.byId(
                                                    "idfileUploader"
                                                );


                                            if (fU) {

                                                fU.setValue(
                                                    ""
                                                );
                                            }


                                            var search =
                                                view.byId(
                                                    "previewSearch"
                                                );


                                            if (search) {

                                                search.setValue(
                                                    ""
                                                );
                                            }


                                            var table =
                                                view.byId(
                                                    "previewTable"
                                                );


                                            if (table) {

                                                table.setVisible(
                                                    false
                                                );

                                                table.removeSelections(
                                                    true
                                                );
                                            }


                                            var empty =
                                                view.byId(
                                                    "previewEmpty"
                                                );


                                            if (empty) {

                                                empty.setVisible(
                                                    true
                                                );
                                            }


                                            var count =
                                                view.byId(
                                                    "previewCount"
                                                );


                                            if (count) {

                                                count.setText(
                                                    "0 rows"
                                                );
                                            }


                                            this.updateStats(

                                                0,
                                                0,
                                                0,
                                                "-",
                                                0,
                                                "Ready"

                                            );


                                            var model =
                                                view.getModel();


                                            if (!model) {

                                                model =
                                                    new JSONModel();

                                                view.setModel(
                                                    model
                                                );
                                            }


                                            model.setData({
                                                result_final: [],
                                                rows: []
                                            });


                                            model.refresh(
                                                true
                                            );


                                            _result = "";


                                            MessageToast.show(
                                                "Upload cleared"
                                            );


                                        } catch (error) {

                                            console.error(
                                                "Clear error:",
                                                error
                                            );
                                        }
                                    },


                                /* =================================================
                                   SEARCH PREVIEW
                                   ================================================= */

                                onSearchPreview:
                                    function(oEvent) {

                                        try {

                                            var value =
                                                oEvent
                                                    .getParameter(
                                                        "newValue"
                                                    );


                                            value =
                                                value
                                                    ? value.trim()
                                                    : "";


                                            var table =
                                                this.getView()
                                                    .byId(
                                                        "previewTable"
                                                    );


                                            if (!table) {
                                                return;
                                            }


                                            var binding =
                                                table.getBinding(
                                                    "items"
                                                );


                                            if (!binding) {
                                                return;
                                            }


                                            if (!value) {

                                                binding.filter(
                                                    []
                                                );

                                                return;
                                            }


                                            var fields = [

                                                "ID",
                                                "DESCRIPTION",
                                                "ASSET_TYPE",
                                                "COMPANY_CODE",
                                                "ASSET_CLASS",
                                                "COST_CENTER",
                                                "CWIP"

                                            ];


                                            var filters = [];


                                            fields.forEach(
                                                function(
                                                    field
                                                ) {

                                                    filters.push(

                                                        new Filter(

                                                            field,

                                                            FilterOperator.Contains,

                                                            value

                                                        )
                                                    );

                                                }
                                            );


                                            var combinedFilter =
                                                new Filter({

                                                    filters:
                                                        filters,

                                                    and:
                                                        false

                                                });


                                            binding.filter(
                                                [
                                                    combinedFilter
                                                ]
                                            );


                                        } catch (error) {

                                            console.error(
                                                "Preview search error:",
                                                error
                                            );
                                        }
                                    },


                                /* =================================================
                                   SET PREVIEW
                                   ================================================= */

                                setPreview:
                                    function(result_final) {

                                        try {

                                            var view =
                                                this.getView();


                                            var model =
                                                view.getModel();


                                            if (!model) {

                                                model =
                                                    new JSONModel();

                                                view.setModel(
                                                    model
                                                );
                                            }


                                            model.setSizeLimit(
                                                5000
                                            );


                                            model.setData({

                                                result_final:
                                                    result_final || [],

                                                rows:
                                                    result_final || []

                                            });


                                            model.refresh(
                                                true
                                            );


                                            var table =
                                                view.byId(
                                                    "previewTable"
                                                );


                                            var empty =
                                                view.byId(
                                                    "previewEmpty"
                                                );


                                            var count =
                                                view.byId(
                                                    "previewCount"
                                                );


                                            var n =
                                                result_final
                                                    ? result_final.length
                                                    : 0;


                                            if (table) {

                                                table.setVisible(
                                                    n > 0
                                                );
                                            }


                                            if (empty) {

                                                empty.setVisible(
                                                    n === 0
                                                );
                                            }


                                            if (count) {

                                                count.setText(

                                                    n +

                                                    (
                                                        n === 1
                                                            ? " row"
                                                            : " rows"
                                                    )

                                                );
                                            }


                                        } catch (error) {

                                            console.error(
                                                "Preview update error:",
                                                error
                                            );
                                        }
                                    },


                                /* =================================================
                                   UPDATE STATISTICS
                                   ================================================= */

                                updateStats:
                                    function(

                                        rowsRead,
                                        validRows,
                                        invalidRows,
                                        sheet,
                                        columns,
                                        status

                                    ) {

                                        try {

                                            var view =
                                                this.getView();


                                            var setText =
                                                function(
                                                    id,
                                                    value
                                                ) {

                                                    var control =
                                                        view.byId(
                                                            id
                                                        );


                                                    if (control) {

                                                        control.setText(
                                                            String(
                                                                value
                                                            )
                                                        );
                                                    }
                                                };


                                            setText(
                                                "rowsRead",
                                                rowsRead || 0
                                            );


                                            setText(
                                                "validRows",
                                                validRows || 0
                                            );


                                            setText(
                                                "invalidRows",
                                                invalidRows || 0
                                            );


                                            setText(
                                                "sheetName",
                                                sheet || "-"
                                            );


                                            setText(
                                                "columnCount",
                                                columns || 0
                                            );


                                            setText(
                                                "validationStatus",
                                                status || "Ready"
                                            );


                                        } catch (error) {

                                            console.error(
                                                "Statistics error:",
                                                error
                                            );
                                        }
                                    },


                                /* =================================================
                                   BUSY DIALOG
                                   ================================================= */

                                wasteTime:
                                    function() {

                                        try {

                                            busyDialog.open();

                                        } catch (error) {

                                            console.error(
                                                error
                                            );
                                        }
                                    },


                                runNext:
                                    function() {

                                        try {

                                            busyDialog.close();

                                        } catch (error) {

                                            console.error(
                                                error
                                            );
                                        }
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
                    Ar[foundIndex].div;


                console.log(
                    divfinal
                );


                /* =====================================================
                   CREATE XML VIEW
                   ===================================================== */

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
                c => {

                    let r =
                        Math.random() *
                        16 |
                        0;


                    let v =
                        c === "x"
                            ? r
                            : (
                                r & 0x3 |
                                0x8
                            );


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
                    () => {

                        reject(
                            new Error(
                                `Script load error for ${src}`
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

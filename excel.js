(function() {

    let _shadowRoot;
    let _id;
    let _result;

    let div;
    let widgetName;
    var Ar = [];


    /* =========================================================
       SHADOW DOM TEMPLATE
       ========================================================= */

    let tmpl = document.createElement("template");

    tmpl.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                height: 100%;
                min-width: 300px;
                box-sizing: border-box;
            }
        </style>
    `;


    /* =========================================================
       GLOBAL SAPUI5 STYLE
       ========================================================= */

    const assetGlobalStyle = `

        .assetCard {

            width: 100% !important;

            min-height: 245px !important;

            padding: 16px 20px 14px 20px !important;

            position: relative !important;

            overflow: hidden !important;

            box-sizing: border-box !important;

            border: 1px solid #d9e2ec !important;

            border-radius: 14px !important;

            background: #ffffff !important;

            box-shadow:
                0 3px 10px rgba(31,55,77,0.07) !important;
        }


        /* TOP BLUE LINE */

        .assetCard::before {

            content: "" !important;

            position: absolute !important;

            top: 0 !important;

            left: 0 !important;

            right: 0 !important;

            height: 3px !important;

            background: #0a6ed1 !important;
        }


        /* =====================================================
           HEADER
           ===================================================== */

        .assetHeader {

            width: 100% !important;

            min-height: 48px !important;

            height: 48px !important;

            margin-bottom: 12px !important;

            align-items: center !important;
        }


        /* SMALLER EXCEL ICON */

        .assetIcon {

            width: 38px !important;

            height: 38px !important;

            min-width: 38px !important;

            padding: 9px !important;

            margin-right: 11px !important;

            border-radius: 9px !important;

            background: #eaf3ff !important;

            color: #0a6ed1 !important;

            box-shadow: none !important;
        }


        /* TITLE */

        .assetTitle {

            display: block !important;

            color: #1d2d3e !important;

            font-size: 16px !important;

            font-weight: 700 !important;

            line-height: 20px !important;

            margin: 0 !important;
        }


        /* SUBTITLE */

        .assetSubtitle {

            display: block !important;

            margin-top: 1px !important;

            color: #6a7885 !important;

            font-size: 10px !important;

            line-height: 14px !important;
        }


        /* =====================================================
           UPLOAD AREA
           ===================================================== */

        .assetDropZone {

            width: 100% !important;

            padding: 12px 14px 13px 14px !important;

            box-sizing: border-box !important;

            border: 1px solid #d5e4f2 !important;

            border-radius: 10px !important;

            background: #f8fbfe !important;
        }


        /* =====================================================
           SELECT FILE TEXT
           ===================================================== */

        .assetSelectRow {

            width: 100% !important;

            height: 22px !important;

            margin-bottom: 1px !important;

            align-items: center !important;
        }


        .assetDropIcon {

            margin-right: 7px !important;

            color: #0a6ed1 !important;
        }


        .assetSelectText {

            color: #334e68 !important;

            font-size: 12px !important;

            font-weight: 600 !important;
        }


        /* =====================================================
           HELPER
           ===================================================== */

        .assetHelper {

            display: block !important;

            margin-top: 1px !important;

            margin-bottom: 9px !important;

            color: #718096 !important;

            font-size: 10px !important;

            line-height: 14px !important;
        }


        /* =====================================================
           FILE + UPLOAD SAME ROW
           ===================================================== */

        .assetActionRow {

            width: 100% !important;

            align-items: center !important;
        }


        .assetActionRow .assetUploader {

            flex: 1 1 auto !important;

            width: auto !important;

            min-width: 0 !important;
        }


        .assetActionRow .assetUploadButton {

            flex: 0 0 auto !important;

            width: auto !important;

            min-width: 90px !important;

            margin-top: 0 !important;

            margin-left: 8px !important;

            height: 36px !important;
        }


        .assetActionRow .assetUploadButton .sapMBtnInner {

            height: 36px !important;

            border-radius: 7px !important;
        }


        /* =====================================================
           FILE UPLOADER
           ===================================================== */

        .assetUploader {

            width: 100% !important;

            margin: 0 !important;
        }


        /* REMOVE EXTRA UI5 INPUT BORDER EFFECTS */

        .assetUploader .sapUiFupInputMask {

            height: 36px !important;

            box-sizing: border-box !important;

            border: 1px solid #cbd6e0 !important;

            border-radius: 7px !important;

            background: #ffffff !important;

            color: #1d2d3e !important;

            font-size: 11px !important;

            box-shadow: none !important;
        }


        /* BROWSE BUTTON */

        .assetUploader .sapUiFupButton {

            height: 36px !important;

            margin-left: 6px !important;

            border-radius: 7px !important;

            background: #e9edf1 !important;

            border: 1px solid #d0d7de !important;

            color: #334e68 !important;

            font-weight: 600 !important;

            box-shadow: none !important;
        }


        .assetUploader .sapUiFupButton:hover {

            background: #dfe5ea !important;

            border-color: #c1cad3 !important;
        }


        /* =====================================================
           UPLOAD BUTTON
           ===================================================== */

        .assetUploadButton {

            margin-top: 0 !important;

            margin-left: 8px !important;

            height: 36px !important;

            min-width: 90px !important;

            border-radius: 7px !important;

            box-shadow:
                0 3px 8px
                rgba(10,110,209,0.18) !important;
        }


        .assetUploadButton .sapMBtnInner {

            height: 36px !important;

            padding: 0 17px !important;

            border-radius: 7px !important;

            background: #0a6ed1 !important;

            border: 1px solid #0a6ed1 !important;

            color: #ffffff !important;

            font-size: 12px !important;

            font-weight: 700 !important;
        }


        .assetUploadButton .sapMBtnInner:hover {

            background: #085caf !important;

            border-color: #085caf !important;
        }


        .assetUploadButton .sapMBtnIcon {

            color: #ffffff !important;

            margin-right: 6px !important;
        }


        /* =====================================================
           FOOTER
           ===================================================== */

        .assetFooter {

            display: block !important;

            margin-top: 7px !important;

            color: #8793a0 !important;

            font-size: 9px !important;

            line-height: 13px !important;
        }


        /* =====================================================
           REMOVE UNNECESSARY SAP FORM SPACING
           ===================================================== */

        .assetCard .sapUiFormResGrid {

            padding: 0 !important;

            margin: 0 !important;
        }


        .assetCard .sapUiFormResGridCont {

            padding: 0 !important;

            margin: 0 !important;
        }


        .assetCard .sapUiFormResGrid > div {

            padding: 0 !important;

            margin: 0 !important;
        }


        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 600px) {

            .assetCard {

                padding:
                    14px !important;
            }

            .assetUploadButton {

                width:
                    100% !important;

                min-width:
                    100% !important;

                margin-left:
                    0 !important;

                margin-top:
                    8px !important;
            }

        }

    `;


    /* =========================================================
       ADD GLOBAL STYLE ONCE
       ========================================================= */

    function installGlobalStyle() {

        if (
            document.getElementById(
                "assetUploadGlobalStyle"
            )
        ) {
            return;
        }


        let style =
            document.createElement(
                "style"
            );


        style.id =
            "assetUploadGlobalStyle";


        style.type =
            "text/css";


        style.textContent =
            assetGlobalStyle;


        document.head.appendChild(style);
    }


    /* =========================================================
       MAIN CUSTOM WIDGET
       ========================================================= */

    class Excel extends HTMLElement {

        constructor() {

            super();


            _shadowRoot =
                this.attachShadow({
                    mode: "open"
                });


            _shadowRoot.appendChild(
                tmpl.content.cloneNode(true)
            );


            _id =
                createGuid();


            this._export_settings = {};

            this._export_settings.title = "";

            this._export_settings.subtitle = "";

            this._export_settings.icon = "";

            this._export_settings.unit = "";

            this._export_settings.footer = "";


            this.addEventListener(
                "click",
                event => {

                    console.log(
                        "click"
                    );

                }
            );


            this._firstConnection = 0;
        }


        connectedCallback() {

            installGlobalStyle();


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

                        let parseReactState =
                            state => {

                                let components = {};

                                let globalState =
                                    state.globalState;

                                let instances =
                                    globalState.instances;

                                let app =
                                    instances
                                        .app[
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
                                        JSON.parse(
                                            key
                                        ).pop();

                                    let type =
                                        Object.keys(
                                            obj
                                        )[0];

                                    let id =
                                        obj[type];

                                    components[id] = {

                                        type:
                                            type,

                                        name:
                                            name
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

                                        effect:
                                            state => {

                                                parseReactState(
                                                    state
                                                );

                                                return {

                                                    result:
                                                        1

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


                                        oldRenderReactComponent.call(
                                            outlineContainer,
                                            e
                                        );

                                    };

                        }

                    }

                }

            } catch (e) {

            }

        }


        disconnectedCallback() {

            if (
                this._subscription
            ) {

                this._subscription();

                this._subscription =
                    null;

            }

        }


        onCustomWidgetBeforeUpdate(
            changedProperties
        ) {

            if (
                "designMode"
                in changedProperties
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

            installGlobalStyle();


            var that =
                this;


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

                                unit:
                                    this.unit

                            }

                        }
                    }
                )
            );

        }


        get title() {

            return this._export_settings.title;

        }


        set title(value) {

            console.log(
                "setTitle:" +
                value
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

            value =
                _result;


            console.log(
                "value: " +
                value
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
                oldValue !=
                newValue
            ) {

                this[name] =
                    newValue;

            }

        }

    }


    /* =========================================================
       REGISTER WIDGET
       ========================================================= */

    customElements.define(
        "com-fd-djaja-sap-sac-excel",
        Excel
    );


    /* =========================================================
       LOAD SAPUI5 VIEW
       ========================================================= */

    function loadthis(
        that,
        changedProperties
    ) {

        var that_ =
            that;


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
            that._firstConnection ===
            0
        ) {

            let div0 =
                document.createElement(
                    "div"
                );


            /* =================================================
               SAPUI5 XML VIEW
               ================================================= */

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

                'xmlns:f="sap.ui.layout.form" ' +

                'xmlns:core="sap.ui.core" ' +

                'xmlns:mvc="sap.ui.core.mvc" ' +

                'controllerName="myView.Template">' +


                /* =================================================
                   MAIN CARD
                   ================================================= */

                '<VBox ' +

                'class="assetCard" ' +

                'width="100%">' +


                /* =================================================
                   HEADER
                   ================================================= */

                '<HBox ' +

                'class="assetHeader" ' +

                'alignItems="Center">' +


                '<core:Icon ' +

                'src="sap-icon://excel-attachment" ' +

                'size="1.3rem" ' +

                'class="assetIcon"/>' +


                '<VBox>' +


                '<Text ' +

                'text="Upload Asset File" ' +

                'class="assetTitle"/>' +


                '<Text ' +

                'text="Import your asset data into SAC" ' +

                'class="assetSubtitle"/>' +


                '</VBox>' +


                '</HBox>' +


                /* =================================================
                   UPLOAD AREA
                   ================================================= */

                '<VBox ' +

                'class="assetDropZone">' +


                '<HBox ' +

                'class="assetSelectRow" ' +

                'alignItems="Center">' +


                '<core:Icon ' +

                'src="sap-icon://upload" ' +

                'size="1rem" ' +

                'class="assetDropIcon"/>' +


                '<Text ' +

                'text="Select your XLSM file" ' +

                'class="assetSelectText"/>' +


                '</HBox>' +


                '<Text ' +

                'text="Supported format: XLSM  •  Sheet: Sheet1  •  Maximum 2,000 records" ' +

                'class="assetHelper"/>' +


                /* =================================================
                   FILE UPLOADER + UPLOAD BUTTON
                   ================================================= */

                '<HBox ' +

                'class="assetActionRow" ' +

                'width="100%" ' +

                'alignItems="Center">' +


                '<u:FileUploader ' +

                'id="idfileUploader" ' +

                'class="assetUploader" ' +

                'width="100%" ' +

                'useMultipart="false" ' +

                'sendXHR="true" ' +

                'sameFilenameAllowed="false" ' +

                'buttonText="Browse" ' +

                'fileType="XLSM" ' +

                'placeholder="Choose an XLSM file" ' +

                'style="Emphasized"/>' +


                '<Button ' +

                'text="Upload" ' +

                'press="onValidate" ' +

                'id="__uploadButton" ' +

                'icon="sap-icon://upload" ' +

                'type="Emphasized" ' +

                'class="assetUploadButton" ' +

                'tooltip="Upload the selected asset file"/>' +


                '</HBox>' +


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


            /* =================================================
               EXISTING FRAGMENT
               ================================================= */

            let div1 =
                document.createElement(
                    "div"
                );


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


            /* =================================================
               CONTENT SLOT
               ================================================= */

            let div2 =
                document.createElement(
                    "div"
                );


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


            /* =================================================
               STORE XML REFERENCES
               ================================================= */

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

                id:
                    widgetName,

                div:
                    mapcanvas_divstr,

                divf:
                    mapcanvas_fragment_divstr

            });

        }


        that_._renderExportButton();


        /* =====================================================
           SAPUI5 INIT
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


                                /* =================================
                                   INIT
                                   ================================= */

                                onInit:

                                    function() {

                                        console.log(

                                            that

                                                ._export_settings

                                                .title

                                        );


                                        console.log(

                                            "widgetName:" +

                                            that.widgetName

                                        );


                                        if (

                                            that

                                                ._firstConnection ===

                                            0

                                        ) {

                                            that

                                                ._firstConnection =

                                                1;

                                        }

                                    },


                                /* =================================
                                   VALIDATE / UPLOAD
                                   ================================= */

                                onValidate:

                                    function(e) {


                                        var fU =

                                            this

                                                .getView()

                                                .byId(

                                                    "idfileUploader"

                                                );


                                        var file =

                                            $(

                                                "#__xmlview1--idfileUploader-fu"

                                            )[0]

                                                .files[0];


                                        var this_ =

                                            this;


                                        this_.wasteTime();


                                        var oModel =

                                            new JSONModel();


                                        oModel.setData({

                                            result_final:

                                                null

                                        });


                                        var reader =

                                            new FileReader();


                                        reader.onload =

                                            async function(e) {


                                                var strCSV =

                                                    e.target.result;


                                                var workbook =

                                                    XLSX.read(

                                                        strCSV,

                                                        {

                                                            type:

                                                                "binary"

                                                        }

                                                    );


                                                var result_final =

                                                    [];


                                                var result =

                                                    [];


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


                                                    var lengthfield =

                                                        result

                                                            .split(

                                                                "[$@~!~@$]"

                                                            )[0]

                                                            .split(

                                                                "[#@~!~@#]"

                                                            ).length;


                                                    console.log(

                                                        "lengthfield: " +

                                                        lengthfield

                                                    );


                                                    var total =

                                                        this_

                                                            .getView()

                                                            .byId(

                                                                "total"

                                                            );


                                                    var rec_count =

                                                        0;


                                                    var len =

                                                        0;


                                                    if (

                                                        lengthfield ===

                                                        7

                                                    ) {


                                                        for (

                                                            var i = 1;

                                                            i <

                                                            result

                                                                .split(

                                                                    "[$@~!~@$]"

                                                                )

                                                                .length;

                                                            i++

                                                        ) {


                                                            if (

                                                                result

                                                                    .split(

                                                                        "[$@~!~@$]"

                                                                    )[i]

                                                                    .length > 0

                                                            ) {


                                                                var rec =

                                                                    result

                                                                        .split(

                                                                            "[$@~!~@$]"

                                                                        )[i]

                                                                        .split(

                                                                            "[#@~!~@#]"

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


                                                                        result_final

                                                                            .push(

                                                                                {

                                                                                    "ID":

                                                                                        rec[0]

                                                                                            .trim(),

                                                                                    "DESCRIPTION":

                                                                                        rec[1]

                                                                                            .trim(),

                                                                                    "ASSET_TYPE":

                                                                                        rec[2]

                                                                                            .trim(),

                                                                                    "COMPANY_CODE":

                                                                                        rec[3]

                                                                                            .trim(),

                                                                                    "ASSET_CLASS":

                                                                                        rec[4]

                                                                                            .trim(),

                                                                                    "COST_CENTER":

                                                                                        rec[5]

                                                                                            .trim(),

                                                                                    "CWIP":

                                                                                        rec[6]

                                                                                            .trim()

                                                                                }

                                                                            );

                                                                    }

                                                                }

                                                            }

                                                        }


                                                        /* =========================
                                                           NO RECORDS
                                                           ========================= */

                                                        if (

                                                            result_final.length ===

                                                            0

                                                        ) {


                                                            fU.setValue(

                                                                ""

                                                            );


                                                            MessageToast.show(

                                                                "There is no record to be uploaded"

                                                            );


                                                            this_.runNext();

                                                        }


                                                        /* =========================
                                                           RECORD LIMIT
                                                           ========================= */

                                                        else if (

                                                            result_final.length >=

                                                            2001

                                                        ) {


                                                            fU.setValue(

                                                                ""

                                                            );


                                                            MessageToast.show(

                                                                "Maximum records are 2000."

                                                            );


                                                            this_.runNext();

                                                        }


                                                        /* =========================
                                                           SUCCESS
                                                           ========================= */

                                                        else {


                                                            oModel =

                                                                new JSONModel();


                                                            oModel.setSizeLimit(

                                                                "5000"

                                                            );


                                                            oModel.setData({

                                                                result_final:

                                                                    result_final

                                                            });


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


                                                            this_.runNext();


                                                            fU.setValue(

                                                                ""

                                                            );

                                                        }


                                                    }


                                                    /* =========================
                                                       WRONG COLUMN COUNT
                                                       ========================= */

                                                    else {


                                                        this_.runNext();


                                                        fU.setValue(

                                                            ""

                                                        );


                                                        MessageToast.show(

                                                            "Please upload the correct file"

                                                        );

                                                    }


                                                }


                                                /* =========================
                                                   WRONG SHEET
                                                   ========================= */

                                                else {


                                                    this_.runNext();


                                                    console.log(

                                                        "Error: wrong Excel File template"

                                                    );


                                                    MessageToast.show(

                                                        "Please upload the correct file"

                                                    );

                                                }

                                            };


                                        /* ================================
                                           FILE SELECTED
                                           ================================ */

                                        if (

                                            typeof file !==

                                            "undefined"

                                        ) {


                                            reader.readAsBinaryString(

                                                file

                                            );

                                        }

                                    },


                                /* =================================
                                   BUSY DIALOG
                                   ================================= */

                                wasteTime:

                                    function() {

                                        busyDialog.open();

                                    },


                                runNext:

                                    function() {

                                        busyDialog.close();

                                    }

                            }

                        );

                    }

                );


                /* =================================================
                   FIND VIEW
                   ================================================= */

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
                   CREATE SAPUI5 VIEW
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


                /* =================================================
                   DESIGN MODE
                   ================================================= */

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
       CREATE GUID
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

                                0x3 |

                                0x8

                            );


                    return v.toString(

                        16

                    );

                }

            );

    }


    /* =========================================================
       LOAD EXTERNAL XLSX LIBRARY
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

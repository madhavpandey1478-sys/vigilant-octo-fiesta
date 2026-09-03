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

    /* =====================================================
       SAC WIDGET BASE
       ===================================================== */

    :host {
        display: block;
        width: 100%;
        height: 100%;

        font-family:
            "72",
            Arial,
            Helvetica,
            sans-serif;

        color: #1d2d3e;

        box-sizing: border-box;
    }


    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }


    /* =====================================================
       MAIN SIMPLE FORM
       ===================================================== */

    .assetForm {
        width: 100% !important;

        padding: 20px !important;

        border: 1px solid #d9e2ec;

        border-radius: 14px;

        background:
            linear-gradient(
                180deg,
                #ffffff 0%,
                #f7faff 100%
            );

        box-shadow:
            0 3px 10px rgba(31, 55, 77, 0.06),
            0 12px 28px rgba(31, 55, 77, 0.06);
    }


    /* =====================================================
       SIMPLE FORM TITLE / LABEL
       ===================================================== */

    .assetForm .sapMLabel {

        color: #1d2d3e !important;

        font-size: 18px !important;

        font-weight: 700 !important;

        padding-bottom: 12px !important;
    }


    /* =====================================================
       UPLOAD CONTAINER
       ===================================================== */

    .assetUploadArea {

        width: 100% !important;

        padding: 18px !important;

        border:
            1.5px dashed
            #9fc5eb !important;

        border-radius: 12px !important;

        background:
            linear-gradient(
                180deg,
                #f5faff 0%,
                #ffffff 100%
            );

        transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
    }


    .assetUploadArea:hover {

        border-color:
            #0a6ed1 !important;

        background:
            #f0f7ff !important;

        box-shadow:
            inset 0 0 0 1px
            rgba(10, 110, 209, 0.08);
    }


    /* =====================================================
       FILE UPLOADER
       ===================================================== */

    .assetUploader {

        width: 100% !important;

        margin: 0 !important;
    }


    /*
       File name field
    */

    .assetUploader
    .sapUiFupInputMask {

        height: 40px !important;

        border:
            1px solid
            #c7d3df !important;

        border-radius:
            8px !important;

        background:
            #ffffff !important;

        color:
            #1d2d3e !important;

        font-size:
            12px !important;

        box-shadow:
            none !important;

        transition:
            border-color 160ms ease,
            box-shadow 160ms ease;
    }


    .assetUploader
    .sapUiFupInputMask:hover {

        border-color:
            #8da9c0 !important;
    }


    .assetUploader
    .sapUiFupInputMask:focus {

        border-color:
            #0a6ed1 !important;

        box-shadow:
            0 0 0 3px
            rgba(10, 110, 209, 0.10) !important;
    }


    /* =====================================================
       BROWSE BUTTON
       ===================================================== */

    .assetUploader
    .sapUiFupButton {

        height: 40px !important;

        margin-left: 8px !important;

        border-radius:
            8px !important;

        background:
            #e7ebef !important;

        border:
            1px solid
            #c8d0d8 !important;

        color:
            #1d2d3e !important;

        font-weight:
            600 !important;

        box-shadow:
            none !important;

        transition:
            background 150ms ease,
            border-color 150ms ease,
            transform 150ms ease;
    }


    .assetUploader
    .sapUiFupButton:hover {

        background:
            #dce2e8 !important;

        border-color:
            #b7c1ca !important;

        transform:
            translateY(-1px);
    }


    .assetUploader
    .sapMBtnInner {

        border-radius:
            8px !important;

        font-weight:
            600 !important;
    }


    /* =====================================================
       UPLOAD BUTTON
       ===================================================== */

    .assetUploadButton {

        margin-top:
            16px !important;

        min-width:
            145px !important;

        height:
            42px !important;

        border-radius:
            9px !important;

        box-shadow:
            0 4px 10px
            rgba(10, 110, 209, 0.20);

        transition:
            transform 150ms ease,
            box-shadow 150ms ease;
    }


    .assetUploadButton:hover {

        transform:
            translateY(-1px);

        box-shadow:
            0 7px 16px
            rgba(10, 110, 209, 0.27);
    }


    .assetUploadButton:active {

        transform:
            translateY(0);
    }


    .assetUploadButton
    .sapMBtnInner {

        height:
            42px !important;

        padding:
            0 20px !important;

        border-radius:
            9px !important;

        background:
            #0a6ed1 !important;

        border-color:
            #0a6ed1 !important;

        color:
            #ffffff !important;

        font-size:
            13px !important;

        font-weight:
            700 !important;
    }


    .assetUploadButton
    .sapMBtnInner:hover {

        background:
            #085caf !important;

        border-color:
            #085caf !important;
    }


    .assetUploadButton
    .sapMBtnIcon {

        color:
            #ffffff !important;

        margin-right:
            7px;
    }


    /* =====================================================
       RESPONSIVE
       ===================================================== */

    @media (max-width: 500px) {

        .assetForm {

            padding:
                14px !important;

            border-radius:
                12px;
        }


        .assetUploadArea {

            padding:
                14px !important;
        }


        .assetUploadButton {

            width:
                100% !important;
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
                        commonApp.getShell().findElements(
                            true,
                            ele =>
                                ele.hasStyleClass &&
                                ele.hasStyleClass("sapAppBuildingOutline")
                        )[0];

                    if (
                        outlineContainer &&
                        outlineContainer.getReactProps
                    ) {

                        let parseReactState = state => {

                            let components = {};

                            let globalState = state.globalState;
                            let instances = globalState.instances;

                            let app =
                                instances.app[
                                    "[{\"app\":\"MAIN_APPLICATION\"}]"
                                ];

                            let names = app.names;

                            for (let key in names) {

                                let name = names[key];

                                let obj =
                                    JSON.parse(key).pop();

                                let type =
                                    Object.keys(obj)[0];

                                let id = obj[type];

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
                                                    metadata: metadata
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
                                        outlineContainer.getReactProps();

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

                this._subscription = null;
            }
        }

        onCustomWidgetBeforeUpdate(changedProperties) {

            if ("designMode" in changedProperties) {

                this._designMode =
                    changedProperties["designMode"];
            }
        }

        onCustomWidgetAfterUpdate(changedProperties) {

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
                    ? JSON.parse(this.metadata)["components"]
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

        get title() {
            return this._export_settings.title;
        }

        set title(value) {

            console.log("setTitle:" + value);

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

            console.log("value: " + value);

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
                that._export_settings.title.split("|")[0];
        }

        div =
            document.createElement("div");

        div.slot =
            "content_" + widgetName;


        if (
            that._firstConnection === 0
        ) {

            let div0 =
                document.createElement("div");

            div0.innerHTML = '<?xml version="1.0"?><script id="oView_' + widgetName + '" name="oView_' + widgetName + '" type="sapui5/xmlview"><mvc:View height="100%" xmlns="sap.m" xmlns:u="sap.ui.unified" xmlns:f="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" controllerName="myView.Template"><f:SimpleForm editable="true" class="assetForm"><f:content><Label text="Upload Asset File"></Label><VBox class="assetUploadArea"><u:FileUploader id="idfileUploader" class="assetUploader" width="100%" useMultipart="false" sendXHR="true" sameFilenameAllowed="false" buttonText="Browse" fileType="XLSM" placeholder="Choose an XLSM file" style="Emphasized"/><Button text="Upload Asset Data" press="onValidate" id="__uploadButton" icon="sap-icon://upload" type="Emphasized" class="assetUploadButton" tooltip="Upload the selected asset file"/></VBox></f:content></f:SimpleForm></mvc:View></script>';
            _shadowRoot.appendChild(
                div0
            );


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
                '>/}" ' +
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

            that_.appendChild(div);

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


                                onValidate: function(e) {

                                    var fU =
                                        this.getView()
                                            .byId(
                                                "idfileUploader"
                                            );

                                    var file =
                                        $("#__xmlview1--idfileUploader-fu")[0]
                                            .files[0];

                                    var this_ = this;

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
                                            var correctsheet = false;


                                            workbook.SheetNames.forEach(
                                                function(sheetName) {

                                                    if (
                                                        sheetName ===
                                                        "Sheet1"
                                                    ) {

                                                        correctsheet = true;

                                                        var csv =
                                                            XLSX.utils.sheet_to_csv(
                                                                workbook.Sheets[
                                                                    sheetName
                                                                ]
                                                            );

                                                        if (
                                                            csv.length
                                                        ) {

                                                            result.push(csv);
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

                                                var rec_count = 0;

                                                var len = 0;


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
                                                            ).length;
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
                                                                rec.length > 0
                                                            ) {

                                                                len =
                                                                    rec[0].trim().length +
                                                                    rec[1].trim().length +
                                                                    rec[2].trim().length +
                                                                    rec[3].trim().length +
                                                                    rec[4].trim().length +
                                                                    rec[5].trim().length +
                                                                    rec[6].trim().length;


                                                                if (
                                                                    len > 0
                                                                ) {

                                                                    rec_count =
                                                                        rec_count + 1;


                                                                    result_final.push(
                                                                        {
                                                                            "ID": rec[0].trim(),
                                                                            "DESCRIPTION": rec[1].trim(),
                                                                            "ASSET_TYPE": rec[2].trim(),
                                                                            "COMPANY_CODE": rec[3].trim(),
                                                                            "ASSET_CLASS": rec[4].trim(),
                                                                            "COST_CENTER": rec[5].trim(),
                                                                            "CWIP": rec[6].trim()
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        }
                                                    }


                                                    if (
                                                        result_final.length ===
                                                        0
                                                    ) {

                                                        fU.setValue("");

                                                        MessageToast.show(
                                                            "There is no record to be uploaded"
                                                        );

                                                        this_.runNext();

                                                    } else if (
                                                        result_final.length >=
                                                        2001
                                                    ) {

                                                        fU.setValue("");

                                                        MessageToast.show(
                                                            "Maximum records are 2000."
                                                        );

                                                        this_.runNext();

                                                    } else {

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
                                                            new sap.ui.model.json.JSONModel();

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


                                                        this_.runNext();


                                                        fU.setValue("");
                                                    }

                                                } else {

                                                    this_.runNext();

                                                    fU.setValue("");

                                                    MessageToast.show(
                                                        "Please upload the correct file"
                                                    );
                                                }

                                            } else {

                                                this_.runNext();

                                                console.log(
                                                    "Error: wrong Excel File template"
                                                );

                                                MessageToast.show(
                                                    "Please upload the correct file"
                                                );
                                            }
                                        };


                                    if (
                                        typeof file !==
                                        "undefined"
                                    ) {

                                        reader.readAsBinaryString(
                                            file
                                        );
                                    }
                                },


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
                    Ar[foundIndex].div;

                console.log(
                    divfinal
                );


                var oView =
                    sap.ui.xmlview({
                        viewContent:
                            jQuery(divfinal).html()
                    });


                oView.placeAt(div);


                if (
                    that_._designMode
                ) {

                    oView
                        .byId(
                            "idfileUploader"
                        )
                        .setEnabled(false);
                }

            }
        );
    }


    function createGuid() {

        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(
                /[xy]/g,
                c => {

                    let r =
                        Math.random() * 16 |
                        0;

                    let v =
                        c === "x"
                            ? r
                            : (r & 0x3 | 0x8);

                    return v.toString(16);
                }
            );
    }


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

                        resolve(script);
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

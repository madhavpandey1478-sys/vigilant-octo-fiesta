(function () {


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


/* =========================================================

   BASE

   ========================================================= */


com-fd-djaja-sap-sac-excel {

    display: block !important;

    width: 100% !important;

    height: 100% !important;

    font-family: "72", Arial, sans-serif !important;

    box-sizing: border-box !important;

}


com-fd-djaja-sap-sac-excel *,

com-fd-djaja-sap-sac-excel *::before,

com-fd-djaja-sap-sac-excel *::after {

    box-sizing: border-box !important;

}



/* =========================================================

   MAIN CARD

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetCard {

    width: 100% !important;

    min-height: 100% !important;


    padding: 18px !important;


    background: #ffffff !important;

    border: 1px solid #d9e2ec !important;

    border-radius: 12px !important;


    box-shadow: 0 3px 12px rgba(0,0,0,.06) !important;


    overflow: hidden !important;

}



/* =========================================================

   HEADER

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetHeader {

    width: 100% !important;

    min-height: 48px !important;


    margin: 0 0 14px 0 !important;

    padding: 0 !important;


    display: flex !important;

    align-items: center !important;

    justify-content: space-between !important;

}


com-fd-djaja-sap-sac-excel .assetHeader > .sapMFlexItem:first-child {

    min-width: 0 !important;

}


com-fd-djaja-sap-sac-excel .assetIcon {

    width: 38px !important;

    height: 38px !important;


    padding: 9px !important;

    margin-right: 10px !important;


    color: #0a6ed1 !important;

    background: #eaf3fc !important;


    border-radius: 9px !important;

}


com-fd-djaja-sap-sac-excel .assetTitle {

    color: #1d2d3e !important;

    font-size: 17px !important;

    line-height: 21px !important;

    font-weight: 700 !important;

}


com-fd-djaja-sap-sac-excel .assetSubtitle {

    margin-top: 1px !important;


    color: #6a7885 !important;

    font-size: 11px !important;

    line-height: 16px !important;

}



/* =========================================================

   COMMON BUTTON

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetBtn .sapMBtnInner {

    height: 34px !important;

    min-height: 34px !important;


    border-radius: 6px !important;


    font-size: 11px !important;

    font-weight: 600 !important;


    box-shadow: none !important;


    display: flex !important;

    align-items: center !important;

    justify-content: center !important;

}



/* =========================================================

   DOWNLOAD TEMPLATE

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetDownloadBtn {

    width: 158px !important;

    min-width: 158px !important;


    margin: 0 !important;

}


com-fd-djaja-sap-sac-excel .assetDownloadBtn .sapMBtnInner {

    width: 158px !important;

    min-width: 158px !important;

    height: 34px !important;


    padding: 0 12px !important;


    background: #0a6ed1 !important;

    border: 1px solid #0a6ed1 !important;

    border-radius: 6px !important;


    color: #ffffff !important;


    font-size: 11px !important;

    font-weight: 600 !important;


    box-shadow: none !important;

}


com-fd-djaja-sap-sac-excel .assetDownloadBtn .sapMBtnIcon {

    color: #ffffff !important;

    margin-right: 6px !important;

}


com-fd-djaja-sap-sac-excel .assetDownloadBtn:hover .sapMBtnInner {

    background: #085caf !important;

    border-color: #085caf !important;

}



/* =========================================================

   TOOLBAR

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetToolbar {

    width: 100% !important;

    height: 42px !important;

    min-height: 42px !important;


    margin: 0 0 10px 0 !important;

    padding: 3px 7px !important;


    background: #f7f9fb !important;

    border: 1px solid #d6dee7 !important;

    border-radius: 7px !important;


    box-shadow: none !important;


    display: flex !important;

    align-items: center !important;


    overflow: hidden !important;

}


com-fd-djaja-sap-sac-excel .assetToolbar.sapMTB {

    height: 42px !important;

    min-height: 42px !important;


    padding: 3px 7px !important;

}


com-fd-djaja-sap-sac-excel .assetToolbar .sapMTB {

    border: none !important;

    background: transparent !important;

    box-shadow: none !important;

}



/* =========================================================

   FILE UPLOADER

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetUploader {

    width: 310px !important;

    min-width: 310px !important;


    height: 34px !important;

    min-height: 34px !important;


    margin: 0 !important;

}



/* FILE NAME */


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupInput {

    height: 34px !important;


    padding: 0 9px !important;


    background: #ffffff !important;


    border: 1px solid #c7d2de !important;

    border-right: none !important;


    border-radius: 6px 0 0 6px !important;


    color: #52667a !important;


    font-size: 11px !important;

    font-style: normal !important;


    box-shadow: none !important;

}



/* CHOOSE FILE */


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupButton {

    width: 100px !important;

    min-width: 100px !important;


    height: 34px !important;


    margin: 0 !important;


    border-radius: 0 6px 6px 0 !important;

}


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupButton .sapMBtnInner {

    width: 100px !important;

    min-width: 100px !important;


    height: 34px !important;


    padding: 0 10px !important;


    background: #ffffff !important;


    border: 1px solid #c7d2de !important;


    border-radius: 0 6px 6px 0 !important;


    color: #334e68 !important;


    font-size: 11px !important;

    font-weight: 600 !important;


    box-shadow: none !important;

}


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupButton .sapMBtnInner:hover {

    background: #f1f5f8 !important;

    border-color: #aebdca !important;

}



/* =========================================================

   UPLOAD BUTTON

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetUploadItem {

    width: 96px !important;

    min-width: 96px !important;


    height: 34px !important;

    min-height: 34px !important;


    margin: 0 6px 0 7px !important;

}


com-fd-djaja-sap-sac-excel .assetUploadItem .sapMBtnInner {

    width: 96px !important;

    min-width: 96px !important;


    height: 34px !important;


    padding: 0 10px !important;


    background: #0a6ed1 !important;

    border: 1px solid #0a6ed1 !important;


    border-radius: 6px !important;


    color: #ffffff !important;


    font-size: 11px !important;

    font-weight: 600 !important;


    box-shadow: none !important;


    display: flex !important;

    align-items: center !important;

    justify-content: center !important;

}


com-fd-djaja-sap-sac-excel .assetUploadItem .sapMBtnIcon {

    color: #ffffff !important;

    margin-right: 5px !important;

}


com-fd-djaja-sap-sac-excel .assetUploadItem:hover .sapMBtnInner {

    background: #085caf !important;

    border-color: #085caf !important;

}


com-fd-djaja-sap-sac-excel .assetUploadItem:active .sapMBtnInner {

    background: #064f96 !important;

    border-color: #064f96 !important;

}



/* =========================================================

   CLEAR BUTTON

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetClearItem {

    width: 96px !important;

    min-width: 96px !important;


    height: 34px !important;

    min-height: 34px !important;


    margin: 0 6px 0 0 !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem .sapMBtnInner {

    width: 96px !important;

    min-width: 96px !important;


    height: 34px !important;


    padding: 0 10px !important;


    background: #ffffff !important;


    border: 1px solid #b8c5d1 !important;

    border-radius: 6px !important;


    color: #334e68 !important;


    font-size: 11px !important;

    font-weight: 600 !important;


    box-shadow: none !important;


    display: flex !important;

    align-items: center !important;

    justify-content: center !important;


    overflow: hidden !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem .sapMBtnContent {

    display: inline-block !important;


    width: auto !important;

    min-width: 0 !important;

    max-width: none !important;


    white-space: nowrap !important;

    overflow: visible !important;

    text-overflow: clip !important;


    color: #334e68 !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem .sapMBtnIcon {

    color: #52667a !important;

    margin-right: 5px !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem:hover .sapMBtnInner {

    background: #f5f7f9 !important;

    border-color: #8fa1b1 !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem:hover .sapMBtnIcon {

    color: #bb1e10 !important;

}



/* =========================================================

   SEARCH

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetSearch {

    width: 220px !important;

    min-width: 220px !important;


    height: 32px !important;


    margin: 0 !important;

}


com-fd-djaja-sap-sac-excel .assetSearch .sapMInputBaseContentWrapper {

    height: 32px !important;


    background: #ffffff !important;


    border: 1px solid #c7d2de !important;

    border-radius: 6px !important;


    box-shadow: none !important;

}


com-fd-djaja-sap-sac-excel .assetSearch .sapMInputBaseInner {

    height: 30px !important;


    padding: 0 9px !important;


    color: #334e68 !important;


    font-size: 11px !important;

}


com-fd-djaja-sap-sac-excel .assetSearch .sapMInputBaseInner::placeholder {

    color: #8997a5 !important;

}



/* =========================================================

   DROP ZONE

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetDrop {

    width: 100% !important;


    margin: 0 0 9px 0 !important;

    padding: 15px 18px !important;


    background: #f9fbfd !important;


    border: 1px dashed #aebfce !important;

    border-radius: 8px !important;


    min-height: 66px !important;


    display: flex !important;

    align-items: center !important;

    justify-content: center !important;

}


com-fd-djaja-sap-sac-excel .assetDropIcon {

    color: #0a6ed1 !important;

    margin-right: 10px !important;

}


com-fd-djaja-sap-sac-excel .assetDropText {

    color: #334e68 !important;


    font-size: 12px !important;

    line-height: 17px !important;


    font-weight: 600 !important;

}


com-fd-djaja-sap-sac-excel .assetHelp {

    margin-top: 1px !important;


    color: #788896 !important;


    font-size: 10px !important;

    line-height: 15px !important;

}



/* =========================================================

   REQUIRED COLUMNS

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetRequired {

    width: 100% !important;


    margin: 0 0 9px 0 !important;


    color: #687887 !important;


    font-size: 10px !important;

    line-height: 14px !important;

}



/* =========================================================

   STATISTICS

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetStats {

    width: 100% !important;

    margin: 0 !important;


    display: flex !important;

    align-items: stretch !important;

    gap: 7px !important;

}


com-fd-djaja-sap-sac-excel .assetMetric {

    flex: 1 1 0 !important;

    min-width: 0 !important;

    width: auto !important;


    margin: 0 !important;

    padding: 9px 10px !important;


    background: #ffffff !important;


    border: 1px solid #e0e5ea !important;

    border-radius: 7px !important;


    overflow: hidden !important;

}


com-fd-djaja-sap-sac-excel .assetMetricLabel {

    color: #718096 !important;


    font-size: 9px !important;

    line-height: 13px !important;


    white-space: nowrap !important;

    overflow: hidden !important;

    text-overflow: ellipsis !important;

}


com-fd-djaja-sap-sac-excel .assetMetricValue {

    margin-top: 2px !important;


    color: #1d2d3e !important;


    font-size: 15px !important;

    line-height: 18px !important;


    font-weight: 700 !important;

}

/* =========================================================

   PREVIEW

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetPreview {

    width: 100% !important;


    margin-top: 11px !important;


    background: #ffffff !important;


    border: 1px solid #e0e5ea !important;

    border-radius: 8px !important;


    overflow: hidden !important;

}


com-fd-djaja-sap-sac-excel .assetPreviewHead {

    padding: 8px 11px !important;


    background: #fafbfc !important;


    border-bottom: 1px solid #e7ebef !important;

}


com-fd-djaja-sap-sac-excel .assetPreviewTitle {

    color: #1d2d3e !important;


    font-size: 12px !important;

    line-height: 16px !important;


    font-weight: 700 !important;

}



/* =========================================================

   TABLE

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetPreview .sapMListTbl {

    width: 100% !important;


    border: none !important;

}


com-fd-djaja-sap-sac-excel .assetPreview .sapMListTblHeaderCell {

    height: 32px !important;


    padding: 0 8px !important;


    background: #f7f9fb !important;


    border-bottom: 1px solid #dfe5eb !important;

}


com-fd-djaja-sap-sac-excel .assetPreview .sapMListTblCell {

    padding: 0 8px !important;


    border-bottom: 1px solid #edf0f3 !important;


    font-size: 10px !important;

}



/* =========================================================

   EMPTY PREVIEW

   ========================================================= */


com-fd-djaja-sap-sac-excel #previewEmpty {

    padding: 22px 10px !important;


    color: #788896 !important;

}



/* =========================================================

   FOOTER

   ========================================================= */


com-fd-djaja-sap-sac-excel .assetFooter {

    margin-top: 8px !important;


    color: #8a98a5 !important;


    font-size: 9px !important;

    line-height: 13px !important;

}



/* =========================================================

   FINAL UI OVERRIDES - MATCH REFERENCE DESIGN

   ========================================================= */


/* Header: compact, clean, no icon */

com-fd-djaja-sap-sac-excel .assetCard {

    padding: 4px !important;

    border: none !important;

    border-radius: 0 !important;

    box-shadow: none !important;

    background: #ffffff !important;

}


com-fd-djaja-sap-sac-excel .assetHeader {

    min-height: 52px !important;

    margin: 0 0 6px 0 !important;

    padding: 0 !important;

}


com-fd-djaja-sap-sac-excel .assetTitle {

    color: #0070f2 !important;

    font-size: 17px !important;

    line-height: 20px !important;

}


com-fd-djaja-sap-sac-excel .assetSubtitle {

    color: #647789 !important;

    font-size: 11px !important;

}


/* Header action group */

com-fd-djaja-sap-sac-excel .assetHeaderActions {

    display: flex !important;

    align-items: center !important;

    gap: 8px !important;

}


com-fd-djaja-sap-sac-excel .assetHeaderReady .sapMBtnInner {

    height: 34px !important;

    min-width: 62px !important;

    padding: 0 12px !important;

    border: 1px solid #d6dce2 !important;

    border-radius: 7px !important;

    background: #f6f7f8 !important;

    color: #263746 !important;

    font-size: 11px !important;

}


com-fd-djaja-sap-sac-excel .assetErrorLogBtn .sapMBtnInner {

    height: 34px !important;

    min-width: 162px !important;

    padding: 0 12px !important;

    border: 1px solid #d6dce2 !important;

    border-radius: 7px !important;

    background: #ffffff !important;

    color: #7b8793 !important;

    font-size: 11px !important;

}


com-fd-djaja-sap-sac-excel .assetToggleBtn .sapMBtnInner {

    height: 34px !important;

    min-width: 132px !important;

    padding: 0 12px !important;

    border: 1px solid #c9d2dc !important;

    border-radius: 7px !important;

    background: #ffffff !important;

    color: #263746 !important;

    font-size: 11px !important;

    font-weight: 600 !important;

}


/* Toolbar */

com-fd-djaja-sap-sac-excel .assetToolbar {

    height: 62px !important;

    min-height: 62px !important;

    margin: 0 0 7px 0 !important;

    padding: 7px 14px !important;

    background: #fbfcfd !important;

    border: 1px solid #d9e1e8 !important;

    border-radius: 9px !important;

    overflow: visible !important;

}


com-fd-djaja-sap-sac-excel .assetToolbar.sapMTB {

    height: 62px !important;

    min-height: 62px !important;

    padding: 7px 14px !important;

}


/* File uploader */

com-fd-djaja-sap-sac-excel .assetUploader {

    width: 338px !important;

    min-width: 338px !important;

    height: 46px !important;

}


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupInput {

    height: 46px !important;

    line-height: 44px !important;

    border-radius: 9px 0 0 9px !important;

    font-size: 12px !important;

}


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupButton {

    width: 102px !important;

    min-width: 102px !important;

    height: 46px !important;

}


com-fd-djaja-sap-sac-excel .assetUploader .sapUiFupButton .sapMBtnInner {

    width: 102px !important;

    min-width: 102px !important;

    height: 46px !important;

    border-radius: 0 9px 9px 0 !important;

    font-size: 12px !important;

}


/* Main Upload/Clear buttons */

com-fd-djaja-sap-sac-excel .assetUploadItem,

com-fd-djaja-sap-sac-excel .assetClearItem {

    height: 46px !important;

    min-height: 46px !important;

}


com-fd-djaja-sap-sac-excel .assetUploadItem {

    width: 104px !important;

    min-width: 104px !important;

    margin: 0 3px 0 10px !important;

}


com-fd-djaja-sap-sac-excel .assetUploadItem .sapMBtnInner {

    width: 104px !important;

    min-width: 104px !important;

    height: 46px !important;

    border-radius: 9px !important;

    font-size: 12px !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem {

    width: 104px !important;

    min-width: 104px !important;

    margin: 0 !important;

}


com-fd-djaja-sap-sac-excel .assetClearItem .sapMBtnInner {

    width: 104px !important;

    min-width: 104px !important;

    height: 46px !important;

    border-radius: 9px !important;

    font-size: 12px !important;

}


/* Search */

com-fd-djaja-sap-sac-excel .assetSearch {

    width: 360px !important;

    min-width: 360px !important;

    height: 46px !important;

}


com-fd-djaja-sap-sac-excel .assetSearch .sapMInputBaseContentWrapper {

    height: 46px !important;

    border-radius: 9px !important;

}


com-fd-djaja-sap-sac-excel .assetSearch .sapMInputBaseInner {

    height: 44px !important;

    font-size: 12px !important;

}


/* Required columns */

com-fd-djaja-sap-sac-excel .assetRequired {

    margin: 0 14px 10px 14px !important;

    width: calc(100% - 28px) !important;

    color: #607284 !important;

    font-size: 11px !important;

    line-height: 16px !important;

}


/* Stats: FORCE horizontal row on UI5 VBox */

com-fd-djaja-sap-sac-excel .assetStats {

    width: 100% !important;

    margin: 0 !important;

    padding: 0 14px !important;

    display: flex !important;

    flex-direction: row !important;

    align-items: stretch !important;

    gap: 9px !important;

}


com-fd-djaja-sap-sac-excel .assetStats > .sapMFlexItem {

    flex: 1 1 0 !important;

    min-width: 0 !important;

    width: 0 !important;

}


com-fd-djaja-sap-sac-excel .assetMetric {

    width: 100% !important;

    min-width: 0 !important;

    min-height: 58px !important;

    padding: 10px 12px !important;

    border: 1px solid #e0e6ec !important;

    border-radius: 9px !important;

    background: #ffffff !important;

}


com-fd-djaja-sap-sac-excel .assetMetricLabel {

    font-size: 10px !important;

    line-height: 14px !important;

    color: #667789 !important;

}


com-fd-djaja-sap-excel .assetMetricValue {

    margin-top: 2px !important;

    font-size: 16px !important;

    line-height: 19px !important;

    color: #102a43 !important;

}


/* Preview */

com-fd-djaja-sap-sac-excel .assetPreview {

    width: 100% !important;

    min-height: 255px !important;

    margin-top: 10px !important;

    border: 1px solid #dfe5eb !important;

    border-radius: 9px !important;

    background: #ffffff !important;

}


com-fd-djaja-sap-sac-excel .assetPreviewHead {

    width: 100% !important;

    min-height: 42px !important;

    padding: 0 12px !important;

    background: #f8fafc !important;

    border-bottom: 1px solid #e3e8ed !important;

    display: flex !important;

    align-items: center !important;

    justify-content: space-between !important;

}


com-fd-djaja-sap-sac-excel .assetPreviewHead > .sapMFlexItem:last-child {

    margin-left: auto !important;

}


com-fd-djaja-sap-excel .assetPreviewTitle {

    font-size: 12px !important;

    font-weight: 700 !important;

    color: #1d2d3e !important;

}


com-fd-djaja-sap-excel .assetPreviewHead #previewCount {

    font-size: 10px !important;

    color: #718096 !important;

}


com-fd-djaja-sap-sac-excel .assetPreview .sapMListTblHeaderCell {

    height: 34px !important;

    background: #f7f9fb !important;

}


com-fd-djaja-sap-sac-excel .assetPreview .sapMListTblCell {

    height: 30px !important;

    font-size: 10px !important;

}


com-fd-djaja-sap-sac-excel #previewEmpty {

    width: 100% !important;

    min-height: 210px !important;

    padding: 12px !important;

    display: flex !important;

    align-items: flex-start !important;

    justify-content: flex-start !important;

    color: #718096 !important;

    font-size: 12px !important;

}


/* Footer */

com-fd-djaja-sap-sac-excel .assetFooter {

    margin: 7px 0 0 0 !important;

    padding: 0 0 0 1px !important;

    color: #8795a3 !important;

    font-size: 9px !important;

}


`;


    function installGlobalStyle() {


        var s = document.getElementById("assetExcelUploadGlobalStyle");


        if (!s) {

            s = document.createElement("style");

            s.id = "assetExcelUploadGlobalStyle";

            document.head.appendChild(s);

        }


        s.textContent = ASSET_EXCEL_CSS;

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


                    '<VBox>' +


                        '<Text ' +

                        'text="Excel Upload" ' +

                        'class="assetTitle"/>' +


                        '<Text ' +

                        'text="Upload and validate Excel file" ' +

                        'class="assetSubtitle"/>' +


                    '</VBox>' +


                    '<HBox ' +

                    'class="assetHeaderActions" ' +

                    'alignItems="Center">' +


                        '<Button ' +

                        'text="Download Template" ' +

                        'press="onDownloadTemplate" ' +

                        'icon="sap-icon://download" ' +

                        'type="Emphasized" ' +

                        'class="assetBtn assetDownloadBtn"/>' +


                        '<Button ' +

                        'text="Ready" ' +

                        'enabled="false" ' +

                        'class="assetHeaderReady"/>' +


                        '<Button ' +

                        'text="Download Error Log" ' +

                        'enabled="false" ' +

                        'class="assetErrorLogBtn"/>' +


                        '<Button ' +

                        'id="togglePreviewButton" ' +

                        'text="Toggle Preview" ' +

                        'press="onTogglePreview" ' +

                        'class="assetToggleBtn"/>' +


                    '</HBox>' +


                '</HBox>' 



                /* TOOLBAR */


                '<Toolbar class="assetToolbar">' +


    '<u:FileUploader ' +

    'id="idfileUploader" ' +

    'width="310px" ' +

    'useMultipart="false" ' +

    'sendXHR="true" ' +

    'sameFilenameAllowed="false" ' +

    'buttonText="Choose File" ' +

    'fileType="XLSM" ' +

    'placeholder="No file selected" ' +

    'style="Emphasized" ' +

    'class="assetUploader"/>' +



   '<Button ' +

    'id="__uploadButton" ' +

    'text="Upload" ' +

    'press="onValidate" ' +

    'icon="sap-icon://upload" ' +

    'type="Emphasized" ' +

    'width="96px" ' +

    'class="assetUploadItem"/>' +



    '<Button ' +

    'id="__clearButton" ' +

    'text="Clear" ' +

    'press="onClear" ' +

    'icon="sap-icon://decline" ' +

    'type="Default" ' +

    'width="96px" ' +

    'class="assetClearItem"/>' +



    '<ToolbarSpacer/>' +



    '<Input ' +

        'id="previewSearch" ' +

        'width="220px" ' +

        'placeholder="Search in preview" ' +

        'liveChange="onSearchPreview" ' +

        'class="assetSearch"/>' +


'</Toolbar>' +


                /* REQUIRED COLUMNS */


                '<Text ' +

                'text="Required columns: ID, DESCRIPTION, ASSET_TYPE, COMPANY_CODE, ASSET_CLASS, COST_CENTER, CWIP" ' +

                'class="assetRequired"/>' +



                /* STATISTICS */


                '<VBox class="assetStats">' +


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


                '</VBox>' +


                /* PREVIEW */


                '<VBox id="previewBox" class="assetPreview">' +


                    '<HBox ' +

                    'class="assetPreviewHead" ' +

                    'alignItems="Center" ' +

                    'justifyContent="SpaceBetween">' +


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



                    '<Text ' +

                    'id="previewEmpty" ' +

                    'text="No preview available" ' +

                    'class="assetPreviewEmpty"/>' +


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



            /* =====================================================

               FRAGMENT

               ===================================================== */


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



            /* =====================================================

               UI5 CONTENT

               ===================================================== */


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

            function () {


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

                            (busyDialog)

                                ? busyDialog

                                : new BusyDialog({});



                        return Controller.extend(

                            "myView.Template",

                            {



                                /* =================================================

                                   INIT

                                   ================================================= */


                                onInit: function () {


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


                                onValidate: function (e) {


                                    var fU =

                                        this.getView().byId(

                                            "idfileUploader"

                                        );



                                    var fileInput =

                                        document.getElementById(

                                            fU.getId() +

                                            "-fu"

                                        );



                                    var file =

                                        fileInput &&

                                        fileInput.files

                                            ? fileInput.files[0]

                                            : undefined;



                                    var this_ =

                                        this;



                                    if (

    typeof file ===

    "undefined"

) {


    MessageToast.show(

        "Please choose an Excel file first"

    );


    return;

}



/* =================================================

   SAC EVENT: onValidate

   ================================================= */


that_.dispatchEvent(

    new CustomEvent(

        "onValidate",

        {

            detail: {

                fileName: file.name

            }

        }

    )

);



this_.wasteTime();



                                    var oModel =

                                        new JSONModel();



                                    oModel.setData({

                                        result_final: null

                                    });



                                    var reader =

                                        new FileReader();



                                    reader.onload =

                                        async function (e) {


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

                                                var correctsheet = false;



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

                                                                        rec[0].trim().length +

                                                                        rec[1].trim().length +

                                                                        rec[2].trim().length +

                                                                        rec[3].trim().length +

                                                                        rec[4].trim().length +

                                                                        rec[5].trim().length +

                                                                        rec[6].trim().length;



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


                                            }


                                            catch (error) {


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

                                    function () {


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


                                        }


                                        catch (error) {


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

                                   TOGGLE PREVIEW

                                   ================================================= */


                                onTogglePreview:

                                    function () {


                                        try {


                                            var table =

                                                this.getView().byId(

                                                    "previewTable"

                                                );


                                            var empty =

                                                this.getView().byId(

                                                    "previewEmpty"

                                                );


                                            var button =

                                                this.getView().byId(

                                                    "togglePreviewButton"

                                                );


                                            if (!table) {

                                                return;

                                            }


                                            var currentlyVisible =

                                                table.getVisible();


                                            if (currentlyVisible) {


                                                table.setVisible(false);


                                                if (empty) {

                                                    empty.setVisible(true);

                                                }


                                                if (button) {

                                                    button.setText(

                                                        "Show Preview"

                                                    );

                                                }


                                            } else {


                                                var hasRows =

                                                    table.getItems().length > 0;


                                                table.setVisible(hasRows);


                                                if (empty) {

                                                    empty.setVisible(!hasRows);

                                                }


                                                if (button) {

                                                    button.setText(

                                                        hasRows

                                                            ? "Hide Preview"

                                                            : "Toggle Preview"

                                                    );

                                                }

                                            }


                                        }


                                        catch (error) {


                                            console.error(

                                                "Toggle preview error:",

                                                error

                                            );

                                        }

                                    },



                                /* =================================================

                                   CLEAR

                                   ================================================= */


                                onClear:

                                    function () {


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



/* =================================================

   SAC EVENT: onClear

   ================================================= */


that_.dispatchEvent(

    new CustomEvent(

        "onClear",

        {

            detail: {

                cleared: true

            }

        }

    )

);



MessageToast.show(

    "Upload cleared"

);


                                        }


                                        catch (error) {


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

                                    function (oEvent) {


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

                                                function (field) {


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


                                        }


                                        catch (error) {


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

                                    function (result_final) {


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


                                        }


                                        catch (error) {


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

                                    function (

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

                                                function (

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


                                        }


                                        catch (error) {


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

                                    function () {


                                        try {


                                            busyDialog.open();


                                        }


                                        catch (error) {


                                            console.error(

                                                error

                                            );

                                        }

                                    },



                                runNext:

                                    function () {


                                        try {


                                            busyDialog.close();


                                        }


                                        catch (error) {


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

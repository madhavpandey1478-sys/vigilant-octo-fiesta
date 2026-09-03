(function () {

    let tmpl = document.createElement("template");

    tmpl.innerHTML = `
      <style>

        :host {
          display: block;
          font-family: "72", Arial, Helvetica, sans-serif;
          color: #172b4d;
        }

        #form {
          padding: 14px;
          background: #f7f9fb;
        }

        fieldset {
          margin: 0;
          padding: 14px;
          border: 1px solid #d9e2ec;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(28, 63, 91, 0.08);
        }

        legend {
          padding: 0 8px;
          color: #107c41;
          font-size: 13px;
          font-weight: 700;
        }

        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 8px;
        }

        td:first-child {
          width: 34%;
          padding-right: 10px;
          color: #52667a;
          font-size: 12px;
          font-weight: 600;
          vertical-align: middle;
        }

        input,
        textarea,
        select {
          width: 100%;
          padding: 8px 10px;
          box-sizing: border-box;
          border: 1px solid #c7d3df;
          border-radius: 8px;
          background: #ffffff;
          color: #172b4d;
          font-family: "72", Arial, Helvetica, sans-serif;
          font-size: 12px;
          outline: none;
          transition:
            border-color 160ms ease,
            box-shadow 160ms ease;
        }

        input:hover,
        textarea:hover,
        select:hover {
          border-color: #8ea6bb;
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: #107c41;
          box-shadow: 0 0 0 3px rgba(16, 124, 65, 0.10);
        }

        input[type=checkbox] {
          width: auto;
          margin: 6px 3px 6px 0;
          vertical-align: middle;
          accent-color: #107c41;
        }

        label {
          cursor: pointer;
        }

        button[type=submit] {
          display: none;
        }

      </style>

      <form id="form" autocomplete="off">

        <fieldset>

          <legend>General</legend>

          <table>

            <tr>
              <td>
                <label for="title">
                  Title
                </label>
              </td>

              <td>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Widget title"
                >
              </td>
            </tr>

            <tr>
              <td>
                <label for="subtitle">
                  Sub Title
                </label>
              </td>

              <td>
                <input
                  id="subtitle"
                  name="subtitle"
                  type="text"
                  placeholder="Widget subtitle"
                >
              </td>
            </tr>

            <tr>
              <td>
                <label for="icon">
                  Icon
                </label>
              </td>

              <td>
                <input
                  id="icon"
                  name="icon"
                  type="text"
                  placeholder="Icon"
                >
              </td>
            </tr>

            <tr>
              <td>
                <label for="unit">
                  Unit
                </label>
              </td>

              <td>
                <input
                  id="unit"
                  name="unit"
                  type="text"
                  placeholder="Unit"
                >
              </td>
            </tr>

            <tr>
              <td>
                <label for="footer">
                  Footer
                </label>
              </td>

              <td>
                <input
                  id="footer"
                  name="footer"
                  type="text"
                  placeholder="Footer text"
                >
              </td>
            </tr>

          </table>

        </fieldset>

        <button type="submit" hidden>
          Submit
        </button>

      </form>
    `;


    class ExcelAps extends HTMLElement {

        constructor() {

            super();

            this._shadowRoot =
                this.attachShadow({
                    mode: "open"
                });

            this._shadowRoot.appendChild(
                tmpl.content.cloneNode(true)
            );


            let form =
                this._shadowRoot.getElementById(
                    "form"
                );


            form.addEventListener(
                "submit",
                this._submit.bind(this)
            );


            form.addEventListener(
                "change",
                this._change.bind(this)
            );
        }


        connectedCallback() {
        }


        _submit(e) {

            e.preventDefault();

            let properties = {};


            for (
                let name of
                ExcelAps.observedAttributes
            ) {

                properties[name] =
                    this[name];
            }


            this._firePropertiesChanged(
                properties
            );

            return false;
        }


        _change(e) {

            this._changeProperty(
                e.target.name
            );
        }


        _changeProperty(name) {

            let properties = {};

            properties[name] =
                this[name];


            this._firePropertiesChanged(
                properties
            );
        }


        _firePropertiesChanged(properties) {

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

            return this.getValue(
                "title"
            );
        }


        set title(value) {

            this.setValue(
                "title",
                value
            );
        }


        get subtitle() {

            return this.getValue(
                "subtitle"
            );
        }


        set subtitle(value) {

            this.setValue(
                "subtitle",
                value
            );
        }


        get icon() {

            return this.getValue(
                "icon"
            );
        }


        set icon(value) {

            this.setValue(
                "icon",
                value
            );
        }


        get unit() {

            return this.getValue(
                "unit"
            );
        }


        set unit(value) {

            this.setValue(
                "unit",
                value
            );
        }


        get footer() {

            return this.getValue(
                "footer"
            );
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
                .value;
        }


        setValue(id, value) {

            this._shadowRoot
                .getElementById(id)
                .value = value;
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
                oldValue != newValue
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

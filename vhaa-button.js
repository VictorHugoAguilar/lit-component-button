import { LitElement, html } from "lit-element";
import { styles } from "./style";
/**
 * # `vhaa-button`
 *
 *  Web Component to implement a simple animated button, based on LitElement
 *
 * `<vhaa-button>`
 *
 * This components accepts a "role" property to styling. Accepted values are: undefined, primary, danger, warning, success
 * 
 * Implements a boolean property called "disabled" to disable the button.
 *
 * Clicks on the button produces a CSS animation, but only when the button disabled property is false.
 *
 * ```html
 * <vhaa-button
 *   role="primary"
 *   disabled
 * ></vhaa-button>
 * ```

 * Custom property | Description | Default
 * ----------------|-------------|---------
 * --vhaa-button-padding | Padding applied to the buttton box | 10px
 * --vhaa-button-border-width | Border applied to the button box | 0
 * --vhaa-button-boder-color | Border color applied to the button box | transparent 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

export class VhaaButton extends LitElement {
    static get styles() {
        return [styles];
    }
    render() {
        return html`
            <div @click="${this._onClick}" class="${this._getClass(this.role, this.disabled)}">
                <slot></slot>
            </div>
        `;
    }

    static get properties() {
        return {
            /**
             * The role of the button. This property configures the button color
             * Values accepted: 'undefined', 'primary', 'danger', 'warning', 'success'.
             * Default: 'undefined'.
             * @type {String}
             */
            role: { type: String },

            /**
             * Disabled property disables the button (disabled buttons stops click propagation events).
             * @type {Boolean}
             */
            disabled: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.role = "undefined";
    }

    _getClass(role, disabled) {
        return role + (disabled ? " disabled" : "");
    }

    _onClick(e) {
        if (this.disabled) {
            e.stopPropagation();
            return;
        }
        this.dispatchEvent(
            new CustomEvent("button-click", {
                bubbles: true,
                composed: true,
                detail: this,
            })
        );
    }
}
customElements.define("vhaa-button", VhaaButton);

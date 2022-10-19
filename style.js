import { css } from "lit-element";

export const styles = css`
    * {
        box-sizing: border-box;
    }
    :host {
        display: inline-block;
        user-select: none;
    }
    .undefined {
        background-color: #868e96;
    }
    .primary {
        background-color: #007bff;
    }
    .danger {
        background-color: #dc3545;
    }
    .success {
        background-color: #28a745;
    }
    .warning {
        background-color: #ffc107;
    }
    div {
        display: inline-block;
        color: #fff;
        background-color: #888;
        border-radius: 5px;
        border: var(--vhaa-button-border-width) solid var(--vhaa-button-border-color);
        padding: var(--vhaa-button-padding, 10px);
        cursor: pointer;
        outline: none;
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    div:active {
        -webkit-animation-name: anim;
        animation-name: anim;
    }
    @keyframes anim {
        0% {
            transform: scale(1);
        }
        10%,
        30% {
            transform: scale(0.9) rotate(-2deg);
        }
        100% {
            transform: scale(1) rotate(0);
        }
    }
    div.disabled {
        opacity: 0.5;
    }
    .disabled:active {
        -webkit-animation-name: none;
        animation-name: none;
    }
`;

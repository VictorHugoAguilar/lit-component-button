import { html, fixture, expect } from "@open-wc/testing";
import "../vhaa-button.js";
import sinon from "../node_modules/sinon/pkg/sinon-esm.js";

describe("create element vhaa-button", () => {
    describe("when add a element without role", () => {
        it("then show a button without role", async () => {
            const myEle = await fixture(html`<vhaa-button></vhaa-button>`);
            const elementShadowRoot = myEle.shadowRoot;
            const elementHeader = elementShadowRoot.querySelector("div");
            expect(elementHeader.className).equal("undefined");
        });
    });

    // suite("when add a element with role primary", () => {
    //     test("then show a button with role", (done) => {
    //         myEle.role = "primary";
    //         flush(() => {
    //             const elementShadowRoot = myEle.shadowRoot;
    //             const elementHeader = elementShadowRoot.querySelector("div");
    //             assert.equal(elementHeader.className, "primary");
    //             done();
    //         });
    //     });

    describe("when add a element with role primary", () => {
        it("then show a button with role", async () => {
            const myEle = await fixture(html`<vhaa-button role="primary"></vhaa-button>`);
            const elementShadowRoot = myEle.shadowRoot;
            const elementHeader = elementShadowRoot.querySelector("div");
            expect(elementHeader.className).equal("primary");
        });

        //     test("then click an event is raised", (done) => {
        //         myEle.role = "primary";
        //         myEle.disabled = false;
        //         const callback = sinon.spy();
        //         myEle.addEventListener("button-click", callback, { once: true });
        //         flush(() => {
        //             const elementShadowRoot = myEle.shadowRoot;
        //             const elementHeader = elementShadowRoot.querySelector("div");
        //             assert.equal(elementHeader.className, "primary");
        //             const eventClick = new Event("click", {
        //                 bubbles: true,
        //                 cancelable: true,
        //             });
        //             elementHeader.dispatchEvent(eventClick);
        //             expect(callback).called;
        //             done();
        //         });
        //     });

        it("then click an event is raised", async () => {
            const myEle = await fixture(html`<vhaa-button role="primary"></vhaa-button>`);
            const callback = sinon.spy();
            myEle.addEventListener("button-click", callback, { once: true });
            const elementShadowRoot = myEle.shadowRoot;
            const elementHeader = elementShadowRoot.querySelector("div");
            expect(elementHeader.className).equal("primary");
            const eventClick = new Event("click", {
                bubbles: true,
                cancelable: true,
            });
            elementHeader.dispatchEvent(eventClick);
            expect(callback).called;
        });

        //     test("then click an event is not raised", (done) => {
        //         myEle.role = "primary";
        //         myEle.disabled = true;
        //         const callback = sinon.spy();
        //         myEle.addEventListener("button-click", callback, { once: true });
        //         flush(() => {
        //             const elementShadowRoot = myEle.shadowRoot;
        //             const elementHeader = elementShadowRoot.querySelector("div");
        //             assert.equal(elementHeader.className, "primary disabled");
        //             const eventClick = new Event("click", {
        //                 bubbles: true,
        //                 cancelable: true,
        //             });
        //             elementHeader.dispatchEvent(eventClick);
        //             expect(callback).not.called;
        //             done();
        //         });
        //     });

        it("then click an event is not raised", async () => {
            const myEle = await fixture(html`<vhaa-button role="primary" disabled></vhaa-button>`);
            const callback = sinon.spy();
            myEle.addEventListener("button-click", callback, { once: true });
            const elementShadowRoot = myEle.shadowRoot;
            const elementHeader = elementShadowRoot.querySelector("div");
            expect(elementHeader.className).equal("primary disabled");
            const eventClick = new Event("click", {
                bubbles: true,
                cancelable: true,
            });
            elementHeader.dispatchEvent(eventClick);
            expect(callback).not.called;
        });
    });
});

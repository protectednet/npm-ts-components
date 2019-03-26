declare const $: any;

export class ComponentLoader {
    public constructor(component) {
        let elements = $(`[${component.selector}]`);
        for (let key = 0; key < elements.length; key++) {
            if (elements.hasOwnProperty(key)) {
                (new component($(elements[key]), {})).init();
            }
        }
    };
}

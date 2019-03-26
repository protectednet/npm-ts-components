declare let $: any;

export abstract class AbstractComponent
{
    public static selector: string = null;
    protected componentElement: any;
    protected componentParam: any;
    protected DI = null;

    protected constructor(componentElement: any, DI)
    {
        this.componentElement = componentElement;
        this.componentElement.attr('ss-component', 'true');
        this.DI = DI;
        return this;
    }

    public init() {}

    public getComponentClassName()
    {
        return this.constructor['name'];
    }

    public getComponentParameter()
    {
        this.componentParam = this
            .componentElement
            .attr(this.constructor['selector']);

        return this.componentParam;
    }

    public getComponentElement()
    {
        return $(`[component-id="${this.getId()}"]`);
    }

    public getId(): string
    {
        return this.componentElement.attr('component-id');
    }
}

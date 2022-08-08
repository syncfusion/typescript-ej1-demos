declare module ej {
	class SmartScroller extends ej.Widget {
		static fn: SmartScroller;

		constructor(element: JQuery, options?: SmartScrollerOptions);

		constructor(element: Element, options?: SmartScrollerOptions);
	}

	interface SmartScrollerOptions {
        triggerOnce?: boolean;
        reach?(e: SmartScrollerReachEventArgs): void;
    }
    interface SmartScrollerReachEventArgs{
        element: any;
        offsetTop: number;
    }
}
interface JQuery {
	ejSmartScroller(): JQuery;
	ejSmartScroller(options?: ej.SmartScrollerOptions): JQuery;
}

import { ChainablePromiseElement, ChainablePromiseArray, ElementArray } from 'webdriverio';

export type WebdriverIOElement = ChainablePromiseElement<Promise<WebdriverIO.Element>>;
export type WebdriverIOElements = ChainablePromiseArray<ElementArray>;

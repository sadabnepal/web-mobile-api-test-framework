import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from 'webdriverio';

export type WebdriverIOElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebdriverIOElements = ChainablePromiseArray<ElementArray>;

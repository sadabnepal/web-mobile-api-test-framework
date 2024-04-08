import { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio';

export type WebdriverIOElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebdriverIOElements = ChainablePromiseArray<WebdriverIO.ElementArray>

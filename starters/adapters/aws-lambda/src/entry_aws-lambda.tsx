/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Aws Lambda when building for production.
 *
 * Learn more about the Aws Lambda integration here:
 * - https://qwik.dev/docs/deployments/aws/
 *
 */
import { manifest } from "@qwik-client-manifest";
import qwikRouterConfig from "@qwik-router-config";
import {
  createQwikRouter,
  type PlatformAwsLambda,
} from "@qwik.dev/router/middleware/aws-lambda";
import serverless from "serverless-http";
import "source-map-support/register";
import render from "./entry.ssr";

declare global {
  interface QwikRouterPlatform extends PlatformAwsLambda {}
}

export const { handle } = createQwikRouter({
  render,
  qwikRouterConfig,
  manifest,
});

export const qwikApp = serverless({ handle }, { binary: true });
// handler is the default export for the lambda functions
export const handler = qwikApp;

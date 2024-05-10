#!/usr/bin/env node
import { ResourceName } from '../lib/resource-name';
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DifyOnLightsailStack } from '../lib/cdk-dify-on-lightsail-stack';

const app = new cdk.App();

// Get Context
const system_name = app.node.tryGetContext("system_name");
const resource_name = new ResourceName(system_name);

const stack = new DifyOnLightsailStack(app, 'DifyOnLightsailStack', {
  stackName: resource_name.stack_name(),
  resourceName: resource_name,
});

// Tagging resources
cdk.Tags.of(stack).add("system", system_name);

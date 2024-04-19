#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopPipelineStack } from '../lib/cdk-workshop-pipeline-stack';

const app = new cdk.App();
new CdkWorkshopPipelineStack(app, 'CdkWorkshopPipelineStack');

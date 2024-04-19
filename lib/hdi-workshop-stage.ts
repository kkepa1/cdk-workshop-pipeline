import {Stage, StageProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {SecureBucketStack} from "./secure-bucket-stack";

export class HdiWorkshopStage extends Stage {
    constructor(scope: Construct, stageName: string, props?: StageProps) {
        super(scope, stageName, props);

        new SecureBucketStack(this, 'secure-bucket');
    }
}

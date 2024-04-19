import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from "aws-cdk-lib/pipelines";
import {HdiWorkshopStage} from "./hdi-workshop-stage";

export class CdkWorkshopPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'TestPipeline', {
            pipelineName: 'CdkWorkshopPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('kkepa1/cdk-workshop-pipeline', 'main'),
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ]
            })
        });

        pipeline.addStage(new HdiWorkshopStage(this, 'test'));
    }
}

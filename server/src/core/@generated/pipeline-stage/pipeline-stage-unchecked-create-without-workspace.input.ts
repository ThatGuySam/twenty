import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PipelineProgressUncheckedCreateNestedManyWithoutPipelineStageInput } from '../pipeline-progress/pipeline-progress-unchecked-create-nested-many-without-pipeline-stage.input';

@InputType()
export class PipelineStageUncheckedCreateWithoutWorkspaceInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    type!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    color!: string;

    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    @Validator.IsOptional()
    index?: number;

    @Field(() => String, {nullable:false})
    pipelineId!: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PipelineProgressUncheckedCreateNestedManyWithoutPipelineStageInput, {nullable:true})
    pipelineProgresses?: PipelineProgressUncheckedCreateNestedManyWithoutPipelineStageInput;
}

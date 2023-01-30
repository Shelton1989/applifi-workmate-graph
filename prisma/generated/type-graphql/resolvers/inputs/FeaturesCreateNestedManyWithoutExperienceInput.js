"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyExperienceInputEnvelope_1 = require("../inputs/FeaturesCreateManyExperienceInputEnvelope");
const FeaturesCreateOrConnectWithoutExperienceInput_1 = require("../inputs/FeaturesCreateOrConnectWithoutExperienceInput");
const FeaturesCreateWithoutExperienceInput_1 = require("../inputs/FeaturesCreateWithoutExperienceInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesCreateNestedManyWithoutExperienceInput = class FeaturesCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateWithoutExperienceInput_1.FeaturesCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateOrConnectWithoutExperienceInput_1.FeaturesCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateManyExperienceInputEnvelope_1.FeaturesCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateManyExperienceInputEnvelope_1.FeaturesCreateManyExperienceInputEnvelope)
], FeaturesCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
FeaturesCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], FeaturesCreateNestedManyWithoutExperienceInput);
exports.FeaturesCreateNestedManyWithoutExperienceInput = FeaturesCreateNestedManyWithoutExperienceInput;

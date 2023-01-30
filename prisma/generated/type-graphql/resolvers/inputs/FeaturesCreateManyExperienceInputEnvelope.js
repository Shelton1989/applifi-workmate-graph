"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyExperienceInput_1 = require("../inputs/FeaturesCreateManyExperienceInput");
let FeaturesCreateManyExperienceInputEnvelope = class FeaturesCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateManyExperienceInput_1.FeaturesCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateManyExperienceInputEnvelope.prototype, "data", void 0);
FeaturesCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], FeaturesCreateManyExperienceInputEnvelope);
exports.FeaturesCreateManyExperienceInputEnvelope = FeaturesCreateManyExperienceInputEnvelope;

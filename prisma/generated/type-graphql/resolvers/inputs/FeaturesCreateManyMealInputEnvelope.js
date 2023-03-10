"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateManyMealInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyMealInput_1 = require("../inputs/FeaturesCreateManyMealInput");
let FeaturesCreateManyMealInputEnvelope = class FeaturesCreateManyMealInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateManyMealInput_1.FeaturesCreateManyMealInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesCreateManyMealInputEnvelope.prototype, "data", void 0);
FeaturesCreateManyMealInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateManyMealInputEnvelope", {
        isAbstract: true
    })
], FeaturesCreateManyMealInputEnvelope);
exports.FeaturesCreateManyMealInputEnvelope = FeaturesCreateManyMealInputEnvelope;

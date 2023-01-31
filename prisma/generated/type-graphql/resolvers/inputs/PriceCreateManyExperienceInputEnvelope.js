"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateManyExperienceInput_1 = require("../inputs/PriceCreateManyExperienceInput");
let PriceCreateManyExperienceInputEnvelope = class PriceCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateManyExperienceInput_1.PriceCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateManyExperienceInputEnvelope.prototype, "data", void 0);
PriceCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], PriceCreateManyExperienceInputEnvelope);
exports.PriceCreateManyExperienceInputEnvelope = PriceCreateManyExperienceInputEnvelope;

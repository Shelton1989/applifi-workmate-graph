"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateManyTenantInput_1 = require("../inputs/MealCreateManyTenantInput");
let MealCreateManyTenantInputEnvelope = class MealCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateManyTenantInput_1.MealCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateManyTenantInputEnvelope.prototype, "data", void 0);
MealCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], MealCreateManyTenantInputEnvelope);
exports.MealCreateManyTenantInputEnvelope = MealCreateManyTenantInputEnvelope;

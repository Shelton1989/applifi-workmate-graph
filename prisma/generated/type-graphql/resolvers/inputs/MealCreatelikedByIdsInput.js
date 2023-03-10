"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreatelikedByIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealCreatelikedByIdsInput = class MealCreatelikedByIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreatelikedByIdsInput.prototype, "set", void 0);
MealCreatelikedByIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreatelikedByIdsInput", {
        isAbstract: true
    })
], MealCreatelikedByIdsInput);
exports.MealCreatelikedByIdsInput = MealCreatelikedByIdsInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateitemIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealCreateitemIdsInput = class MealCreateitemIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateitemIdsInput.prototype, "set", void 0);
MealCreateitemIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateitemIdsInput", {
        isAbstract: true
    })
], MealCreateitemIdsInput);
exports.MealCreateitemIdsInput = MealCreateitemIdsInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutPostsInput_1 = require("../inputs/MealCreateWithoutPostsInput");
const MealUpdateWithoutPostsInput_1 = require("../inputs/MealUpdateWithoutPostsInput");
let MealUpsertWithoutPostsInput = class MealUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutPostsInput_1.MealUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutPostsInput_1.MealUpdateWithoutPostsInput)
], MealUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput)
], MealUpsertWithoutPostsInput.prototype, "create", void 0);
MealUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithoutPostsInput", {
        isAbstract: true
    })
], MealUpsertWithoutPostsInput);
exports.MealUpsertWithoutPostsInput = MealUpsertWithoutPostsInput;

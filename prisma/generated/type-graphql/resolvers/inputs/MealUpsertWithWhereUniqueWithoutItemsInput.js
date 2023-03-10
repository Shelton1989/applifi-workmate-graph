"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithWhereUniqueWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutItemsInput_1 = require("../inputs/MealCreateWithoutItemsInput");
const MealUpdateWithoutItemsInput_1 = require("../inputs/MealUpdateWithoutItemsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpsertWithWhereUniqueWithoutItemsInput = class MealUpsertWithWhereUniqueWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpsertWithWhereUniqueWithoutItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutItemsInput_1.MealUpdateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutItemsInput_1.MealUpdateWithoutItemsInput)
], MealUpsertWithWhereUniqueWithoutItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutItemsInput_1.MealCreateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutItemsInput_1.MealCreateWithoutItemsInput)
], MealUpsertWithWhereUniqueWithoutItemsInput.prototype, "create", void 0);
MealUpsertWithWhereUniqueWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithWhereUniqueWithoutItemsInput", {
        isAbstract: true
    })
], MealUpsertWithWhereUniqueWithoutItemsInput);
exports.MealUpsertWithWhereUniqueWithoutItemsInput = MealUpsertWithWhereUniqueWithoutItemsInput;

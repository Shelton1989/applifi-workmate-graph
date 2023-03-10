"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithWhereUniqueWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutLikedByInput_1 = require("../inputs/MealCreateWithoutLikedByInput");
const MealUpdateWithoutLikedByInput_1 = require("../inputs/MealUpdateWithoutLikedByInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpsertWithWhereUniqueWithoutLikedByInput = class MealUpsertWithWhereUniqueWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpsertWithWhereUniqueWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutLikedByInput_1.MealUpdateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutLikedByInput_1.MealUpdateWithoutLikedByInput)
], MealUpsertWithWhereUniqueWithoutLikedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutLikedByInput_1.MealCreateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutLikedByInput_1.MealCreateWithoutLikedByInput)
], MealUpsertWithWhereUniqueWithoutLikedByInput.prototype, "create", void 0);
MealUpsertWithWhereUniqueWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithWhereUniqueWithoutLikedByInput", {
        isAbstract: true
    })
], MealUpsertWithWhereUniqueWithoutLikedByInput);
exports.MealUpsertWithWhereUniqueWithoutLikedByInput = MealUpsertWithWhereUniqueWithoutLikedByInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateWithWhereUniqueWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealUpdateWithoutLikedByInput_1 = require("../inputs/MealUpdateWithoutLikedByInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateWithWhereUniqueWithoutLikedByInput = class MealUpdateWithWhereUniqueWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateWithWhereUniqueWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutLikedByInput_1.MealUpdateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutLikedByInput_1.MealUpdateWithoutLikedByInput)
], MealUpdateWithWhereUniqueWithoutLikedByInput.prototype, "data", void 0);
MealUpdateWithWhereUniqueWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateWithWhereUniqueWithoutLikedByInput", {
        isAbstract: true
    })
], MealUpdateWithWhereUniqueWithoutLikedByInput);
exports.MealUpdateWithWhereUniqueWithoutLikedByInput = MealUpdateWithWhereUniqueWithoutLikedByInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutLikedByInput_1 = require("../inputs/MealCreateWithoutLikedByInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutLikedByInput = class MealCreateOrConnectWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutLikedByInput_1.MealCreateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutLikedByInput_1.MealCreateWithoutLikedByInput)
], MealCreateOrConnectWithoutLikedByInput.prototype, "create", void 0);
MealCreateOrConnectWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutLikedByInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutLikedByInput);
exports.MealCreateOrConnectWithoutLikedByInput = MealCreateOrConnectWithoutLikedByInput;

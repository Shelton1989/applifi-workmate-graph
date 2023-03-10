"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedManyWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutLikedByInput_1 = require("../inputs/MealCreateOrConnectWithoutLikedByInput");
const MealCreateWithoutLikedByInput_1 = require("../inputs/MealCreateWithoutLikedByInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedManyWithoutLikedByInput = class MealCreateNestedManyWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateWithoutLikedByInput_1.MealCreateWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutLikedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutLikedByInput_1.MealCreateOrConnectWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutLikedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutLikedByInput.prototype, "connect", void 0);
MealCreateNestedManyWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedManyWithoutLikedByInput", {
        isAbstract: true
    })
], MealCreateNestedManyWithoutLikedByInput);
exports.MealCreateNestedManyWithoutLikedByInput = MealCreateNestedManyWithoutLikedByInput;

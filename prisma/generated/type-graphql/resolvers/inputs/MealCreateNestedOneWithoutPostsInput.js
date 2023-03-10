"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutPostsInput_1 = require("../inputs/MealCreateOrConnectWithoutPostsInput");
const MealCreateWithoutPostsInput_1 = require("../inputs/MealCreateWithoutPostsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedOneWithoutPostsInput = class MealCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput)
], MealCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutPostsInput_1.MealCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutPostsInput_1.MealCreateOrConnectWithoutPostsInput)
], MealCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
MealCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], MealCreateNestedOneWithoutPostsInput);
exports.MealCreateNestedOneWithoutPostsInput = MealCreateNestedOneWithoutPostsInput;

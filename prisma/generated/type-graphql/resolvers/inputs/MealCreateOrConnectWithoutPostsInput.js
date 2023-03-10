"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutPostsInput_1 = require("../inputs/MealCreateWithoutPostsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutPostsInput = class MealCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput)
], MealCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
MealCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutPostsInput);
exports.MealCreateOrConnectWithoutPostsInput = MealCreateOrConnectWithoutPostsInput;
